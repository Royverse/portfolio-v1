!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function r(e){if(e=a.i?.[e]||e,!n)try{throw Error()}catch(r){var t=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(!t)return o+e;n=t[0]}return new URL(o+e,n).toString()}var n,o="./",a=("u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{}).parcelRequiref040,i=a.register;i("hMSh5",function(r,n){let o;Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",function(){return x});var i=a("eDhw6"),s=a("8WbCV"),l=a("gMFKU"),c=a("j04fQ"),u=a("9tbqk"),d=a("b8Xje"),p=a("gsqNr"),f=a("c7kJs"),m=a("kzQ7T"),h=a("jijA3"),g=a("4J3Tm"),b=(0,l.createGlobalStyle)(o||(o=(e=>e)`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`));class v extends i.Component{componentDidMount(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}render(){return e(i).createElement(e(i).Fragment,null,e(i).createElement(e(s),{query:"(min-width: 1225px)"},e(i).createElement(c.default,null),e(i).createElement(u.default,null),e(i).createElement(d.default,null),e(i).createElement(p.default,null)),e(i).createElement(e(s),{query:"(max-width: 1224px)"},e(i).createElement(f.default,null),e(i).createElement(m.default,null),e(i).createElement(h.default,null),e(i).createElement(g.default,null)),e(i).createElement(b,null))}}var x=v}),i("8WbCV",function(e,t){"u">typeof self?self:e.exports,e.exports=function(e){var t=[function(e,t,r){var n=r(1);e.exports=r(8)(n.isElement,!0)},function(e,t,r){"use strict";e.exports=r(7)},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";function n(e){return"-"+e.toLowerCase()}var o=/[A-Z]/g,a=/^ms-/,i={};t.a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(o,n);return i[e]=a.test(t)?"-"+t:t}},function(e,t,r){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,a;n=e,o=t,a=r[t],o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})}return e}var o=r(0),a=r.n(o),i=a.a.oneOfType([a.a.string,a.a.number]),s={orientation:a.a.oneOf(["portrait","landscape"]),scan:a.a.oneOf(["progressive","interlace"]),aspectRatio:a.a.string,deviceAspectRatio:a.a.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:a.a.bool,colorIndex:a.a.bool,monochrome:a.a.bool,resolution:i},l=n({minAspectRatio:a.a.string,maxAspectRatio:a.a.string,minDeviceAspectRatio:a.a.string,maxDeviceAspectRatio:a.a.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:a.a.number,maxColor:a.a.number,minColorIndex:a.a.number,maxColorIndex:a.a.number,minMonochrome:a.a.number,maxMonochrome:a.a.number,minResolution:i,maxResolution:i},s),c={all:a.a.bool,grid:a.a.bool,aural:a.a.bool,braille:a.a.bool,handheld:a.a.bool,print:a.a.bool,projection:a.a.bool,screen:a.a.bool,tty:a.a.bool,tv:a.a.bool,embossed:a.a.bool},u=n({},c,l);s.type=Object.keys(c),t.a={all:u,types:c,matchers:s,features:l}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return y});var l=r(6),c=r.n(l),u=r(0),d=r.n(u),p=r(11),f=r.n(p),m=r(3),h=r(4),g=r(13);r.d(t,"toQuery",function(){return g.a});var b=Object.keys({component:d.a.node,query:d.a.string,values:d.a.shape(h.a.matchers),children:d.a.oneOfType([d.a.node,d.a.func]),onChange:d.a.func}),v=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}({},e);return t.forEach(function(e){return delete r[e]}),r},x=function(e){var t=e.values;if(!t)return null;var r=Object.keys(t);return 0===r.length?null:r.reduce(function(e,r){return e[Object(m.a)(r)]=t[r],e},{})},y=function(e){var t;function r(){var e,t,i;if(!(this instanceof r))throw TypeError("Cannot call a class as a function");for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return t=(i=(e=o(r)).call.apply(e,[this].concat(c)))&&("object"===n(i)||"function"==typeof i)?i:a(this),s(a(t),"state",{matches:!1,mq:null,query:"",values:null}),s(a(t),"componentDidMount",function(){t.state.mq.addListener(t.updateMatches),t.updateMatches()}),s(a(t),"componentDidUpdate",function(e,r){t.state.mq!==r.mq&&(t.cleanupMediaQuery(r.mq),t.state.mq.addListener(t.updateMatches)),t.props.onChange&&r.matches!==t.state.matches&&t.props.onChange(t.state.matches)}),s(a(t),"componentWillUnmount",function(){t._unmounted=!0,t.cleanupMediaQuery(t.state.mq)}),s(a(t),"cleanupMediaQuery",function(e){e&&(e.removeListener(t.updateMatches),e.dispose())}),s(a(t),"updateMatches",function(){t._unmounted||t.state.mq.matches!==t.state.matches&&t.setState({matches:t.state.mq.matches})}),s(a(t),"render",function(){return"function"==typeof t.props.children?t.props.children(t.state.matches):t.state.matches?t.props.children:null}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(r,e),t=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.query||Object(g.a)(v(e,b));if(!r)throw Error("Invalid or missing MediaQuery!");var n=x(e);if(r===t.query&&n===t.values)return null;var o=f()(r,n||{},!!n);return{matches:o.matches,mq:o,query:r,values:n}}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(r,t),r}(c.a.Component);s(y,"displayName","MediaQuery"),s(y,"defaultProps",{values:null})},function(t,r){t.exports=e},function(e,t,r){"use strict";!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:var r=e.type;switch(r){case d:case p:case i:case l:case s:case m:return r;default:var n=r&&r.$$typeof;switch(n){case u:case f:case c:return n;default:return t}}case g:case h:case a:return t}}}function r(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+e.replace(/%s/g,function(){return r[o++]});"u">typeof console&&console.warn(a);try{throw Error(a)}catch(e){}},v=function(e,t){if(void 0===t)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];b.apply(void 0,[t].concat(n))}},x=!1;t.typeOf=e,t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=l,t.StrictMode=s,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===l||e===s||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(t){return x||(x=!0,v(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),r(t)||e(t)===d},t.isConcurrentMode=r,t.isContextConsumer=function(t){return e(t)===u},t.isContextProvider=function(t){return e(t)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(t){return e(t)===f},t.isFragment=function(t){return e(t)===i},t.isLazy=function(t){return e(t)===g},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===a},t.isProfiler=function(t){return e(t)===l},t.isStrictMode=function(t){return e(t)===s},t.isSuspense=function(t){return e(t)===m}}()},function(e,t,r){"use strict";function n(){return null}var o=r(1),a=r(9),i=r(2),s=r(10),l=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};c=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){function r(e){this.message=e,this.stack=""}function u(e){function n(n,s,l,u,d,p,f){if(u=u||h,p=p||l,f!==i){if(t){var m=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("u">typeof console){var g=u+":"+l;!o[g]&&a<3&&(c("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[g]=!0,a++)}}return null==s[l]?n?new r(null===s[l]?"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,l,u,d,p)}var o={},a=0,s=n.bind(null,!1);return s.isRequired=n.bind(null,!0),s}function d(e){return u(function(t,n,o,a,i,s){var l=t[n];return p(l)!==e?new r("Invalid "+a+" `"+i+"` of type `"+f(l)+"` supplied to `"+o+"`, expected `"+e+"`."):null})}function p(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function f(e){if(null==e)return""+e;var t=p(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var m="function"==typeof Symbol&&Symbol.iterator,h="<<anonymous>>",g={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:u(n),arrayOf:function(e){return u(function(t,n,o,a,s){if("function"!=typeof e)return new r("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new r("Invalid "+a+" `"+s+"` of type `"+p(l)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<l.length;c++){var u=e(l,c,o,a,s+"["+c+"]",i);if(u instanceof Error)return u}return null})},element:u(function(t,n,o,a,i){var s=t[n];return e(s)?null:new r("Invalid "+a+" `"+i+"` of type `"+p(s)+"` supplied to `"+o+"`, expected a single ReactElement.")}),elementType:u(function(e,t,n,a,i){var s=e[t];return o.isValidElementType(s)?null:new r("Invalid "+a+" `"+i+"` of type `"+p(s)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(t,n,o,a,i){if(!(t[n]instanceof e)){var s,l=e.name||h;return new r("Invalid "+a+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:h)+"` supplied to `"+o+"`, expected instance of `"+l+"`.")}return null})},node:u(function(t,n,o,a,i){return!function t(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(t);if(null===r||e(r))return!0;var n=function(e){var t=e&&(m&&e[m]||e["@@iterator"]);if("function"==typeof t)return t}(r);if(!n)return!1;var o,a=n.call(r);if(n!==r.entries){for(;!(o=a.next()).done;)if(!t(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!t(i[1]))return!1}return!0;default:return!1}}(t[n])?new r("Invalid "+a+" `"+i+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(e){return u(function(t,n,o,a,s){if("function"!=typeof e)return new r("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var c=t[n],u=p(c);if("object"!==u)return new r("Invalid "+a+" `"+s+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var d in c)if(l(c,d)){var f=e(c,d,o,a,s+"."+d,i);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?u(function(t,n,o,a,i){for(var s,l=t[n],c=0;c<e.length;c++)if(l===(s=e[c])?0!==l||1/l==1/s:l!=l&&s!=s)return null;var u=JSON.stringify(e,function(e,t){return"symbol"===f(t)?String(t):t});return new r("Invalid "+a+" `"+i+"` of value `"+String(l)+"` supplied to `"+o+"`, expected one of "+u+".")}):(c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),n)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),n;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=f(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(o)+" at index "+t+"."),n}return u(function(t,n,o,a,s){for(var l=0;l<e.length;l++)if(null==(0,e[l])(t,n,o,a,s,i))return null;return new r("Invalid "+a+" `"+s+"` supplied to `"+o+"`.")})},shape:function(e){return u(function(t,n,o,a,s){var l=t[n],c=p(l);if("object"!==c)return new r("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var d=e[u];if(d){var f=d(l,u,o,a,s+"."+u,i);if(f)return f}}return null})},exact:function(e){return u(function(t,n,o,s,l){var c=t[n],u=p(c);if("object"!==u)return new r("Invalid "+s+" `"+l+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");var d=a({},t[n],e);for(var f in d){var m=e[f];if(!m)return new r("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=m(c,f,o,s,l+"."+f,i);if(h)return h}return null})}};return r.prototype=Error.prototype,g.checkPropTypes=s,g.resetWarningCache=s.resetWarningCache,g.PropTypes=g,g}},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?function(e,t){for(var r,i,s=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in r=Object(arguments[l]))o.call(r,c)&&(s[c]=r[c]);if(n){i=n(r);for(var u=0;u<i.length;u++)a.call(r,i[u])&&(s[i[u]]=r[i[u]])}}return s}:Object.assign},function(e,t,r){"use strict";function n(e,t,r,n,l){for(var c in e)if(s(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((n||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw d.name="Invariant Violation",d}u=e[c](t,c,n,r,null,a)}catch(e){u=e}if(!u||u instanceof Error||o((n||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var p=l?l():"";o("Failed "+r+" type: "+u.message+(null!=p?p:""))}}}var o=function(){},a=r(2),i={},s=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},n.resetWarningCache=function(){i={}},e.exports=n},function(e,t,r){"use strict";function n(e,t,r){function n(e){i.matches=e.matches,i.media=e.media}var i=this;if(a&&!r){var s=a.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(n)}else this.matches=o(e,t),this.media=e;this.addListener=function(e){s&&s.addListener(e)},this.removeListener=function(e){s&&s.removeListener(e)},this.dispose=function(){s&&s.removeListener(n)}}var o=r(12).match,a="u">typeof window?window.matchMedia:null;e.exports=function(e,t,r){return new n(e,t,r)}},function(e,t,r){"use strict";function n(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(s),r=t[1],n=t[2],o=t[3]||"",a={};return a.inverse=!!r&&"not"===r.toLowerCase(),a.type=n?n.toLowerCase():"all",a.expressions=(o=o.match(/\([^\)]+\)/g)||[]).map(function(e){var t=e.match(l),r=t[1].toLowerCase().match(c);return{modifier:r[1],feature:r[2],value:t[2]}}),a})}function o(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function a(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return n(e).some(function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var s=e.expressions.every(function(e){var r=e.feature,n=e.modifier,s=e.value,l=t[r];if(!l)return!1;switch(r){case"orientation":case"scan":return l.toLowerCase()===s.toLowerCase();case"width":case"height":case"device-width":case"device-height":s=i(s),l=i(l);break;case"resolution":s=a(s),l=a(l);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":s=o(s),l=o(l);break;case"grid":case"color":case"color-index":case"monochrome":s=parseInt(s,10)||1,l=parseInt(l,10)||0}switch(n){case"min":return l>=s;case"max":return l<=s;default:return l===s}});return s&&!r||!s&&r})},t.parse=n;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,l=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,c=/^(?:(min|max)-)?(.+)/,u=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,r){"use strict";var n=r(3),o=r(4);t.a=function(e){var t=[];return Object.keys(o.a.all).forEach(function(r){var o,a,i,s=e[r];null!=s&&t.push((a=s,i=Object(n.a)(r),"number"==typeof a&&(a="".concat(a,"px")),!0===a?r:!1===a?(o=r,"not ".concat(o)):"(".concat(i,": ").concat(a,")")))}),t.join(" and ")}}];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=t,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}(a("eDhw6"))}),i("j04fQ",function(r,n){t(r.exports,"default",function(){return c});var o=a("eDhw6"),i=a("28SGB"),s=a("buzsN");class l extends o.Component{render(){return e(o).createElement(e(o).Fragment,null,e(o).createElement(i.default,null),e(o).createElement(s.default,null))}}var c=l}),i("28SGB",function(r,n){t(r.exports,"default",function(){return b});var o=a("eDhw6"),i=a("gMFKU"),s=a("5EXX7"),l=a("3w1uF");let c=e=>e,u,d,p;var f=i.default.div(u||(u=c`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    /* Keeping the background out assuming your main layout handles the dark theme */
`)),m=(0,i.keyframes)(d||(d=c`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`)),h=i.default.div(p||(p=c`
  animation: ${0} 2s infinite;
  margin-top: 30px;
`),m);class g extends o.Component{render(){return e(o).createElement(f,null,e(o).createElement(s.default,{text:"Roy Mootsana",fontFam:"'Cinzel', serif",timeDelay:500}),e(o).createElement("div",{style:{marginTop:"10px"}}),e(o).createElement(l.default,{text:"Design and Development",fontFam:"'Rajdhani', sans-serif",timeDelay:1300}),e(o).createElement(h,null,e(o).createElement(l.default,{text:"↓",fontFam:"'Rajdhani', sans-serif",timeDelay:1500})))}}var b=g}),i("5EXX7",function(r,n){t(r.exports,"default",function(){return b});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb"),l=a("asANu");let c=e=>e,u,d,p;var f=i.default.div(u||(u=c`
position: relative;
/* border:1px solid black; */
z-index: 1;
width:100%;
overflow: hidden;
`)),m=e=>(0,i.keyframes)(d||(d=c`
0%{
    transform: translateY(${0}px);
}
100%{
    transform: translateY(0px);
}
`),e),h=i.default.div(p||(p=c`
  font-family: ${0};
  text-align:center;
  color: var(--ink);
  text-shadow: var(--aura-glow);
  letter-spacing: -0.02em;
  font-weight: 500;
  opacity: 0.9;
  @media ${0} {
    font-size: 100px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
  @media ${0} {
    font-size: 140px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
  @media ${0} {
    font-size: 150px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
  @media ${0} {
    font-size: 200px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
`),e=>e.fontFam,l.default.tablet,e=>e.reveal?m(100):"none",140,l.default.laptop,e=>e.reveal?m(140):"none",196,l.default.laptopL,e=>e.reveal?m(150):"none",210,l.default.desktop,e=>e.reveal?m(200):"none",280);class g extends o.Component{componentDidMount(){var e=this.props.timeDelay;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){var t=this.props,r=t.text,n=t.fontFam,a=this.state.reveal;return e(o).createElement(f,null,e(o).createElement(h,{fontFam:n,reveal:a},r))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(s).string.isRequired,fontFam:e(s).string,timeDelay:e(s).number.isRequired},g.defaultProps={fontFam:"Avenir Helvetica Ariel"};var b=g}),i("3GRrb",function(e,t){e.exports=a("ezJjn")()}),i("ezJjn",function(e,t){"use strict";var r=a("iXFEL");function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}}),i("iXFEL",function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),i("asANu",function(e,r){t(e.exports,"default",function(){return o});var n="2560px",o={mobileS:"(min-width: 320px)",mobileM:"(min-width: 375px)",mobileL:"(min-width: 425px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",laptopL:"(min-width: 1440px)",desktop:`(min-width: ${n})`,desktopL:`(min-width: ${n})`}}),i("3w1uF",function(r,n){t(r.exports,"default",function(){return b});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb"),l=a("asANu");let c=e=>e,u,d,p;var f=i.default.div(u||(u=c`
position: relative;
/* border:1px solid black; */
z-index: 1;
overflow: hidden;
`)),m=e=>(0,i.keyframes)(d||(d=c`
0%{
    transform: translateY(${0}px);
}
100%{
    transform: translateY(0px);
}
`),e),h=i.default.div(p||(p=c`
  font-family: ${0};
  text-align:center;
  color: var(--ink);
  text-shadow: var(--aura-glow);
  letter-spacing: 0.05em;
  font-weight: 500;
  text-transform: uppercase;
  animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
  transform: translateY(${0}px);
  @media ${0} {
    font-size: 28px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
  @media ${0} {
    font-size: 40px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
  @media ${0} {
    font-size: 50px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
  @media ${0} {
    font-size: 60px;
    animation: ${0} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${0}px);
  }
`),e=>e.fontFam,e=>e.reveal?m(e.fontSizeInPx):"none",e=>1.4*e.fontSizeInPx,l.default.tablet,e=>e.reveal?m(28):"none",28*1.4,l.default.laptop,e=>e.reveal?m(40):"none",56,l.default.laptopL,e=>e.reveal?m(50):"none",70,l.default.desktop,e=>e.reveal?m(60):"none",84);class g extends o.Component{componentDidMount(){var e=this.props.timeDelay;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){var t=this.props,r=t.text,n=t.fontFam,a=this.state.reveal;return e(o).createElement(f,null,e(o).createElement(h,{fontFam:n,reveal:a},r))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(s).string.isRequired,fontFam:e(s).string,timeDelay:e(s).number.isRequired},g.defaultProps={fontFam:"Avenir Helvetica Ariel"};var b=g}),i("buzsN",function(r,n){t(r.exports,"default",function(){return g});var o=a("eDhw6"),i=a("gMFKU"),s=a("asANu");let l=e=>e,c,u,d;var p=i.default.section(c||(c=l`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),f=i.default.div.attrs({style:e=>{var t=e.scrollPercent;return{transform:`translateX(${5.5*t}%)`}}})(u||(u=l`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  opacity: 0.07;
  top :30%;
  left:-15%;
  @media ${0} {
    font-size: 180px;
  }
  @media ${0} {
    font-size: 200px;
  }
  @media ${0} {
    font-size: 350px;
  }
`),s.default.laptop,s.default.laptopL,s.default.desktop),m=i.default.div(d||(d=l`
  align-items: center;
  font-family: 'AvenirLight';
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  position: relative;
  @media ${0} {
    transform: translateY(40%);
    font-size: 30px;
  }
  @media ${0} {
    transform: translateY(35%);
    font-size: 38px;
  }
  @media ${0} {
    transform: translateY(30%);
    font-size: 70px;
  }
`),s.default.laptop,s.default.laptopL,s.default.desktop);class h extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){var t=window.document,r=t.body,n=t.documentElement,o=Math.max(r.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,a=150*n.clientHeight/n.scrollHeight;o>=0&&o<=a&&this.setState({scrollPercent:o})}render(){var t=this.state.scrollPercent;return e(o).createElement(p,null,e(o).createElement(f,{scrollPercent:t},"ABOUT ME"),e(o).createElement(m,null,"Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design. A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action."))}constructor(e){super(e),this.state={scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var g=h}),i("9tbqk",function(r,n){t(r.exports,"default",function(){return y});var o=a("4x5U3"),i=a("eDhw6"),s=a("gMFKU"),l=a("4a6aC"),c=a("8ZhPw");let u=e=>e,d,p,f,m;var h=s.default.div(d||(d=u`
  display: flex;
  flex-flow: row nowrap;
`)),g=s.default.button(p||(p=u`
  background: transparent;
  color: #0000ff;
  border: none;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
`)),b=s.default.div(f||(f=u`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`)),v=s.default.div(m||(m=u`   background-color: #ffffff;
color: #333;
padding: 20px;
border-radius: 10px;
width: 80%;
font-family: Arial, sans-serif;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 15px;
  white-space: pre-wrap; /* Preserve line breaks */
}

button {
  background-color: #0000ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}
`));class x extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({vh:Math.round(window.document.documentElement.clientHeight*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){var t=window.document,r=t.body,n=t.documentElement,o=this.state,a=o.vh,i=o.slideNumber,s=Math.max(r.scrollTop,n.scrollTop);s>this.lastScrollTop?this.scrollDirectionDown=!0:this.scrollDirectionDown=!1,this.lastScrollTop=s,Math.floor(s/a)!==i&&i<this.workDetails.length-1?this.setState({slideNumber:Math.floor(s/a)}):i===this.workDetails.length-1&&Math.floor(s/a)<i&&this.setState({slideNumber:Math.floor(s/a)})}changeTextContentBasedOnScroll(){var t=this.state.slideNumber;if(t>=this.workDetails.length)return null;var r=this.workDetails[t],n=null;return r.projectDesc&&(n=e(i).createElement("div",null,e(i).createElement("p",null,r.projectDesc),"UI Designer"!==r.projectType&&e(i).createElement(g,{type:"button",onClick:()=>this.handleButtonClick(t)},"More Info..."))),e(i).createElement(l.default,{number:r.number,projectName:r.projectName,projectDesc:n,projectType:r.projectType,roles:r.roles,refreshToggle:!0})}render(){var t=this.state,r=t.showDialog,n=t.dialogProject;return r&&n&&e(i).createElement(b,null,e(i).createElement(v,null,e(i).createElement("h3",null,"Problem:"),e(i).createElement("p",null,n.problem),e(i).createElement("h3",null,"Indicators:"),e(i).createElement("ul",null,n.indicators.split("\n").map((t,r)=>e(i).createElement("li",{key:r},t))),e(i).createElement("h3",null,"Solution:"),e(i).createElement("p",null,n.solution),"BluePrint"===n.projectName&&e(i).createElement(e(i).Fragment,null,e(i).createElement("h3",null,"QA:"),e(i).createElement("ul",null,n.QA.split("\n").map((t,r)=>e(i).createElement("li",{key:r},t)))),e(i).createElement(g,{onClick:this.handleCloseDialog},"Close"))),e(i).createElement(h,null,this.changeTextContentBasedOnScroll(),e(i).createElement(c.default,{pageSplitTimes:this.pageSplitTimes}),r&&e(i).createElement(b,null,e(i).createElement(v,null,e(i).createElement("h3",null,"Problem:"),e(i).createElement("p",null,n.problem),e(i).createElement("h3",null,"Indicators:"),e(i).createElement("ul",null,n.indicators.split("\n").map((t,r)=>e(i).createElement("li",{key:r},t))),e(i).createElement("h3",null,"Solution:"),e(i).createElement("p",null,n.solution),"BluePrint"===n.projectName&&e(i).createElement(e(i).Fragment,null,e(i).createElement("h3",null,"QA:"),e(i).createElement("ul",null,n.QA.split("\n").map((t,r)=>e(i).createElement("li",{key:r},t)))),e(i).createElement(g,{onClick:this.handleCloseDialog},"Close"))))}constructor(e){super(e),(0,o._)(this,"handleButtonClick",e=>{this.setState({showDialog:!0,dialogProject:this.workDetails[e]})}),(0,o._)(this,"handleCloseDialog",()=>{this.setState({showDialog:!1,dialogProject:null})}),this.state={vh:0,slideNumber:0,showDialog:!1,dialogProject:null},this.pageSplitTimes=1.4,this.lastScrollTop=0,this.scrollDirectionDown=!0,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"BluePrint",projectDesc:"Collaboratively built a comprehensive design system, showcased in Storybook.",projectType:"DESIGN SYSTEM",roles:["UI Designer","Creative Technonogist"],problem:"The client needed a consistent and efficient design system to streamline their product development process.",indicators:"Inconsistency in design across different products.\nDuplication of effort in designing similar components.\nLack of a centralized repository for design assets.",solution:"Developed a comprehensive design system called BluePrint that provided a library of reusable components, typography guidelines, color palettes, and UI patterns. Created a Storybook documentation to showcase and maintain the design system.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"02",projectName:"BluePrint Apps",projectDesc:"Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.",projectType:"ANGULAR APPS",roles:["UI Designer","Front-end Developer"],problem:"The client needed a set of applications that adhere to the design system we developed (BluePrint) to ensure a consistent user experience.",indicators:"Inconsistency in the design language across different applications.\nDifficulty in maintaining consistent UI components and patterns.\nLack of a seamless user experience across different apps.",solution:"Utilized the BluePrint design system to create a suite of Angular applications. Ensured consistent use of design elements, UI components, and interaction patterns across all apps. Conducted usability testing to validate the user experience.",QA:"N/A"},{number:"03",projectName:"Admin Portal",projectDesc:"Created an admin portal for a nail boutique, streamlining operations by managing stock, client data, and generating reports.",projectType:"WEB APP",roles:["MEAN Stack Developer","UI Designer"],problem:"The nail boutique needed an efficient system to manage their inventory, client information, and generate reports for business insights.",indicators:"Manual inventory management causing errors and inefficiencies.\nLack of a centralized system to store client information.\nDifficulty in generating accurate and timely reports.",solution:"Developed a web-based admin portal using the MEAN stack (MongoDB, Express.js, Angular, Node.js) that provided features for inventory management, client information storage, and report generation. Streamlined business operations and provided valuable insights for data-driven decision making.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"04",projectName:"Nail Boutique",projectDesc:"Collaborated on a website for a nail boutique with a customizer feature enabling customers to design their own nail art. Included service details, pricing, and booking options.",projectType:"WEBSITE",roles:["Web Developer"],problem:"The nail boutique needed an online presence to showcase their services and allow customers to customize and book nail art designs.",indicators:"Limited online visibility and reach.\nLack of a platform for customers to customize and book nail art designs.\nInability to showcase services, pricing, and contact information effectively.",solution:"Developed a responsive website using HTML, CSS, and JavaScript that provided information about the nail boutique, showcased services, pricing, and contact details. Implemented a customizer feature to allow customers to design their own nail art and integrated a booking system for convenient appointment scheduling.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"05",projectName:"Readpoint",projectDesc:"Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to browse and purchase books.",projectType:"WEB APP",roles:["Full Stack Developer"],problem:"The client wanted to establish an online presence to sell books and provide a seamless user experience for browsing and purchasing books.",indicators:"Inability to reach a wider customer base without an online platform.\nLack of a convenient and secure way for customers to browse and purchase books.\nManual book inventory management leading to inaccuracies and inefficiencies.",solution:"Developed a web application using the MERN stack (MongoDB, Express.js, React, Node.js) that provided features for browsing and purchasing books. Integrated a secure payment system and implemented an efficient book inventory management system with real-time updates.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""],problem:"",indicators:"",solution:"",QA:""}]}}var y=x}),i("4x5U3",function(e,r){t(e.exports,"_",function(){return n});function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}),i("4a6aC",function(r,n){t(r.exports,"default",function(){return q});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb"),l=a("asANu");let c=e=>e,u,d,p,f,m,h,g,b,v,x,y,w;var E=i.default.section(u||(u=c`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`)),R=i.default.div(d||(d=c`
  font-family: 'AvenirHeavy';
  @media ${0} {
    font-size: 70px;
  }
  @media ${0} {
    font-size: 80px;
  }
  @media ${0} {
    font-size: 120px;
  }
  letter-spacing: -0.02em;
  /* border: 1px dashed black; */
`),l.default.laptop,l.default.laptopL,l.default.desktop),k=i.default.div(p||(p=c`
  padding-top:2%;
  font-family: 'AvenirBook';
  @media ${0} {
    font-size: 25px;
  }
  @media ${0} {
    font-size: 30px;
  }
  @media ${0} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`),l.default.laptop,l.default.laptopL,l.default.desktop),j=i.default.div(f||(f=c`
  padding-top:5%;
  font-family: 'AvenirMedium';
  @media ${0} {
    font-size: 25px;
  }
  @media ${0} {
    font-size: 30px;
  }
  @media ${0} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`),l.default.laptop,l.default.laptopL,l.default.desktop),S=i.default.div(m||(m=c`
  font-family: 'AvenirHeavy';
  @media ${0} {
    font-size: 25px;
  }
  @media ${0} {
    font-size: 30px;
  }
  @media ${0} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
  padding-top: 140px; /* Increased to clear back-to-menu-btn */
`),l.default.laptop,l.default.laptopL,l.default.desktop),T=i.default.div(h||(h=c`
  font-family: 'AvenirHeavy';
  @media ${0} {
    font-size: 25px;
  }
  @media ${0} {
    font-size: 30px;
  }
  @media ${0} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
`),l.default.laptop,l.default.laptopL,l.default.desktop),$=i.default.div(g||(g=c`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
`)),H=i.default.div(b||(b=c`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`)),D=i.default.span(x||(x=c`
`)),P=i.default.span(y||(y=c`
display:${0};
color: var(--ink);
text-shadow: var(--aura-glow);
letter-spacing: 0.01em;
font-weight: 700;
position: relative;

&::after{
content:'';
top:0;
left:0;
position:absolute;
width:0%;
height:100%;
background: var(--ink);
animation: ${0} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
animation-delay:0s;
}
`),e=>e.inline?"inline-block":"block",()=>(0,i.keyframes)(v||(v=c`
0%{
    left: 0;
    width: 0%
}
50%{
    left:0%;
    width:100%
}
100%{
    left:100%;
    width:0%
}
`))),L=i.default.span(w||(w=c`

`));class U extends o.Component{componentWillReceiveProps(e){this.refresh(e)}refresh(e){e.refreshToggle&&(D=L,this.setState({refreshBlock:!0},()=>{D=P,this.setState({refreshBlock:!1})}))}render(){var t=this.props,r=t.number,n=t.projectName,a=t.projectDesc,i=t.roles,s=t.projectType,l=t.refreshToggle;return e(o).createElement(E,null,e(o).createElement(S,null,e(o).createElement(D,{refreshToggle:l,inline:!0},r)),e(o).createElement(H,null,e(o).createElement($,null,e(o).createElement(R,null,e(o).createElement(D,{refreshToggle:l,inline:!0},n)),e(o).createElement(j,null,e(o).createElement(D,{refreshToggle:l,inline:!0},i.map((t,r,n)=>r===n.length-1?e(o).createElement("span",{key:t},t):e(o).createElement("span",{key:t},t,"  •  ")))),e(o).createElement(k,null,e(o).createElement(D,{refreshToggle:l,inline:!1},a)))),e(o).createElement(T,null,e(o).createElement(D,{refreshToggle:l,inline:!0},s)))}constructor(e){super(e),this.state={refreshBlock:!1},this.refresh=this.refresh.bind(this)}}U.propTypes={number:e(s).string.isRequired,projectName:e(s).string.isRequired,projectDesc:e(s).node,projectType:e(s).string.isRequired,roles:e(s).array.isRequired,refreshToggle:e(s).bool.isRequired},U.defaultProps={projectDesc:null};var q=U}),i("8ZhPw",function(r,n){t(r.exports,"default",function(){return x});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb"),l=a("yAHvL"),c=a("7q9PE"),u=a("d0nkG"),d=a("bWdcb"),p=a("dohF2");let f=e=>e,m,h;var g=i.default.div(m||(m=f`
  margin-left: 50%;
  width: 50%;
  height: 750vh;
  display: flex;
  flex-flow: column nowrap;
`)),b=i.default.div(h||(h=f`
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`));class v extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){var e=window.document,t=e.body,r=e.documentElement,n=Math.max(t.scrollTop,r.scrollTop)/(r.scrollHeight-r.clientHeight)*100,o=100*r.clientHeight/r.scrollHeight,a=1040*r.clientHeight/r.scrollHeight;n>=o&&n<=a&&this.setState({scrollPercent:n})}render(){var t=this.state,r=t.scrollPercent,n=t.scrollHeight,a=t.screenHeight,i=100*this.props.pageSplitTimes;return e(o).createElement(g,null,e(o).createElement(b,{height:i},e(o).createElement(l.default,{boxHeight:i,index:1,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(c.default,{boxHeight:i,index:2,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(u.default,{boxHeight:i,index:3,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(d.default,{boxHeight:i,index:4,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(p.default,{boxHeight:i,index:5,scrollPercent:r,screenHeight:a,scrollHeight:n})))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}v.propTypes={pageSplitTimes:e(s).number.isRequired};var x=v}),i("yAHvL",function(r,n){t(r.exports,"default",function(){return x});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d;var p=new URL(a("luoRi")).href,f=new URL(a("hqIFC")).href,m=new URL(a("6AioQ")).href,h=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 40vh; 
`)),g=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
right: 2vw;
height: 50vh;
filter: blur(0.6px);
`)),b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.9)`}}})(d||(d=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
left:0vw;
height: 50vh; 
`));class v extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:m,scroll:t,alt:"voistrapPeople"}),e(o).createElement(g,{src:f,scroll:t,alt:"voistrapMeetings"}),e(o).createElement(h,{src:p,scroll:t,alt:"voistrapHome"}))}}v.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var x=v}),i("luoRi",function(e,t){e.exports=r("p3Aqm")}),i("hqIFC",function(e,t){e.exports=r("bwXwh")}),i("6AioQ",function(e,t){e.exports=r("1uyfE")}),i("7q9PE",function(r,n){t(r.exports,"default",function(){return E});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d,p;var f=new URL(a("gGXQ6")).href,m=new URL(a("3nWHt")).href,h=new URL(a("lXu8j")).href,g=new URL(a("kBVoP")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left:0vw;
height: 80vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-15vh;
right: 2vw;
height: 80vh;
filter: blur(0.2px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${5*t}%) scale(0.7)`}}})(d||(d=l`
transition: transform 0.2s ease-out;
bottom:-30vh;
left:2vw;
position: absolute;
height: 80vh;
filter: blur(0.4px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.6)`}}})(p||(p=l`
transition: transform 0.2s ease-out;
bottom:-15vh;
right: 4vw;
position: absolute;
height: 60vh;
filter: blur(0.2px);
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(o).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(o).createElement(v,{src:f,scroll:t,alt:"Home"}),e(o).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var E=w}),i("gGXQ6",function(e,t){e.exports=r("fY6lY")}),i("3nWHt",function(e,t){e.exports=r("ld4kD")}),i("lXu8j",function(e,t){e.exports=r("6geCA")}),i("kBVoP",function(e,t){e.exports=r("dyeoW")}),i("d0nkG",function(r,n){t(r.exports,"default",function(){return E});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d,p;var f=new URL(a("aRiqg")).href,m=new URL(a("jPpNm")).href,h=new URL(a("dRZXv")).href,g=new URL(a("63UbG")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${3*t}%) scale(0.6)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
bottom: 10vh;
right: 1vw;
transform-origin: right center;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(u||(u=l`
transition: transform 0.2s ease-out;
bottom: -10vh;
left: -4vw;
position: absolute;
height: 50vh;
filter: blur(0.3px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%) scale(0.9)`}}})(d||(d=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -35vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${22*t}%)`}}})(p||(p=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left: 0vw;
height: 50vh;
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:h,scroll:t,alt:"paths"}),e(o).createElement(v,{src:g,scroll:t,alt:"bigBubble"}),e(o).createElement(x,{src:m,scroll:t,alt:"bubbles"}),e(o).createElement(y,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var E=w}),i("aRiqg",function(e,t){e.exports=r("9sAFN")}),i("jPpNm",function(e,t){e.exports=r("8BBkT")}),i("dRZXv",function(e,t){e.exports=r("hQeZf")}),i("63UbG",function(e,t){e.exports=r("eDlnT")}),i("bWdcb",function(r,n){t(r.exports,"default",function(){return x});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d;var p=new URL(a("5oXBt")).href,f=new URL(a("7Giik")).href,m=new URL(a("6qlJt")).href,h=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left: -4vw;
height: 50vh;
filter: blur(0.8px);
`)),g=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${12*t}%) scale(0.9)`}}})(u||(u=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -50vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.4px);
`)),b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${25*t}%)`}}})(d||(d=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 30vh;
left: 0vw;
height: 40vh;
`));class v extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(h,{src:m,scroll:t,alt:"bigBubble"}),e(o).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(o).createElement(b,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var x=v}),i("5oXBt",function(e,t){e.exports=r("Nhwuv")}),i("7Giik",function(e,t){e.exports=r("jyxcO")}),i("6qlJt",function(e,t){e.exports=r("4jvZJ")}),i("dohF2",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("eDhw6"),s=a("gMFKU"),l=a("3GRrb"),c=new URL(a("8Fy7d")).href,u=s.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${10*t}%) scale(0.7)`}}})(o||(o=(e=>e)`
bottom:-50vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`));class d extends i.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,o=r.index,a=r.scrollHeight;return t-=r.screenHeight*(n*o-100)/100*100/a+(o-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var p=d}),i("8Fy7d",function(e,t){e.exports=r("kqkS2")}),i("b8Xje",function(r,n){t(r.exports,"default",function(){return b});var o=a("eDhw6"),i=a("gMFKU");let s=e=>e,l,c,u,d,p,f;var m=i.default.div(l||(l=s`
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  
`)),h=i.default.div(c||(c=s`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  top: 40%;
  right: -50%;
`));i.default.div(u||(u=s`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
`)),i.default.div(d||(d=s`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  animation: scrollLoop 20s linear infinite;

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome and Safari */
  }
`)),i.default.a(p||(p=s`
  flex: 0 0 auto;
  margin: 10px;
  scroll-snap-align: start;
`)),i.default.img(f||(f=s`
  width: 200px;
  height: auto;
`));class g extends o.Component{render(){return e(o).createElement(m,null,e(o).createElement(h,null,"SKILLS"))}}var b=g}),i("gsqNr",function(r,n){t(r.exports,"default",function(){return y});var o=a("eDhw6"),i=a("gMFKU"),s=a("fJ6Lk"),l=a("asANu");let c=e=>e,u,d,p;var f=new URL(a("kR2dK")).href,m=new URL(a("8Fui5")).href,h=new URL(a("kQadI")).href,g=i.default.section(u||(u=c`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),b=i.default.div.attrs({style:e=>{var t=e.scrollPercent;return{transform:`translateX(${8*t}%)`}}})(d||(d=c`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color:#cfd7ff;
  top:12%;
  left:-70%;
  @media ${0} {
    font-size: 180px;
  }
  @media ${0} {
    font-size: 200px;
  }
  @media ${0} {
    font-size: 350px;
  }
`),l.default.laptop,l.default.laptopL,l.default.desktop),v=i.default.div(p||(p=c`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`));class x extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight)}),this.setState({screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){var t=window.document,r=t.body,n=t.documentElement,o=Math.max(r.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,a=1040*n.clientHeight/n.scrollHeight;o>=a&&o<=100&&(o-=a,this.setState({scrollPercent:o}))}render(){var t=this.state.scrollPercent;return e(o).createElement(g,null,e(o).createElement(b,{scrollPercent:t},"CONTACT"),e(o).createElement(v,null,e(o).createElement(s.default,{imgURL:f,alternate:"Github",redirectURL:"https://github.com/Royverse"}),e(o).createElement(s.default,{imgURL:m,alternate:"Mail",redirectURL:"mailto:roymootsana@gmail.com"}),e(o).createElement(s.default,{imgURL:h,alternate:"Linkedin",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var y=x}),i("fJ6Lk",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("eDhw6"),s=a("gMFKU"),l=a("3GRrb"),c=a("asANu"),u=s.default.img(o||(o=(e=>e)`
/* border: 1px solid black; */
@media ${0} {
    height: 85px;
    width: 85px;
  }
@media ${0} {
    height: 90px;
    width: 90px;
  }
  @media ${0} {
    height: 180px;
    width: 180px;
  }
`),c.default.laptop,c.default.laptopL,c.default.desktop);class d extends e(i).Component{notifySlack(){var e=this.props.alternate;console.log(e),fetch(void 0,{credentials:"omit",method:"POST",body:JSON.stringify({text:`\u{1F680} ${e}`})})}render(){var t=this.props,r=t.imgURL,n=t.alternate,o=t.redirectURL;return e(i).createElement("a",{href:o,onClick:this.notifySlack,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(u,{src:r,alt:n}))}constructor(e){super(e),this.notifySlack=this.notifySlack.bind(this)}}d.propTypes={imgURL:e(l).oneOfType([e(l).string,e(l).object]).isRequired,alternate:e(l).string.isRequired,redirectURL:e(l).string.isRequired};var p=d}),i("kR2dK",function(e,t){e.exports=r("6g8dZ")}),i("8Fui5",function(e,t){e.exports=r("7E1en")}),i("kQadI",function(e,t){e.exports=r("fasGU")}),i("c7kJs",function(r,n){t(r.exports,"default",function(){return c});var o=a("eDhw6"),i=a("ap2pJ"),s=a("hDeb6");class l extends o.Component{render(){return e(o).createElement(e(o).Fragment,null,e(o).createElement(i.default,null),e(o).createElement(s.default,null))}}var c=l}),i("ap2pJ",function(r,n){t(r.exports,"default",function(){return R});var o=a("eDhw6"),i=a("gMFKU"),s=a("ch54b"),l=a("asANu");let c=e=>e,u,d,p,f,m,h;var g=i.default.section(u||(u=c`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Changed from 35vh to center it properly */
    width: 100%;
    padding: 0 20px;
    position: relative;
    z-index: 50;
`)),b=i.default.div(d||(d=c`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`)),v=(0,i.default)(s.motion.div)(p||(p=c`
  font-family: 'Cinzel', serif;
  text-align: center;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 700;
  white-space: nowrap;
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 38px; }
  @media ${0} { font-size: 44px; }
  @media ${0} { font-size: 100px; }
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet),x=(0,i.default)(s.motion.div)(f||(f=c`
  font-family: 'Rajdhani', sans-serif;
  text-align: center;
  margin-top: 15px;
  color: var(--ink);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  @media ${0} { font-size: 12px; }
  @media ${0} { font-size: 14px; }
  @media ${0} { font-size: 16px; }
  @media ${0} { font-size: 24px; }
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet),y=(0,i.keyframes)(m||(m=c`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`)),w=i.default.div(h||(h=c`
  animation: ${0} 2s infinite;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`),y);class E extends o.Component{render(){return e(o).createElement(g,null,e(o).createElement(b,null,e(o).createElement(v,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:.5}},"Roy Mootsana")),e(o).createElement(b,null,e(o).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.3}},"Design and Development")),e(o).createElement(w,null,e(o).createElement(b,null,e(o).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.5}},"↓"))))}}var R=E}),i("hDeb6",function(r,n){t(r.exports,"default",function(){return h});var o=a("eDhw6"),i=a("gMFKU"),s=a("ch54b"),l=a("asANu");let c=e=>e,u,d;var p=i.default.section(u||(u=c`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 50;
`)),f=(0,i.default)(s.motion.span)(d||(d=c`
  font-family: 'AvenirRoman';
  text-align: center;
  color: var(--ink);
  line-height: 1.5;
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
  @media ${0} { font-size: 22px; }
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 36px; }
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop);class m extends o.Component{render(){return e(o).createElement(p,null,e(o).createElement(f,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.2,delay:.5}},"Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design. A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action."))}}var h=m}),i("kzQ7T",function(r,n){let o;t(r.exports,"default",function(){return f});var i=a("eDhw6"),s=a("gMFKU"),l=a("hp5in"),c=a("8te6o"),u=a("lySEY"),d=s.default.div(o||(o=(e=>e)`
    display: flex;
    flex-flow: row nowrap;
    background: var(--bg);
    min-height: 100vh;
    transition: background 0.5s ease;
`));class p extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll,{passive:!0});var t=e(l)().offset;this.setState({vh:Math.round((window.document.documentElement.clientHeight+t)*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{var e=window.document,t=e.body,r=e.documentElement,n=this.state,o=n.vh,a=n.slideNumber,i=Math.max(t.scrollTop,r.scrollTop),s=Math.floor(i/o);s!==a&&s>=0&&s<this.workDetails.length&&this.setState({slideNumber:s}),this.lastScrollTop=i,this.ticking=!1}),this.ticking=!0)}render(){var t=this.state.slideNumber,r=this.workDetails[t]||this.workDetails[0];return e(i).createElement(d,null,e(i).createElement(c.default,{number:r.number,projectName:r.projectName,projectDesc:r.projectDesc,projectType:r.projectType,roles:r.roles,refreshToggle:!0}),e(i).createElement(u.default,{pageSplitTimes:this.pageSplitTimes}))}constructor(e){super(e),this.state={vh:0,slideNumber:0},this.pageSplitTimes=1.3,this.lastScrollTop=0,this.ticking=!1,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"BluePrint Storybook",projectDesc:"Collaborated with a team to develop a comprehensive design system for a client. Created an extensive Storybook showcasing all the design elements and components.",projectType:"DESIGN SYSTEM",roles:["UI Designer","Technologist"]},{number:"02",projectName:"BluePrint Apps",projectDesc:"Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.",projectType:"ANGULAR APPS",roles:["UI Designer","Front-end Developer"]},{number:"03",projectName:"Admin Portal",projectDesc:"Developed an admin portal for a nail boutique with a database to capture stock and client information, streamlining business operations and providing valuable insights.",projectType:"WEB APP",roles:["MEAN Stack Developer","UI Designer"]},{number:"04",projectName:"Nail boutique website",projectDesc:"Collaborated with a team to develop a website for a nail boutique with a customizer feature that allows customers to design their own nail art.",projectType:"WEBSITE",roles:["Web Developer"]},{number:"05",projectName:"Readpoint",projectDesc:"Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to securely browse and purchase books.",projectType:"WEB APP",roles:["Full Stack Developer"]},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]}]}}var f=p}),i("hp5in",function(e,t){e.exports,e.exports=function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t(){var e,t=((e=document.createElement("div")).style.cssText="position: fixed; top: 0; height: 100vh; pointer-events: none;",document.documentElement.insertBefore(e,document.documentElement.firstChild),e),r=window.innerHeight,n=t.offsetHeight,o=n-r;return document.documentElement.removeChild(t),{vh:n,windowHeight:r,offset:o,isNeeded:0!==o,value:0}}function r(){}function n(){var e=t();return e.value=e.offset,e}var o=Object.freeze({noop:r,computeDifference:n,redefineVhUnit:function(){var e=t();return e.value=.01*e.windowHeight,e}});function a(e){return"string"==typeof e&&e.length>0}var i=Object.freeze({cssVarName:"vh-offset",redefineVh:!1,method:n,force:!1,bind:!0,updateOnTouch:!1,onUpdate:r}),s=!1,l=[];try{var c=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",c,c),window.removeEventListener("test",c,c)}catch(e){s=!1}function u(e,t){l.push({eventName:e,callback:t}),window.addEventListener(e,t,!!s&&{passive:!0})}function d(){l.forEach(function(e){window.removeEventListener(e.eventName,e.callback)}),l=[]}function p(e,t){document.documentElement.style.setProperty("--"+e,t.value+"px")}function f(t,r){return e({},t,{unbind:d,recompute:r.method})}return function(t){var n=Object.freeze(function(t){if(a(t))return e({},i,{cssVarName:t});if("object"!=typeof t)return i;var n={force:!0===t.force,bind:!1!==t.bind,updateOnTouch:!0===t.updateOnTouch,onUpdate:"function"==typeof t.onUpdate?t.onUpdate:r},s=!0===t.redefineVh;return n.method=o[s?"redefineVhUnit":"computeDifference"],n.cssVarName=a(t.cssVarName)?t.cssVarName:s?"vh":i.cssVarName,n}(t)),s=f(n.method(),n);if(!s.isNeeded&&!n.force||(p(n.cssVarName,s),n.onUpdate(s),!n.bind))return s;function l(){window.requestAnimationFrame(function(){var e=n.method();p(n.cssVarName,e),n.onUpdate(f(e,n))})}return s.unbind(),u("orientationchange",l),n.updateOnTouch&&u("touchmove",l),s}}()}),i("8te6o",function(r,n){t(r.exports,"default",function(){return H});var o=a("eDhw6"),i=a("gMFKU"),s=a("ijF79"),l=a("ch54b"),c=a("3GRrb"),u=a("asANu");let d=e=>e,p,f,m,h,g,b,v,x;var y=i.default.section(p||(p=d`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 110px 24px 40px; /* Increased to clear season dropdown */
  pointer-events: none;
  z-index: 10;
`)),w=(0,i.default)(l.motion.div)(f||(f=d`
  font-family: 'AvenirHeavy', sans-serif;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`)),E=i.default.div(m||(m=d`
  overflow: hidden;
  margin-bottom: 16px;
`)),R=(0,i.default)(l.motion.h2)(h||(h=d`
  font-family: 'AvenirHeavy', sans-serif;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0;
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 38px; }
  @media ${0} { font-size: 44px; }
  @media ${0} { font-size: 64px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL,u.default.tablet),k=i.default.div(g||(g=d`
  overflow: hidden;
  margin-bottom: 32px;
`)),j=(0,i.default)(l.motion.div)(b||(b=d`
  font-family: 'AvenirMedium', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0;
`)),S=(0,i.default)(l.motion.p)(v||(v=d`
  font-family: 'AvenirRoman', sans-serif;
  color: var(--ink);
  line-height: 1.6;
  max-width: 90%;
  @media ${0} { font-size: 16px; }
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL),T=(0,i.default)(l.motion.div)(x||(x=d`
  position: absolute;
  bottom: 40px;
  right: 24px;
  font-family: 'AvenirHeavy', sans-serif;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--ink-faint);
  writing-mode: vertical-rl;
  text-transform: uppercase;
`));class $ extends o.Component{render(){var t=this.props,r=t.number,n=t.projectName,a=t.projectDesc,i=t.roles,c=t.projectType;return(t.refreshToggle,n)?e(o).createElement(y,null,e(o).createElement(s.AnimatePresence,{mode:"wait"},e(o).createElement(l.motion.div,{key:n,initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.2}},exit:{opacity:0,transition:{duration:.4,ease:"easeIn"}}}},e(o).createElement(w,{variants:{hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}}},"// PROJECT ",r),e(o).createElement(E,null,e(o).createElement(R,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},n)),e(o).createElement(k,null,e(o).createElement(j,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},i.join(" • "))),e(o).createElement(S,{variants:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.9,ease:"easeOut"}}}},a),e(o).createElement(T,{variants:{hidden:{opacity:0,scaleY:0,originY:1},visible:{opacity:1,scaleY:1,transition:{duration:1,ease:"easeOut"}}}},c)))):null}}$.propTypes={number:e(c).string.isRequired,projectName:e(c).string.isRequired,projectDesc:e(c).string.isRequired,projectType:e(c).string.isRequired,roles:e(c).array.isRequired,refreshToggle:e(c).bool.isRequired};var H=$}),i("lySEY",function(r,n){t(r.exports,"default",function(){return y});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb"),l=a("hp5in"),c=a("fm0Up"),u=a("75cq3"),d=a("eUUzS"),p=a("7LTn4"),f=a("imjFR");let m=e=>e,h,g;var b=i.default.div(h||(h=m`
  width: 100%;
  height: 950vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
`)),v=i.default.div(g||(g=m`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`));class x extends o.Component{componentDidMount(){var t=e(l)().offset;window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight+t)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{var e=window.document,t=e.body,r=e.documentElement,n=Math.max(t.scrollTop,r.scrollTop)/(r.scrollHeight-r.clientHeight)*100,o=100*r.clientHeight/r.scrollHeight,a=1240*r.clientHeight/r.scrollHeight;n>=o&&n<=a&&this.setState({scrollPercent:n}),this.ticking=!1}),this.ticking=!0)}render(){var t=this.state,r=t.scrollPercent,n=t.scrollHeight,a=t.screenHeight,i=100*this.props.pageSplitTimes;return e(o).createElement(b,null,e(o).createElement(v,{height:i}),e(o).createElement(v,{height:i},e(o).createElement(c.default,{boxHeight:i,index:1,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(u.default,{boxHeight:i,index:2,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(d.default,{boxHeight:i,index:3,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(p.default,{boxHeight:i,index:4,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(f.default,{boxHeight:i,index:5,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i}))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.ticking=!1,this.handleScroll=this.handleScroll.bind(this)}}x.propTypes={pageSplitTimes:e(s).number.isRequired};var y=x}),i("fm0Up",function(r,n){t(r.exports,"default",function(){return E});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d,p;var f=new URL(a("luoRi")).href,m=new URL(a("hqIFC")).href,h=new URL(a("6AioQ")).href,g=new URL(a("kS7ca")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
right: 2vw;
height:20vh;
filter: blur(0.1px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${5*t}%) scale(0.7)`}}})(d||(d=l`
transition: transform 0.2s ease-out;
bottom: 25vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.9)`}}})(p||(p=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(y,{src:h,scroll:t,alt:"voistrapPeople"}),e(o).createElement(x,{src:g,scroll:t,alt:"voistrapPhone"}),e(o).createElement(v,{src:m,scroll:t,alt:"voistrapMeetings"}),e(o).createElement(b,{src:f,scroll:t,alt:"voistrapHome"}))}}w.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var E=w}),i("kS7ca",function(e,t){e.exports=r("38lcn")}),i("75cq3",function(r,n){t(r.exports,"default",function(){return E});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d,p;var f=new URL(a("gGXQ6")).href,m=new URL(a("3nWHt")).href,h=new URL(a("lXu8j")).href,g=new URL(a("kBVoP")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 30vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 35vh;
right: 2vw;
height: 20vh;
filter: blur(0.2px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${5*t}%) scale(0.7)`}}})(d||(d=l`
transition: transform 0.2s ease-out;
bottom: 20vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.6)`}}})(p||(p=l`
transition: transform 0.2s ease-out;
bottom: 35vh;
right: 4vw;
position: absolute;
height: 30vh;
filter: blur(0.2px);
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(o).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(o).createElement(v,{src:f,scroll:t,alt:"Home"}),e(o).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var E=w}),i("eUUzS",function(r,n){t(r.exports,"default",function(){return E});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d,p;var f=new URL(a("aRiqg")).href,m=new URL(a("jPpNm")).href,h=new URL(a("dRZXv")).href,g=new URL(a("63UbG")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${35*t}%)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${28*t}%) scale(0.9)`}}})(u||(u=l`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%) scale(0.8)`}}})(d||(d=l`
position: absolute;
bottom: 60vh;
right: 2vw;
height: 20vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(p||(p=l`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:h,scroll:t,alt:"paths"}),e(o).createElement(y,{src:g,scroll:t,alt:"bigBubble"}),e(o).createElement(v,{src:m,scroll:t,alt:"bubbles"}),e(o).createElement(b,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var E=w}),i("7LTn4",function(r,n){t(r.exports,"default",function(){return x});var o=a("eDhw6"),i=a("gMFKU"),s=a("3GRrb");let l=e=>e,c,u,d;var p=new URL(a("5oXBt")).href,f=new URL(a("7Giik")).href,m=new URL(a("6qlJt")).href,h=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${35*t}%)`}}})(c||(c=l`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`)),g=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${28*t}%) scale(0.9)`}}})(u||(u=l`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`)),b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(d||(d=l`
bottom: 60vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`));class v extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:m,scroll:t,alt:"bigBubble"}),e(o).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(o).createElement(h,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var x=v}),i("imjFR",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("eDhw6"),s=a("gMFKU"),l=a("3GRrb"),c=new URL(a("8Fy7d")).href,u=s.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${10*t}%) scale(0.7)`}}})(o||(o=(e=>e)`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`));class d extends i.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,o=r.index,a=r.scrollHeight;return t-=r.screenHeight*(n*o-100)/100*100/a+(o-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var p=d}),i("jijA3",function(r,n){t(r.exports,"default",function(){return m});var o=a("eDhw6"),i=a("gMFKU"),s=a("asANu");let l=e=>e,c,u,d;var p=i.default.section(c||(c=l`
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${0} {
    padding-left:60px;
    }
    @media ${0} {
    padding-left:60px;
    }
    @media ${0} {
    padding-left:60px;
    }
    @media ${0} {
    padding-left:90px;
    }
    @media ${0} {
    padding-left:120px;
    }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop);i.default.div(u||(u=l`
  font-family: 'AvenirHeavy';
  color: var(--ink);
  @media ${0} {
    font-size: 40px;
  }
  @media ${0} {
    font-size: 50px;
  }
  @media ${0} {
    font-size: 60px;
  }
  @media ${0} {
    font-size: 90px;
  }
  @media ${0} {
    font-size: 95px;
  }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),i.default.div(d||(d=l`
  font-family: 'AvenirRoman';
  z-index: 1;
  
  @media ${0} {
    margin-top: 30px;
    font-size: 20px;
  }
  @media ${0} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${0} {
    margin-top: 35px;
    font-size: 25px;
  }
  @media ${0} {
    margin-top: 45px;
    font-size: 35px;
  }
  @media ${0} {
    margin-top: 60px;
    font-size: 45px;
  }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop);class f extends o.Component{render(){return e(o).createElement(p,null)}}var m=f}),i("4J3Tm",function(r,n){t(r.exports,"default",function(){return y});var o=a("eDhw6"),i=a("gMFKU"),s=a("1hZle"),l=a("asANu");let c=e=>e,u,d,p;var f=new URL(a("kR2dK")).href,m=new URL(a("8Fui5")).href,h=new URL(a("kQadI")).href,g=i.default.section(u||(u=c`
    margin-top:20vh;
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${0} {
    padding-left:60px;
    }
    @media ${0} {
    padding-left:60px;
    }
    @media ${0} {
    padding-left:60px;
    }
    @media ${0} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${0} {
    padding-left:120px;
    margin-bottom:120px;
    }
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop),b=i.default.div(d||(d=c`
  font-family: 'AvenirHeavy';
  color: var(--ink);
  @media ${0} {
    font-size: 40px;
  }
  @media ${0} {
    font-size: 50px;
  }
  @media ${0} {
    font-size: 60px;
  }
  @media ${0} {
    font-size: 90px;
  }
  @media ${0} {
    font-size: 95px;
  }
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop),v=i.default.div(p||(p=c`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  @media ${0} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${0} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${0} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${0} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${0} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop);class x extends o.Component{render(){return e(o).createElement(g,null,e(o).createElement(b,null,"CONTACT"),e(o).createElement(v,null,e(o).createElement(s.default,{imgURL:f,alternate:"Github",redirectURL:"https://github.com/Royverse"}),e(o).createElement(s.default,{imgURL:m,alternate:"Mail",redirectURL:"mailto:roymootsana@gmail.com"}),e(o).createElement(s.default,{imgURL:h,alternate:"Linkedin",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})))}}var y=x}),i("1hZle",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("eDhw6"),s=a("gMFKU"),l=a("3GRrb"),c=a("asANu"),u=s.default.img(o||(o=(e=>e)`
/* border: 1px solid black; */
  @media ${0} {
    height: 65px;
    width: 65px;
  }
  @media ${0} {
    height: 80px;
    width: 80px;
  }
  @media ${0} {
    height: 100px;
    width: 100px;
  }
  @media ${0} {
    height: 130px;
    width: 130px;
  }
`),c.default.mobileS,c.default.mobileM,c.default.mobileL,c.default.tablet);class d extends e(i).Component{render(){var t=this.props,r=t.imgURL,n=t.alternate,o=t.redirectURL;return e(i).createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(u,{src:r,alt:n}))}}d.propTypes={imgURL:e(l).oneOfType([e(l).string,e(l).object]).isRequired,alternate:e(l).string.isRequired,redirectURL:e(l).string.isRequired};var p=d})}();
//# sourceMappingURL=LegacyPortfolio.9f52d872.js.map
