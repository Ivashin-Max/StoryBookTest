(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[4761],{"./node_modules/@kunukn/react-collapse/dist/Collapse.umd.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){"use strict";var t="default"in e?e.default:e;function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))}return function(n){var o=n.children,l=n.transition,s=n.style,f=n.render,p=n.elementType,y=void 0===p?"div":p,d=n.isOpen,b=n.collapseHeight,h=void 0===b?"0px":b,g=n.onInit,v=n.onChange,m=n.className,O=void 0===m?"collapse-css-transition":m,j=n.addState,w=n.noAnim,x=n.overflowOnExpanded,S=a(n,["children","transition","style","render","elementType","isOpen","collapseHeight","onInit","onChange","className","addState","noAnim","overflowOnExpanded"]),P=function(){return"0px"===h?"hidden":""},A=c(e.useReducer((function(e){return e+1}),0),2),E=(A[0],A[1]),D=e.useRef(),I=c(e.useState(0),2),T=I[0],C=I[1],k=e.useRef({collapse:d?"expanded":"collapsed",style:{height:d?"":h,visibility:d?"":P()}}).current;e.useEffect((function(){T&&N(v)}),[T]);var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e&&(e.name,e(i({state:k.collapse,style:k.style},t)))};function R(){D.current&&(k.collapse="collapsed",k.style={height:h,visibility:P()},E(),setTimeout((function(){return C(Date.now)}),0))}function q(){D.current&&(k.collapse="expanded",k.style={height:"",visibility:""},E(),setTimeout((function(){return C(Date.now)}),0))}function H(){return"".concat(D.current.scrollHeight,"px")}var F="expanded"===k.collapse||"expanding"===k.collapse;!F&&d&&function(){if(D.current){if(w)return q();k.collapse="expanding",u((function(){D.current&&"expanding"===k.collapse&&(k.style={height:H(),visibility:""},C(Date.now))}))}}(),F&&!d&&function(){if(D.current){if(w)return R();k.collapse="collapsing",k.style={height:H(),visibility:""},E(),u((function(){D.current&&"collapsing"===k.collapse&&(k.style={height:h,visibility:""},C(Date.now))}))}}();var M=i({overflow:"expanded"===k.collapse&&x?"":"hidden",transition:l},s,{},k.style),U=y,$=e.useCallback((function(e){e&&(D.current=e,N(g,{node:e}))}),[y]),z=j?"".concat(O," --c-").concat(k.collapse):O;return t.createElement(U,r({ref:$,style:M,onTransitionEnd:function(e){var t=e.target,n=e.propertyName;if(t===D.current&&"height"===n){var r=t.style.height;switch(k.collapse,k.collapse){case"expanding":""===r||r===h||q();break;case"collapsing":""===r||r!==h||R()}}},className:z},S),"function"==typeof o?o(k.collapse):"function"==typeof f?f(k.collapse):o)}}(__webpack_require__("./node_modules/react/index.js"))},"./node_modules/consolidated-events/lib/index.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{addEventListener:function(){return addEventListener}});var CAN_USE_DOM=!("undefined"==typeof window||!window.document||!window.document.createElement);var memoized=void 0;function canUsePassiveEventListeners(){return void 0===memoized&&(memoized=function testPassiveEventListeners(){if(!CAN_USE_DOM)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var supportsPassiveOption=!1;try{var opts=Object.defineProperty({},"passive",{get:function get(){supportsPassiveOption=!0}}),noop=function noop(){};window.addEventListener("testPassiveEventSupport",noop,opts),window.removeEventListener("testPassiveEventSupport",noop,opts)}catch(e){}return supportsPassiveOption}()),memoized}function ensureCanMutateNextEventHandlers(eventHandlers){eventHandlers.handlers===eventHandlers.nextHandlers&&(eventHandlers.nextHandlers=eventHandlers.handlers.slice())}function TargetEventHandlers(target){this.target=target,this.events={}}TargetEventHandlers.prototype.getEventHandlers=function getEventHandlers(eventName,options){var key=String(eventName)+" "+String(function eventOptionsKey(normalizedEventOptions){return normalizedEventOptions?!0===normalizedEventOptions?100:(normalizedEventOptions.capture<<0)+(normalizedEventOptions.passive<<1)+(normalizedEventOptions.once<<2):0}(options));return this.events[key]||(this.events[key]={handlers:[],handleEvent:void 0},this.events[key].nextHandlers=this.events[key].handlers),this.events[key]},TargetEventHandlers.prototype.handleEvent=function handleEvent(eventName,options,event){var eventHandlers=this.getEventHandlers(eventName,options);eventHandlers.handlers=eventHandlers.nextHandlers,eventHandlers.handlers.forEach((function(handler){handler&&handler(event)}))},TargetEventHandlers.prototype.add=function add(eventName,listener,options){var _this=this,eventHandlers=this.getEventHandlers(eventName,options);ensureCanMutateNextEventHandlers(eventHandlers),0===eventHandlers.nextHandlers.length&&(eventHandlers.handleEvent=this.handleEvent.bind(this,eventName,options),this.target.addEventListener(eventName,eventHandlers.handleEvent,options)),eventHandlers.nextHandlers.push(listener);var isSubscribed=!0;return function unsubscribe(){if(isSubscribed){isSubscribed=!1,ensureCanMutateNextEventHandlers(eventHandlers);var index=eventHandlers.nextHandlers.indexOf(listener);eventHandlers.nextHandlers.splice(index,1),0===eventHandlers.nextHandlers.length&&(_this.target&&_this.target.removeEventListener(eventName,eventHandlers.handleEvent,options),eventHandlers.handleEvent=void 0)}}};var EVENT_HANDLERS_KEY="__consolidated_events_handlers__";function addEventListener(target,eventName,listener,options){target[EVENT_HANDLERS_KEY]||(target[EVENT_HANDLERS_KEY]=new TargetEventHandlers(target));var normalizedEventOptions=function normalizeEventOptions(eventOptions){if(eventOptions)return canUsePassiveEventListeners()?eventOptions:!!eventOptions.capture}(options);return target[EVENT_HANDLERS_KEY].add(eventName,listener,normalizedEventOptions)}},"./node_modules/document.contains/implementation.js":function(module){"use strict";module.exports=function contains(other){if(arguments.length<1)throw new TypeError("1 argument is required");if("object"!=typeof other)throw new TypeError("Argument 1 (”other“) to Node.contains must be an instance of Node");var node=other;do{if(this===node)return!0;node&&(node=node.parentNode)}while(node);return!1}},"./node_modules/document.contains/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var define=__webpack_require__("./node_modules/define-properties/index.js"),implementation=__webpack_require__("./node_modules/document.contains/implementation.js"),getPolyfill=__webpack_require__("./node_modules/document.contains/polyfill.js"),polyfill=getPolyfill(),boundContains=function contains(node,other){return polyfill.apply(node,[other])};define(boundContains,{getPolyfill:getPolyfill,implementation:implementation,shim:__webpack_require__("./node_modules/document.contains/shim.js")}),module.exports=boundContains},"./node_modules/document.contains/polyfill.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var implementation=__webpack_require__("./node_modules/document.contains/implementation.js");module.exports=function getPolyfill(){if("undefined"!=typeof document){if(document.contains)return document.contains;if(document.body&&document.body.contains)try{if("boolean"==typeof document.body.contains.call(document,""))return document.body.contains}catch(e){}}return implementation}},"./node_modules/document.contains/shim.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var define=__webpack_require__("./node_modules/define-properties/index.js"),getPolyfill=__webpack_require__("./node_modules/document.contains/polyfill.js");module.exports=function shimContains(){var polyfill=getPolyfill();return"undefined"!=typeof document&&(define(document,{contains:polyfill},{contains:function(){return document.contains!==polyfill}}),"undefined"!=typeof Element&&define(Element.prototype,{contains:polyfill},{contains:function(){return Element.prototype.contains!==polyfill}})),polyfill}},"./node_modules/es-abstract/2021/RequireObjectCoercible.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/es-abstract/5/CheckObjectCoercible.js")},"./node_modules/es-abstract/5/CheckObjectCoercible.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var $TypeError=__webpack_require__("./node_modules/get-intrinsic/index.js")("%TypeError%");module.exports=function CheckObjectCoercible(value,optMessage){if(null==value)throw new $TypeError(optMessage||"Cannot call method on "+value);return value}},"./node_modules/object.values/implementation.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var RequireObjectCoercible=__webpack_require__("./node_modules/es-abstract/2021/RequireObjectCoercible.js"),callBound=__webpack_require__("./node_modules/call-bind/callBound.js"),$isEnumerable=callBound("Object.prototype.propertyIsEnumerable"),$push=callBound("Array.prototype.push");module.exports=function values(O){var obj=RequireObjectCoercible(O),vals=[];for(var key in obj)$isEnumerable(obj,key)&&$push(vals,obj[key]);return vals}},"./node_modules/object.values/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var define=__webpack_require__("./node_modules/define-properties/index.js"),callBind=__webpack_require__("./node_modules/call-bind/index.js"),implementation=__webpack_require__("./node_modules/object.values/implementation.js"),getPolyfill=__webpack_require__("./node_modules/object.values/polyfill.js"),shim=__webpack_require__("./node_modules/object.values/shim.js"),polyfill=callBind(getPolyfill(),Object);define(polyfill,{getPolyfill:getPolyfill,implementation:implementation,shim:shim}),module.exports=polyfill},"./node_modules/object.values/polyfill.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var implementation=__webpack_require__("./node_modules/object.values/implementation.js");module.exports=function getPolyfill(){return"function"==typeof Object.values?Object.values:implementation}},"./node_modules/object.values/shim.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var getPolyfill=__webpack_require__("./node_modules/object.values/polyfill.js"),define=__webpack_require__("./node_modules/define-properties/index.js");module.exports=function shimValues(){var polyfill=getPolyfill();return define(Object,{values:polyfill},{values:function testValues(){return Object.values!==polyfill}}),polyfill}},"./node_modules/react-outside-click-handler/build/OutsideClickHandler.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_propTypes2=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_airbnbPropTypes=__webpack_require__("./node_modules/react-outside-click-handler/node_modules/airbnb-prop-types/index.js"),_consolidatedEvents=__webpack_require__("./node_modules/consolidated-events/lib/index.esm.js"),_object2=_interopRequireDefault(__webpack_require__("./node_modules/object.values/index.js")),_document2=_interopRequireDefault(__webpack_require__("./node_modules/document.contains/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var DISPLAY={BLOCK:"block",FLEX:"flex",INLINE:"inline",INLINE_BLOCK:"inline-block",CONTENTS:"contents"},propTypes=(0,_airbnbPropTypes.forbidExtraProps)({children:_propTypes2.default.node.isRequired,onOutsideClick:_propTypes2.default.func.isRequired,disabled:_propTypes2.default.bool,useCapture:_propTypes2.default.bool,display:_propTypes2.default.oneOf((0,_object2.default)(DISPLAY))}),defaultProps={disabled:!1,useCapture:!0,display:DISPLAY.BLOCK},OutsideClickHandler=function(_React$Component){function OutsideClickHandler(){var _ref;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,OutsideClickHandler);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var _this=function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(_ref=OutsideClickHandler.__proto__||Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref,[this].concat(args)));return _this.onMouseDown=_this.onMouseDown.bind(_this),_this.onMouseUp=_this.onMouseUp.bind(_this),_this.setChildNodeRef=_this.setChildNodeRef.bind(_this),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(OutsideClickHandler,_React$Component),_createClass(OutsideClickHandler,[{key:"componentDidMount",value:function componentDidMount(){var _props=this.props,disabled=_props.disabled,useCapture=_props.useCapture;disabled||this.addMouseDownEventListener(useCapture)}},{key:"componentDidUpdate",value:function componentDidUpdate(_ref2){var prevDisabled=_ref2.disabled,_props2=this.props,disabled=_props2.disabled,useCapture=_props2.useCapture;prevDisabled!==disabled&&(disabled?this.removeEventListeners():this.addMouseDownEventListener(useCapture))}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeEventListeners()}},{key:"onMouseDown",value:function onMouseDown(e){var useCapture=this.props.useCapture;this.childNode&&(0,_document2.default)(this.childNode,e.target)||(this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),this.removeMouseUp=(0,_consolidatedEvents.addEventListener)(document,"mouseup",this.onMouseUp,{capture:useCapture}))}},{key:"onMouseUp",value:function onMouseUp(e){var onOutsideClick=this.props.onOutsideClick,isDescendantOfRoot=this.childNode&&(0,_document2.default)(this.childNode,e.target);this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),isDescendantOfRoot||onOutsideClick(e)}},{key:"setChildNodeRef",value:function setChildNodeRef(ref){this.childNode=ref}},{key:"addMouseDownEventListener",value:function addMouseDownEventListener(useCapture){this.removeMouseDown=(0,_consolidatedEvents.addEventListener)(document,"mousedown",this.onMouseDown,{capture:useCapture})}},{key:"removeEventListeners",value:function removeEventListeners(){this.removeMouseDown&&this.removeMouseDown(),this.removeMouseUp&&this.removeMouseUp()}},{key:"render",value:function render(){var _props3=this.props,children=_props3.children,display=_props3.display;return _react2.default.createElement("div",{ref:this.setChildNodeRef,style:display!==DISPLAY.BLOCK&&(0,_object2.default)(DISPLAY).includes(display)?{display:display}:void 0},children)}}]),OutsideClickHandler}(_react2.default.Component);exports.default=OutsideClickHandler,OutsideClickHandler.propTypes=propTypes,OutsideClickHandler.defaultProps=defaultProps},"./node_modules/react-outside-click-handler/index.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react-outside-click-handler/build/OutsideClickHandler.js")},"./node_modules/react-outside-click-handler/node_modules/airbnb-prop-types/build/mocks/index.js":function(module){"use strict";function noop(){return null}function noopThunk(){return noop}noop.isRequired=noop,module.exports={and:noopThunk,between:noopThunk,booleanSome:noopThunk,childrenHavePropXorChildren:noopThunk,childrenOf:noopThunk,childrenOfType:noopThunk,childrenSequenceOf:noopThunk,componentWithName:noopThunk,disallowedIf:noopThunk,elementType:noopThunk,empty:noopThunk,explicitNull:noopThunk,forbidExtraProps:Object,integer:noopThunk,keysOf:noopThunk,mutuallyExclusiveProps:noopThunk,mutuallyExclusiveTrueProps:noopThunk,nChildren:noopThunk,nonNegativeInteger:noop,nonNegativeNumber:noopThunk,numericString:noopThunk,object:noopThunk,or:noopThunk,predicate:noopThunk,range:noopThunk,ref:noopThunk,requiredBy:noopThunk,restrictedProp:noopThunk,sequenceOf:noopThunk,shape:noopThunk,stringEndsWith:noopThunk,stringStartsWith:noopThunk,uniqueArray:noopThunk,uniqueArrayOf:noopThunk,valuesOf:noopThunk,withShape:noopThunk}},"./node_modules/react-outside-click-handler/node_modules/airbnb-prop-types/index.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react-outside-click-handler/node_modules/airbnb-prop-types/build/mocks/index.js")},"./node_modules/swiper/esm/react/swiper-slide.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return SwiperSlide}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/swiper/esm/react/utils.js"),_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js"),_excluded=["tag","children","className","swiper","zoom","virtualIndex"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SwiperSlide=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_temp,externalRef){var slideData,_ref=void 0===_temp?{}:_temp,_ref$tag=_ref.tag,Tag=void 0===_ref$tag?"div":_ref$tag,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,swiper=_ref.swiper,zoom=_ref.zoom,virtualIndex=_ref.virtualIndex,rest=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),slideElRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("swiper-slide"),slideClasses=_useState[0],setSlideClasses=_useState[1];function updateClasses(swiper,el,classNames){el===slideElRef.current&&setSlideClasses(classNames)}(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){if(externalRef&&(externalRef.current=slideElRef.current),slideElRef.current&&swiper){if(!swiper.destroyed)return swiper.on("_slideClass",updateClasses),function(){swiper&&swiper.off("_slideClass",updateClasses)};"swiper-slide"!==slideClasses&&setSlideClasses("swiper-slide")}})),(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){swiper&&slideElRef.current&&setSlideClasses(swiper.getSlideClasses(slideElRef.current))}),[swiper]),"function"==typeof children&&(slideData={isActive:slideClasses.indexOf("swiper-slide-active")>=0||slideClasses.indexOf("swiper-slide-duplicate-active")>=0,isVisible:slideClasses.indexOf("swiper-slide-visible")>=0,isDuplicate:slideClasses.indexOf("swiper-slide-duplicate")>=0,isPrev:slideClasses.indexOf("swiper-slide-prev")>=0||slideClasses.indexOf("swiper-slide-duplicate-prev")>=0,isNext:slideClasses.indexOf("swiper-slide-next")>=0||slideClasses.indexOf("swiper-slide-duplicate-next")>=0});var renderChildren=function renderChildren(){return"function"==typeof children?children(slideData):children};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({ref:slideElRef,className:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kI)(slideClasses+(className?" "+className:"")),"data-swiper-slide-index":virtualIndex},rest),zoom?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof zoom?zoom:void 0},renderChildren()):renderChildren())}));SwiperSlide.displayName="SwiperSlide"}}]);