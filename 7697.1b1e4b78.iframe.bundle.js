/*! For license information please see 7697.1b1e4b78.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[7697,2068],{"./node_modules/next/dist/shared/lib/dynamic.js":function(module,exports,__webpack_require__){"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function dynamic(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions={loading:({error:error,isLoading:isLoading,pastDelay:pastDelay})=>null};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions));if(loadableOptions=_extends({},loadableOptions,options),!process.env.__NEXT_REACT_ROOT&&loadableOptions.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");loadableOptions.loadableGenerated&&(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated),delete loadableOptions.loadableGenerated);if("boolean"==typeof loadableOptions.ssr&&!loadableOptions.suspense){if(!loadableOptions.ssr)return delete loadableOptions.ssr,noSSR(loadableFn,loadableOptions);delete loadableOptions.ssr}return loadableFn(loadableOptions)},exports.noSSR=noSSR;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_loadable=_interopRequireDefault(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.js"));function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const isServerSide="undefined"==typeof window;function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>_react.default.createElement(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;const LoadableContext=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")).default.createContext(null);exports.LoadableContext=LoadableContext},"./node_modules/next/dist/shared/lib/loadable.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")),_loadableContext=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{useSyncExternalStore:useSyncExternalStore}=process.env.__NEXT_REACT_ROOT?__webpack_require__("./node_modules/react/index.js"):__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},options);opts.suspense&&(opts.lazy=_react.default.lazy(opts.loader));let subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()}))}function useLoadableModule(){init();const context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}const LoadableComponent=opts.suspense?function LazyImpl(props,ref){return useLoadableModule(),_react.default.createElement(opts.lazy,_extends({},props,{ref:ref}))}:function LoadableImpl(props,ref){useLoadableModule();const state=useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.__esModule?obj.default:obj}(state.loaded),props):null),[props,state])};return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=(ids=[])=>new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);var _default=Loadable;exports.default=_default},"./node_modules/next/dynamic.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")},"./node_modules/react-intersection-observer/react-intersection-observer.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{YD:function(){return useInView},df:function(){return InView}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}var observerMap=new Map,RootIds=new WeakMap,rootId=0,unsupportedValue=void 0;function optionsToId(options){return Object.keys(options).sort().filter((function(key){return void 0!==options[key]})).map((function(key){return key+"_"+("root"===key?function getRootId(root){return root?(RootIds.has(root)||(rootId+=1,RootIds.set(root,rootId.toString())),RootIds.get(root)):"0"}(options.root):options[key])})).toString()}function observe(element,callback,options,fallbackInView){if(void 0===options&&(options={}),void 0===fallbackInView&&(fallbackInView=unsupportedValue),void 0===window.IntersectionObserver&&void 0!==fallbackInView){var bounds=element.getBoundingClientRect();return callback(fallbackInView,{isIntersecting:fallbackInView,target:element,intersectionRatio:"number"==typeof options.threshold?options.threshold:0,time:0,boundingClientRect:bounds,intersectionRect:bounds,rootBounds:bounds}),function(){}}var _createObserver=function createObserver(options){var id=optionsToId(options),instance=observerMap.get(id);if(!instance){var thresholds,elements=new Map,observer=new IntersectionObserver((function(entries){entries.forEach((function(entry){var _elements$get,inView=entry.isIntersecting&&thresholds.some((function(threshold){return entry.intersectionRatio>=threshold}));options.trackVisibility&&void 0===entry.isVisible&&(entry.isVisible=inView),null==(_elements$get=elements.get(entry.target))||_elements$get.forEach((function(callback){callback(inView,entry)}))}))}),options);thresholds=observer.thresholds||(Array.isArray(options.threshold)?options.threshold:[options.threshold||0]),instance={id:id,observer:observer,elements:elements},observerMap.set(id,instance)}return instance}(options),id=_createObserver.id,observer=_createObserver.observer,elements=_createObserver.elements,callbacks=elements.get(element)||[];return elements.has(element)||elements.set(element,callbacks),callbacks.push(callback),observer.observe(element),function unobserve(){callbacks.splice(callbacks.indexOf(callback),1),0===callbacks.length&&(elements.delete(element),observer.unobserve(element)),0===elements.size&&(observer.disconnect(),observerMap.delete(id))}}var _excluded=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function isPlainChildren(props){return"function"!=typeof props.children}var InView=function(_React$Component){function InView(props){var _this;return(_this=_React$Component.call(this,props)||this).node=null,_this._unobserveCb=null,_this.handleNode=function(node){_this.node&&(_this.unobserve(),node||_this.props.triggerOnce||_this.props.skip||_this.setState({inView:!!_this.props.initialInView,entry:void 0})),_this.node=node||null,_this.observeNode()},_this.handleChange=function(inView,entry){inView&&_this.props.triggerOnce&&_this.unobserve(),isPlainChildren(_this.props)||_this.setState({inView:inView,entry:entry}),_this.props.onChange&&_this.props.onChange(inView,entry)},_this.state={inView:!!props.initialInView,entry:void 0},_this}!function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(InView,_React$Component);var _proto=InView.prototype;return _proto.componentDidUpdate=function componentDidUpdate(prevProps){prevProps.rootMargin===this.props.rootMargin&&prevProps.root===this.props.root&&prevProps.threshold===this.props.threshold&&prevProps.skip===this.props.skip&&prevProps.trackVisibility===this.props.trackVisibility&&prevProps.delay===this.props.delay||(this.unobserve(),this.observeNode())},_proto.componentWillUnmount=function componentWillUnmount(){this.unobserve(),this.node=null},_proto.observeNode=function observeNode(){if(this.node&&!this.props.skip){var _this$props=this.props,threshold=_this$props.threshold,root=_this$props.root,rootMargin=_this$props.rootMargin,trackVisibility=_this$props.trackVisibility,delay=_this$props.delay,fallbackInView=_this$props.fallbackInView;this._unobserveCb=observe(this.node,this.handleChange,{threshold:threshold,root:root,rootMargin:rootMargin,trackVisibility:trackVisibility,delay:delay},fallbackInView)}},_proto.unobserve=function unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},_proto.render=function render(){if(!isPlainChildren(this.props)){var _this$state=this.state,inView=_this$state.inView,entry=_this$state.entry;return this.props.children({inView:inView,entry:entry,ref:this.handleNode})}var _this$props2=this.props,children=_this$props2.children,as=_this$props2.as,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_this$props2,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(as||"div",_extends({ref:this.handleNode},props),children)},InView}(react__WEBPACK_IMPORTED_MODULE_0__.Component);function useInView(_temp){var _ref=void 0===_temp?{}:_temp,threshold=_ref.threshold,delay=_ref.delay,trackVisibility=_ref.trackVisibility,rootMargin=_ref.rootMargin,root=_ref.root,triggerOnce=_ref.triggerOnce,skip=_ref.skip,initialInView=_ref.initialInView,fallbackInView=_ref.fallbackInView,unobserve=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState({inView:!!initialInView}),state=_React$useState[0],setState=_React$useState[1],setRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){void 0!==unobserve.current&&(unobserve.current(),unobserve.current=void 0),skip||node&&(unobserve.current=observe(node,(function(inView,entry){setState({inView:inView,entry:entry}),entry.isIntersecting&&triggerOnce&&unobserve.current&&(unobserve.current(),unobserve.current=void 0)}),{root:root,rootMargin:rootMargin,threshold:threshold,trackVisibility:trackVisibility,delay:delay},fallbackInView))}),[Array.isArray(threshold)?threshold.toString():threshold,root,rootMargin,triggerOnce,skip,trackVisibility,fallbackInView,delay]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){unobserve.current||!state.entry||triggerOnce||skip||setState({inView:!!initialInView})}));var result=[setRef,state.inView,state.entry];return result.ref=result[0],result.inView=result[1],result.entry=result[2],result}InView.displayName="InView",InView.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},"./node_modules/swiper/esm/react/swiper-slide.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return SwiperSlide}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/swiper/esm/react/utils.js"),_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js"),_excluded=["tag","children","className","swiper","zoom","virtualIndex"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SwiperSlide=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_temp,externalRef){var slideData,_ref=void 0===_temp?{}:_temp,_ref$tag=_ref.tag,Tag=void 0===_ref$tag?"div":_ref$tag,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,swiper=_ref.swiper,zoom=_ref.zoom,virtualIndex=_ref.virtualIndex,rest=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),slideElRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("swiper-slide"),slideClasses=_useState[0],setSlideClasses=_useState[1];function updateClasses(swiper,el,classNames){el===slideElRef.current&&setSlideClasses(classNames)}(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){if(externalRef&&(externalRef.current=slideElRef.current),slideElRef.current&&swiper){if(!swiper.destroyed)return swiper.on("_slideClass",updateClasses),function(){swiper&&swiper.off("_slideClass",updateClasses)};"swiper-slide"!==slideClasses&&setSlideClasses("swiper-slide")}})),(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){swiper&&slideElRef.current&&setSlideClasses(swiper.getSlideClasses(slideElRef.current))}),[swiper]),"function"==typeof children&&(slideData={isActive:slideClasses.indexOf("swiper-slide-active")>=0||slideClasses.indexOf("swiper-slide-duplicate-active")>=0,isVisible:slideClasses.indexOf("swiper-slide-visible")>=0,isDuplicate:slideClasses.indexOf("swiper-slide-duplicate")>=0,isPrev:slideClasses.indexOf("swiper-slide-prev")>=0||slideClasses.indexOf("swiper-slide-duplicate-prev")>=0,isNext:slideClasses.indexOf("swiper-slide-next")>=0||slideClasses.indexOf("swiper-slide-duplicate-next")>=0});var renderChildren=function renderChildren(){return"function"==typeof children?children(slideData):children};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({ref:slideElRef,className:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kI)(slideClasses+(className?" "+className:"")),"data-swiper-slide-index":virtualIndex},rest),zoom?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof zoom?zoom:void 0},renderChildren()):renderChildren())}));SwiperSlide.displayName="SwiperSlide"},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")}}]);