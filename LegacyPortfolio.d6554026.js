function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function n(e){if(e=o.i?.[e]||e,!r)try{throw Error()}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(!t)return i+e;r=t[0]}return new URL(i+e,r).toString()}var r,i="./",o=("u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{}).parcelRequiref040,a=o.register;a("j2WrI",function(n,r){let i;Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",function(){return x});var a=o("i45Qv"),l=o("goHFj"),s=o("1KiZd"),c=o("i3v6U"),u=o("7lp8i"),d=o("6di5A"),p=o("fk7eW"),f=o("dHIOg"),m=o("euXay"),h=o("19Ypr"),g=o("4Yzid");let b=(0,s.createGlobalStyle)(i||(i=(e=>e)`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`));class v extends a.Component{componentDidMount(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}render(){return e(a).createElement(e(a).Fragment,null,e(a).createElement(e(l),{query:"(min-width: 1225px)"},e(a).createElement(c.default,null),e(a).createElement(u.default,null),e(a).createElement(d.default,null),e(a).createElement(p.default,null)),e(a).createElement(e(l),{query:"(max-width: 1224px)"},e(a).createElement(f.default,null),e(a).createElement(m.default,null),e(a).createElement(h.default,null),e(a).createElement(g.default,null)),e(a).createElement(b,null))}}var x=v}),a("goHFj",function(e,t){"u">typeof self?self:e.exports,e.exports=function(e){var t=[function(e,t,n){var r=n(1);e.exports=n(8)(r.isElement,!0)},function(e,t,n){e.exports=n(7)},function(e,t,n){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){function r(e){return"-"+e.toLowerCase()}var i=/[A-Z]/g,o=/^ms-/,a={};t.a=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(i,r);return a[e]=o.test(t)?"-"+t:t}},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,i,o;r=e,i=t,o=n[t],i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o})}return e}var i=n(0),o=n.n(i),a=o.a.oneOfType([o.a.string,o.a.number]),l={orientation:o.a.oneOf(["portrait","landscape"]),scan:o.a.oneOf(["progressive","interlace"]),aspectRatio:o.a.string,deviceAspectRatio:o.a.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:o.a.bool,colorIndex:o.a.bool,monochrome:o.a.bool,resolution:a},s=r({minAspectRatio:o.a.string,maxAspectRatio:o.a.string,minDeviceAspectRatio:o.a.string,maxDeviceAspectRatio:o.a.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:o.a.number,maxColor:o.a.number,minColorIndex:o.a.number,maxColorIndex:o.a.number,minMonochrome:o.a.number,maxMonochrome:o.a.number,minResolution:a,maxResolution:a},l),c={all:o.a.bool,grid:o.a.bool,aural:o.a.bool,braille:o.a.bool,handheld:o.a.bool,print:o.a.bool,projection:o.a.bool,screen:o.a.bool,tty:o.a.bool,tv:o.a.bool,embossed:o.a.bool},u=r({},c,s);l.type=Object.keys(c),t.a={all:u,types:c,matchers:l,features:s}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y});var s=n(6),c=n.n(s),u=n(0),d=n.n(u),p=n(11),f=n.n(p),m=n(3),h=n(4),g=n(13);n.d(t,"toQuery",function(){return g.a});var b=Object.keys({component:d.a.node,query:d.a.string,values:d.a.shape(h.a.matchers),children:d.a.oneOfType([d.a.node,d.a.func]),onChange:d.a.func}),v=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},e);return t.forEach(function(e){return delete n[e]}),n},x=function(e){var t=e.values;if(!t)return null;var n=Object.keys(t);return 0===n.length?null:n.reduce(function(e,n){return e[Object(m.a)(n)]=t[n],e},{})},y=function(e){var t;function n(){var e,t,a;if(!(this instanceof n))throw TypeError("Cannot call a class as a function");for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return t=(a=(e=i(n)).call.apply(e,[this].concat(c)))&&("object"===r(a)||"function"==typeof a)?a:o(this),l(o(t),"state",{matches:!1,mq:null,query:"",values:null}),l(o(t),"componentDidMount",function(){t.state.mq.addListener(t.updateMatches),t.updateMatches()}),l(o(t),"componentDidUpdate",function(e,n){t.state.mq!==n.mq&&(t.cleanupMediaQuery(n.mq),t.state.mq.addListener(t.updateMatches)),t.props.onChange&&n.matches!==t.state.matches&&t.props.onChange(t.state.matches)}),l(o(t),"componentWillUnmount",function(){t._unmounted=!0,t.cleanupMediaQuery(t.state.mq)}),l(o(t),"cleanupMediaQuery",function(e){e&&(e.removeListener(t.updateMatches),e.dispose())}),l(o(t),"updateMatches",function(){t._unmounted||t.state.mq.matches!==t.state.matches&&t.setState({matches:t.state.mq.matches})}),l(o(t),"render",function(){return"function"==typeof t.props.children?t.props.children(t.state.matches):t.state.matches?t.props.children:null}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(n,e),t=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.query||Object(g.a)(v(e,b));if(!n)throw Error("Invalid or missing MediaQuery!");var r=x(e);if(n===t.query&&r===t.values)return null;var i=f()(n,r||{},!!r);return{matches:i.matches,mq:i,query:n,values:r}}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(n,t),n}(c.a.Component);l(y,"displayName","MediaQuery"),l(y,"defaultProps",{values:null})},function(t,n){t.exports=e},function(e,t,n){!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:var n=e.type;switch(n){case d:case p:case a:case s:case l:case m:return n;default:var r=n&&n.$$typeof;switch(r){case u:case f:case c:return r;default:return t}}case g:case h:case o:return t}}}function n(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o="Warning: "+e.replace(/%s/g,function(){return n[i++]});"u">typeof console&&console.warn(o);try{throw Error(o)}catch(e){}},v=function(e,t){if(void 0===t)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];b.apply(void 0,[t].concat(r))}},x=!1;t.typeOf=e,t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=i,t.ForwardRef=f,t.Fragment=a,t.Lazy=g,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=l,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===s||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(t){return x||(x=!0,v(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(t)||e(t)===d},t.isConcurrentMode=n,t.isContextConsumer=function(t){return e(t)===u},t.isContextProvider=function(t){return e(t)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(t){return e(t)===f},t.isFragment=function(t){return e(t)===a},t.isLazy=function(t){return e(t)===g},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===o},t.isProfiler=function(t){return e(t)===s},t.isStrictMode=function(t){return e(t)===l},t.isSuspense=function(t){return e(t)===m}}()},function(e,t,n){function r(){return null}var i=n(1),o=n(9),a=n(2),l=n(10),s=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};c=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){function n(e){this.message=e,this.stack=""}function u(e){function r(r,l,s,u,d,p,f){if(u=u||h,p=p||s,f!==a){if(t){var m=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("u">typeof console){var g=u+":"+s;!i[g]&&o<3&&(c("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),i[g]=!0,o++)}}return null==l[s]?r?new n(null===l[s]?"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+d+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(l,s,u,d,p)}var i={},o=0,l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function d(e){return u(function(t,r,i,o,a,l){var s=t[r];return p(s)!==e?new n("Invalid "+o+" `"+a+"` of type `"+f(s)+"` supplied to `"+i+"`, expected `"+e+"`."):null})}function p(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function f(e){if(null==e)return""+e;var t=p(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var m="function"==typeof Symbol&&Symbol.iterator,h="<<anonymous>>",g={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:u(r),arrayOf:function(e){return u(function(t,r,i,o,l){if("function"!=typeof e)return new n("Property `"+l+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new n("Invalid "+o+" `"+l+"` of type `"+p(s)+"` supplied to `"+i+"`, expected an array.");for(var c=0;c<s.length;c++){var u=e(s,c,i,o,l+"["+c+"]",a);if(u instanceof Error)return u}return null})},element:u(function(t,r,i,o,a){var l=t[r];return e(l)?null:new n("Invalid "+o+" `"+a+"` of type `"+p(l)+"` supplied to `"+i+"`, expected a single ReactElement.")}),elementType:u(function(e,t,r,o,a){var l=e[t];return i.isValidElementType(l)?null:new n("Invalid "+o+" `"+a+"` of type `"+p(l)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(t,r,i,o,a){if(!(t[r]instanceof e)){var l,s=e.name||h;return new n("Invalid "+o+" `"+a+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:h)+"` supplied to `"+i+"`, expected instance of `"+s+"`.")}return null})},node:u(function(t,r,i,o,a){return!function t(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(t);if(null===n||e(n))return!0;var r=function(e){var t=e&&(m&&e[m]||e["@@iterator"]);if("function"==typeof t)return t}(n);if(!r)return!1;var i,o=r.call(n);if(r!==n.entries){for(;!(i=o.next()).done;)if(!t(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!t(a[1]))return!1}return!0;default:return!1}}(t[r])?new n("Invalid "+o+" `"+a+"` supplied to `"+i+"`, expected a ReactNode."):null}),objectOf:function(e){return u(function(t,r,i,o,l){if("function"!=typeof e)return new n("Property `"+l+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var c=t[r],u=p(c);if("object"!==u)return new n("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+i+"`, expected an object.");for(var d in c)if(s(c,d)){var f=e(c,d,i,o,l+"."+d,a);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?u(function(t,r,i,o,a){for(var l,s=t[r],c=0;c<e.length;c++)if(s===(l=e[c])?0!==s||1/s==1/l:s!=s&&l!=l)return null;var u=JSON.stringify(e,function(e,t){return"symbol"===f(t)?String(t):t});return new n("Invalid "+o+" `"+a+"` of value `"+String(s)+"` supplied to `"+i+"`, expected one of "+u+".")}):(c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=f(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(i)+" at index "+t+"."),r}return u(function(t,r,i,o,l){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,r,i,o,l,a))return null;return new n("Invalid "+o+" `"+l+"` supplied to `"+i+"`.")})},shape:function(e){return u(function(t,r,i,o,l){var s=t[r],c=p(s);if("object"!==c)return new n("Invalid "+o+" `"+l+"` of type `"+c+"` supplied to `"+i+"`, expected `object`.");for(var u in e){var d=e[u];if(d){var f=d(s,u,i,o,l+"."+u,a);if(f)return f}}return null})},exact:function(e){return u(function(t,r,i,l,s){var c=t[r],u=p(c);if("object"!==u)return new n("Invalid "+l+" `"+s+"` of type `"+u+"` supplied to `"+i+"`, expected `object`.");var d=o({},t[r],e);for(var f in d){var m=e[f];if(!m)return new n("Invalid "+l+" `"+s+"` key `"+f+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=m(c,f,i,l,s+"."+f,a);if(h)return h}return null})}};return n.prototype=Error.prototype,g.checkPropTypes=l,g.resetWarningCache=l.resetWarningCache,g.PropTypes=g,g}},function(e,t,n){var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?function(e,t){for(var n,a,l=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))i.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var u=0;u<a.length;u++)o.call(n,a[u])&&(l[a[u]]=n[a[u]])}}return l}:Object.assign},function(e,t,n){function r(e,t,n,r,s){for(var c in e)if(l(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((r||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw d.name="Invariant Violation",d}u=e[c](t,c,r,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||i((r||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in a)){a[u.message]=!0;var p=s?s():"";i("Failed "+n+" type: "+u.message+(null!=p?p:""))}}}var i=function(){},o=n(2),a={},l=Function.call.bind(Object.prototype.hasOwnProperty);i=function(e){var t="Warning: "+e;"u">typeof console&&console.error(t);try{throw Error(t)}catch(e){}},r.resetWarningCache=function(){a={}},e.exports=r},function(e,t,n){function r(e,t,n){function r(e){a.matches=e.matches,a.media=e.media}var a=this;if(o&&!n){var l=o.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(r)}else this.matches=i(e,t),this.media=e;this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(r)}}var i=n(12).match,o="u">typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new r(e,t,n)}},function(e,t,n){function r(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(l),n=t[1],r=t[2],i=t[3]||"",o={};return o.inverse=!!n&&"not"===n.toLowerCase(),o.type=r?r.toLowerCase():"all",o.expressions=(i=i.match(/\([^\)]+\)/g)||[]).map(function(e){var t=e.match(s),n=t[1].toLowerCase().match(c);return{modifier:n[1],feature:n[2],value:t[2]}}),o})}function i(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function o(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function a(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return r(e).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var l=e.expressions.every(function(e){var n=e.feature,r=e.modifier,l=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===l.toLowerCase();case"width":case"height":case"device-width":case"device-height":l=a(l),s=a(s);break;case"resolution":l=o(l),s=o(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":l=i(l),s=i(s);break;case"grid":case"color":case"color-index":case"monochrome":l=parseInt(l,10)||1,s=parseInt(s,10)||0}switch(r){case"min":return s>=l;case"max":return s<=l;default:return s===l}});return l&&!n||!l&&n})},t.parse=r;var l=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,c=/^(?:(min|max)-)?(.+)/,u=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,n){var r=n(3),i=n(4);t.a=function(e){var t=[];return Object.keys(i.a.all).forEach(function(n){var i,o,a,l=e[n];null!=l&&t.push((o=l,a=Object(r.a)(n),"number"==typeof o&&(o="".concat(o,"px")),!0===o?n:!1===o?(i=n,"not ".concat(i)):"(".concat(a,": ").concat(o,")")))}),t.join(" and ")}}];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var r={};return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}(o("i45Qv"))}),a("i3v6U",function(n,r){t(n.exports,"default",function(){return c});var i=o("i45Qv"),a=o("3NFK4"),l=o("85vAF");class s extends i.Component{render(){return e(i).createElement(e(i).Fragment,null,e(i).createElement(a.default,null),e(i).createElement(l.default,null))}}var c=s}),a("3NFK4",function(n,r){t(n.exports,"default",function(){return b});var i=o("i45Qv"),a=o("1KiZd"),l=o("7BPrv"),s=o("aCGFr");let c=e=>e,u,d,p,f=a.default.div(u||(u=c`
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
`),m);class g extends i.Component{render(){return e(i).createElement(f,null,e(i).createElement(l.default,{text:"Roy Mootsana",fontFam:"'Cinzel', serif",timeDelay:500}),e(i).createElement("div",{style:{marginTop:"10px"}}),e(i).createElement(s.default,{text:"Design and Development",fontFam:"'Rajdhani', sans-serif",timeDelay:1300}),e(i).createElement(h,null,e(i).createElement(s.default,{text:"↓",fontFam:"'Rajdhani', sans-serif",timeDelay:1500})))}}var b=g}),a("7BPrv",function(n,r){t(n.exports,"default",function(){return b});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM"),s=o("hdKA9");let c=e=>e,u,d,p,f=a.default.div(u||(u=c`
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
`),e=>e.fontFam,s.default.tablet,e=>e.reveal?m(100):"none",140,s.default.laptop,e=>e.reveal?m(140):"none",196,s.default.laptopL,e=>e.reveal?m(150):"none",210,s.default.desktop,e=>e.reveal?m(200):"none",280);class g extends i.Component{componentDidMount(){let{timeDelay:e}=this.props;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){let{text:t,fontFam:n}=this.props,{reveal:r}=this.state;return e(i).createElement(f,null,e(i).createElement(h,{fontFam:n,reveal:r},t))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(l).string.isRequired,fontFam:e(l).string,timeDelay:e(l).number.isRequired},g.defaultProps={fontFam:"Avenir Helvetica Ariel"};var b=g}),a("5PebM",function(e,t){e.exports=o("7XJk5")()}),a("7XJk5",function(e,t){var n=o("kyUzL");function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}}),a("kyUzL",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),a("hdKA9",function(e,n){t(e.exports,"default",function(){return i});let r="2560px";var i={mobileS:"(min-width: 320px)",mobileM:"(min-width: 375px)",mobileL:"(min-width: 425px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",laptopL:"(min-width: 1440px)",desktop:`(min-width: ${r})`,desktopL:`(min-width: ${r})`}}),a("aCGFr",function(n,r){t(n.exports,"default",function(){return b});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM"),s=o("hdKA9");let c=e=>e,u,d,p,f=a.default.div(u||(u=c`
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
`),e=>e.fontFam,e=>e.reveal?m(e.fontSizeInPx):"none",e=>1.4*e.fontSizeInPx,s.default.tablet,e=>e.reveal?m(28):"none",28*1.4,s.default.laptop,e=>e.reveal?m(40):"none",56,s.default.laptopL,e=>e.reveal?m(50):"none",70,s.default.desktop,e=>e.reveal?m(60):"none",84);class g extends i.Component{componentDidMount(){let{timeDelay:e}=this.props;this.revealText(e)}revealText(e){setTimeout(()=>{this.setState({reveal:!0})},e)}render(){let{text:t,fontFam:n}=this.props,{reveal:r}=this.state;return e(i).createElement(f,null,e(i).createElement(h,{fontFam:n,reveal:r},t))}constructor(e){super(e),this.state={reveal:!1},this.revealText=this.revealText.bind(this)}}g.propTypes={text:e(l).string.isRequired,fontFam:e(l).string,timeDelay:e(l).number.isRequired},g.defaultProps={fontFam:"Avenir Helvetica Ariel"};var b=g}),a("85vAF",function(n,r){t(n.exports,"default",function(){return g});var i=o("i45Qv"),a=o("1KiZd"),l=o("hdKA9");let s=e=>e,c,u,d,p=a.default.section(c||(c=s`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),f=a.default.div.attrs({style:({scrollPercent:e})=>({transform:`translateX(${5.5*e}%)`})})(u||(u=s`
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
`),l.default.laptop,l.default.laptopL,l.default.desktop),m=a.default.div(d||(d=s`
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
`),l.default.laptop,l.default.laptopL,l.default.desktop);class h extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){let{body:t,documentElement:n}=window.document,r=Math.max(t.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,i=150*n.clientHeight/n.scrollHeight;r>=0&&r<=i&&this.setState({scrollPercent:r})}render(){let{scrollPercent:t}=this.state;return e(i).createElement(p,null,e(i).createElement(f,{scrollPercent:t},"ABOUT ME"),e(i).createElement(m,null,"Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design. A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action."))}constructor(e){super(e),this.state={scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var g=h}),a("7lp8i",function(n,r){t(n.exports,"default",function(){return y});var i=o("kWOTx"),a=o("i45Qv"),l=o("1KiZd"),s=o("i0ijN"),c=o("ktn80");let u=e=>e,d,p,f,m,h=l.default.div(d||(d=u`
  display: flex;
  flex-flow: row nowrap;
`)),g=l.default.button(p||(p=u`
  background: transparent;
  color: #0000ff;
  border: none;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
`)),b=l.default.div(f||(f=u`
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
`)),v=l.default.div(m||(m=u`   background-color: #ffffff;
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
`));class x extends a.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({vh:Math.round(window.document.documentElement.clientHeight*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){let{body:t,documentElement:n}=window.document,{vh:r,slideNumber:i}=this.state,o=Math.max(t.scrollTop,n.scrollTop);o>this.lastScrollTop?this.scrollDirectionDown=!0:this.scrollDirectionDown=!1,this.lastScrollTop=o,Math.floor(o/r)!==i&&i<this.workDetails.length-1?this.setState({slideNumber:Math.floor(o/r)}):i===this.workDetails.length-1&&Math.floor(o/r)<i&&this.setState({slideNumber:Math.floor(o/r)})}changeTextContentBasedOnScroll(){let{slideNumber:t}=this.state;if(t>=this.workDetails.length)return null;let n=this.workDetails[t],r=null;return n.projectDesc&&(r=e(a).createElement("div",null,e(a).createElement("p",null,n.projectDesc),"UI Designer"!==n.projectType&&e(a).createElement(g,{type:"button",onClick:()=>this.handleButtonClick(t)},"More Info..."))),e(a).createElement(s.default,{number:n.number,projectName:n.projectName,projectDesc:r,projectType:n.projectType,roles:n.roles,refreshToggle:!0})}render(){let{showDialog:t,dialogProject:n}=this.state;return t&&n&&e(a).createElement(b,null,e(a).createElement(v,null,e(a).createElement("h3",null,"Problem:"),e(a).createElement("p",null,n.problem),e(a).createElement("h3",null,"Indicators:"),e(a).createElement("ul",null,n.indicators.split("\n").map((t,n)=>e(a).createElement("li",{key:n},t))),e(a).createElement("h3",null,"Solution:"),e(a).createElement("p",null,n.solution),"BluePrint"===n.projectName&&e(a).createElement(e(a).Fragment,null,e(a).createElement("h3",null,"QA:"),e(a).createElement("ul",null,n.QA.split("\n").map((t,n)=>e(a).createElement("li",{key:n},t)))),e(a).createElement(g,{onClick:this.handleCloseDialog},"Close"))),e(a).createElement(h,null,this.changeTextContentBasedOnScroll(),e(a).createElement(c.default,{pageSplitTimes:this.pageSplitTimes}),t&&e(a).createElement(b,null,e(a).createElement(v,null,e(a).createElement("h3",null,"Problem:"),e(a).createElement("p",null,n.problem),e(a).createElement("h3",null,"Indicators:"),e(a).createElement("ul",null,n.indicators.split("\n").map((t,n)=>e(a).createElement("li",{key:n},t))),e(a).createElement("h3",null,"Solution:"),e(a).createElement("p",null,n.solution),"BluePrint"===n.projectName&&e(a).createElement(e(a).Fragment,null,e(a).createElement("h3",null,"QA:"),e(a).createElement("ul",null,n.QA.split("\n").map((t,n)=>e(a).createElement("li",{key:n},t)))),e(a).createElement(g,{onClick:this.handleCloseDialog},"Close"))))}constructor(e){super(e),(0,i._)(this,"handleButtonClick",e=>{this.setState({showDialog:!0,dialogProject:this.workDetails[e]})}),(0,i._)(this,"handleCloseDialog",()=>{this.setState({showDialog:!1,dialogProject:null})}),this.state={vh:0,slideNumber:0,showDialog:!1,dialogProject:null},this.pageSplitTimes=1.4,this.lastScrollTop=0,this.scrollDirectionDown=!0,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"BluePrint",projectDesc:"Collaboratively built a comprehensive design system, showcased in Storybook.",projectType:"DESIGN SYSTEM",roles:["UI Designer","Creative Technonogist"],problem:"The client needed a consistent and efficient design system to streamline their product development process.",indicators:"Inconsistency in design across different products.\nDuplication of effort in designing similar components.\nLack of a centralized repository for design assets.",solution:"Developed a comprehensive design system called BluePrint that provided a library of reusable components, typography guidelines, color palettes, and UI patterns. Created a Storybook documentation to showcase and maintain the design system.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"02",projectName:"BluePrint Apps",projectDesc:"Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.",projectType:"ANGULAR APPS",roles:["UI Designer","Front-end Developer"],problem:"The client needed a set of applications that adhere to the design system we developed (BluePrint) to ensure a consistent user experience.",indicators:"Inconsistency in the design language across different applications.\nDifficulty in maintaining consistent UI components and patterns.\nLack of a seamless user experience across different apps.",solution:"Utilized the BluePrint design system to create a suite of Angular applications. Ensured consistent use of design elements, UI components, and interaction patterns across all apps. Conducted usability testing to validate the user experience.",QA:"N/A"},{number:"03",projectName:"Admin Portal",projectDesc:"Created an admin portal for a nail boutique, streamlining operations by managing stock, client data, and generating reports.",projectType:"WEB APP",roles:["MEAN Stack Developer","UI Designer"],problem:"The nail boutique needed an efficient system to manage their inventory, client information, and generate reports for business insights.",indicators:"Manual inventory management causing errors and inefficiencies.\nLack of a centralized system to store client information.\nDifficulty in generating accurate and timely reports.",solution:"Developed a web-based admin portal using the MEAN stack (MongoDB, Express.js, Angular, Node.js) that provided features for inventory management, client information storage, and report generation. Streamlined business operations and provided valuable insights for data-driven decision making.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"04",projectName:"Nail Boutique",projectDesc:"Collaborated on a website for a nail boutique with a customizer feature enabling customers to design their own nail art. Included service details, pricing, and booking options.",projectType:"WEBSITE",roles:["Web Developer"],problem:"The nail boutique needed an online presence to showcase their services and allow customers to customize and book nail art designs.",indicators:"Limited online visibility and reach.\nLack of a platform for customers to customize and book nail art designs.\nInability to showcase services, pricing, and contact information effectively.",solution:"Developed a responsive website using HTML, CSS, and JavaScript that provided information about the nail boutique, showcased services, pricing, and contact details. Implemented a customizer feature to allow customers to design their own nail art and integrated a booking system for convenient appointment scheduling.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"05",projectName:"Readpoint",projectDesc:"Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to browse and purchase books.",projectType:"WEB APP",roles:["Full Stack Developer"],problem:"The client wanted to establish an online presence to sell books and provide a seamless user experience for browsing and purchasing books.",indicators:"Inability to reach a wider customer base without an online platform.\nLack of a convenient and secure way for customers to browse and purchase books.\nManual book inventory management leading to inaccuracies and inefficiencies.",solution:"Developed a web application using the MERN stack (MongoDB, Express.js, React, Node.js) that provided features for browsing and purchasing books. Integrated a secure payment system and implemented an efficient book inventory management system with real-time updates.",QA:"Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security."},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""],problem:"",indicators:"",solution:"",QA:""}]}}var y=x}),a("kWOTx",function(e,n){t(e.exports,"_",function(){return r});function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}),a("i0ijN",function(n,r){t(n.exports,"default",function(){return C});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM"),s=o("hdKA9");let c=e=>e,u,d,p,f,m,h,g,b,v,x,y,w,E=a.default.section(u||(u=c`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`)),k=a.default.div(d||(d=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),R=a.default.div(p||(p=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),j=a.default.div(f||(f=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),S=a.default.div(m||(m=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),P=a.default.div(h||(h=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),T=a.default.div(g||(g=c`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
`)),H=a.default.div(b||(b=c`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`)),$=a.default.span(x||(x=c`
`)),O=a.default.span(y||(y=c`
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

`));class A extends i.Component{componentWillReceiveProps(e){this.refresh(e)}refresh(e){let{refreshToggle:t}=e;t&&($=L,this.setState({refreshBlock:!0},()=>{$=O,this.setState({refreshBlock:!1})}))}render(){let{number:t,projectName:n,projectDesc:r,roles:o,projectType:a,refreshToggle:l}=this.props;return e(i).createElement(E,null,e(i).createElement(S,null,e(i).createElement($,{refreshToggle:l,inline:!0},t)),e(i).createElement(H,null,e(i).createElement(T,null,e(i).createElement(k,null,e(i).createElement($,{refreshToggle:l,inline:!0},n)),e(i).createElement(j,null,e(i).createElement($,{refreshToggle:l,inline:!0},o.map((t,n,r)=>n===r.length-1?e(i).createElement("span",{key:t},t):e(i).createElement("span",{key:t},t,"  •  ")))),e(i).createElement(R,null,e(i).createElement($,{refreshToggle:l,inline:!1},r)))),e(i).createElement(P,null,e(i).createElement($,{refreshToggle:l,inline:!0},a)))}constructor(e){super(e),this.state={refreshBlock:!1},this.refresh=this.refresh.bind(this)}}A.propTypes={number:e(l).string.isRequired,projectName:e(l).string.isRequired,projectDesc:e(l).node,projectType:e(l).string.isRequired,roles:e(l).array.isRequired,refreshToggle:e(l).bool.isRequired},A.defaultProps={projectDesc:null};var C=A}),a("ktn80",function(n,r){t(n.exports,"default",function(){return x});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM"),s=o("3DlEQ"),c=o("5MHDH"),u=o("exnps"),d=o("a1Il4"),p=o("6DPvU");let f=e=>e,m,h,g=a.default.div(m||(m=f`
  margin-left: 50%;
  width: 50%;
  height: 750vh;
  display: flex;
  flex-flow: column nowrap;
`)),b=a.default.div(h||(h=f`
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`));class v extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){let{body:e,documentElement:t}=window.document,n=Math.max(e.scrollTop,t.scrollTop)/(t.scrollHeight-t.clientHeight)*100,r=100*t.clientHeight/t.scrollHeight,i=1040*t.clientHeight/t.scrollHeight;n>=r&&n<=i&&this.setState({scrollPercent:n})}render(){let{scrollPercent:t,scrollHeight:n,screenHeight:r}=this.state,{pageSplitTimes:o}=this.props,a=100*o;return e(i).createElement(g,null,e(i).createElement(b,{height:a},e(i).createElement(s.default,{boxHeight:a,index:1,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(b,{height:a},e(i).createElement(c.default,{boxHeight:a,index:2,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(b,{height:a},e(i).createElement(u.default,{boxHeight:a,index:3,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(b,{height:a},e(i).createElement(d.default,{boxHeight:a,index:4,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(b,{height:a},e(i).createElement(p.default,{boxHeight:a,index:5,scrollPercent:t,screenHeight:r,scrollHeight:n})))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}v.propTypes={pageSplitTimes:e(l).number.isRequired};var x=v}),a("3DlEQ",function(n,r){t(n.exports,"default",function(){return x});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p=new URL(o("lIONG")).href,f=new URL(o("ivI7k")).href,m=new URL(o("5x9IF")).href,h=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
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
`));class v extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(b,{src:m,scroll:t,alt:"voistrapPeople"}),e(i).createElement(g,{src:f,scroll:t,alt:"voistrapMeetings"}),e(i).createElement(h,{src:p,scroll:t,alt:"voistrapHome"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),a("lIONG",function(e,t){e.exports=n("9cckY")}),a("ivI7k",function(e,t){e.exports=n("9YYKC")}),a("5x9IF",function(e,t){e.exports=n("aEmLR")}),a("5MHDH",function(n,r){t(n.exports,"default",function(){return E});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p,f=new URL(o("em8vh")).href,m=new URL(o("Amvsb")).href,h=new URL(o("3O1sE")).href,g=new URL(o("4A7x9")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
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
`));class w extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(i).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(i).createElement(v,{src:f,scroll:t,alt:"Home"}),e(i).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("em8vh",function(e,t){e.exports=n("6U0ge")}),a("Amvsb",function(e,t){e.exports=n("bpdAm")}),a("3O1sE",function(e,t){e.exports=n("iJxJq")}),a("4A7x9",function(e,t){e.exports=n("cOxJG")}),a("exnps",function(n,r){t(n.exports,"default",function(){return E});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p,f=new URL(o("ZAFIL")).href,m=new URL(o("7mwN7")).href,h=new URL(o("9Z0Zb")).href,g=new URL(o("86aH3")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${3*e}%) scale(0.6)`})})(c||(c=s`
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
`));class w extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(b,{src:h,scroll:t,alt:"paths"}),e(i).createElement(v,{src:g,scroll:t,alt:"bigBubble"}),e(i).createElement(x,{src:m,scroll:t,alt:"bubbles"}),e(i).createElement(y,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("ZAFIL",function(e,t){e.exports=n("gOrXd")}),a("7mwN7",function(e,t){e.exports=n("f3CEO")}),a("9Z0Zb",function(e,t){e.exports=n("bkJhv")}),a("86aH3",function(e,t){e.exports=n("b8w6W")}),a("a1Il4",function(n,r){t(n.exports,"default",function(){return x});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p=new URL(o("2iozw")).href,f=new URL(o("cOLH8")).href,m=new URL(o("7CC1f")).href,h=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${8*e}%) scale(0.7)`})})(c||(c=s`
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
`));class v extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(h,{src:m,scroll:t,alt:"bigBubble"}),e(i).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(i).createElement(b,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),a("2iozw",function(e,t){e.exports=n("lsVPI")}),a("cOLH8",function(e,t){e.exports=n("7g3UQ")}),a("7CC1f",function(e,t){e.exports=n("gJIbi")}),a("6DPvU",function(n,r){let i;t(n.exports,"default",function(){return p});var a=o("i45Qv"),l=o("1KiZd"),s=o("5PebM");let c=new URL(o("lOoPA")).href,u=l.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${10*e}%) scale(0.7)`})})(i||(i=(e=>e)`
bottom:-50vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`));class d extends a.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:o}=this.props;return t-=o*(n*r-100)/100*100/i+(r-1),e(a).createElement(e(a).Fragment,null,e(a).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var p=d}),a("lOoPA",function(e,t){e.exports=n("cxbDM")}),a("6di5A",function(n,r){t(n.exports,"default",function(){return b});var i=o("i45Qv"),a=o("1KiZd");let l=e=>e,s,c,u,d,p,f,m=a.default.div(s||(s=l`
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  
`)),h=a.default.div(c||(c=l`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  top: 40%;
  right: -50%;
`));a.default.div(u||(u=l`
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
`)),a.default.div(d||(d=l`
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
`)),a.default.a(p||(p=l`
  flex: 0 0 auto;
  margin: 10px;
  scroll-snap-align: start;
`)),a.default.img(f||(f=l`
  width: 200px;
  height: auto;
`));class g extends i.Component{render(){return e(i).createElement(m,null,e(i).createElement(h,null,"SKILLS"))}}var b=g}),a("fk7eW",function(n,r){t(n.exports,"default",function(){return y});var i=o("i45Qv"),a=o("1KiZd"),l=o("cXjMO"),s=o("hdKA9");let c=e=>e,u,d,p,f=new URL(o("2wsNK")).href,m=new URL(o("cywS4")).href,h=new URL(o("98XUh")).href,g=a.default.section(u||(u=c`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`)),b=a.default.div.attrs({style:({scrollPercent:e})=>({transform:`translateX(${8*e}%)`})})(d||(d=c`
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
`),s.default.laptop,s.default.laptopL,s.default.desktop),v=a.default.div(p||(p=c`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`));class x extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight)}),this.setState({screenHeight:Math.round(window.document.documentElement.clientHeight)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(e){let{body:t,documentElement:n}=window.document,r=Math.max(t.scrollTop,n.scrollTop)/(n.scrollHeight-n.clientHeight)*100,i=1040*n.clientHeight/n.scrollHeight;r>=i&&r<=100&&(r-=i,this.setState({scrollPercent:r}))}render(){let{scrollPercent:t}=this.state;return e(i).createElement(g,null,e(i).createElement(b,{scrollPercent:t},"CONTACT"),e(i).createElement(v,null,e(i).createElement(l.default,{imgURL:f,alternate:"Github",redirectURL:"https://github.com/Royverse"}),e(i).createElement(l.default,{imgURL:m,alternate:"Mail",redirectURL:"mailto:roymootsana@gmail.com"}),e(i).createElement(l.default,{imgURL:h,alternate:"Linkedin",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.handleScroll=this.handleScroll.bind(this)}}var y=x}),a("cXjMO",function(n,r){let i;t(n.exports,"default",function(){return p});var a=o("i45Qv"),l=o("1KiZd"),s=o("5PebM"),c=o("hdKA9");let u=l.default.img(i||(i=(e=>e)`
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
`),c.default.laptop,c.default.laptopL,c.default.desktop);class d extends e(a).Component{notifySlack(){let{alternate:e}=this.props;console.log(e),fetch(void 0,{credentials:"omit",method:"POST",body:JSON.stringify({text:`\u{1F680} ${e}`})})}render(){let{imgURL:t,alternate:n,redirectURL:r}=this.props;return e(a).createElement("a",{href:r,onClick:this.notifySlack,target:"_blank",rel:"noopener noreferrer"},e(a).createElement(u,{src:t,alt:n}))}constructor(e){super(e),this.notifySlack=this.notifySlack.bind(this)}}d.propTypes={imgURL:e(s).oneOfType([e(s).string,e(s).object]).isRequired,alternate:e(s).string.isRequired,redirectURL:e(s).string.isRequired};var p=d}),a("2wsNK",function(e,t){e.exports=n("dytkN")}),a("cywS4",function(e,t){e.exports=n("kKnXk")}),a("98XUh",function(e,t){e.exports=n("20vDP")}),a("dHIOg",function(n,r){t(n.exports,"default",function(){return c});var i=o("i45Qv"),a=o("ljvPE"),l=o("ehjH4");class s extends i.Component{render(){return e(i).createElement(e(i).Fragment,null,e(i).createElement(a.default,null),e(i).createElement(l.default,null))}}var c=s}),a("ljvPE",function(n,r){t(n.exports,"default",function(){return k});var i=o("i45Qv"),a=o("1KiZd"),l=o("d657B"),s=o("hdKA9");let c=e=>e,u,d,p,f,m,h,g=a.default.section(u||(u=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet),x=(0,a.default)(l.motion.div)(f||(f=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet),y=(0,a.keyframes)(m||(m=c`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`)),w=a.default.div(h||(h=c`
  animation: ${0} 2s infinite;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`),y);class E extends i.Component{render(){return e(i).createElement(g,null,e(i).createElement(b,null,e(i).createElement(v,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:.5}},"Roy Mootsana")),e(i).createElement(b,null,e(i).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.3}},"Design and Development")),e(i).createElement(w,null,e(i).createElement(b,null,e(i).createElement(x,{initial:{y:"100%"},animate:{y:0},transition:{duration:1,ease:[.22,1,.36,1],delay:1.5}},"↓"))))}}var k=E}),a("ehjH4",function(n,r){t(n.exports,"default",function(){return h});var i=o("i45Qv"),a=o("1KiZd"),l=o("d657B"),s=o("hdKA9");let c=e=>e,u,d,p=a.default.section(u||(u=c`
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
  font-family: 'AvenirRoman';
  text-align: center;
  color: var(--ink);
  line-height: 1.5;
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
  @media ${0} { font-size: 22px; }
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 36px; }
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop);class m extends i.Component{render(){return e(i).createElement(p,null,e(i).createElement(f,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.2,delay:.5}},"Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design. A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action."))}}var h=m}),a("euXay",function(n,r){let i;t(n.exports,"default",function(){return f});var a=o("i45Qv"),l=o("1KiZd"),s=o("adBNC"),c=o("6lNZD"),u=o("ljp0P");let d=l.default.div(i||(i=(e=>e)`
    display: flex;
    flex-flow: row nowrap;
    background: var(--bg);
    min-height: 100vh;
    transition: background 0.5s ease;
`));class p extends a.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll,{passive:!0});let t=e(s)().offset;this.setState({vh:Math.round((window.document.documentElement.clientHeight+t)*this.pageSplitTimes)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{let{body:e,documentElement:t}=window.document,{vh:n,slideNumber:r}=this.state,i=Math.max(e.scrollTop,t.scrollTop),o=Math.floor(i/n);o!==r&&o>=0&&o<this.workDetails.length&&this.setState({slideNumber:o}),this.lastScrollTop=i,this.ticking=!1}),this.ticking=!0)}render(){let{slideNumber:t}=this.state,n=this.workDetails[t]||this.workDetails[0];return e(a).createElement(d,null,e(a).createElement(c.default,{number:n.number,projectName:n.projectName,projectDesc:n.projectDesc,projectType:n.projectType,roles:n.roles,refreshToggle:!0}),e(a).createElement(u.default,{pageSplitTimes:this.pageSplitTimes}))}constructor(e){super(e),this.state={vh:0,slideNumber:0},this.pageSplitTimes=1.3,this.lastScrollTop=0,this.ticking=!1,this.handleScroll=this.handleScroll.bind(this),this.workDetails=[{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]},{number:"01",projectName:"BluePrint Storybook",projectDesc:"Collaborated with a team to develop a comprehensive design system for a client. Created an extensive Storybook showcasing all the design elements and components.",projectType:"DESIGN SYSTEM",roles:["UI Designer","Technologist"]},{number:"02",projectName:"BluePrint Apps",projectDesc:"Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.",projectType:"ANGULAR APPS",roles:["UI Designer","Front-end Developer"]},{number:"03",projectName:"Admin Portal",projectDesc:"Developed an admin portal for a nail boutique with a database to capture stock and client information, streamlining business operations and providing valuable insights.",projectType:"WEB APP",roles:["MEAN Stack Developer","UI Designer"]},{number:"04",projectName:"Nail boutique website",projectDesc:"Collaborated with a team to develop a website for a nail boutique with a customizer feature that allows customers to design their own nail art.",projectType:"WEBSITE",roles:["Web Developer"]},{number:"05",projectName:"Readpoint",projectDesc:"Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to securely browse and purchase books.",projectType:"WEB APP",roles:["Full Stack Developer"]},{number:"",projectName:"",projectDesc:"",projectType:"",roles:[""]}]}}var f=p}),a("adBNC",function(e,t){e.exports,e.exports=function(){var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function t(){var e,t=((e=document.createElement("div")).style.cssText="position: fixed; top: 0; height: 100vh; pointer-events: none;",document.documentElement.insertBefore(e,document.documentElement.firstChild),e),n=window.innerHeight,r=t.offsetHeight,i=r-n;return document.documentElement.removeChild(t),{vh:r,windowHeight:n,offset:i,isNeeded:0!==i,value:0}}function n(){}function r(){var e=t();return e.value=e.offset,e}var i=Object.freeze({noop:n,computeDifference:r,redefineVhUnit:function(){var e=t();return e.value=.01*e.windowHeight,e}});function o(e){return"string"==typeof e&&e.length>0}var a=Object.freeze({cssVarName:"vh-offset",redefineVh:!1,method:r,force:!1,bind:!0,updateOnTouch:!1,onUpdate:n}),l=!1,s=[];try{var c=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",c,c),window.removeEventListener("test",c,c)}catch(e){l=!1}function u(e,t){s.push({eventName:e,callback:t}),window.addEventListener(e,t,!!l&&{passive:!0})}function d(){s.forEach(function(e){window.removeEventListener(e.eventName,e.callback)}),s=[]}function p(e,t){document.documentElement.style.setProperty("--"+e,t.value+"px")}function f(t,n){return e({},t,{unbind:d,recompute:n.method})}return function(t){var r=Object.freeze(function(t){if(o(t))return e({},a,{cssVarName:t});if("object"!=typeof t)return a;var r={force:!0===t.force,bind:!1!==t.bind,updateOnTouch:!0===t.updateOnTouch,onUpdate:"function"==typeof t.onUpdate?t.onUpdate:n},l=!0===t.redefineVh;return r.method=i[l?"redefineVhUnit":"computeDifference"],r.cssVarName=o(t.cssVarName)?t.cssVarName:l?"vh":a.cssVarName,r}(t)),l=f(r.method(),r);if(!l.isNeeded&&!r.force||(p(r.cssVarName,l),r.onUpdate(l),!r.bind))return l;function s(){window.requestAnimationFrame(function(){var e=r.method();p(r.cssVarName,e),r.onUpdate(f(e,r))})}return l.unbind(),u("orientationchange",s),r.updateOnTouch&&u("touchmove",s),l}}()}),a("6lNZD",function(n,r){t(n.exports,"default",function(){return H});var i=o("i45Qv"),a=o("1KiZd"),l=o("hlvvN"),s=o("d657B"),c=o("5PebM"),u=o("hdKA9");let d=e=>e,p,f,m,h,g,b,v,x,y=a.default.section(p||(p=d`
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
  font-family: 'AvenirHeavy', sans-serif;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`)),E=a.default.div(m||(m=d`
  overflow: hidden;
  margin-bottom: 16px;
`)),k=(0,a.default)(s.motion.h2)(h||(h=d`
  font-family: 'AvenirHeavy', sans-serif;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0;
  @media ${0} { font-size: 32px; }
  @media ${0} { font-size: 38px; }
  @media ${0} { font-size: 44px; }
  @media ${0} { font-size: 64px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL,u.default.tablet),R=a.default.div(g||(g=d`
  overflow: hidden;
  margin-bottom: 32px;
`)),j=(0,a.default)(s.motion.div)(b||(b=d`
  font-family: 'AvenirMedium', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0;
`)),S=(0,a.default)(s.motion.p)(v||(v=d`
  font-family: 'AvenirRoman', sans-serif;
  color: var(--ink);
  line-height: 1.6;
  max-width: 90%;
  @media ${0} { font-size: 16px; }
  @media ${0} { font-size: 18px; }
  @media ${0} { font-size: 20px; }
`),u.default.mobileS,u.default.mobileM,u.default.mobileL),P=(0,a.default)(s.motion.div)(x||(x=d`
  position: absolute;
  bottom: 40px;
  right: 24px;
  font-family: 'AvenirHeavy', sans-serif;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--ink-faint);
  writing-mode: vertical-rl;
  text-transform: uppercase;
`));class T extends i.Component{render(){let{number:t,projectName:n,projectDesc:r,roles:o,projectType:a,refreshToggle:c}=this.props;return n?e(i).createElement(y,null,e(i).createElement(l.AnimatePresence,{mode:"wait"},e(i).createElement(s.motion.div,{key:n,initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.2}},exit:{opacity:0,transition:{duration:.4,ease:"easeIn"}}}},e(i).createElement(w,{variants:{hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}}},"// PROJECT ",t),e(i).createElement(E,null,e(i).createElement(k,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},n)),e(i).createElement(R,null,e(i).createElement(j,{variants:{hidden:{y:"100%"},visible:{y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}},o.join(" • "))),e(i).createElement(S,{variants:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.9,ease:"easeOut"}}}},r),e(i).createElement(P,{variants:{hidden:{opacity:0,scaleY:0,originY:1},visible:{opacity:1,scaleY:1,transition:{duration:1,ease:"easeOut"}}}},a)))):null}}T.propTypes={number:e(c).string.isRequired,projectName:e(c).string.isRequired,projectDesc:e(c).string.isRequired,projectType:e(c).string.isRequired,roles:e(c).array.isRequired,refreshToggle:e(c).bool.isRequired};var H=T}),a("ljp0P",function(n,r){t(n.exports,"default",function(){return y});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM"),s=o("adBNC"),c=o("1dJHR"),u=o("bo2dU"),d=o("fujPv"),p=o("2Btni"),f=o("2c3yM");let m=e=>e,h,g,b=a.default.div(h||(h=m`
  width: 100%;
  height: 950vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
`)),v=a.default.div(g||(g=m`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`));class x extends i.Component{componentDidMount(){let t=e(s)().offset;window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.setState({scrollHeight:Math.round(window.document.documentElement.scrollHeight),screenHeight:Math.round(window.document.documentElement.clientHeight+t)})}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){this.ticking||(window.requestAnimationFrame(()=>{let{body:e,documentElement:t}=window.document,n=Math.max(e.scrollTop,t.scrollTop)/(t.scrollHeight-t.clientHeight)*100,r=100*t.clientHeight/t.scrollHeight,i=1240*t.clientHeight/t.scrollHeight;n>=r&&n<=i&&this.setState({scrollPercent:n}),this.ticking=!1}),this.ticking=!0)}render(){let{scrollPercent:t,scrollHeight:n,screenHeight:r}=this.state,{pageSplitTimes:o}=this.props,a=100*o;return e(i).createElement(b,null,e(i).createElement(v,{height:a}),e(i).createElement(v,{height:a},e(i).createElement(c.default,{boxHeight:a,index:1,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(v,{height:a},e(i).createElement(u.default,{boxHeight:a,index:2,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(v,{height:a},e(i).createElement(d.default,{boxHeight:a,index:3,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(v,{height:a},e(i).createElement(p.default,{boxHeight:a,index:4,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(v,{height:a},e(i).createElement(f.default,{boxHeight:a,index:5,scrollPercent:t,screenHeight:r,scrollHeight:n})),e(i).createElement(v,{height:a}))}constructor(e){super(e),this.state={screenHeight:0,scrollHeight:0,scrollPercent:0},this.ticking=!1,this.handleScroll=this.handleScroll.bind(this)}}x.propTypes={pageSplitTimes:e(l).number.isRequired};var y=x}),a("1dJHR",function(n,r){t(n.exports,"default",function(){return E});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p,f=new URL(o("lIONG")).href,m=new URL(o("ivI7k")).href,h=new URL(o("5x9IF")).href,g=new URL(o("jPhn4")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
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
`));class w extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(y,{src:h,scroll:t,alt:"voistrapPeople"}),e(i).createElement(x,{src:g,scroll:t,alt:"voistrapPhone"}),e(i).createElement(v,{src:m,scroll:t,alt:"voistrapMeetings"}),e(i).createElement(b,{src:f,scroll:t,alt:"voistrapHome"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("jPhn4",function(e,t){e.exports=n("dxPfp")}),a("bo2dU",function(n,r){t(n.exports,"default",function(){return E});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p,f=new URL(o("em8vh")).href,m=new URL(o("Amvsb")).href,h=new URL(o("3O1sE")).href,g=new URL(o("4A7x9")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${15*e}%)`})})(c||(c=s`
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
`));class w extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(x,{src:g,scroll:t,alt:"addFood"}),e(i).createElement(y,{src:h,scroll:t,alt:"addRestaurant"}),e(i).createElement(v,{src:f,scroll:t,alt:"Home"}),e(i).createElement(b,{src:m,scroll:t,alt:"Restaurant"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("fujPv",function(n,r){t(n.exports,"default",function(){return E});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p,f=new URL(o("ZAFIL")).href,m=new URL(o("7mwN7")).href,h=new URL(o("9Z0Zb")).href,g=new URL(o("86aH3")).href,b=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${35*e}%)`})})(c||(c=s`
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
`));class w extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(x,{src:h,scroll:t,alt:"paths"}),e(i).createElement(y,{src:g,scroll:t,alt:"bigBubble"}),e(i).createElement(v,{src:m,scroll:t,alt:"bubbles"}),e(i).createElement(b,{src:f,scroll:t,alt:"dots"}))}}w.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var E=w}),a("2Btni",function(n,r){t(n.exports,"default",function(){return x});var i=o("i45Qv"),a=o("1KiZd"),l=o("5PebM");let s=e=>e,c,u,d,p=new URL(o("2iozw")).href,f=new URL(o("cOLH8")).href,m=new URL(o("7CC1f")).href,h=a.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${35*e}%)`})})(c||(c=s`
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
`));class v extends i.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:o,screenHeight:a}=this.props;return t-=a*(n*r-100)/100*100/o+(r-1),e(i).createElement(e(i).Fragment,null,e(i).createElement(b,{src:m,scroll:t,alt:"bigBubble"}),e(i).createElement(g,{src:f,scroll:t,alt:"bubbles"}),e(i).createElement(h,{src:p,scroll:t,alt:"dots"}))}}v.propTypes={boxHeight:e(l).number.isRequired,index:e(l).number.isRequired,screenHeight:e(l).number.isRequired,scrollHeight:e(l).number.isRequired,scrollPercent:e(l).number.isRequired};var x=v}),a("2c3yM",function(n,r){let i;t(n.exports,"default",function(){return p});var a=o("i45Qv"),l=o("1KiZd"),s=o("5PebM");let c=new URL(o("lOoPA")).href,u=l.default.img.attrs({style:({scroll:e})=>({transform:`translate(0px,-${10*e}%) scale(0.7)`})})(i||(i=(e=>e)`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`));class d extends a.Component{render(){let{scrollPercent:t}=this.props,{boxHeight:n,index:r,scrollHeight:i,screenHeight:o}=this.props;return t-=o*(n*r-100)/100*100/i+(r-1),e(a).createElement(e(a).Fragment,null,e(a).createElement(u,{src:c,scroll:t,alt:"bigBubble"}))}}d.propTypes={boxHeight:e(s).number.isRequired,index:e(s).number.isRequired,screenHeight:e(s).number.isRequired,scrollHeight:e(s).number.isRequired,scrollPercent:e(s).number.isRequired};var p=d}),a("19Ypr",function(n,r){t(n.exports,"default",function(){return m});var i=o("i45Qv"),a=o("1KiZd"),l=o("hdKA9");let s=e=>e,c,u,d,p=a.default.section(c||(c=s`
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
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop);a.default.div(u||(u=s`
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
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop),a.default.div(d||(d=s`
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
`),l.default.mobileS,l.default.mobileM,l.default.mobileL,l.default.tablet,l.default.laptop);class f extends i.Component{render(){return e(i).createElement(p,null)}}var m=f}),a("4Yzid",function(n,r){t(n.exports,"default",function(){return y});var i=o("i45Qv"),a=o("1KiZd"),l=o("hFsP4"),s=o("hdKA9");let c=e=>e,u,d,p,f=new URL(o("2wsNK")).href,m=new URL(o("cywS4")).href,h=new URL(o("98XUh")).href,g=a.default.section(u||(u=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),b=a.default.div(d||(d=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop),v=a.default.div(p||(p=c`
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
`),s.default.mobileS,s.default.mobileM,s.default.mobileL,s.default.tablet,s.default.laptop);class x extends i.Component{render(){return e(i).createElement(g,null,e(i).createElement(b,null,"CONTACT"),e(i).createElement(v,null,e(i).createElement(l.default,{imgURL:f,alternate:"Github",redirectURL:"https://github.com/Royverse"}),e(i).createElement(l.default,{imgURL:m,alternate:"Mail",redirectURL:"mailto:roymootsana@gmail.com"}),e(i).createElement(l.default,{imgURL:h,alternate:"Linkedin",redirectURL:"https://www.linkedin.com/in/roy-mootsana-77818a14a/"})))}}var y=x}),a("hFsP4",function(n,r){let i;t(n.exports,"default",function(){return p});var a=o("i45Qv"),l=o("1KiZd"),s=o("5PebM"),c=o("hdKA9");let u=l.default.img(i||(i=(e=>e)`
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
//# sourceMappingURL=LegacyPortfolio.d6554026.js.map
