function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function n(e){if(e=i.i?.[e]||e,!r)try{throw Error()}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(!t)return o+e;r=t[0]}return new URL(o+e,r).toString()}var r,o="./",i=("u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{}).parcelRequiref040,a=i.register;a("j2WrI",function(n,r){let o;Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",function(){return x});var a=i("fVvdO"),l=i("j6iYM"),s=i("kiPIo"),c=i("i3v6U"),u=i("7lp8i"),d=i("6di5A"),p=i("fk7eW"),f=i("dHIOg"),m=i("euXay"),h=i("19Ypr"),g=i("4Yzid");let b=(0,s.createGlobalStyle)(o||(o=(e=>e)`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`));class v extends a.Component{componentDidMount(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}render(){return e(a).createElement(e(a).Fragment,null,e(a).createElement(e(l),{query:"(min-width: 1225px)"},e(a).createElement(c.default,null),e(a).createElement(u.default,null),e(a).createElement(d.default,null),e(a).createElement(p.default,null)),e(a).createElement(e(l),{query:"(max-width: 1224px)"},e(a).createElement(f.default,null),e(a).createElement(m.default,null),e(a).createElement(h.default,null),e(a).createElement(g.default,null)),e(a).createElement(b,null))}}var x=v}),a("j6iYM",function(e,t){"u">typeof self?self:e.exports,e.exports=function(e){var t=[function(e,t,n){var r=n(1);e.exports=n(8)(r.isElement,!0)},function(e,t,n){e.exports=n(7)},function(e,t,n){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){function r(e){return"-"+e.toLowerCase()}var o=/[A-Z]/g,i=/^ms-/,a={};t.a=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(o,r);return a[e]=i.test(t)?"-"+t:t}},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})}return e}var o=n(0),i=n.n(o),a=i.a.oneOfType([i.a.string,i.a.number]),l={orientation:i.a.oneOf(["portrait","landscape"]),scan:i.a.oneOf(["progressive","interlace"]),aspectRatio:i.a.string,deviceAspectRatio:i.a.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:i.a.bool,colorIndex:i.a.bool,monochrome:i.a.bool,resolution:a},s=r({minAspectRatio:i.a.string,maxAspectRatio:i.a.string,minDeviceAspectRatio:i.a.string,maxDeviceAspectRatio:i.a.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:i.a.number,maxColor:i.a.number,minColorIndex:i.a.number,maxColorIndex:i.a.number,minMonochrome:i.a.number,maxMonochrome:i.a.number,minResolution:a,maxResolution:a},l),c={all:i.a.bool,grid:i.a.bool,aural:i.a.bool,braille:i.a.bool,handheld:i.a.bool,print:i.a.bool,projection:i.a.bool,screen:i.a.bool,tty:i.a.bool,tv:i.a.bool,embossed:i.a.bool},u=r({},c,s);l.type=Object.keys(c),t.a={all:u,types:c,matchers:l,features:s}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y});var s=n(6),c=n.n(s),u=n(0),d=n.n(u),p=n(11),f=n.n(p),m=n(3),h=n(4),g=n(13);n.d(t,"toQuery",function(){return g.a});var b=Object.keys({component:d.a.node,query:d.a.string,values:d.a.shape(h.a.matchers),children:d.a.oneOfType([d.a.node,d.a.func]),onChange:d.a.func}),v=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},e);return t.forEach(function(e){return delete n[e]}),n},x=function(e){var t=e.values;if(!t)return null;var n=Object.keys(t);return 0===n.length?null:n.reduce(function(e,n){return e[Object(m.a)(n)]=t[n],e},{})},y=function(e){var t;function n(){var e,t,a;if(!(this instanceof n))throw TypeError("Cannot call a class as a function");for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return t=(a=(e=o(n)).call.apply(e,[this].concat(c)))&&("object"===r(a)||"function"==typeof a)?a:i(this),l(i(t),"state",{matches:!1,mq:null,query:"",values:null}),l(i(t),"componentDidMount",function(){t.state.mq.addListener(t.updateMatches),t.updateMatches()}),l(i(t),"componentDidUpdate",function(e,n){t.state.mq!==n.mq&&(t.cleanupMediaQuery(n.mq),t.state.mq.addListener(t.updateMatches)),t.props.onChange&&n.matches!==t.state.matches&&t.props.onChange(t.state.matches)}),l(i(t),"componentWillUnmount",function(){t._unmounted=!0,t.cleanupMediaQuery(t.state.mq)}),l(i(t),"cleanupMediaQuery",function(e){e&&(e.removeListener(t.updateMatches),e.dispose())}),l(i(t),"updateMatches",function(){t._unmounted||t.state.mq.matches!==t.state.matches&&t.setState({matches:t.state.mq.matches})}),l(i(t),"render",function(){return"function"==typeof t.props.children?t.props.children(t.state.matches):t.state.matches?t.props.children:null}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(n,e),t=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.query||Object(g.a)(v(e,b));if(!n)throw Error("Invalid or missing MediaQuery!");var r=x(e);if(n===t.query&&r===t.values)return null;var o=f()(n,r||{},!!r);return{matches:o.matches,mq:o,query:n,values:r}}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(n,t),n}(c.a.Component);l(y,"displayName","MediaQuery"),l(y,"defaultProps",{values:null})},function(t,n){t.exports=e},function(e,t,n){!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:var n=e.type;switch(n){case d:case p:case a:case s:case l:case m:return n;default:var r=n&&n.$$typeof;switch(r){case u:case f:case c:return r;default:return t}}case g:case h:case i:return t}}}function n(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"u">typeof console&&console.warn(i);try{throw Error(i)}catch(e){}},v=function(e,t){if(void 0===t)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];b.apply(void 0,[t].concat(r))}},x=!1;t.typeOf=e,t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=f,t.Fragment=a,t.Lazy=g,t.Memo=h,t.Portal=i,t.Profiler=s,t.StrictMode=l,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===s||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(t){return x||(x=!0,v(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(t)||e(t)===d},t.isConcurrentMode=n,t.isContextConsumer=function(t){return e(t)===u},t.isContextProvider=function(t){return e(t)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(t){return e(t)===f},t.isFragment=function(t){return e(t)===a},t.isLazy=function(t){return e(t)===g},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===i},t.isProfiler=function(t){return e(t)===s},t.isStrictMode=function(t){return e(t)===l},t.isSuspense=function(t){return e(t)===m}}()},function(e,t,n){function r(){return null}var o=n(1),i=n(9),a=n(2),l=n(10),s=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};c=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){function n(e){this.message=e,this.stack=""}function u(e){function r(r,l,s,u,d,p,f){if(u=u||h,p=p||s,f!==a){if(t){var m=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("u">typeof console){var g=u+":"+s;!o[g]&&i<3&&(c("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[g]=!0,i++)}}return null==l[s]?r?new n(null===l[s]?"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(l,s,u,d,p)}var o={},i=0,l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function d(e){return u(function(t,r,o,i,a,l){var s=t[r];return p(s)!==e?new n("Invalid "+i+" `"+a+"` of type `"+f(s)+"` supplied to `"+o+"`, expected `"+e+"`."):null})}function p(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function f(e){if(null==e)return""+e;var t=p(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var m="function"==typeof Symbol&&Symbol.iterator,h="<<anonymous>>",g={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:u(r),arrayOf:function(e){return u(function(t,r,o,i,l){if("function"!=typeof e)return new n("Property `"+l+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new n("Invalid "+i+" `"+l+"` of type `"+p(s)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<s.length;c++){var u=e(s,c,o,i,l+"["+c+"]",a);if(u instanceof Error)return u}return null})},element:u(function(t,r,o,i,a){var l=t[r];return e(l)?null:new n("Invalid "+i+" `"+a+"` of type `"+p(l)+"` supplied to `"+o+"`, expected a single ReactElement.")}),elementType:u(function(e,t,r,i,a){var l=e[t];return o.isValidElementType(l)?null:new n("Invalid "+i+" `"+a+"` of type `"+p(l)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(t,r,o,i,a){if(!(t[r]instanceof e)){var l,s=e.name||h;return new n("Invalid "+i+" `"+a+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:h)+"` supplied to `"+o+"`, expected instance of `"+s+"`.")}return null})},node:u(function(t,r,o,i,a){return!function t(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(t);if(null===n||e(n))return!0;var r=function(e){var t=e&&(m&&e[m]||e["@@iterator"]);if("function"==typeof t)return t}(n);if(!r)return!1;var o,i=r.call(n);if(r!==n.entries){for(;!(o=i.next()).done;)if(!t(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!t(a[1]))return!1}return!0;default:return!1}}(t[r])?new n("Invalid "+i+" `"+a+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(e){return u(function(t,r,o,i,l){if("function"!=typeof e)return new n("Property `"+l+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var c=t[r],u=p(c);if("object"!==u)return new n("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var d in c)if(s(c,d)){var f=e(c,d,o,i,l+"."+d,a);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?u(function(t,r,o,i,a){for(var l,s=t[r],c=0;c<e.length;c++)if(s===(l=e[c])?0!==s||1/s==1/l:s!=s&&l!=l)return null;var u=JSON.stringify(e,function(e,t){return"symbol"===f(t)?String(t):t});return new n("Invalid "+i+" `"+a+"` of value `"+String(s)+"` supplied to `"+o+"`, expected one of "+u+".")}):(c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=f(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(o)+" at index "+t+"."),r}return u(function(t,r,o,i,l){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,r,o,i,l,a))return null;return new n("Invalid "+i+" `"+l+"` supplied to `"+o+"`.")})},shape:function(e){return u(function(t,r,o,i,l){var s=t[r],c=p(s);if("object"!==c)return new n("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var d=e[u];if(d){var f=d(s,u,o,i,l+"."+u,a);if(f)return f}}return null})},exact:function(e){return u(function(t,r,o,l,s){var c=t[r],u=p(c);if("object"!==u)return new n("Invalid "+l+" `"+s+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");var d=i({},t[r],e);for(var f in d){var m=e[f];if(!m)return new n("Invalid "+l+" `"+s+"` key `"+f+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=m(c,f,o,l,s+"."+f,a);if(h)return h}return null})}};return n.prototype=Error.prototype,g.checkPropTypes=l,g.resetWarningCache=l.resetWarningCache,g.PropTypes=g,g}},function(e,t,n){var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?function(e,t){for(var n,a,l=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var u=0;u<a.length;u++)i.call(n,a[u])&&(l[a[u]]=n[a[u]])}}return l}:Object.assign},function(e,t,n){function r(e,t,n,r,s){for(var c in e)if(l(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((r||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw d.name="Invariant Violation",d}u=e[c](t,c,r,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||o((r||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in a)){a[u.message]=!0;var p=s?s():"";o("Failed "+n+" type: "+u.message+(null!=p?p:""))}}}var o=function(){},i=n(2),a={},l=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},r.resetWarningCache=function(){a={}},e.exports=r},function(e,t,n){function r(e,t,n){function r(e){a.matches=e.matches,a.media=e.media}var a=this;if(i&&!n){var l=i.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(r)}else this.matches=o(e,t),this.media=e;this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(r)}}var o=n(12).match,i="u">typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new r(e,t,n)}},function(e,t,n){function r(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(l),n=t[1],r=t[2],o=t[3]||"",i={};return i.inverse=!!n&&"not"===n.toLowerCase(),i.type=r?r.toLowerCase():"all",i.expressions=(o=o.match(/\([^\)]+\)/g)||[]).map(function(e){var t=e.match(s),n=t[1].toLowerCase().match(c);return{modifier:n[1],feature:n[2],value:t[2]}}),i})}function o(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function i(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function a(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return r(e).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var l=e.expressions.every(function(e){var n=e.feature,r=e.modifier,l=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===l.toLowerCase();case"width":case"height":case"device-width":case"device-height":l=a(l),s=a(s);break;case"resolution":l=i(l),s=i(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":l=o(l),s=o(s);break;case"grid":case"color":case"color-index":case"monochrome":l=parseInt(l,10)||1,s=parseInt(s,10)||0}switch(r){case"min":return s>=l;case"max":return s<=l;default:return s===l}});return l&&!n||!l&&n})},t.parse=r;var l=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,c=/^(?:(min|max)-)?(.+)/,u=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,n){var r=n(3),o=n(4);t.a=function(e){var t=[];return Object.keys(o.a.all).forEach(function(n){var o,i,a,l=e[n];null!=l&&t.push((i=l,a=Object(r.a)(n),"number"==typeof i&&(i="".concat(i,"px")),!0===i?n:!1===i?(o=n,"not ".concat(o)):"(".concat(a,": ").concat(i,")")))}),t.join(" and ")}}];function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}(i("fVvdO"))}),a("i3v6U",function(n,r){t(n.exports,"default",function(){return c});var o=i("fVvdO"),a=i("3NFK4"),l=i("85vAF");class s extends o.Component{render(){return e(o).createElement(e(o).Fragment,null,e(o).createElement(a.default,null),e(o).createElement(l.default,null))}}var c=s}),a("3NFK4",function(n,r){t(n.exports,"default",function(){return b});var o=i("fVvdO"),a=i("kiPIo"),l=i("7BPrv"),s=i("aCGFr");let c=e=>e,u,d,p,f=a.default.div(u||(u=c`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    /* Keeping the background out assuming your main layout handles the dark theme */
`)),m=(0,a.keyframes)(d||(d=c`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`)),h=a.default.div(p||(p=c`
  animation: ${0} 2s infinite;
  margin-top: 30px;
`),m);class g extends o.Component{render(){return e(o).createElement(f,null,e(o).createElement(l.default,{text:"Roy Mootsana",fontFam:"'Syne', sans-serif",timeDelay:500}),e(o).createElement("div",{style:{marginTop:"10px"}}),e(o).createElement(s.default,{text:"Engineering and Design",fontFam:"'DM Mono', monospace",timeDelay:1300}),e(o).createElement(h,null,e(o).createElement(s.default,{text:"↓",fontFam:"'DM Mono', monospace",timeDelay:1500})))}}var b=g}),a("7BPrv",function(n,r){t(n.exports,"default",function(){return b});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT"),s=i("hdKA9");let c=e=>e,u,d,p,f=a.default.div(u||(u=c`
position: relative;
/* border:1px solid black; */
z-index: 1;
width:100%;
overflow: hidden;
`)),m=e=>(0,a.keyframes)(d||(d=c`
0%{
    transform: translateY(${0}px);
}
100%{
    transform: translateY(0px);
}
`),e),h=a.default.div(p||(p=c`
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
`),e=>e.fontFam,s.default.tablet,e=>e.reveal?m(100):"none",140,s.default.laptop,e=>e.reveal?m(140):"none",196,s.default.laptopL,e=>e.reveal?m(150):"none",210,s.default.desktop,e=>e.reveal?m(200):"none",280);class g extends o.Component{componentDidMount(){let{timeDelay:e}=this.props;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){let{text:t,fontFam:n}=this.props,{reveal:r}=this.state;return e(o).createElement(f,null,e(o).createElement(h,{fontFam:n,reveal:r},t))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(l).string.isRequired,fontFam:e(l).string,timeDelay:e(l).number.isRequired},g.defaultProps={fontFam:"'Syne', sans-serif"};var b=g}),a("lTQkT",function(e,t){e.exports=i("7eg6b")()}),a("7eg6b",function(e,t){var n=i("7V5T0");function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}}),a("7V5T0",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),a("hdKA9",function(e,n){t(e.exports,"default",function(){return o});let r="2560px";var o={mobileS:"(min-width: 320px)",mobileM:"(min-width: 375px)",mobileL:"(min-width: 425px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",laptopL:"(min-width: 1440px)",desktop:`(min-width: ${r})`,desktopL:`(min-width: ${r})`}}),a("aCGFr",function(n,r){t(n.exports,"default",function(){return b});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT"),s=i("hdKA9");let c=e=>e,u,d,p,f=a.default.div(u||(u=c`
position: relative;
/* border:1px solid black; */
z-index: 1;
overflow: hidden;
`)),m=e=>(0,a.keyframes)(d||(d=c`
0%{
    transform: translateY(${0}px);
}
100%{
    transform: translateY(0px);
}
`),e),h=a.default.div(p||(p=c`
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
`),e=>e.fontFam,e=>e.reveal?m(e.fontSizeInPx):"none",e=>1.4*e.fontSizeInPx,s.default.tablet,e=>e.reveal?m(28):"none",28*1.4,s.default.laptop,e=>e.reveal?m(40):"none",56,s.default.laptopL,e=>e.reveal?m(50):"none",70,s.default.desktop,e=>e.reveal?m(60):"none",84);class g extends o.Component{componentDidMount(){let{timeDelay:e}=this.props;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){let{text:t,fontFam:n}=this.props,{reveal:r}=this.state;return e(o).createElement(f,null,e(o).createElement(h,{fontFam:n,reveal:r},t))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(l).string.isRequired,fontFam:e(l).string,timeDelay:e(l).number.isRequired},g.defaultProps={fontFam:"'Syne', sans-serif"};var b=g}),a("85vAF",function(n,r){t(n.exports,"default",function(){return g});var o=i("fVvdO"),a=i("kiPIo"),l=i("hdKA9");let s=e=>e,c,u,d,p=a.default.section(c||(c=s`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),f=a.default.div.attrs({style:({scrollPercent:e})=>({transform:`translateX(${5.5*e}%)`})})(u||(u=s`
  transition: transform 0.5s ease-out;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
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
`),l.default.laptop,l.default.laptopL,l.default.desktop),m=a.default.div(d||(d=s`
  align-items: center;
  font-family: 'Epilogue', sans-serif;
  font-weight: 300;
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
`),l.default.laptop,l.default.laptopL,l.default.desktop);class h extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){let{body:t,documentElement:n}=window.document,r=Math.max(t.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,o=150*n.clientHeight/n.scrollHeight;r>=0&&r<=o&&this.setState({scrollPercent:r})}render(){let{scrollPercent:t}=this.state;return e(o).createElement(p,null,e(o).createElement(f,{scrollPercent:t},"ABOUT ME"),e(o).createElement(m,null,"Full-stack software engineer in Cape Town, currently building products for IMD Business School. I came to engineering through design systems, and I build web products end to end in TypeScript and Python, from the interface down to the API and its security."))}constructor(e){super(e),this.state={scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var g=h}),a("7lp8i",function(n,r){t(n.exports,"default",function(){return w});var o=i("6dD4l"),a=i("fVvdO"),l=i("kiPIo"),s=i("i0ijN"),c=i("ktn80"),u=i("4V17F");let d=e=>e,p,f,m,h,g=l.default.div(p||(p=d`
  display: flex;
  flex-flow: row nowrap;
`)),b=l.default.button(f||(f=d`
  background: transparent;
  color: var(--accent);
  border: none;
  padding: 10px 0;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
`)),v=l.default.div(m||(m=d`
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
`)),x=l.default.div(h||(h=d`
background-color: var(--bg);
color: var(--ink);
border: 1px solid var(--border);
padding: 28px 32px;
border-radius: 12px;
width: 80%;
max-width: 880px;
max-height: 85vh;
overflow-y: auto;
font-family: 'Epilogue', sans-serif;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 20px 0 8px;
}

h3:first-child {
  margin-top: 0;
}

p {
  font-size: 14px;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin: 0 0 15px 20px;
  padding: 0;
}

li {
  font-size: 14px;
  line-height: 1.55;
  margin-bottom: 6px;
}

blockquote {
  margin: 20px 0;
  padding: 14px 18px;
  border-left: 3px solid var(--accent);
  font-size: 15px;
  font-style: italic;
  line-height: 1.55;
}

cite {
  display: block;
  margin-top: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
}

button {
  background-color: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
`));class y extends a.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({vh:Math.round(window.document.documentElement.clientHeight*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){let{body:t,documentElement:n}=window.document,{vh:r,slideNumber:o}=this.state,i=Math.max(t.scrollTop,n.scrollTop);i>this.lastScrollTop?this.scrollDirectionDown=!0:this.scrollDirectionDown=!1,this.lastScrollTop=i,Math.floor(i/r)!==o&&o<this.workDetails.length-1?this.setState({slideNumber:Math.floor(i/r)}):o===this.workDetails.length-1&&Math.floor(i/r)<o&&this.setState({slideNumber:Math.floor(i/r)})}changeTextContentBasedOnScroll(){let{slideNumber:t}=this.state;if(t>=this.workDetails.length)return null;let n=this.workDetails[t],r=null;return n.projectDesc&&(r=e(a).createElement("div",null,e(a).createElement("p",null,n.projectDesc),"UI Designer"!==n.projectType&&e(a).createElement(b,{type:"button",onClick:()=>this.handleButtonClick(t)},"More info →"))),e(a).createElement(s.default,{number:n.number,projectName:n.projectName,projectDesc:r,projectType:n.projectType,roles:n.roles,refreshToggle:!0})}render(){let{showDialog:t,dialogProject:n,slideNumber:r}=this.state,o=t=>e(a).createElement("ul",null,t.split("\n").map(t=>e(a).createElement("li",{key:t},t)));return e(a).createElement(g,null,this.changeTextContentBasedOnScroll(),1===r&&e(a).createElement(u.default,null),e(a).createElement(c.default,{pageSplitTimes:this.pageSplitTimes}),t&&e(a).createElement(v,{onClick:e=>e.target===e.currentTarget&&this.handleCloseDialog()},e(a).createElement(x,{role:"dialog","aria-modal":"true","aria-label":n.projectName},e(a).createElement("h3",null,"The problem"),e(a).createElement("p",null,n.problem),e(a).createElement("h3",null,"What wasn’t working"),o(n.indicators),e(a).createElement("h3",null,"What I did"),o(n.solution),n.QA&&e(a).createElement(e(a).Fragment,null,e(a).createElement("h3",null,"Quality checks"),o(n.QA)),n.quote&&e(a).createElement("blockquote",null,"“",n.quote,"”",e(a).createElement("cite",null,"— ",n.quoteAuthor)),e(a).createElement(b,{onClick:this.handleCloseDialog},"Close"))))}constructor(e){super(e),(0,o._)(this,"handleButtonClick",e=>{this.setState({showDialog:!0,dialogProject:this.workDetails[e]})}),(0,o._)(this,"handleCloseDialog",()=>{this.setState({showDialog:!1,dialogProject:null})}),this.state={vh:0,slideNumber:0,showDialog:!1,dialogProject:null},this.pageSplitTimes=1.4,this.lastScrollTop=0,this.scrollDirectionDown=!0,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"IMD Business School",projectDesc:"Internal products for executive education, built and run end to end: assessment platforms, leadership diagnostics, a live multiplayer simulation and data tools.",projectType:"FULL-STACK",roles:["Learning Innovation & STS Developer","2023 – present"],problem:"IMD runs executive programmes for multinational companies and needed products it could own: assessments, diagnostics, simulations and research tooling, several of them replacing tools the teams had outgrown.",indicators:"A Qualtrics 360 tool that could not run repeat feedback rounds across a programme.\nA Power Apps front end the World Competitiveness Center had outgrown.\nLive sessions where one admin edit or a stalled team affects a room of executives.\nIdentity and secrets spread across many repositories.",solution:"Started in QA in July 2023; Learning Innovation Developer since February 2024 and Strategic Talent Solutions Developer since October 2025.\nPart of the team that rewrote Leader’s Question Mix, then built LQM 360 on top.\nBuilt the Strategic Execution Simulation from an existing paper-based board simulation, with live-session safeguards.\nBuilt the reviewer journey on the Accelerator platform (Angular, Flask).\nBuilt a Next.js and FastAPI replacement for the World Competitiveness Center’s Power Apps tool.\nAdded tenant configuration and data cleaning to a multi-tenant talent dashboard.\nAudited all 52 of the organisation’s code repositories for exposed secrets and security risks, and wrote and presented the remediation plan.",QA:""},{number:"02",projectName:"BluePrint",projectDesc:"BluePrint 3.0, the design-system pilot for Standard Bank's Corporate & Investment Banking division: reusable Angular components, documented in Storybook.",projectType:"DESIGN SYSTEM",roles:["User Interface Designer","2022 – 2023"],problem:"Standard Bank's Corporate & Investment Banking division was introducing a new visual language, BluePrint 3.0, and its product teams needed components they could adopt instead of each building their own.",indicators:"Different teams designing and building the same components separately.\nAn inconsistent look and behaviour from one product to the next.\nNo single, documented home for the components.",solution:"Built and maintained reusable Angular library components for BluePrint 3.0, placed at Standard Bank by iqbusiness.\nTurned Figma designs into accessible, documented Storybook components.\nMoved button variants from appearance to semantic intent, and made components work at narrow widths.\nKept the Storybook docs, accessibility add-on and changelog current for product teams.",QA:"Storybook: checked controls, responsiveness and visual alignment.\nReviews: ran usability sessions, reviewed naming and formatting, and did peer code reviews.\nChromatic: automated visual testing as part of continuous integration.\nNexus: tested published package versions before teams upgraded.\nApplications: checked components inside real page templates.\nDevices: tested across browsers, platforms and screen sizes.",quote:"Roy is a rare find, and has shown great maturity and skill, far beyond expectation.",quoteAuthor:"Mel M. Saayman, Design Lead, Standard Bank"},{number:"03",projectName:"BluePrint Apps",projectDesc:"Angular apps built on the BluePrint components, so the bank's products shared one look and behaviour.",projectType:"ANGULAR APPS",roles:["User Interface Designer","2022 – 2023"],problem:"Product teams needed applications that followed BluePrint, so users got the same experience from one app to the next.",indicators:"Each app had drifted into its own design language.\nComponents and patterns were hard to keep consistent.\nMoving between apps felt like moving between different products.",solution:"Built Angular applications on the BluePrint component library.\nUsed the same components, patterns and interactions across every app.\nRan usability tests to check the experience held up.",QA:""},{number:"04",projectName:"Admin Portal",projectDesc:"An admin portal for a nail boutique: stock, client records and reports in one place.",projectType:"WEB APP",roles:["Lead UX/UI Developer","2021"],problem:"The boutique managed its stock and client details by hand and couldn't get reliable reports on the business.",indicators:"Stock counted by hand, which led to errors.\nClient details not kept in one system.\nReports that were slow to produce and hard to trust.",solution:"Led a team of four that designed and built the boutique's systems.\nBuilt the admin portal: stock control, client records and report generation.",QA:""},{number:"05",projectName:"Nail Boutique",projectDesc:"The boutique's website: services, prices and online booking, plus a designer where customers create their own nail art.",projectType:"WEBSITE",roles:["Lead UX/UI Developer","2021"],problem:"The boutique had little online presence and no way for customers to plan a design or book online.",indicators:"Hard to find online.\nNo way to design nail art or book an appointment online.\nServices, prices and contact details weren't easy to see.",solution:"Built a responsive website in HTML, CSS and JavaScript with services, prices and contact details.\nBuilt a nail-art designer so customers could try designs before booking.\nAdded online booking for appointments.",QA:""},{number:"06",projectName:"Readpoint",projectDesc:"An online bookshop with a MongoDB database and payments, where customers browse and buy books.",projectType:"WEB APP",roles:["Full-Stack Developer","Freelance"],problem:"A book seller wanted to sell online and make browsing and buying books easy.",indicators:"No way to reach customers beyond the shop.\nNo convenient, secure way to buy books online.\nStock tracked by hand, with mistakes.",solution:"Built the shop on Node.js, Express and MongoDB, with browsing and checkout.\nIntegrated a secure payment system.\nBuilt stock management that updates as books sell.",QA:""},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""],problem:"",indicators:"",solution:"",QA:""}]}}var w=y}),a("6dD4l",function(e,n){t(e.exports,"_",function(){return r});function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}),a("i0ijN",function(n,r){t(n.exports,"default",function(){return M});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT"),s=i("hdKA9");let c=e=>e,u,d,p,f,m,h,g,b,v,x,y,w,E=a.default.section(u||(u=c`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`)),k=a.default.div(d||(d=c`
  font-family: 'Syne', sans-serif;
  font-weight: 600;
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),S=a.default.div(p||(p=c`
  padding-top:2%;
  line-height: 1.35;
  font-family: 'Epilogue', sans-serif;
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),T=a.default.div(f||(f=c`
  padding-top:5%;
  font-family: 'DM Mono', monospace;
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),P=a.default.div(m||(m=c`
  font-family: 'DM Mono', monospace;
  font-weight: 500;
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),j=a.default.div(h||(h=c`
  font-family: 'DM Mono', monospace;
  font-weight: 500;
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
  padding-bottom: 96px; /* clears the round menu button in the corner */
`),s.default.laptop,s.default.laptopL,s.default.desktop),R=a.default.div(g||(g=c`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
`)),O=a.default.div(b||(b=c`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`)),H=a.default.span(x||(x=c`
`)),$=a.default.span(y||(y=c`
display:${0};
color: var(--ink);
text-shadow: var(--aura-glow);
letter-spacing: 0.01em;
font-weight: inherit;
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
`),e=>e.inline?"inline-block":"block",()=>(0,a.keyframes)(v||(v=c`
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
`))),L=a.default.span(w||(w=c`

`));class D extends o.Component{componentWillReceiveProps(e){this.refresh(e)}refresh(e){let{refreshToggle:t}=e;t&&(H=L,this.setState({refreshBlock:!0},()=>{H=$,this.setState({refreshBlock:!1})}))}render(){let{number:t,projectName:n,projectDesc:r,roles:i,projectType:a,refreshToggle:l}=this.props;return e(o).createElement(E,null,e(o).createElement(P,null,e(o).createElement(H,{refreshToggle:l,inline:!0},t)),e(o).createElement(O,null,e(o).createElement(R,null,e(o).createElement(k,null,e(o).createElement(H,{refreshToggle:l,inline:!0},n)),e(o).createElement(T,null,e(o).createElement(H,{refreshToggle:l,inline:!0},i.map((t,n,r)=>n===r.length-1?e(o).createElement("span",{key:t},t):e(o).createElement("span",{key:t},t,"  •  ")))),e(o).createElement(S,null,e(o).createElement(H,{refreshToggle:l,inline:!1},r)))),e(o).createElement(j,null,e(o).createElement(H,{refreshToggle:l,inline:!0},a)))}constructor(e){super(e),this.state={refreshBlock:!1},this.refresh=this.refresh.bind(this)}}D.propTypes={number:e(l).string.isRequired,projectName:e(l).string.isRequired,projectDesc:e(l).node,projectType:e(l).string.isRequired,roles:e(l).array.isRequired,refreshToggle:e(l).bool.isRequired},D.defaultProps={projectDesc:null};var M=D}),a("ktn80",function(n,r){t(n.exports,"default",function(){return x});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT"),s=i("3DlEQ"),c=i("5MHDH"),u=i("exnps"),d=i("a1Il4"),p=i("6DPvU");let f=e=>e,m,h,g=a.default.div(m||(m=f`
  margin-left: 50%;
  width: 50%;
  height: 890vh;
  display: flex;
  flex-flow: column nowrap;
`)),b=a.default.div(h||(h=f`
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`));class v extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){let{body:e,documentElement:t}=window.document,n=Math.max(e.scrollTop,t.scrollTop)/(t.scrollHeight-t.clientHeight)*100,r=100*t.clientHeight/t.scrollHeight,o=1180*t.clientHeight/t.scrollHeight;n>=r&&n<=o&&this.setState({scrollPercent:n})}render(){let{scrollPercent:t,scrollHeight:n,screenHeight:r}=this.state,{pageSplitTimes:i}=this.props,a=100*i;return e(o).createElement(g,null,e(o).createElement(b,{height:a}),e(o).createElement(b,{height:a},e(o).createElement(s.default,{boxHeight:a,index:2,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(b,{height:a},e(o).createElement(c.default,{boxHeight:a,index:3,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(b,{height:a},e(o).createElement(u.default,{boxHeight:a,index:4,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(b,{height:a},e(o).createElement(d.default,{boxHeight:a,index:5,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(b,{height:a},e(o).createElement(p.default,{boxHeight:a,index:6,scrollPercent:t,screenHeight:r,scrollHeight:n})))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}v.propTypes={pageSplitTimes:e(l).number.isRequired};var x=v}),a("3DlEQ",function(n,r){t(n.exports,"default",function(){return x});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p=new URL(i("PcjOA")).href,f=new URL(i("d5XdK")).href,m=new URL(i("iNxcO")).href,h=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 40vh; 
`)),g=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.9)`})})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
right: 2vw;
height: 50vh;
filter: blur(0.6px);
`)),b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${2*e}%) scale(0.9)`})})(d||(d=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
left:0vw;
height: 50vh; 
`));class v extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:m,scroll:t,alt:"voistrapPeople"}),e(o).createElement(g,{src:f,scroll:t,alt:"voistrapMeetings"}),e(o).createElement(h,{src:p,scroll:t,alt:"voistrapHome"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),a("PcjOA",function(e,t){e.exports=n("joNs3")}),a("d5XdK",function(e,t){e.exports=n("6aKJL")}),a("iNxcO",function(e,t){e.exports=n("duC2Y")}),a("5MHDH",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p,f=new URL(i("h837b")).href,m=new URL(i("dStOA")).href,h=new URL(i("2WvUy")).href,g=new URL(i("4J8Uy")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left:0vw;
height: 80vh; 
`)),v=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.9)`})})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-15vh;
right: 2vw;
height: 80vh;
filter: blur(0.2px);
`)),x=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${5*e}%) scale(0.7)`})})(d||(d=s`
transition: transform 0.2s ease-out;
bottom:-30vh;
left:2vw;
position: absolute;
height: 80vh;
filter: blur(0.4px);
`)),y=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${2*e}%) scale(0.6)`})})(p||(p=s`
transition: transform 0.2s ease-out;
bottom:-15vh;
right: 4vw;
position: absolute;
height: 60vh;
filter: blur(0.2px);
`));class w extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(o).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(o).createElement(v,{src:f,scroll:t,alt:"Home"}),e(o).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("h837b",function(e,t){e.exports=n("5916u")}),a("dStOA",function(e,t){e.exports=n("2aPXv")}),a("2WvUy",function(e,t){e.exports=n("2RZmh")}),a("4J8Uy",function(e,t){e.exports=n("9NaXN")}),a("exnps",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p,f=new URL(i("lrR2N")).href,m=new URL(i("eZSsR")).href,h=new URL(i("5YbCJ")).href,g=new URL(i("kt5Yw")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${3*e}%) scale(0.6)`})})(c||(c=s`
transition: transform 0.2s ease-out;
bottom: 10vh;
right: 1vw;
transform-origin: right center;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`)),v=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.7)`})})(u||(u=s`
transition: transform 0.2s ease-out;
bottom: -10vh;
left: -4vw;
position: absolute;
height: 50vh;
filter: blur(0.3px);
`)),x=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%) scale(0.9)`})})(d||(d=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -35vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.1px);
`)),y=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${22*e}%)`})})(p||(p=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left: 0vw;
height: 50vh;
`));class w extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:h,scroll:t,alt:"paths"}),e(o).createElement(v,{src:g,scroll:t,alt:"bigBubble"}),e(o).createElement(x,{src:m,scroll:t,alt:"bubbles"}),e(o).createElement(y,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("lrR2N",function(e,t){e.exports=n("8s74Z")}),a("eZSsR",function(e,t){e.exports=n("bk13F")}),a("5YbCJ",function(e,t){e.exports=n("2XSSs")}),a("kt5Yw",function(e,t){e.exports=n("esKTP")}),a("a1Il4",function(n,r){t(n.exports,"default",function(){return x});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p=new URL(i("iQQdb")).href,f=new URL(i("jssoq")).href,m=new URL(i("8DfAi")).href,h=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.7)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left: -4vw;
height: 50vh;
filter: blur(0.8px);
`)),g=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${12*e}%) scale(0.9)`})})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -50vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.4px);
`)),b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${25*e}%)`})})(d||(d=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 30vh;
left: 0vw;
height: 40vh;
`));class v extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(h,{src:m,scroll:t,alt:"bigBubble"}),e(o).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(o).createElement(b,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),a("iQQdb",function(e,t){e.exports=n("i2xlG")}),a("jssoq",function(e,t){e.exports=n("jpeOG")}),a("8DfAi",function(e,t){e.exports=n("9UUKg")}),a("6DPvU",function(n,r){let o;t(n.exports,"default",function(){return p});var a=i("fVvdO"),l=i("kiPIo"),s=i("lTQkT");let c=new URL(i("6PusX")).href,u=l.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${10*e}%) scale(0.7)`})})(o||(o=(e=>e)`
bottom:-50vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`));class d extends a.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:i}=this.props;return t-=i*(n*r-100)/100*100/o+(r-1),e(a).createElement(e(a).Fragment,null,e(a).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var p=d}),a("6PusX",function(e,t){e.exports=n("eHQ6N")}),a("4V17F",function(n,r){t(n.exports,"default",function(){return k});var o=i("fVvdO"),a=i("kiPIo");let l=e=>e,s,c,u,d,p,f,m,h=[["Strategic Execution Simulation","Next.js · Prisma · PostgreSQL"],["Accelerator assessment platform","Angular · Flask · Azure"],["Leader's Question Mix & LQM 360","Next.js · Azure AD B2C"],["World Competitiveness Center data app","Next.js · FastAPI · MSAL"],["Talent Dashboard","Django REST · Next.js"],["Organisation-wide security audit","52 repositories"]],g=(0,a.keyframes)(s||(s=l`
  from { opacity: 0; transform: translateY(calc(-50% + 16px)); }
  to { opacity: 1; transform: translateY(-50%); }
`)),b=a.default.div(c||(c=l`
  position: fixed;
  top: 50%;
  left: 53%;
  right: 6%;
  transform: translateY(-50%);
  animation: ${0} 0.6s cubic-bezier(0.19, 1, 0.22, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`),g),v=a.default.p(u||(u=l`
  margin: 0 0 18px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`)),x=a.default.ul(d||(d=l`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--ink);
`)),y=a.default.li(p||(p=l`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);
`)),w=a.default.span(f||(f=l`
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: clamp(17px, 1.5vw, 26px);
  color: var(--ink);
