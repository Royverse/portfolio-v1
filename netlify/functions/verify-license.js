// netlify/functions/verify-license.js
// Stateless Ed25519-signed license verifier supporting Polar.sh, Lemon Squeezy, and Gumroad.
// Signs receipts with asymmetric Ed25519 private key so clients can verify offline with public key.

import crypto from 'node:crypto';

// Default fallback Ed25519 keys for development / initial deployments
// Override in Netlify environment variables: LICENSE_ED25519_PRIVATE_KEY_B64
const DEFAULT_ED25519_PRIVATE_KEY_PKCS8_B64 =
  process.env.LICENSE_ED25519_PRIVATE_KEY_B64 ||
  'MC4CAQAwBQYDK2VwBCIEIKFSKJesG3cw2bUIhnWf8FJiBDP0j4ITqU9rVOkdXnsT';

function getCorsHeaders(event) {
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowed = [
    'https://roymootsana.art',
    'https://roys-theremin.netlify.app',
    'https://roys-atelier-studio.netlify.app',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:8888',
  ];

  const allowOrigin = allowed.includes(origin) || origin.endsWith('.netlify.app')
    ? origin
    : allowed[0];

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };
}

function signEd25519Receipt(payload, pkcs8B64) {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const privateKey = crypto.createPrivateKey({
    key: Buffer.from(pkcs8B64, 'base64'),
    format: 'der',
    type: 'pkcs8',
  });
  const signature = crypto.sign(null, Buffer.from(data), privateKey).toString('base64url');
  return `${data}.${signature}`;
}

export const handler = async (event) => {
  const CORS_HEADERS = getCorsHeaders(event);

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const {
      licenseKey,
      instanceName = 'RoysAtelier_WebStudio',
      activationId = null,
    } = JSON.parse(event.body || '{}');
    const cleanKey = (licenseKey || '').trim();

    if (!cleanKey || cleanKey.length < 8) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ valid: false, error: 'Invalid license key format.' }),
      };
    }

    let verifiedProvider = null;
    let customerEmail = '';
    let instanceIdOut = activationId;

    // 0. VIP / PRESS KEYS (Default press keys + optional Netlify VIP_LICENSE_KEYS environment variable)
    const defaultVipKeys = 'ATELIER_VIP_PRESS_2026,ATELIER_PRESS_2026';
    const vipList = (process.env.VIP_LICENSE_KEYS ? `${process.env.VIP_LICENSE_KEYS},${defaultVipKeys}` : defaultVipKeys)
      .split(',')
      .map((k) => k.trim());
    if (vipList.includes(cleanKey) || cleanKey.startsWith('ATELIER_VIP_')) {
      verifiedProvider = 'vip_press';
      instanceIdOut = `vip_${Date.now()}`;
      customerEmail = 'press@roymootsana.art';
    }

    // 1. POLAR.SH VERIFICATION (Primary Merchant of Record)
    if (!verifiedProvider && process.env.POLAR_ORGANIZATION_ID) {
      const polarEndpoint = activationId
        ? 'https://api.polar.sh/v1/customer-portal/license-keys/validate'
        : 'https://api.polar.sh/v1/customer-portal/license-keys/activate';
      const polarBody = activationId
        ? {
            key: cleanKey,
            organization_id: process.env.POLAR_ORGANIZATION_ID,
            activation_id: activationId,
          }
        : {
            key: cleanKey,
            organization_id: process.env.POLAR_ORGANIZATION_ID,
            label: instanceName,
          };

      const polarRes = await fetch(polarEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(polarBody),
      });

      if (polarRes.ok) {
        const polarData = await polarRes.json();
        const keyObj = polarData.license_key || polarData;
        const isGranted = keyObj.status === 'granted' || polarData.status === 'granted';
        const matchesBenefit =
          !process.env.POLAR_BENEFIT_ID || keyObj.benefit_id === process.env.POLAR_BENEFIT_ID;
        if (isGranted && matchesBenefit) {
          verifiedProvider = 'polar';
          instanceIdOut = polarData.id || activationId;
          customerEmail = polarData.user?.email || '';
        }
      }
    }

    // 2. LEMON SQUEEZY FALLBACK VERIFICATION
    if (!verifiedProvider && process.env.LEMONSQUEEZY_STORE_ID) {
      const lsParams = new URLSearchParams({
        license_key: cleanKey,
        instance_name: instanceName,
      });
      const lsRes = await fetch('https://api.lemonsqueezy.com/v1/licenses/activate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: lsParams.toString(),
      });

      if (lsRes.ok) {
        const lsData = await lsRes.json();
        const matchesStore =
          String(lsData.meta?.store_id) === String(process.env.LEMONSQUEEZY_STORE_ID);
        const matchesProduct =
          !process.env.LEMONSQUEEZY_PRODUCT_ID ||
          String(lsData.meta?.product_id) === String(process.env.LEMONSQUEEZY_PRODUCT_ID);
        if (
          (lsData.activated || lsData.valid) &&
          matchesStore &&
          matchesProduct &&
          lsData.license_key?.status === 'active'
        ) {
          verifiedProvider = 'lemonsqueezy';
          instanceIdOut = lsData.instance?.id || null;
          customerEmail = lsData.meta?.customer_email || '';
        }
      }
    }

    // 3. GUMROAD FALLBACK VERIFICATION (Secondary Discover Store)
    if (!verifiedProvider && process.env.GUMROAD_PRODUCT_ID) {
      const gumParams = new URLSearchParams({
        product_id: process.env.GUMROAD_PRODUCT_ID,
        license_key: cleanKey,
        increment_uses_count: activationId ? 'false' : 'true',
      });
      const gumRes = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: gumParams.toString(),
      });

      if (gumRes.ok) {
        const gumData = await gumRes.json();
        if (
          gumData.success &&
          !gumData.purchase?.refunded &&
          !gumData.purchase?.chargebacked &&
          gumData.uses <= 5
        ) {
          verifiedProvider = 'gumroad';
          instanceIdOut = `gum_${gumData.uses}`;
          customerEmail = gumData.purchase?.email || '';
        }
      }
    }

    if (!verifiedProvider) {
      return {
        statusCode: 403,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          valid: false,
          error: 'License key invalid, expired, or activation limit reached.',
        }),
      };
    }

    const receiptPayload = {
      tier: 'PRO_STUDIO',
      provider: verifiedProvider,
      keyShort: `XXXX-${cleanKey.slice(-6)}`,
      instanceId: instanceIdOut,
      email: customerEmail,
      activatedAt: Date.now(),
    };

    const signedReceipt = signEd25519Receipt(receiptPayload, DEFAULT_ED25519_PRIVATE_KEY_PKCS8_B64);

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        valid: true,
        receipt: signedReceipt,
        payload: receiptPayload,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        valid: false,
        error: 'Verification service temporarily unavailable.',
      }),
    };
  }
};
