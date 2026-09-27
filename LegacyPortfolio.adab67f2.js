!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function r(e){if(e=a.i?.[e]||e,!n)try{throw Error()}catch(r){var t=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(!t)return o+e;n=t[0]}return new URL(o+e,n).toString()}var n,o="./",a=("u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{}).parcelRequiref040,i=a.register;i("hMSh5",function(r,n){let o;Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",function(){return x});var i=a("3PcU0"),l=a("94cXP"),s=a("gDJwQ"),c=a("j04fQ"),u=a("9tbqk"),d=a("b8Xje"),p=a("gsqNr"),f=a("c7kJs"),m=a("kzQ7T"),h=a("jijA3"),g=a("4J3Tm"),b=(0,s.createGlobalStyle)(o||(o=(e=>e)`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`));class v extends i.Component{componentDidMount(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}render(){return e(i).createElement(e(i).Fragment,null,e(i).createElement(e(l),{query:"(min-width: 1225px)"},e(i).createElement(c.default,null),e(i).createElement(u.default,null),e(i).createElement(d.default,null),e(i).createElement(p.default,null)),e(i).createElement(e(l),{query:"(max-width: 1224px)"},e(i).createElement(f.default,null),e(i).createElement(m.default,null),e(i).createElement(h.default,null),e(i).createElement(g.default,null)),e(i).createElement(b,null))}}var x=v}),i("94cXP",function(e,t){"u">typeof self?self:e.exports,e.exports=function(e){var t=[function(e,t,r){var n=r(1);e.exports=r(8)(n.isElement,!0)},function(e,t,r){"use strict";e.exports=r(7)},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";function n(e){return"-"+e.toLowerCase()}var o=/[A-Z]/g,a=/^ms-/,i={};t.a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(o,n);return i[e]=a.test(t)?"-"+t:t}},function(e,t,r){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,a;n=e,o=t,a=r[t],o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})}return e}var o=r(0),a=r.n(o),i=a.a.oneOfType([a.a.string,a.a.number]),l={orientation:a.a.oneOf(["portrait","landscape"]),scan:a.a.oneOf(["progressive","interlace"]),aspectRatio:a.a.string,deviceAspectRatio:a.a.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:a.a.bool,colorIndex:a.a.bool,monochrome:a.a.bool,resolution:i},s=n({minAspectRatio:a.a.string,maxAspectRatio:a.a.string,minDeviceAspectRatio:a.a.string,maxDeviceAspectRatio:a.a.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:a.a.number,maxColor:a.a.number,minColorIndex:a.a.number,maxColorIndex:a.a.number,minMonochrome:a.a.number,maxMonochrome:a.a.number,minResolution:i,maxResolution:i},l),c={all:a.a.bool,grid:a.a.bool,aural:a.a.bool,braille:a.a.bool,handheld:a.a.bool,print:a.a.bool,projection:a.a.bool,screen:a.a.bool,tty:a.a.bool,tv:a.a.bool,embossed:a.a.bool},u=n({},c,s);l.type=Object.keys(c),t.a={all:u,types:c,matchers:l,features:s}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return y});var s=r(6),c=r.n(s),u=r(0),d=r.n(u),p=r(11),f=r.n(p),m=r(3),h=r(4),g=r(13);r.d(t,"toQuery",function(){return g.a});var b=Object.keys({component:d.a.node,query:d.a.string,values:d.a.shape(h.a.matchers),children:d.a.oneOfType([d.a.node,d.a.func]),onChange:d.a.func}),v=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({},e);return t.forEach(function(e){return delete r[e]}),r},x=function(e){var t=e.values;if(!t)return null;var r=Object.keys(t);return 0===r.length?null:r.reduce(function(e,r){return e[Object(m.a)(r)]=t[r],e},{})},y=function(e){var t;function r(){var e,t,i;if(!(this instanceof r))throw TypeError("Cannot call a class as a function");for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return t=(i=(e=o(r)).call.apply(e,[this].concat(c)))&&("object"===n(i)||"function"==typeof i)?i:a(this),l(a(t),"state",{matches:!1,mq:null,query:"",values:null}),l(a(t),"componentDidMount",function(){t.state.mq.addListener(t.updateMatches),t.updateMatches()}),l(a(t),"componentDidUpdate",function(e,r){t.state.mq!==r.mq&&(t.cleanupMediaQuery(r.mq),t.state.mq.addListener(t.updateMatches)),t.props.onChange&&r.matches!==t.state.matches&&t.props.onChange(t.state.matches)}),l(a(t),"componentWillUnmount",function(){t._unmounted=!0,t.cleanupMediaQuery(t.state.mq)}),l(a(t),"cleanupMediaQuery",function(e){e&&(e.removeListener(t.updateMatches),e.dispose())}),l(a(t),"updateMatches",function(){t._unmounted||t.state.mq.matches!==t.state.matches&&t.setState({matches:t.state.mq.matches})}),l(a(t),"render",function(){return"function"==typeof t.props.children?t.props.children(t.state.matches):t.state.matches?t.props.children:null}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(r,e),t=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.query||Object(g.a)(v(e,b));if(!r)throw Error("Invalid or missing MediaQuery!");var n=x(e);if(r===t.query&&n===t.values)return null;var o=f()(r,n||{},!!n);return{matches:o.matches,mq:o,query:r,values:n}}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(r,t),r}(c.a.Component);l(y,"displayName","MediaQuery"),l(y,"defaultProps",{values:null})},function(t,r){t.exports=e},function(e,t,r){"use strict";!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:var r=e.type;switch(r){case d:case p:case i:case s:case l:case m:return r;default:var n=r&&r.$$typeof;switch(n){case u:case f:case c:return n;default:return t}}case g:case h:case a:return t}}}function r(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+e.replace(/%s/g,function(){return r[o++]});"u">typeof console&&console.warn(a);try{throw Error(a)}catch(e){}},v=function(e,t){if(void 0===t)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];b.apply(void 0,[t].concat(n))}},x=!1;t.typeOf=e,t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=l,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(t){return x||(x=!0,v(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),r(t)||e(t)===d},t.isConcurrentMode=r,t.isContextConsumer=function(t){return e(t)===u},t.isContextProvider=function(t){return e(t)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(t){return e(t)===f},t.isFragment=function(t){return e(t)===i},t.isLazy=function(t){return e(t)===g},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===a},t.isProfiler=function(t){return e(t)===s},t.isStrictMode=function(t){return e(t)===l},t.isSuspense=function(t){return e(t)===m}}()},function(e,t,r){"use strict";function n(){return null}var o=r(1),a=r(9),i=r(2),l=r(10),s=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};c=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){function r(e){this.message=e,this.stack=""}function u(e){function n(n,l,s,u,d,p,f){if(u=u||h,p=p||s,f!==i){if(t){var m=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("u">typeof console){var g=u+":"+s;!o[g]&&a<3&&(c("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[g]=!0,a++)}}return null==l[s]?n?new r(null===l[s]?"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(l,s,u,d,p)}var o={},a=0,l=n.bind(null,!1);return l.isRequired=n.bind(null,!0),l}function d(e){return u(function(t,n,o,a,i,l){var s=t[n];return p(s)!==e?new r("Invalid "+a+" `"+i+"` of type `"+f(s)+"` supplied to `"+o+"`, expected `"+e+"`."):null})}function p(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function f(e){if(null==e)return""+e;var t=p(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var m="function"==typeof Symbol&&Symbol.iterator,h="<<anonymous>>",g={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:u(n),arrayOf:function(e){return u(function(t,n,o,a,l){if("function"!=typeof e)return new r("Property `"+l+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new r("Invalid "+a+" `"+l+"` of type `"+p(s)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<s.length;c++){var u=e(s,c,o,a,l+"["+c+"]",i);if(u instanceof Error)return u}return null})},element:u(function(t,n,o,a,i){var l=t[n];return e(l)?null:new r("Invalid "+a+" `"+i+"` of type `"+p(l)+"` supplied to `"+o+"`, expected a single ReactElement.")}),elementType:u(function(e,t,n,a,i){var l=e[t];return o.isValidElementType(l)?null:new r("Invalid "+a+" `"+i+"` of type `"+p(l)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(t,n,o,a,i){if(!(t[n]instanceof e)){var l,s=e.name||h;return new r("Invalid "+a+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:h)+"` supplied to `"+o+"`, expected instance of `"+s+"`.")}return null})},node:u(function(t,n,o,a,i){return!function t(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(t);if(null===r||e(r))return!0;var n=function(e){var t=e&&(m&&e[m]||e["@@iterator"]);if("function"==typeof t)return t}(r);if(!n)return!1;var o,a=n.call(r);if(n!==r.entries){for(;!(o=a.next()).done;)if(!t(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!t(i[1]))return!1}return!0;default:return!1}}(t[n])?new r("Invalid "+a+" `"+i+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(e){return u(function(t,n,o,a,l){if("function"!=typeof e)return new r("Property `"+l+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var c=t[n],u=p(c);if("object"!==u)return new r("Invalid "+a+" `"+l+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var d in c)if(s(c,d)){var f=e(c,d,o,a,l+"."+d,i);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?u(function(t,n,o,a,i){for(var l,s=t[n],c=0;c<e.length;c++)if(s===(l=e[c])?0!==s||1/s==1/l:s!=s&&l!=l)return null;var u=JSON.stringify(e,function(e,t){return"symbol"===f(t)?String(t):t});return new r("Invalid "+a+" `"+i+"` of value `"+String(s)+"` supplied to `"+o+"`, expected one of "+u+".")}):(c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),n)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),n;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=f(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(o)+" at index "+t+"."),n}return u(function(t,n,o,a,l){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,n,o,a,l,i))return null;return new r("Invalid "+a+" `"+l+"` supplied to `"+o+"`.")})},shape:function(e){return u(function(t,n,o,a,l){var s=t[n],c=p(s);if("object"!==c)return new r("Invalid "+a+" `"+l+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var d=e[u];if(d){var f=d(s,u,o,a,l+"."+u,i);if(f)return f}}return null})},exact:function(e){return u(function(t,n,o,l,s){var c=t[n],u=p(c);if("object"!==u)return new r("Invalid "+l+" `"+s+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");var d=a({},t[n],e);for(var f in d){var m=e[f];if(!m)return new r("Invalid "+l+" `"+s+"` key `"+f+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=m(c,f,o,l,s+"."+f,i);if(h)return h}return null})}};return r.prototype=Error.prototype,g.checkPropTypes=l,g.resetWarningCache=l.resetWarningCache,g.PropTypes=g,g}},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?function(e,t){for(var r,i,l=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in r=Object(arguments[s]))o.call(r,c)&&(l[c]=r[c]);if(n){i=n(r);for(var u=0;u<i.length;u++)a.call(r,i[u])&&(l[i[u]]=r[i[u]])}}return l}:Object.assign},function(e,t,r){"use strict";function n(e,t,r,n,s){for(var c in e)if(l(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((n||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw d.name="Invariant Violation",d}u=e[c](t,c,n,r,null,a)}catch(e){u=e}if(!u||u instanceof Error||o((n||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var p=s?s():"";o("Failed "+r+" type: "+u.message+(null!=p?p:""))}}}var o=function(){},a=r(2),i={},l=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},n.resetWarningCache=function(){i={}},e.exports=n},function(e,t,r){"use strict";function n(e,t,r){function n(e){i.matches=e.matches,i.media=e.media}var i=this;if(a&&!r){var l=a.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(n)}else this.matches=o(e,t),this.media=e;this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(n)}}var o=r(12).match,a="u">typeof window?window.matchMedia:null;e.exports=function(e,t,r){return new n(e,t,r)}},function(e,t,r){"use strict";function n(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(l),r=t[1],n=t[2],o=t[3]||"",a={};return a.inverse=!!r&&"not"===r.toLowerCase(),a.type=n?n.toLowerCase():"all",a.expressions=(o=o.match(/\([^\)]+\)/g)||[]).map(function(e){var t=e.match(s),r=t[1].toLowerCase().match(c);return{modifier:r[1],feature:r[2],value:t[2]}}),a})}function o(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function a(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return n(e).some(function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var l=e.expressions.every(function(e){var r=e.feature,n=e.modifier,l=e.value,s=t[r];if(!s)return!1;switch(r){case"orientation":case"scan":return s.toLowerCase()===l.toLowerCase();case"width":case"height":case"device-width":case"device-height":l=i(l),s=i(s);break;case"resolution":l=a(l),s=a(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":l=o(l),s=o(s);break;case"grid":case"color":case"color-index":case"monochrome":l=parseInt(l,10)||1,s=parseInt(s,10)||0}switch(n){case"min":return s>=l;case"max":return s<=l;default:return s===l}});return l&&!r||!l&&r})},t.parse=n;var l=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,c=/^(?:(min|max)-)?(.+)/,u=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,r){"use strict";var n=r(3),o=r(4);t.a=function(e){var t=[];return Object.keys(o.a.all).forEach(function(r){var o,a,i,l=e[r];null!=l&&t.push((a=l,i=Object(n.a)(r),"number"==typeof a&&(a="".concat(a,"px")),!0===a?r:!1===a?(o=r,"not ".concat(o)):"(".concat(i,": ").concat(a,")")))}),t.join(" and ")}}];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=t,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}(a("3PcU0"))}),i("j04fQ",function(r,n){t(r.exports,"default",function(){return c});var o=a("3PcU0"),i=a("28SGB"),l=a("buzsN");class s extends o.Component{render(){return e(o).createElement(e(o).Fragment,null,e(o).createElement(i.default,null),e(o).createElement(l.default,null))}}var c=s}),i("28SGB",function(r,n){t(r.exports,"default",function(){return b});var o=a("3PcU0"),i=a("gDJwQ"),l=a("5EXX7"),s=a("3w1uF");let c=e=>e,u,d,p;var f=i.default.div(u||(u=c`
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
`),m);class g extends o.Component{render(){return e(o).createElement(f,null,e(o).createElement(l.default,{text:"Roy Mootsana",fontFam:"'Syne', sans-serif",timeDelay:500}),e(o).createElement("div",{style:{marginTop:"10px"}}),e(o).createElement(s.default,{text:"Engineering and Design",fontFam:"'DM Mono', monospace",timeDelay:1300}),e(o).createElement(h,null,e(o).createElement(s.default,{text:"↓",fontFam:"'DM Mono', monospace",timeDelay:1500})))}}var b=g}),i("5EXX7",function(r,n){t(r.exports,"default",function(){return b});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp"),s=a("asANu");let c=e=>e,u,d,p;var f=i.default.div(u||(u=c`
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
`),e=>e.fontFam,s.default.tablet,e=>e.reveal?m(100):"none",140,s.default.laptop,e=>e.reveal?m(140):"none",196,s.default.laptopL,e=>e.reveal?m(150):"none",210,s.default.desktop,e=>e.reveal?m(200):"none",280);class g extends o.Component{componentDidMount(){var e=this.props.timeDelay;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){var t=this.props,r=t.text,n=t.fontFam,a=this.state.reveal;return e(o).createElement(f,null,e(o).createElement(h,{fontFam:n,reveal:a},r))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(l).string.isRequired,fontFam:e(l).string,timeDelay:e(l).number.isRequired},g.defaultProps={fontFam:"'Syne', sans-serif"};var b=g}),i("erkSp",function(e,t){e.exports=a("7x49O")()}),i("7x49O",function(e,t){"use strict";var r=a("cUMJT");function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}}),i("cUMJT",function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),i("asANu",function(e,r){t(e.exports,"default",function(){return o});var n="2560px",o={mobileS:"(min-width: 320px)",mobileM:"(min-width: 375px)",mobileL:"(min-width: 425px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",laptopL:"(min-width: 1440px)",desktop:`(min-width: ${n})`,desktopL:`(min-width: ${n})`}}),i("3w1uF",function(r,n){t(r.exports,"default",function(){return b});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp"),s=a("asANu");let c=e=>e,u,d,p;var f=i.default.div(u||(u=c`
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
`),e=>e.fontFam,e=>e.reveal?m(e.fontSizeInPx):"none",e=>1.4*e.fontSizeInPx,s.default.tablet,e=>e.reveal?m(28):"none",28*1.4,s.default.laptop,e=>e.reveal?m(40):"none",56,s.default.laptopL,e=>e.reveal?m(50):"none",70,s.default.desktop,e=>e.reveal?m(60):"none",84);class g extends o.Component{componentDidMount(){var e=this.props.timeDelay;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){var t=this.props,r=t.text,n=t.fontFam,a=this.state.reveal;return e(o).createElement(f,null,e(o).createElement(h,{fontFam:n,reveal:a},r))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(l).string.isRequired,fontFam:e(l).string,timeDelay:e(l).number.isRequired},g.defaultProps={fontFam:"'Syne', sans-serif"};var b=g}),i("buzsN",function(r,n){t(r.exports,"default",function(){return g});var o=a("3PcU0"),i=a("gDJwQ"),l=a("asANu");let s=e=>e,c,u,d;var p=i.default.section(c||(c=s`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),f=i.default.div.attrs({style:e=>{var t=e.scrollPercent;return{transform:`translateX(${5.5*t}%)`}}})(u||(u=s`
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
`),l.default.laptop,l.default.laptopL,l.default.desktop),m=i.default.div(d||(d=s`
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
`),l.default.laptop,l.default.laptopL,l.default.desktop);class h extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){var t=window.document,r=t.body,n=t.documentElement,o=Math.max(r.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,a=150*n.clientHeight/n.scrollHeight;o>=0&&o<=a&&this.setState({scrollPercent:o})}render(){var t=this.state.scrollPercent;return e(o).createElement(p,null,e(o).createElement(f,{scrollPercent:t},"ABOUT ME"),e(o).createElement(m,null,"Full-stack software engineer in Cape Town, currently building products for IMD Business School. I came to engineering through design systems, and I build web products end to end in TypeScript and Python, from the interface down to the API and its security."))}constructor(e){super(e),this.state={scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var g=h}),i("9tbqk",function(r,n){t(r.exports,"default",function(){return w});var o=a("4A9dc"),i=a("3PcU0"),l=a("gDJwQ"),s=a("4a6aC"),c=a("8ZhPw"),u=a("kegKv");let d=e=>e,p,f,m,h;var g=l.default.div(p||(p=d`
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
`));class y extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({vh:Math.round(window.document.documentElement.clientHeight*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){var t=window.document,r=t.body,n=t.documentElement,o=this.state,a=o.vh,i=o.slideNumber,l=Math.max(r.scrollTop,n.scrollTop);l>this.lastScrollTop?this.scrollDirectionDown=!0:this.scrollDirectionDown=!1,this.lastScrollTop=l,Math.floor(l/a)!==i&&i<this.workDetails.length-1?this.setState({slideNumber:Math.floor(l/a)}):i===this.workDetails.length-1&&Math.floor(l/a)<i&&this.setState({slideNumber:Math.floor(l/a)})}changeTextContentBasedOnScroll(){var t=this.state.slideNumber;if(t>=this.workDetails.length)return null;var r=this.workDetails[t],n=null;return r.projectDesc&&(n=e(i).createElement("div",null,e(i).createElement("p",null,r.projectDesc),"UI Designer"!==r.projectType&&e(i).createElement(b,{type:"button",onClick:()=>this.handleButtonClick(t)},"More info →"))),e(i).createElement(s.default,{number:r.number,projectName:r.projectName,projectDesc:n,projectType:r.projectType,roles:r.roles,refreshToggle:!0})}render(){var t=this.state,r=t.showDialog,n=t.dialogProject,o=t.slideNumber,a=t=>e(i).createElement("ul",null,t.split("\n").map(t=>e(i).createElement("li",{key:t},t)));return e(i).createElement(g,null,this.changeTextContentBasedOnScroll(),1===o&&e(i).createElement(u.default,null),e(i).createElement(c.default,{pageSplitTimes:this.pageSplitTimes}),r&&e(i).createElement(v,{onClick:e=>e.target===e.currentTarget&&this.handleCloseDialog()},e(i).createElement(x,{role:"dialog","aria-modal":"true","aria-label":n.projectName},e(i).createElement("h3",null,"The problem"),e(i).createElement("p",null,n.problem),e(i).createElement("h3",null,"What wasn’t working"),a(n.indicators),e(i).createElement("h3",null,"What I did"),a(n.solution),n.QA&&e(i).createElement(e(i).Fragment,null,e(i).createElement("h3",null,"Quality checks"),a(n.QA)),n.quote&&e(i).createElement("blockquote",null,"“",n.quote,"”",e(i).createElement("cite",null,"— ",n.quoteAuthor)),e(i).createElement(b,{onClick:this.handleCloseDialog},"Close"))))}constructor(e){super(e),(0,o._)(this,"handleButtonClick",e=>{this.setState({showDialog:!0,dialogProject:this.workDetails[e]})}),(0,o._)(this,"handleCloseDialog",()=>{this.setState({showDialog:!1,dialogProject:null})}),this.state={vh:0,slideNumber:0,showDialog:!1,dialogProject:null},this.pageSplitTimes=1.4,this.lastScrollTop=0,this.scrollDirectionDown=!0,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"IMD Business School",projectDesc:"Internal products for executive education, built and run end to end: assessment platforms, leadership diagnostics, a live multiplayer simulation and data tools.",projectType:"FULL-STACK",roles:["Learning Innovation & STS Developer","2023 – present"],problem:"IMD runs executive programmes for multinational companies and needed products it could own: assessments, diagnostics, simulations and research tooling, several of them replacing tools the teams had outgrown.",indicators:"A Qualtrics 360 tool that could not run repeat feedback rounds across a programme.\nA Power Apps front end the World Competitiveness Center had outgrown.\nLive sessions where one admin edit or a stalled team affects a room of executives.\nIdentity and secrets spread across many repositories.",solution:"Started in QA in July 2023; Learning Innovation Developer since February 2024 and Strategic Talent Solutions Developer since October 2025.\nPart of the team that rewrote Leader’s Question Mix, then built LQM 360 on top.\nBuilt the Strategic Execution Simulation from an existing paper-based board simulation, with live-session safeguards.\nBuilt the reviewer journey on the Accelerator platform (Angular, Flask).\nBuilt a Next.js and FastAPI replacement for the World Competitiveness Center’s Power Apps tool.\nAdded tenant configuration and data cleaning to a multi-tenant talent dashboard.\nAudited all 52 of the organisation’s code repositories for exposed secrets and security risks, and wrote and presented the remediation plan.",QA:""},{number:"02",projectName:"BluePrint",projectDesc:"BluePrint 3.0, the design-system pilot for Standard Bank's Corporate & Investment Banking division: reusable Angular components, documented in Storybook.",projectType:"DESIGN SYSTEM",roles:["User Interface Designer","2022 – 2023"],problem:"Standard Bank's Corporate & Investment Banking division was introducing a new visual language, BluePrint 3.0, and its product teams needed components they could adopt instead of each building their own.",indicators:"Different teams designing and building the same components separately.\nAn inconsistent look and behaviour from one product to the next.\nNo single, documented home for the components.",solution:"Built and maintained reusable Angular library components for BluePrint 3.0, placed at Standard Bank by iqbusiness.\nTurned Figma designs into accessible, documented Storybook components.\nMoved button variants from appearance to semantic intent, and made components work at narrow widths.\nKept the Storybook docs, accessibility add-on and changelog current for product teams.",QA:"Storybook: checked controls, responsiveness and visual alignment.\nReviews: ran usability sessions, reviewed naming and formatting, and did peer code reviews.\nChromatic: automated visual testing as part of continuous integration.\nNexus: tested published package versions before teams upgraded.\nApplications: checked components inside real page templates.\nDevices: tested across browsers, platforms and screen sizes.",quote:"Roy is a rare find, and has shown great maturity and skill, far beyond expectation.",quoteAuthor:"Mel M. Saayman, Design Lead, Standard Bank"},{number:"03",projectName:"BluePrint Apps",projectDesc:"Angular apps built on the BluePrint components, so the bank's products shared one look and behaviour.",projectType:"ANGULAR APPS",roles:["User Interface Designer","2022 – 2023"],problem:"Product teams needed applications that followed BluePrint, so users got the same experience from one app to the next.",indicators:"Each app had drifted into its own design language.\nComponents and patterns were hard to keep consistent.\nMoving between apps felt like moving between different products.",solution:"Built Angular applications on the BluePrint component library.\nUsed the same components, patterns and interactions across every app.\nRan usability tests to check the experience held up.",QA:""},{number:"04",projectName:"Admin Portal",projectDesc:"An admin portal for a nail boutique: stock, client records and reports in one place.",projectType:"WEB APP",roles:["Lead UX/UI Developer","2021"],problem:"The boutique managed its stock and client details by hand and couldn't get reliable reports on the business.",indicators:"Stock counted by hand, which led to errors.\nClient details not kept in one system.\nReports that were slow to produce and hard to trust.",solution:"Led a team of four that designed and built the boutique's systems.\nBuilt the admin portal: stock control, client records and report generation.",QA:""},{number:"05",projectName:"Nail Boutique",projectDesc:"The boutique's website: services, prices and online booking, plus a designer where customers create their own nail art.",projectType:"WEBSITE",roles:["Lead UX/UI Developer","2021"],problem:"The boutique had little online presence and no way for customers to plan a design or book online.",indicators:"Hard to find online.\nNo way to design nail art or book an appointment online.\nServices, prices and contact details weren't easy to see.",solution:"Built a responsive website in HTML, CSS and JavaScript with services, prices and contact details.\nBuilt a nail-art designer so customers could try designs before booking.\nAdded online booking for appointments.",QA:""},{number:"06",projectName:"Readpoint",projectDesc:"An online bookshop with a MongoDB database and payments, where customers browse and buy books.",projectType:"WEB APP",roles:["Full-Stack Developer","Freelance"],problem:"A book seller wanted to sell online and make browsing and buying books easy.",indicators:"No way to reach customers beyond the shop.\nNo convenient, secure way to buy books online.\nStock tracked by hand, with mistakes.",solution:"Built the shop on Node.js, Express and MongoDB, with browsing and checkout.\nIntegrated a secure payment system.\nBuilt stock management that updates as books sell.",QA:""},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""],problem:"",indicators:"",solution:"",QA:""}]}}var w=y}),i("4A9dc",function(e,r){t(e.exports,"_",function(){return n});function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}),i("4a6aC",function(r,n){t(r.exports,"default",function(){return M});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp"),s=a("asANu");let c=e=>e,u,d,p,f,m,h,g,b,v,x,y,w;var E=i.default.section(u||(u=c`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`)),k=i.default.div(d||(d=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),S=i.default.div(p||(p=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),P=i.default.div(f||(f=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),j=i.default.div(m||(m=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),T=i.default.div(h||(h=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),R=i.default.div(g||(g=c`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
`)),D=i.default.div(b||(b=c`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`)),$=i.default.span(x||(x=c`
`)),L=i.default.span(y||(y=c`
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
`))),H=i.default.span(w||(w=c`

`));class U extends o.Component{componentWillReceiveProps(e){this.refresh(e)}refresh(e){e.refreshToggle&&($=H,this.setState({refreshBlock:!0},()=>{$=L,this.setState({refreshBlock:!1})}))}render(){var t=this.props,r=t.number,n=t.projectName,a=t.projectDesc,i=t.roles,l=t.projectType,s=t.refreshToggle;return e(o).createElement(E,null,e(o).createElement(j,null,e(o).createElement($,{refreshToggle:s,inline:!0},r)),e(o).createElement(D,null,e(o).createElement(R,null,e(o).createElement(k,null,e(o).createElement($,{refreshToggle:s,inline:!0},n)),e(o).createElement(P,null,e(o).createElement($,{refreshToggle:s,inline:!0},i.map((t,r,n)=>r===n.length-1?e(o).createElement("span",{key:t},t):e(o).createElement("span",{key:t},t,"  •  ")))),e(o).createElement(S,null,e(o).createElement($,{refreshToggle:s,inline:!1},a)))),e(o).createElement(T,null,e(o).createElement($,{refreshToggle:s,inline:!0},l)))}constructor(e){super(e),this.state={refreshBlock:!1},this.refresh=this.refresh.bind(this)}}U.propTypes={number:e(l).string.isRequired,projectName:e(l).string.isRequired,projectDesc:e(l).node,projectType:e(l).string.isRequired,roles:e(l).array.isRequired,refreshToggle:e(l).bool.isRequired},U.defaultProps={projectDesc:null};var M=U}),i("8ZhPw",function(r,n){t(r.exports,"default",function(){return x});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp"),s=a("yAHvL"),c=a("7q9PE"),u=a("d0nkG"),d=a("bWdcb"),p=a("dohF2");let f=e=>e,m,h;var g=i.default.div(m||(m=f`
  margin-left: 50%;
  width: 50%;
  height: 890vh;
  display: flex;
  flex-flow: column nowrap;
`)),b=i.default.div(h||(h=f`
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`));class v extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){var e=window.document,t=e.body,r=e.documentElement,n=Math.max(t.scrollTop,r.scrollTop)/(r.scrollHeight-r.clientHeight)*100,o=100*r.clientHeight/r.scrollHeight,a=1180*r.clientHeight/r.scrollHeight;n>=o&&n<=a&&this.setState({scrollPercent:n})}render(){var t=this.state,r=t.scrollPercent,n=t.scrollHeight,a=t.screenHeight,i=100*this.props.pageSplitTimes;return e(o).createElement(g,null,e(o).createElement(b,{height:i}),e(o).createElement(b,{height:i},e(o).createElement(s.default,{boxHeight:i,index:2,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(c.default,{boxHeight:i,index:3,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(u.default,{boxHeight:i,index:4,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(d.default,{boxHeight:i,index:5,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(b,{height:i},e(o).createElement(p.default,{boxHeight:i,index:6,scrollPercent:r,screenHeight:a,scrollHeight:n})))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}v.propTypes={pageSplitTimes:e(l).number.isRequired};var x=v}),i("yAHvL",function(r,n){t(r.exports,"default",function(){return x});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d;var p=new URL(a("i3V9d")).href,f=new URL(a("a72B4")).href,m=new URL(a("iftAH")).href,h=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 40vh; 
`)),g=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
right: 2vw;
height: 50vh;
filter: blur(0.6px);
`)),b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.9)`}}})(d||(d=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
left:0vw;
height: 50vh; 
`));class v extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:m,scroll:t,alt:"voistrapPeople"}),e(o).createElement(g,{src:f,scroll:t,alt:"voistrapMeetings"}),e(o).createElement(h,{src:p,scroll:t,alt:"voistrapHome"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),i("i3V9d",function(e,t){e.exports=r("hm3Ez")}),i("a72B4",function(e,t){e.exports=r("1ItXn")}),i("iftAH",function(e,t){e.exports=r("8ucYb")}),i("7q9PE",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d,p;var f=new URL(a("1udDD")).href,m=new URL(a("20kLK")).href,h=new URL(a("4DdN3")).href,g=new URL(a("3Gihp")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left:0vw;
height: 80vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-15vh;
right: 2vw;
height: 80vh;
filter: blur(0.2px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${5*t}%) scale(0.7)`}}})(d||(d=s`
transition: transform 0.2s ease-out;
bottom:-30vh;
left:2vw;
position: absolute;
height: 80vh;
filter: blur(0.4px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.6)`}}})(p||(p=s`
transition: transform 0.2s ease-out;
bottom:-15vh;
right: 4vw;
position: absolute;
height: 60vh;
filter: blur(0.2px);
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(o).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(o).createElement(v,{src:f,scroll:t,alt:"Home"}),e(o).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),i("1udDD",function(e,t){e.exports=r("xibKX")}),i("20kLK",function(e,t){e.exports=r("bzD9c")}),i("4DdN3",function(e,t){e.exports=r("ePSZ1")}),i("3Gihp",function(e,t){e.exports=r("cmYJK")}),i("d0nkG",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d,p;var f=new URL(a("cv2cn")).href,m=new URL(a("7PfP9")).href,h=new URL(a("dAdX5")).href,g=new URL(a("gX93c")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${3*t}%) scale(0.6)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
bottom: 10vh;
right: 1vw;
transform-origin: right center;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(u||(u=s`
transition: transform 0.2s ease-out;
bottom: -10vh;
left: -4vw;
position: absolute;
height: 50vh;
filter: blur(0.3px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%) scale(0.9)`}}})(d||(d=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -35vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${22*t}%)`}}})(p||(p=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left: 0vw;
height: 50vh;
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:h,scroll:t,alt:"paths"}),e(o).createElement(v,{src:g,scroll:t,alt:"bigBubble"}),e(o).createElement(x,{src:m,scroll:t,alt:"bubbles"}),e(o).createElement(y,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),i("cv2cn",function(e,t){e.exports=r("ip9I8")}),i("7PfP9",function(e,t){e.exports=r("7y5YJ")}),i("dAdX5",function(e,t){e.exports=r("825Lo")}),i("gX93c",function(e,t){e.exports=r("jpko8")}),i("bWdcb",function(r,n){t(r.exports,"default",function(){return x});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d;var p=new URL(a("fDPBC")).href,f=new URL(a("1oC5w")).href,m=new URL(a("dA32T")).href,h=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left: -4vw;
height: 50vh;
filter: blur(0.8px);
`)),g=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${12*t}%) scale(0.9)`}}})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -50vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.4px);
`)),b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${25*t}%)`}}})(d||(d=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 30vh;
left: 0vw;
height: 40vh;
`));class v extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(h,{src:m,scroll:t,alt:"bigBubble"}),e(o).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(o).createElement(b,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),i("fDPBC",function(e,t){e.exports=r("9MN8v")}),i("1oC5w",function(e,t){e.exports=r("7f0O2")}),i("dA32T",function(e,t){e.exports=r("iOr8O")}),i("dohF2",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("3PcU0"),l=a("gDJwQ"),s=a("erkSp"),c=new URL(a("chIJV")).href,u=l.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${10*t}%) scale(0.7)`}}})(o||(o=(e=>e)`
bottom:-50vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`));class d extends i.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,o=r.index,a=r.scrollHeight;return t-=r.screenHeight*(n*o-100)/100*100/a+(o-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var p=d}),i("chIJV",function(e,t){e.exports=r("jSDDg")}),i("kegKv",function(r,n){t(r.exports,"default",function(){return S});var o=a("3OaOq"),i=a("3PcU0"),l=a("gDJwQ");let s=e=>e,c,u,d,p,f,m,h;var g=[["Strategic Execution Simulation","Next.js · Prisma · PostgreSQL"],["Accelerator assessment platform","Angular · Flask · Azure"],["Leader's Question Mix & LQM 360","Next.js · Azure AD B2C"],["World Competitiveness Center data app","Next.js · FastAPI · MSAL"],["Talent Dashboard","Django REST · Next.js"],["Organisation-wide security audit","52 repositories"]],b=(0,l.keyframes)(c||(c=s`
  from { opacity: 0; transform: translateY(calc(-50% + 16px)); }
  to { opacity: 1; transform: translateY(-50%); }
`)),v=l.default.div(u||(u=s`
  position: fixed;
  top: 50%;
  left: 53%;
  right: 6%;
  transform: translateY(-50%);
  animation: ${0} 0.6s cubic-bezier(0.19, 1, 0.22, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`),b),x=l.default.p(d||(d=s`
  margin: 0 0 18px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`)),y=l.default.ul(p||(p=s`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--ink);
`)),w=l.default.li(f||(f=s`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);
`)),E=l.default.span(m||(m=s`
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: clamp(17px, 1.5vw, 26px);
  color: var(--ink);
`)),k=l.default.span(h||(h=s`
  flex: none;
  font-family: 'DM Mono', monospace;
  font-size: clamp(10px, 0.75vw, 13px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
`)),S=()=>e(i).createElement(v,null,e(i).createElement(x,null,"Selected work at IMD"),e(i).createElement(y,null,g.map(t=>{var r=(0,o._)(t,2),n=r[0],a=r[1];return e(i).createElement(w,{key:n},e(i).createElement(E,null,n),e(i).createElement(k,null,a))})))}),i("b8Xje",function(r,n){t(r.exports,"default",function(){return x});var o=a("3PcU0"),i=a("gDJwQ"),l=a("jzbpi");let s=e=>e,c,u,d,p,f;var m=i.default.section(c||(c=s`
  margin-top: 55vh;
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`)),h=i.default.h2(u||(u=s`
  margin: 0 0 56px;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: clamp(64px, 7vw, 140px);
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--ink);
`)),g=i.default.div(d||(d=s`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 48px 56px;

  /* Education lines are long; give them two columns so they don't wrap three times. */
  & > div:last-child {
    grid-column: span 2;
  }
`)),b=i.default.h3(p||(p=s`
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: clamp(11px, 0.8vw, 15px);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`)),v=i.default.ul(f||(f=s`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Epilogue', sans-serif;
  font-weight: 300;
  font-size: clamp(16px, 1.25vw, 24px);
  line-height: 1.6;
  color: var(--ink);
`)),x=()=>e(o).createElement(m,null,e(o).createElement(h,null,"SKILLS"),e(o).createElement(g,null,l.default.map(t=>{var r=t.title,n=t.items;return e(o).createElement("div",{key:r},e(o).createElement(b,null,r),e(o).createElement(v,null,n.map(t=>e(o).createElement("li",{key:t},t))))})))}),i("jzbpi",function(e,r){t(e.exports,"default",function(){return n});var n=[{title:"Front end",items:["TypeScript","JavaScript","React","Next.js","Angular","RxJS","HTML, CSS and SCSS","Tailwind CSS"]},{title:"Back end & data",items:["Python: FastAPI, Flask, Django REST","Node.js and Express","PHP","PostgreSQL","MongoDB","SQL","LLM APIs"]},{title:"Design systems & UX",items:["Component libraries","Storybook","Figma","WCAG accessibility","Responsive design"]},{title:"Cloud & delivery",items:["Azure: Container Apps, AD B2C","Docker","GitHub Actions","SonarQube","Jest","Agile and Scrum"]},{title:"Education & certifications",items:["Bachelor of Computer & Information Sciences, Monash University, 2021","Microsoft Azure AI Fundamentals (AI-900)","PRINCE2 Foundation","UX Design Bootcamp, Interaction Design Foundation"]}]}),i("gsqNr",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("fJ6Lk"),s=a("asANu");let c=e=>e,u,d,p,f;var m=new URL(a("5zAt4")).href,h=new URL(a("1NXk9")).href,g=new URL(a("rcBuX")).href,b=i.default.section(u||(u=c`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),v=i.default.div.attrs({style:e=>{var t=e.scrollPercent;return{transform:`translateX(${8*t}%)`}}})(d||(d=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),x=i.default.div(p||(p=c`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`)),y=i.default.p(f||(f=c`
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
`));class w extends o.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight)}),this.setState({screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){var t=window.document,r=t.body,n=t.documentElement,o=Math.max(r.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,a=1090*n.clientHeight/n.scrollHeight;o>=a&&o<=100&&(o-=a,this.setState({scrollPercent:o}))}render(){var t=this.state.scrollPercent;return e(o).createElement(b,null,e(o).createElement(v,{scrollPercent:t},"CONTACT"),e(o).createElement(x,null,e(o).createElement(l.default,{imgURL:m,alternate:"GitHub",redirectURL:"https://github.com/Royverse"}),e(o).createElement(l.default,{imgURL:h,alternate:"Email",redirectURL:"mailto:roymootsana@gmail.com"}),e(o).createElement(l.default,{imgURL:g,alternate:"LinkedIn",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})),e(o).createElement(y,null,e(o).createElement("a",{href:"mailto:roymootsana@gmail.com"},"roymootsana@gmail.com")," ·  Cape Town, South Africa"))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var E=w}),i("fJ6Lk",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("3PcU0"),l=a("gDJwQ"),s=a("erkSp"),c=a("asANu"),u=l.default.img(o||(o=(e=>e)`
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
`),c.default.laptop,c.default.laptopL,c.default.desktop);class d extends e(i).Component{render(){var t=this.props,r=t.imgURL,n=t.alternate,o=t.redirectURL;return e(i).createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(u,{src:r,alt:n}))}}d.propTypes={imgURL:e(s).oneOfType([e(s).string,e(s).object]).isRequired,alternate:e(s).string.isRequired,redirectURL:e(s).string.isRequired};var p=d}),i("5zAt4",function(e,t){e.exports=r("hg5oT")}),i("1NXk9",function(e,t){e.exports=r("f17xl")}),i("rcBuX",function(e,t){e.exports=r("1yUuo")}),i("c7kJs",function(r,n){t(r.exports,"default",function(){return c});var o=a("3PcU0"),i=a("ap2pJ"),l=a("hDeb6");class s extends o.Component{render(){return e(o).createElement(e(o).Fragment,null,e(o).createElement(i.default,null),e(o).createElement(l.default,null))}}var c=s}),i("ap2pJ",function(r,n){t(r.exports,"default",function(){return k});var o=a("3PcU0"),i=a("gDJwQ"),l=a("j7lby"),s=a("asANu");let c=e=>e,u,d,p,f,m,h;var g=i.default.section(u||(u=c`
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
`)),v=(0,i.default)(l.motion.div)(p||(p=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet),x=(0,i.default)(l.motion.div)(f||(f=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet),y=(0,i.keyframes)(m||(m=c`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`)),w=i.default.div(h||(h=c`
  animation: ${0} 2s infinite;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`),y);class E extends o.Component{render(){return e(o).createElement(g,null,e(o).createElement(b,null,e(o).createElement(v,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:.5}},"Roy Mootsana")),e(o).createElement(b,null,e(o).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.3}},"Engineering and Design")),e(o).createElement(w,null,e(o).createElement(b,null,e(o).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.5}},"↓"))))}}var k=E}),i("hDeb6",function(r,n){t(r.exports,"default",function(){return h});var o=a("3PcU0"),i=a("gDJwQ"),l=a("j7lby"),s=a("asANu");let c=e=>e,u,d;var p=i.default.section(u||(u=c`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 50;
`)),f=(0,i.default)(l.motion.span)(d||(d=c`
  font-family: 'Epilogue', sans-serif;
  text-align: center;
  color: var(--ink);
  line-height: 1.5;
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
  @media ${0} { font-size: 22px; }
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 36px; }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop);class m extends o.Component{render(){return e(o).createElement(p,null,e(o).createElement(f,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.2,delay:.5}},"Full-stack software engineer in Cape Town, currently building products for IMD Business School. I came to engineering through design systems, and I build web products end to end in TypeScript and Python, from the interface down to the API and its security."))}}var h=m}),i("kzQ7T",function(r,n){let o;t(r.exports,"default",function(){return f});var i=a("3PcU0"),l=a("gDJwQ"),s=a("8wgON"),c=a("8te6o"),u=a("lySEY"),d=l.default.div(o||(o=(e=>e)`
    display: flex;
    flex-flow: row nowrap;
    background: var(--bg);
    min-height: 100vh;
    transition: background 0.5s ease;
`));class p extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll,{passive:!0});var t=e(s)().offset;this.setState({vh:Math.round((window.document.documentElement.clientHeight+t)*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{var e=window.document,t=e.body,r=e.documentElement,n=this.state,o=n.vh,a=n.slideNumber,i=Math.max(t.scrollTop,r.scrollTop),l=Math.floor(i/o);l!==a&&l>=0&&l<this.workDetails.length&&this.setState({slideNumber:l}),this.lastScrollTop=i,this.ticking=!1}),this.ticking=!0)}render(){var t=this.state.slideNumber,r=this.workDetails[t]||this.workDetails[0];return e(i).createElement(d,null,e(i).createElement(c.default,{number:r.number,projectName:r.projectName,projectDesc:r.projectDesc,projectType:r.projectType,roles:r.roles,refreshToggle:!0}),e(i).createElement(u.default,{pageSplitTimes:this.pageSplitTimes}))}constructor(e){super(e),this.state={vh:0,slideNumber:0},this.pageSplitTimes=1.3,this.lastScrollTop=0,this.ticking=!1,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"IMD Business School",projectDesc:"Internal products for executive education, built and run end to end: assessment platforms, leadership diagnostics, a live multiplayer simulation and data tools.",projectType:"FULL-STACK",roles:["Learning Innovation & STS Developer","2023 – present"]},{number:"02",projectName:"BluePrint",projectDesc:"BluePrint 3.0, the design-system pilot for Standard Bank's Corporate & Investment Banking division: reusable Angular components, documented in Storybook.",projectType:"DESIGN SYSTEM",roles:["User Interface Designer","2022 – 2023"]},{number:"03",projectName:"BluePrint Apps",projectDesc:"Angular apps built on the BluePrint components, so the bank's products shared one look and behaviour.",projectType:"ANGULAR APPS",roles:["User Interface Designer","2022 – 2023"]},{number:"04",projectName:"Admin Portal",projectDesc:"An admin portal for a nail boutique: stock, client records and reports in one place.",projectType:"WEB APP",roles:["Lead UX/UI Developer","2021"]},{number:"05",projectName:"Nail Boutique",projectDesc:"The boutique's website: services, prices and online booking, plus a designer where customers create their own nail art.",projectType:"WEBSITE",roles:["Lead UX/UI Developer","2021"]},{number:"06",projectName:"Readpoint",projectDesc:"An online bookshop with a MongoDB database and payments, where customers browse and buy books.",projectType:"WEB APP",roles:["Full-Stack Developer","Freelance"]},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]}]}}var f=p}),i("8wgON",function(e,t){e.exports,e.exports=function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t(){var e,t=((e=document.createElement("div")).style.cssText="position: fixed; top: 0; height: 100vh; pointer-events: none;",document.documentElement.insertBefore(e,document.documentElement.firstChild),e),r=window.innerHeight,n=t.offsetHeight,o=n-r;return document.documentElement.removeChild(t),{vh:n,windowHeight:r,offset:o,isNeeded:0!==o,value:0}}function r(){}function n(){var e=t();return e.value=e.offset,e}var o=Object.freeze({noop:r,computeDifference:n,redefineVhUnit:function(){var e=t();return e.value=.01*e.windowHeight,e}});function a(e){return"string"==typeof e&&e.length>0}var i=Object.freeze({cssVarName:"vh-offset",redefineVh:!1,method:n,force:!1,bind:!0,updateOnTouch:!1,onUpdate:r}),l=!1,s=[];try{var c=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",c,c),window.removeEventListener("test",c,c)}catch(e){l=!1}function u(e,t){s.push({eventName:e,callback:t}),window.addEventListener(e,t,!!l&&{passive:!0})}function d(){s.forEach(function(e){window.removeEventListener(e.eventName,e.callback)}),s=[]}function p(e,t){document.documentElement.style.setProperty("--"+e,t.value+"px")}function f(t,r){return e({},t,{unbind:d,recompute:r.method})}return function(t){var n=Object.freeze(function(t){if(a(t))return e({},i,{cssVarName:t});if("object"!=typeof t)return i;var n={force:!0===t.force,bind:!1!==t.bind,updateOnTouch:!0===t.updateOnTouch,onUpdate:"function"==typeof t.onUpdate?t.onUpdate:r},l=!0===t.redefineVh;return n.method=o[l?"redefineVhUnit":"computeDifference"],n.cssVarName=a(t.cssVarName)?t.cssVarName:l?"vh":i.cssVarName,n}(t)),l=f(n.method(),n);if(!l.isNeeded&&!n.force||(p(n.cssVarName,l),n.onUpdate(l),!n.bind))return l;function s(){window.requestAnimationFrame(function(){var e=n.method();p(n.cssVarName,e),n.onUpdate(f(e,n))})}return l.unbind(),u("orientationchange",s),n.updateOnTouch&&u("touchmove",s),l}}()}),i("8te6o",function(r,n){t(r.exports,"default",function(){return D});var o=a("3PcU0"),i=a("gDJwQ"),l=a("7HkqN"),s=a("j7lby"),c=a("erkSp"),u=a("asANu");let d=e=>e,p,f,m,h,g,b,v,x;var y=i.default.section(p||(p=d`
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
`)),w=(0,i.default)(s.motion.div)(f||(f=d`
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`)),E=i.default.div(m||(m=d`
  overflow: hidden;
  margin-bottom: 16px;
`)),k=(0,i.default)(s.motion.h2)(h||(h=d`
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0;
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 38px; }
  @media ${0} { font-size: 44px; }
  @media ${0} { font-size: 64px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL,u.default.tablet),S=i.default.div(g||(g=d`
  overflow: hidden;
  margin-bottom: 32px;
`)),P=(0,i.default)(s.motion.div)(b||(b=d`
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0;
`)),j=(0,i.default)(s.motion.p)(v||(v=d`
  font-family: 'Epilogue', sans-serif;
  color: var(--ink);
  line-height: 1.6;
  max-width: 90%;
  @media ${0} { font-size: 16px; }
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL),T=(0,i.default)(s.motion.div)(x||(x=d`
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
`));class R extends o.Component{render(){var t=this.props,r=t.number,n=t.projectName,a=t.projectDesc,i=t.roles,c=t.projectType;return(t.refreshToggle,n)?e(o).createElement(y,null,e(o).createElement(l.AnimatePresence,{mode:"wait"},e(o).createElement(s.motion.div,{key:n,initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.2}},exit:{opacity:0,transition:{duration:.4,ease:"easeIn"}}}},e(o).createElement(w,{variants:{hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}}},"// PROJECT ",r),e(o).createElement(E,null,e(o).createElement(k,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},n)),e(o).createElement(S,null,e(o).createElement(P,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},i.join(" • "))),e(o).createElement(j,{variants:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.9,ease:"easeOut"}}}},a),e(o).createElement(T,{variants:{hidden:{opacity:0,scaleY:0,originY:1},visible:{opacity:1,scaleY:1,transition:{duration:1,ease:"easeOut"}}}},c)))):null}}R.propTypes={number:e(c).string.isRequired,projectName:e(c).string.isRequired,projectDesc:e(c).string.isRequired,projectType:e(c).string.isRequired,roles:e(c).array.isRequired,refreshToggle:e(c).bool.isRequired};var D=R}),i("lySEY",function(r,n){t(r.exports,"default",function(){return y});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp"),s=a("8wgON"),c=a("fm0Up"),u=a("75cq3"),d=a("eUUzS"),p=a("7LTn4"),f=a("imjFR");let m=e=>e,h,g;var b=i.default.div(h||(h=m`
  width: 100%;
  height: 1080vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
`)),v=i.default.div(g||(g=m`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`));class x extends o.Component{componentDidMount(){var t=e(s)().offset;window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight+t)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{var e=window.document,t=e.body,r=e.documentElement,n=Math.max(t.scrollTop,r.scrollTop)/(r.scrollHeight-r.clientHeight)*100,o=100*r.clientHeight/r.scrollHeight,a=1370*r.clientHeight/r.scrollHeight;n>=o&&n<=a&&this.setState({scrollPercent:n}),this.ticking=!1}),this.ticking=!0)}render(){var t=this.state,r=t.scrollPercent,n=t.scrollHeight,a=t.screenHeight,i=100*this.props.pageSplitTimes;return e(o).createElement(b,null,e(o).createElement(v,{height:i}),e(o).createElement(v,{height:i}),e(o).createElement(v,{height:i},e(o).createElement(c.default,{boxHeight:i,index:2,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(u.default,{boxHeight:i,index:3,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(d.default,{boxHeight:i,index:4,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(p.default,{boxHeight:i,index:5,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i},e(o).createElement(f.default,{boxHeight:i,index:6,scrollPercent:r,screenHeight:a,scrollHeight:n})),e(o).createElement(v,{height:i}))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.ticking=!1,this.handleScroll=this.handleScroll.bind(this)}}x.propTypes={pageSplitTimes:e(l).number.isRequired};var y=x}),i("fm0Up",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d,p;var f=new URL(a("i3V9d")).href,m=new URL(a("a72B4")).href,h=new URL(a("iftAH")).href,g=new URL(a("9PvkB")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
right: 2vw;
height:20vh;
filter: blur(0.1px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${5*t}%) scale(0.7)`}}})(d||(d=s`
transition: transform 0.2s ease-out;
bottom: 25vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.9)`}}})(p||(p=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(y,{src:h,scroll:t,alt:"voistrapPeople"}),e(o).createElement(x,{src:g,scroll:t,alt:"voistrapPhone"}),e(o).createElement(v,{src:m,scroll:t,alt:"voistrapMeetings"}),e(o).createElement(b,{src:f,scroll:t,alt:"voistrapHome"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),i("9PvkB",function(e,t){e.exports=r("fI1XF")}),i("75cq3",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d,p;var f=new URL(a("1udDD")).href,m=new URL(a("20kLK")).href,h=new URL(a("4DdN3")).href,g=new URL(a("3Gihp")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 30vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.9)`}}})(u||(u=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 35vh;
right: 2vw;
height: 20vh;
filter: blur(0.2px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${5*t}%) scale(0.7)`}}})(d||(d=s`
transition: transform 0.2s ease-out;
bottom: 20vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${2*t}%) scale(0.6)`}}})(p||(p=s`
transition: transform 0.2s ease-out;
bottom: 35vh;
right: 4vw;
position: absolute;
height: 30vh;
filter: blur(0.2px);
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(o).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(o).createElement(v,{src:f,scroll:t,alt:"Home"}),e(o).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),i("eUUzS",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d,p;var f=new URL(a("cv2cn")).href,m=new URL(a("7PfP9")).href,h=new URL(a("dAdX5")).href,g=new URL(a("gX93c")).href,b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${35*t}%)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`)),v=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${28*t}%) scale(0.9)`}}})(u||(u=s`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`)),x=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${15*t}%) scale(0.8)`}}})(d||(d=s`
position: absolute;
bottom: 60vh;
right: 2vw;
height: 20vh;
filter: blur(0.1px);
`)),y=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(p||(p=s`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`));class w extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(x,{src:h,scroll:t,alt:"paths"}),e(o).createElement(y,{src:g,scroll:t,alt:"bigBubble"}),e(o).createElement(v,{src:m,scroll:t,alt:"bubbles"}),e(o).createElement(b,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),i("7LTn4",function(r,n){t(r.exports,"default",function(){return x});var o=a("3PcU0"),i=a("gDJwQ"),l=a("erkSp");let s=e=>e,c,u,d;var p=new URL(a("fDPBC")).href,f=new URL(a("1oC5w")).href,m=new URL(a("dA32T")).href,h=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${35*t}%)`}}})(c||(c=s`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`)),g=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${28*t}%) scale(0.9)`}}})(u||(u=s`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`)),b=i.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${8*t}%) scale(0.7)`}}})(d||(d=s`
bottom: 60vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`));class v extends o.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,a=r.index,i=r.scrollHeight;return t-=r.screenHeight*(n*a-100)/100*100/i+(a-1),e(o).createElement(e(o).Fragment,null,e(o).createElement(b,{src:m,scroll:t,alt:"bigBubble"}),e(o).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(o).createElement(h,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),i("imjFR",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("3PcU0"),l=a("gDJwQ"),s=a("erkSp"),c=new URL(a("chIJV")).href,u=l.default.img.attrs({style:e=>{var t=e.scroll;return{transform:`translate(0px,-${10*t}%) scale(0.7)`}}})(o||(o=(e=>e)`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`));class d extends i.Component{render(){var t=this.props.scrollPercent,r=this.props,n=r.boxHeight,o=r.index,a=r.scrollHeight;return t-=r.screenHeight*(n*o-100)/100*100/a+(o-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var p=d}),i("jijA3",function(r,n){t(r.exports,"default",function(){return y});var o=a("3PcU0"),i=a("gDJwQ"),l=a("asANu"),s=a("jzbpi");let c=e=>e,u,d,p,f,m;var h=i.default.section(u||(u=c`
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
`),l.default.mobileS,l.default.tablet,l.default.laptop),g=i.default.h2(d||(d=c`
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
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop),b=i.default.div(p||(p=c`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 28px 40px;
  margin-top: 32px;
`)),v=i.default.h3(f||(f=c`
  margin: 0 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`)),x=i.default.ul(m||(m=c`
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
`),l.default.tablet),y=()=>e(o).createElement(h,null,e(o).createElement(g,null,"SKILLS"),e(o).createElement(b,null,s.default.map(t=>{var r=t.title,n=t.items;return e(o).createElement("div",{key:r},e(o).createElement(v,null,r),e(o).createElement(x,null,n.map(t=>e(o).createElement("li",{key:t},t))))})))}),i("4J3Tm",function(r,n){t(r.exports,"default",function(){return E});var o=a("3PcU0"),i=a("gDJwQ"),l=a("1hZle"),s=a("asANu");let c=e=>e,u,d,p,f;var m=new URL(a("5zAt4")).href,h=new URL(a("1NXk9")).href,g=new URL(a("rcBuX")).href,b=i.default.section(u||(u=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),v=i.default.div(d||(d=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),x=i.default.div(p||(p=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),y=i.default.p(f||(f=c`
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
`));class w extends o.Component{render(){return e(o).createElement(b,null,e(o).createElement(v,null,"CONTACT"),e(o).createElement(x,null,e(o).createElement(l.default,{imgURL:m,alternate:"GitHub",redirectURL:"https://github.com/Royverse"}),e(o).createElement(l.default,{imgURL:h,alternate:"Email",redirectURL:"mailto:roymootsana@gmail.com"}),e(o).createElement(l.default,{imgURL:g,alternate:"LinkedIn",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})),e(o).createElement(y,null,e(o).createElement("a",{href:"mailto:roymootsana@gmail.com"},"roymootsana@gmail.com"),e(o).createElement("br",null),"Cape Town, South Africa"))}}var E=w}),i("1hZle",function(r,n){let o;t(r.exports,"default",function(){return p});var i=a("3PcU0"),l=a("gDJwQ"),s=a("erkSp"),c=a("asANu"),u=l.default.img(o||(o=(e=>e)`
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
`),c.default.mobileS,c.default.mobileM,c.default.mobileL,c.default.tablet);class d extends e(i).Component{render(){var t=this.props,r=t.imgURL,n=t.alternate,o=t.redirectURL;return e(i).createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(u,{src:r,alt:n}))}}d.propTypes={imgURL:e(s).oneOfType([e(s).string,e(s).object]).isRequired,alternate:e(s).string.isRequired,redirectURL:e(s).string.isRequired};var p=d})}();
//# sourceMappingURL=LegacyPortfolio.adab67f2.js.map