`)),E=a.default.span(m||(m=l`
  flex: none;
  font-family: 'DM Mono', monospace;
  font-size: clamp(10px, 0.75vw, 13px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
`));var k=()=>e(o).createElement(b,null,e(o).createElement(v,null,"Selected work at IMD"),e(o).createElement(x,null,h.map(([t,n])=>e(o).createElement(y,{key:t},e(o).createElement(w,null,t),e(o).createElement(E,null,n)))))}),a("6di5A",function(n,r){t(n.exports,"default",function(){return x});var o=i("fVvdO"),a=i("kiPIo"),l=i("15mVL");let s=e=>e,c,u,d,p,f,m=a.default.section(c||(c=s`
  margin-top: 55vh;
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`)),h=a.default.h2(u||(u=s`
  margin: 0 0 56px;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: clamp(64px, 7vw, 140px);
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--ink);
`)),g=a.default.div(d||(d=s`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 48px 56px;

  /* Education lines are long; give them two columns so they don't wrap three times. */
  & > div:last-child {
    grid-column: span 2;
  }
`)),b=a.default.h3(p||(p=s`
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: clamp(11px, 0.8vw, 15px);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`)),v=a.default.ul(f||(f=s`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Epilogue', sans-serif;
  font-weight: 300;
  font-size: clamp(16px, 1.25vw, 24px);
  line-height: 1.6;
  color: var(--ink);
`));var x=()=>e(o).createElement(m,null,e(o).createElement(h,null,"SKILLS"),e(o).createElement(g,null,l.default.map(({title:t,items:n})=>e(o).createElement("div",{key:t},e(o).createElement(b,null,t),e(o).createElement(v,null,n.map(t=>e(o).createElement("li",{key:t},t)))))))}),a("15mVL",function(e,n){t(e.exports,"default",function(){return r});var r=[{title:"Front end",items:["TypeScript","JavaScript","React","Next.js","Angular","RxJS","HTML, CSS and SCSS","Tailwind CSS"]},{title:"Back end & data",items:["Python: FastAPI, Flask, Django REST","Node.js and Express","PHP","PostgreSQL","MongoDB","SQL","LLM APIs"]},{title:"Design systems & UX",items:["Component libraries","Storybook","Figma","WCAG accessibility","Responsive design"]},{title:"Cloud & delivery",items:["Azure: Container Apps, AD B2C","Docker","GitHub Actions","SonarQube","Jest","Agile and Scrum"]},{title:"Education & certifications",items:["Bachelor of Computer & Information Sciences, Monash University, 2021","Microsoft Azure AI Fundamentals (AI-900)","PRINCE2 Foundation","UX Design Bootcamp, Interaction Design Foundation"]}]}),a("fk7eW",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("cXjMO"),s=i("hdKA9");let c=e=>e,u,d,p,f,m=new URL(i("gW4ro")).href,h=new URL(i("lG49y")).href,g=new URL(i("yJe3u")).href,b=a.default.section(u||(u=c`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),v=a.default.div.attrs({style:({scrollPercent:e})=>({transform:`translateX(${8*e}%)`})})(d||(d=c`
  transition: transform 0.5s ease-out;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 200px;
  position: absolute;
  color: var(--border);
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),x=a.default.div(p||(p=c`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`)),y=a.default.p(f||(f=c`
  position: absolute;
  left: 20%;
  right: 3%;
  bottom: 14%;
  margin: 0;
  text-align: center; /* centred under the icon row, which spans the same 20%–97% */
  font-family: 'DM Mono', monospace;
  font-size: clamp(14px, 1.1vw, 22px);
  letter-spacing: 0.06em;
  color: var(--ink-muted);

  a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
  }
`));class w extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight)}),this.setState({screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){let{body:t,documentElement:n}=window.document,r=Math.max(t.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,o=1090*n.clientHeight/n.scrollHeight;r>=o&&r<=100&&(r-=o,this.setState({scrollPercent:r}))}render(){let{scrollPercent:t}=this.state;return e(o).createElement(b,null,e(o).createElement(v,{scrollPercent:t},"CONTACT"),e(o).createElement(x,null,e(o).createElement(l.default,{imgURL:m,alternate:"GitHub",redirectURL:"https://github.com/Royverse"}),e(o).createElement(l.default,{imgURL:h,alternate:"Email",redirectURL:"mailto:roymootsana@gmail.com"}),e(o).createElement(l.default,{imgURL:g,alternate:"LinkedIn",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})),e(o).createElement(y,null,e(o).createElement("a",{href:"mailto:roymootsana@gmail.com"},"roymootsana@gmail.com")," ·  Cape Town, South Africa"))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var E=w}),a("cXjMO",function(n,r){let o;t(n.exports,"default",function(){return p});var a=i("fVvdO"),l=i("kiPIo"),s=i("lTQkT"),c=i("hdKA9");let u=l.default.img(o||(o=(e=>e)`
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
`),c.default.laptop,c.default.laptopL,c.default.desktop);class d extends e(a).Component{render(){let{imgURL:t,alternate:n,redirectURL:r}=this.props;return e(a).createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},e(a).createElement(u,{src:t,alt:n}))}}d.propTypes={imgURL:e(s).oneOfType([e(s).string,e(s).object]).isRequired,alternate:e(s).string.isRequired,redirectURL:e(s).string.isRequired};var p=d}),a("gW4ro",function(e,t){e.exports=n("h4Rd8")}),a("lG49y",function(e,t){e.exports=n("93xAr")}),a("yJe3u",function(e,t){e.exports=n("8Wbq8")}),a("dHIOg",function(n,r){t(n.exports,"default",function(){return c});var o=i("fVvdO"),a=i("ljvPE"),l=i("ehjH4");class s extends o.Component{render(){return e(o).createElement(e(o).Fragment,null,e(o).createElement(a.default,null),e(o).createElement(l.default,null))}}var c=s}),a("ljvPE",function(n,r){t(n.exports,"default",function(){return k});var o=i("fVvdO"),a=i("kiPIo"),l=i("3aPnW"),s=i("hdKA9");let c=e=>e,u,d,p,f,m,h,g=a.default.section(u||(u=c`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Changed from 35vh to center it properly */
    width: 100%;
    padding: 0 20px;
    position: relative;
    z-index: 50;
`)),b=a.default.div(d||(d=c`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`)),v=(0,a.default)(l.motion.div)(p||(p=c`
  font-family: 'Syne', sans-serif;
  text-align: center;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 600;
  white-space: nowrap;
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 38px; }
  @media ${0} { font-size: 44px; }
  @media ${0} { font-size: 100px; }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet),x=(0,a.default)(l.motion.div)(f||(f=c`
  font-family: 'DM Mono', monospace;
  text-align: center;
  margin-top: 15px;
  color: var(--ink);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
  @media ${0} { font-size: 12px; }
  @media ${0} { font-size: 14px; }
  @media ${0} { font-size: 16px; }
  @media ${0} { font-size: 24px; }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet),y=(0,a.keyframes)(m||(m=c`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`)),w=a.default.div(h||(h=c`
  animation: ${0} 2s infinite;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`),y);class E extends o.Component{render(){return e(o).createElement(g,null,e(o).createElement(b,null,e(o).createElement(v,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:.5}},"Roy Mootsana")),e(o).createElement(b,null,e(o).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.3}},"Engineering and Design")),e(o).createElement(w,null,e(o).createElement(b,null,e(o).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.5}},"↓"))))}}var k=E}),a("ehjH4",function(n,r){t(n.exports,"default",function(){return h});var o=i("fVvdO"),a=i("kiPIo"),l=i("3aPnW"),s=i("hdKA9");let c=e=>e,u,d,p=a.default.section(u||(u=c`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 50;
`)),f=(0,a.default)(l.motion.span)(d||(d=c`
  font-family: 'Epilogue', sans-serif;
  text-align: center;
  color: var(--ink);
  line-height: 1.5;
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
  @media ${0} { font-size: 22px; }
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 36px; }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop);class m extends o.Component{render(){return e(o).createElement(p,null,e(o).createElement(f,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.2,delay:.5}},"Full-stack software engineer in Cape Town, currently building products for IMD Business School. I came to engineering through design systems, and I build web products end to end in TypeScript and Python, from the interface down to the API and its security."))}}var h=m}),a("euXay",function(n,r){let o;t(n.exports,"default",function(){return f});var a=i("fVvdO"),l=i("kiPIo"),s=i("36Nhk"),c=i("6lNZD"),u=i("ljp0P");let d=l.default.div(o||(o=(e=>e)`
    display: flex;
    flex-flow: row nowrap;
    background: var(--bg);
    min-height: 100vh;
    transition: background 0.5s ease;
`));class p extends a.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll,{passive:!0});let t=e(s)().offset;this.setState({vh:Math.round((window.document.documentElement.clientHeight+t)*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{let{body:e,documentElement:t}=window.document,{vh:n,slideNumber:r}=this.state,o=Math.max(e.scrollTop,t.scrollTop),i=Math.floor(o/n);i!==r&&i>=0&&i<this.workDetails.length&&this.setState({slideNumber:i}),this.lastScrollTop=o,this.ticking=!1}),this.ticking=!0)}render(){let{slideNumber:t}=this.state,n=this.workDetails[t]||this.workDetails[0];return e(a).createElement(d,null,e(a).createElement(c.default,{number:n.number,projectName:n.projectName,projectDesc:n.projectDesc,projectType:n.projectType,roles:n.roles,refreshToggle:!0}),e(a).createElement(u.default,{pageSplitTimes:this.pageSplitTimes}))}constructor(e){super(e),this.state={vh:0,slideNumber:0},this.pageSplitTimes=1.3,this.lastScrollTop=0,this.ticking=!1,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"IMD Business School",projectDesc:"Internal products for executive education, built and run end to end: assessment platforms, leadership diagnostics, a live multiplayer simulation and data tools.",projectType:"FULL-STACK",roles:["Learning Innovation & STS Developer","2023 – present"]},{number:"02",projectName:"BluePrint",projectDesc:"BluePrint 3.0, the design-system pilot for Standard Bank's Corporate & Investment Banking division: reusable Angular components, documented in Storybook.",projectType:"DESIGN SYSTEM",roles:["User Interface Designer","2022 – 2023"]},{number:"03",projectName:"BluePrint Apps",projectDesc:"Angular apps built on the BluePrint components, so the bank's products shared one look and behaviour.",projectType:"ANGULAR APPS",roles:["User Interface Designer","2022 – 2023"]},{number:"04",projectName:"Admin Portal",projectDesc:"An admin portal for a nail boutique: stock, client records and reports in one place.",projectType:"WEB APP",roles:["Lead UX/UI Developer","2021"]},{number:"05",projectName:"Nail Boutique",projectDesc:"The boutique's website: services, prices and online booking, plus a designer where customers create their own nail art.",projectType:"WEBSITE",roles:["Lead UX/UI Developer","2021"]},{number:"06",projectName:"Readpoint",projectDesc:"An online bookshop with a MongoDB database and payments, where customers browse and buy books.",projectType:"WEB APP",roles:["Full-Stack Developer","Freelance"]},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]}]}}var f=p}),a("36Nhk",function(e,t){e.exports,e.exports=function(){var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t(){var e,t=((e=document.createElement("div")).style.cssText="position: fixed; top: 0; height: 100vh; pointer-events: none;",document.documentElement.insertBefore(e,document.documentElement.firstChild),e),n=window.innerHeight,r=t.offsetHeight,o=r-n;return document.documentElement.removeChild(t),{vh:r,windowHeight:n,offset:o,isNeeded:0!==o,value:0}}function n(){}function r(){var e=t();return e.value=e.offset,e}var o=Object.freeze({noop:n,computeDifference:r,redefineVhUnit:function(){var e=t();return e.value=.01*e.windowHeight,e}});function i(e){return"string"==typeof e&&e.length>0}var a=Object.freeze({cssVarName:"vh-offset",redefineVh:!1,method:r,force:!1,bind:!0,updateOnTouch:!1,onUpdate:n}),l=!1,s=[];try{var c=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",c,c),window.removeEventListener("test",c,c)}catch(e){l=!1}function u(e,t){s.push({eventName:e,callback:t}),window.addEventListener(e,t,!!l&&{passive:!0})}function d(){s.forEach(function(e){window.removeEventListener(e.eventName,e.callback)}),s=[]}function p(e,t){document.documentElement.style.setProperty("--"+e,t.value+"px")}function f(t,n){return e({},t,{unbind:d,recompute:n.method})}return function(t){var r=Object.freeze(function(t){if(i(t))return e({},a,{cssVarName:t});if("object"!=typeof t)return a;var r={force:!0===t.force,bind:!1!==t.bind,updateOnTouch:!0===t.updateOnTouch,onUpdate:"function"==typeof t.onUpdate?t.onUpdate:n},l=!0===t.redefineVh;return r.method=o[l?"redefineVhUnit":"computeDifference"],r.cssVarName=i(t.cssVarName)?t.cssVarName:l?"vh":a.cssVarName,r}(t)),l=f(r.method(),r);if(!l.isNeeded&&!r.force||(p(r.cssVarName,l),r.onUpdate(l),!r.bind))return l;function s(){window.requestAnimationFrame(function(){var e=r.method();p(r.cssVarName,e),r.onUpdate(f(e,r))})}return l.unbind(),u("orientationchange",s),r.updateOnTouch&&u("touchmove",s),l}}()}),a("6lNZD",function(n,r){t(n.exports,"default",function(){return O});var o=i("fVvdO"),a=i("kiPIo"),l=i("huZ5a"),s=i("3aPnW"),c=i("lTQkT"),u=i("hdKA9");let d=e=>e,p,f,m,h,g,b,v,x,y=a.default.section(p||(p=d`
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
`)),w=(0,a.default)(s.motion.div)(f||(f=d`
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`)),E=a.default.div(m||(m=d`
  overflow: hidden;
  margin-bottom: 16px;
`)),k=(0,a.default)(s.motion.h2)(h||(h=d`
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0;
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 38px; }
  @media ${0} { font-size: 44px; }
  @media ${0} { font-size: 64px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL,u.default.tablet),S=a.default.div(g||(g=d`
  overflow: hidden;
  margin-bottom: 32px;
`)),T=(0,a.default)(s.motion.div)(b||(b=d`
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0;
`)),P=(0,a.default)(s.motion.p)(v||(v=d`
  font-family: 'Epilogue', sans-serif;
  color: var(--ink);
  line-height: 1.6;
  max-width: 90%;
  @media ${0} { font-size: 16px; }
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL),j=(0,a.default)(s.motion.div)(x||(x=d`
  position: absolute;
  bottom: 40px;
  right: 24px;
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--ink-faint);
  writing-mode: vertical-rl;
  text-transform: uppercase;
`));class R extends o.Component{render(){let{number:t,projectName:n,projectDesc:r,roles:i,projectType:a,refreshToggle:c}=this.props;return n?e(o).createElement(y,null,e(o).createElement(l.AnimatePresence,{mode:"wait"},e(o).createElement(s.motion.div,{key:n,initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.2}},exit:{opacity:0,transition:{duration:.4,ease:"easeIn"}}}},e(o).createElement(w,{variants:{hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}}},"// PROJECT ",t),e(o).createElement(E,null,e(o).createElement(k,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},n)),e(o).createElement(S,null,e(o).createElement(T,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},i.join(" • "))),e(o).createElement(P,{variants:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.9,ease:"easeOut"}}}},r),e(o).createElement(j,{variants:{hidden:{opacity:0,scaleY:0,originY:1},visible:{opacity:1,scaleY:1,transition:{duration:1,ease:"easeOut"}}}},a)))):null}}R.propTypes={number:e(c).string.isRequired,projectName:e(c).string.isRequired,projectDesc:e(c).string.isRequired,projectType:e(c).string.isRequired,roles:e(c).array.isRequired,refreshToggle:e(c).bool.isRequired};var O=R}),a("ljp0P",function(n,r){t(n.exports,"default",function(){return y});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT"),s=i("36Nhk"),c=i("1dJHR"),u=i("bo2dU"),d=i("fujPv"),p=i("2Btni"),f=i("2c3yM");let m=e=>e,h,g,b=a.default.div(h||(h=m`
  width: 100%;
  height: 1080vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
`)),v=a.default.div(g||(g=m`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`));class x extends o.Component{componentDidMount(){let t=e(s)().offset;window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight+t)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{let{body:e,documentElement:t}=window.document,n=Math.max(e.scrollTop,t.scrollTop)/(t.scrollHeight-t.clientHeight)*100,r=100*t.clientHeight/t.scrollHeight,o=1370*t.clientHeight/t.scrollHeight;n>=r&&n<=o&&this.setState({scrollPercent:n}),this.ticking=!1}),this.ticking=!0)}render(){let{scrollPercent:t,scrollHeight:n,screenHeight:r}=this.state,{pageSplitTimes:i}=this.props,a=100*i;return e(o).createElement(b,null,e(o).createElement(v,{height:a}),e(o).createElement(v,{height:a}),e(o).createElement(v,{height:a},e(o).createElement(c.default,{boxHeight:a,index:2,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(v,{height:a},e(o).createElement(u.default,{boxHeight:a,index:3,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(v,{height:a},e(o).createElement(d.default,{boxHeight:a,index:4,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(v,{height:a},e(o).createElement(p.default,{boxHeight:a,index:5,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(v,{height:a},e(o).createElement(f.default,{boxHeight:a,index:6,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(o).createElement(v,{height:a}))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.ticking=!1,this.handleScroll=this.handleScroll.bind(this)}}x.propTypes={pageSplitTimes:e(l).number.isRequired};var y=x}),a("1dJHR",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p,f=new URL(i("PcjOA")).href,m=new URL(i("d5XdK")).href,h=new URL(i("iNxcO")).href,g=new URL(i("cz4mN")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`)),v=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.9)`})})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
right: 2vw;
height:20vh;
filter: blur(0.1px);
`)),x=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${5*e}%) scale(0.7)`})})(d||(d=s`
transition: transform 0.2s ease-out;
bottom: 25vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`)),y=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${2*e}%) scale(0.9)`})})(p||(p=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`));class w extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(y,{src:h,scroll:t,alt:"voistrapPeople"}),e(o).createElement(x,{src:g,scroll:t,alt:"voistrapPhone"}),e(o).createElement(v,{src:m,scroll:t,alt:"voistrapMeetings"}),e(o).createElement(b,{src:f,scroll:t,alt:"voistrapHome"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("cz4mN",function(e,t){e.exports=n("53fAq")}),a("bo2dU",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p,f=new URL(i("h837b")).href,m=new URL(i("dStOA")).href,h=new URL(i("2WvUy")).href,g=new URL(i("4J8Uy")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 30vh; 
`)),v=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.9)`})})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 35vh;
right: 2vw;
height: 20vh;
filter: blur(0.2px);
`)),x=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${5*e}%) scale(0.7)`})})(d||(d=s`
transition: transform 0.2s ease-out;
bottom: 20vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`)),y=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${2*e}%) scale(0.6)`})})(p||(p=s`
transition: transform 0.2s ease-out;
bottom: 35vh;
right: 4vw;
position: absolute;
height: 30vh;
filter: blur(0.2px);
`));class w extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(o).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(o).createElement(v,{src:f,scroll:t,alt:"Home"}),e(o).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("fujPv",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p,f=new URL(i("lrR2N")).href,m=new URL(i("eZSsR")).href,h=new URL(i("5YbCJ")).href,g=new URL(i("kt5Yw")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${35*e}%)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`)),v=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${28*e}%) scale(0.9)`})})(u||(u=s`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`)),x=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%) scale(0.8)`})})(d||(d=s`
position: absolute;
bottom: 60vh;
right: 2vw;
height: 20vh;
filter: blur(0.1px);
`)),y=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.7)`})})(p||(p=s`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`));class w extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:h,scroll:t,alt:"paths"}),e(o).createElement(y,{src:g,scroll:t,alt:"bigBubble"}),e(o).createElement(v,{src:m,scroll:t,alt:"bubbles"}),e(o).createElement(b,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("2Btni",function(n,r){t(n.exports,"default",function(){return x});var o=i("fVvdO"),a=i("kiPIo"),l=i("lTQkT");let s=e=>e,c,u,d,p=new URL(i("iQQdb")).href,f=new URL(i("jssoq")).href,m=new URL(i("8DfAi")).href,h=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${35*e}%)`})})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`)),g=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${28*e}%) scale(0.9)`})})(u||(u=s`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`)),b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.7)`})})(d||(d=s`
bottom: 60vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`));class v extends o.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/i+(r-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:m,scroll:t,alt:"bigBubble"}),e(o).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(o).createElement(h,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),a("2c3yM",function(n,r){let o;t(n.exports,"default",function(){return p});var a=i("fVvdO"),l=i("kiPIo"),s=i("lTQkT");let c=new URL(i("6PusX")).href,u=l.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${10*e}%) scale(0.7)`})})(o||(o=(e=>e)`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`));class d extends a.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:i}=this.props;return t-=i*(n*r-100)/100*100/o+(r-1),e(a).createElement(e(a).Fragment,null,e(a).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var p=d}),a("19Ypr",function(n,r){t(n.exports,"default",function(){return y});var o=i("fVvdO"),a=i("kiPIo"),l=i("hdKA9"),s=i("15mVL");let c=e=>e,u,d,p,f,m,h=a.default.section(u||(u=c`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15vh;
    padding-right: 24px;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${0} {
    padding-left: 60px;
    }
    @media ${0} {
    padding-left: 90px;
    padding-right: 90px;
    }
    @media ${0} {
    padding-left: 120px;
    padding-right: 120px;
    }
`),l.default.mobileS,l.default.tablet,l.default.laptop),g=a.default.h2(d||(d=c`
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
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
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop),b=a.default.div(p||(p=c`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 28px 40px;
  margin-top: 32px;
`)),v=a.default.h3(f||(f=c`
  margin: 0 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`)),x=a.default.ul(m||(m=c`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Epilogue', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink);
  @media ${0} {
    font-size: 18px;
  }
`),l.default.tablet);var y=()=>e(o).createElement(h,null,e(o).createElement(g,null,"SKILLS"),e(o).createElement(b,null,s.default.map(({title:t,items:n})=>e(o).createElement("div",{key:t},e(o).createElement(v,null,t),e(o).createElement(x,null,n.map(t=>e(o).createElement("li",{key:t},t)))))))}),a("4Yzid",function(n,r){t(n.exports,"default",function(){return E});var o=i("fVvdO"),a=i("kiPIo"),l=i("hFsP4"),s=i("hdKA9");let c=e=>e,u,d,p,f,m=new URL(i("gW4ro")).href,h=new URL(i("lG49y")).href,g=new URL(i("yJe3u")).href,b=a.default.section(u||(u=c`
    margin-top:20vh;
    min-height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),v=a.default.div(d||(d=c`
  font-family: 'Syne', sans-serif;
  font-weight: 600;
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),x=a.default.div(p||(p=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),y=a.default.p(f||(f=c`
  margin: 40px 0 0;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  letter-spacing: 0.04em;
  color: var(--ink-muted);

  a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
  }
`));class w extends o.Component{render(){return e(o).createElement(b,null,e(o).createElement(v,null,"CONTACT"),e(o).createElement(x,null,e(o).createElement(l.default,{imgURL:m,alternate:"GitHub",redirectURL:"https://github.com/Royverse"}),e(o).createElement(l.default,{imgURL:h,alternate:"Email",redirectURL:"mailto:roymootsana@gmail.com"}),e(o).createElement(l.default,{imgURL:g,alternate:"LinkedIn",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})),e(o).createElement(y,null,e(o).createElement("a",{href:"mailto:roymootsana@gmail.com"},"roymootsana@gmail.com"),e(o).createElement("br",null),"Cape Town, South Africa"))}}var E=w}),a("hFsP4",function(n,r){let o;t(n.exports,"default",function(){return p});var a=i("fVvdO"),l=i("kiPIo"),s=i("lTQkT"),c=i("hdKA9");let u=l.default.img(o||(o=(e=>e)`
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
`),c.default.mobileS,c.default.mobileM,c.default.mobileL,c.default.tablet);class d extends e(a).Component{render(){let{imgURL:t,alternate:n,redirectURL:r}=this.props;return e(a).createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},e(a).createElement(u,{src:t,alt:n}))}}d.propTypes={imgURL:e(s).oneOfType([e(s).string,e(s).object]).isRequired,alternate:e(s).string.isRequired,redirectURL:e(s).string.isRequired};var p=d});
//# sourceMappingURL=LegacyPortfolio.0f3cfe7e.js.map
