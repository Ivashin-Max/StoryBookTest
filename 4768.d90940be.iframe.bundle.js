"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[4768,5005,6079],{"./src/components/common/SimpleSlider/SimpleSlider.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/SimpleSlider/SimpleSlider.styled.tsx"),swiper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/swiper/esm/components/core/core-class.js"),swiper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/swiper/esm/components/controller/controller.js"),swiper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/swiper/esm/components/keyboard/keyboard.js"),swiper__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/swiper/esm/components/autoplay/autoplay.js"),_components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/SliderNavigation/SliderNavigation.tsx"),_hooks_useIsMatches__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useIsMatches.ts"),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/helpers/index.ts"),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-redux/es/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var connector=(0,react_redux__WEBPACK_IMPORTED_MODULE_6__.$j)((function mapStateToProps(_ref){return{preloader:_ref.preloader}})),SWIPER_OPTIONS={slidesPerView:"auto",speed:800,keyboard:!0};swiper__WEBPACK_IMPORTED_MODULE_7__.Z.use([swiper__WEBPACK_IMPORTED_MODULE_8__.Z,swiper__WEBPACK_IMPORTED_MODULE_9__.Z,swiper__WEBPACK_IMPORTED_MODULE_10__.Z]);var SimpleSlider=function SimpleSlider(_ref2){var className=_ref2.className,preloader=_ref2.preloader,bg=_ref2.bg,title=_ref2.title,links=_ref2.links,_ref2$showNavigation=_ref2.showNavigation,showNavigation=void 0===_ref2$showNavigation||_ref2$showNavigation,_ref2$border=_ref2.border,border=void 0!==_ref2$border&&_ref2$border,onSwiper=_ref2.onSwiper,children=_ref2.children,swiperOptions=_ref2.swiperOptions,_ref2$animate=_ref2.animate,animate=void 0===_ref2$animate||_ref2$animate,topOffset=_ref2.topOffset,bottomOffset=_ref2.bottomOffset,modals=_ref2.modals,metrika=_ref2.metrika,metriksSample=_ref2.metriksSample,id=_ref2.id,refTitle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("beginning"),positionSlider=_useState[0],setPositionSlider=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),swiper=_useState2[0],setSwiper=_useState2[1],isMobile=(0,_hooks_useIsMatches__WEBPACK_IMPORTED_MODULE_4__.Z)("xl"),optionsSlider=_objectSpread(_objectSpread({},SWIPER_OPTIONS),swiperOptions);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var tm,touchMove=!(null==swiperOptions||!swiperOptions.allowTouchMove);return swiper&&(swiper.allowTouchMove=!!isMobile||touchMove,tm=setTimeout((function(){swiper.update()}),1e3)),function(){return clearTimeout(tm)}}),[swiper,isMobile]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){swiper&&onSwiper&&onSwiper(swiper)}),[swiper,onSwiper]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){preloader.done&&(null==swiper||swiper.update())}),[preloader.done]),__jsx(_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__.W2,{id:id,className:className,bg:bg,topOffset:topOffset,bottomOffset:bottomOffset},title&&__jsx(_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__.Rv,{border:border,className:animate?"":"_prepare",haveLinks:!!links,haveNav:showNavigation},title&&__jsx("h2",{ref:refTitle,dangerouslySetInnerHTML:{__html:title}}),(links||showNavigation)&&__jsx("div",null,(null==links?void 0:links.length)&&links.map((function(link,i){return __jsx(_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__.bO,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_11__.Z)({},link,{key:i,metrika:metrika||metriksSample&&function(){return(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.k2)(metriksSample.event,metriksSample.category,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},metriksSample.action,(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.D7)(link.text)))}}))})),showNavigation&&__jsx(_components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_3__.default,{swiper:swiper,position:positionSlider})),modals&&modals.map((function(modal,i){return __jsx(_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__.bO,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_11__.Z)({metrika:metrika},modal,{id:modal.id,key:i}))}))),__jsx(_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__.ht,{className:animate?"":"_prepare"},__jsx(_SimpleSlider_styled__WEBPACK_IMPORTED_MODULE_2__.HS,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_11__.Z)({onSwiper:setSwiper},optionsSlider,{onSlideChange:function onSlideChange(swiper){return swiper.isBeginning?setPositionSlider("beginning"):swiper.isEnd?setPositionSlider("end"):setPositionSlider("")}}),children)))};SimpleSlider.displayName="SimpleSlider",SimpleSlider.__docgenInfo={description:"",methods:[],displayName:"SimpleSlider",props:{showNavigation:{defaultValue:{value:"true",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},animate:{defaultValue:{value:"true",computed:!1},required:!1}}},__webpack_exports__.default=connector(SimpleSlider);try{SimpleSlider.displayName="SimpleSlider",SimpleSlider.__docgenInfo={description:"",displayName:"SimpleSlider",props:{bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"black2"'},{value:'"blue"'},{value:'"blue2"'},{value:'"blue3"'},{value:'"gray"'},{value:'"gray2"'},{value:'"gray3"'},{value:'"gray4"'},{value:'"gray5"'},{value:'"gray6"'},{value:'"red"'},{value:'"red2"'},{value:'"maskColor1"'},{value:'"yellow"'},{value:'"orange"'},{value:'"yellow2"'},{value:'"orange2"'},{value:'"darkBlue"'},{value:'"green"'},{value:'"grayish"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"LinkI[]"}},modals:{defaultValue:null,description:"",name:"modals",required:!1,type:{name:"ModalBtnI[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},animate:{defaultValue:{value:"true"},description:"",name:"animate",required:!1,type:{name:"boolean"}},onSwiper:{defaultValue:null,description:"",name:"onSwiper",required:!1,type:{name:"((swiper: Swiper) => void)"}},showNavigation:{defaultValue:{value:"true"},description:"",name:"showNavigation",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},swiperOptions:{defaultValue:null,description:"",name:"swiperOptions",required:!1,type:{name:"SwiperOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleSlider/SimpleSlider.tsx#SimpleSlider"]={docgenInfo:SimpleSlider.__docgenInfo,name:"SimpleSlider",path:"src/components/common/SimpleSlider/SimpleSlider.tsx#SimpleSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SliderNavigation/SliderNavigation.styled.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return Container}});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_style_mixins__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/style/mixins.ts"),Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div.withConfig({displayName:"SliderNavigationstyled__Container",componentId:"sc-1euiq9k-0"})(["display:none;","{display:flex;align-items:center;}.swiper-button{display:flex;align-items:center;justify-content:center;padding:0 5px;cursor:pointer;transition:opacity 0.3s ease-in-out;&.disabled{opacity:0.3;cursor:default;}&.prev{&:hover:not(.disabled){svg{transform:translateX(-5px) rotate(-180deg);}}svg{transform:rotate(-180deg);}}&.next{",";&:hover:not(.disabled){svg{transform:translateX(5px);}}}svg{display:block;",";",";stroke:currentColor;transition:transform 0.3s ease-in-out;}}"],(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Ot)("xl"),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("margin-left",20,15,10),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("width",18,13.5,12),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("height",18,13.5,12));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SliderNavigation/SliderNavigation.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/common/SliderNavigation/SliderNavigation.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SliderNavigation/SliderNavigation.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SliderNavigation_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/SliderNavigation/SliderNavigation.styled.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Arrow=function Arrow(props){return __jsx("svg",props,__jsx("path",{d:"M1 1L9 9L1 17",strokeWidth:"2"}))};Arrow.displayName="Arrow",Arrow.defaultProps={width:"11",height:"18",viewBox:"0 0 11 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var SliderNavigation=function SliderNavigation(_ref){var swiper=_ref.swiper,position=_ref.position,className=_ref.className;return __jsx(_SliderNavigation_styled__WEBPACK_IMPORTED_MODULE_1__.W,{className:className},__jsx("div",{className:"swiper-button prev ".concat("beginning"!==position||null!=swiper&&swiper.loopedSlides?"":"disabled"),onClick:function onClick(){return null==swiper?void 0:swiper.slidePrev()}},__jsx(Arrow,null)),__jsx("div",{className:"swiper-button next ".concat("end"!==position||null!=swiper&&swiper.loopedSlides?"":"disabled"),onClick:function onClick(){return null==swiper?void 0:swiper.slideNext()}},__jsx(Arrow,null)))};SliderNavigation.displayName="SliderNavigation",SliderNavigation.__docgenInfo={description:"",methods:[],displayName:"SliderNavigation"},__webpack_exports__.default=SliderNavigation;try{SliderNavigation.displayName="SliderNavigation",SliderNavigation.__docgenInfo={description:"",displayName:"SliderNavigation",props:{swiper:{defaultValue:null,description:"",name:"swiper",required:!1,type:{name:"Swiper"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SliderNavigation/SliderNavigation.tsx#SliderNavigation"]={docgenInfo:SliderNavigation.__docgenInfo,name:"SliderNavigation",path:"src/components/common/SliderNavigation/SliderNavigation.tsx#SliderNavigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useIsMatches.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/index.ts");__webpack_exports__.Z=function useIsMatches(){var breakpoint=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg",initialState=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),isMatches=_useState[0],setIsMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("undefined"!=typeof window){var mql=(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.Yz)(breakpoint),testIsMobile=function testIsMobile(){return setIsMatches(mql.matches)};return testIsMobile(),null!=mql&&mql.addEventListener?mql.addEventListener("change",testIsMobile):mql.addListener(testIsMobile),function(){null!=mql&&mql.removeEventListener?mql.removeEventListener("change",testIsMobile):mql.removeListener(testIsMobile)}}}),[]),isMatches}},"./node_modules/swiper/esm/components/autoplay/autoplay.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var ssr_window__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ssr-window/ssr-window.esm.js"),_utils_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/esm/utils/utils.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Autoplay={run:function run(){var swiper=this,$activeSlideEl=swiper.slides.eq(swiper.activeIndex),delay=swiper.params.autoplay.delay;$activeSlideEl.attr("data-swiper-autoplay")&&(delay=$activeSlideEl.attr("data-swiper-autoplay")||swiper.params.autoplay.delay),clearTimeout(swiper.autoplay.timeout),swiper.autoplay.timeout=(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.Y3)((function(){var autoplayResult;swiper.params.autoplay.reverseDirection?swiper.params.loop?(swiper.loopFix(),autoplayResult=swiper.slidePrev(swiper.params.speed,!0,!0),swiper.emit("autoplay")):swiper.isBeginning?swiper.params.autoplay.stopOnLastSlide?swiper.autoplay.stop():(autoplayResult=swiper.slideTo(swiper.slides.length-1,swiper.params.speed,!0,!0),swiper.emit("autoplay")):(autoplayResult=swiper.slidePrev(swiper.params.speed,!0,!0),swiper.emit("autoplay")):swiper.params.loop?(swiper.loopFix(),autoplayResult=swiper.slideNext(swiper.params.speed,!0,!0),swiper.emit("autoplay")):swiper.isEnd?swiper.params.autoplay.stopOnLastSlide?swiper.autoplay.stop():(autoplayResult=swiper.slideTo(0,swiper.params.speed,!0,!0),swiper.emit("autoplay")):(autoplayResult=swiper.slideNext(swiper.params.speed,!0,!0),swiper.emit("autoplay")),(swiper.params.cssMode&&swiper.autoplay.running||!1===autoplayResult)&&swiper.autoplay.run()}),delay)},start:function start(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function stop(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function pause(speed){var swiper=this;swiper.autoplay.running&&(swiper.autoplay.paused||(swiper.autoplay.timeout&&clearTimeout(swiper.autoplay.timeout),swiper.autoplay.paused=!0,0!==speed&&swiper.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(event){swiper.$wrapperEl[0].addEventListener(event,swiper.autoplay.onTransitionEnd)})):(swiper.autoplay.paused=!1,swiper.autoplay.run())))},onVisibilityChange:function onVisibilityChange(){var document=(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Me)();"hidden"===document.visibilityState&&this.autoplay.running&&this.autoplay.pause(),"visible"===document.visibilityState&&this.autoplay.paused&&(this.autoplay.run(),this.autoplay.paused=!1)},onTransitionEnd:function onTransitionEnd(e){var swiper=this;swiper&&!swiper.destroyed&&swiper.$wrapperEl&&e.target===swiper.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(event){swiper.$wrapperEl[0].removeEventListener(event,swiper.autoplay.onTransitionEnd)})),swiper.autoplay.paused=!1,swiper.autoplay.running?swiper.autoplay.run():swiper.autoplay.stop())},onMouseEnter:function onMouseEnter(){var swiper=this;swiper.params.autoplay.disableOnInteraction?swiper.autoplay.stop():swiper.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(event){swiper.$wrapperEl[0].removeEventListener(event,swiper.autoplay.onTransitionEnd)}))},onMouseLeave:function onMouseLeave(){this.params.autoplay.disableOnInteraction||(this.autoplay.paused=!1,this.autoplay.run())},attachMouseEvents:function attachMouseEvents(){this.params.autoplay.pauseOnMouseEnter&&(this.$el.on("mouseenter",this.autoplay.onMouseEnter),this.$el.on("mouseleave",this.autoplay.onMouseLeave))},detachMouseEvents:function detachMouseEvents(){this.$el.off("mouseenter",this.autoplay.onMouseEnter),this.$el.off("mouseleave",this.autoplay.onMouseLeave)}};__webpack_exports__.Z={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function create(){(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.cR)(this,{autoplay:_extends({},Autoplay,{running:!1,paused:!1})})},on:{init:function init(swiper){swiper.params.autoplay.enabled&&(swiper.autoplay.start(),(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Me)().addEventListener("visibilitychange",swiper.autoplay.onVisibilityChange),swiper.autoplay.attachMouseEvents())},beforeTransitionStart:function beforeTransitionStart(swiper,speed,internal){swiper.autoplay.running&&(internal||!swiper.params.autoplay.disableOnInteraction?swiper.autoplay.pause(speed):swiper.autoplay.stop())},sliderFirstMove:function sliderFirstMove(swiper){swiper.autoplay.running&&(swiper.params.autoplay.disableOnInteraction?swiper.autoplay.stop():swiper.autoplay.pause())},touchEnd:function touchEnd(swiper){swiper.params.cssMode&&swiper.autoplay.paused&&!swiper.params.autoplay.disableOnInteraction&&swiper.autoplay.run()},destroy:function destroy(swiper){swiper.autoplay.detachMouseEvents(),swiper.autoplay.running&&swiper.autoplay.stop(),(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Me)().removeEventListener("visibilitychange",swiper.autoplay.onVisibilityChange)}}}},"./node_modules/swiper/esm/components/controller/controller.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _utils_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swiper/esm/utils/utils.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Controller={LinearSpline:function LinearSpline(x,y){var i1,i3,binarySearch=function search(){var maxIndex,minIndex,guess;return function(array,val){for(minIndex=-1,maxIndex=array.length;maxIndex-minIndex>1;)array[guess=maxIndex+minIndex>>1]<=val?minIndex=guess:maxIndex=guess;return maxIndex}}();return this.x=x,this.y=y,this.lastIndex=x.length-1,this.interpolate=function interpolate(x2){return x2?(i3=binarySearch(this.x,x2),i1=i3-1,(x2-this.x[i1])*(this.y[i3]-this.y[i1])/(this.x[i3]-this.x[i1])+this.y[i1]):0},this},getInterpolateFunction:function getInterpolateFunction(c){this.controller.spline||(this.controller.spline=this.params.loop?new Controller.LinearSpline(this.slidesGrid,c.slidesGrid):new Controller.LinearSpline(this.snapGrid,c.snapGrid))},setTranslate:function setTranslate(_setTranslate,byController){var multiplier,controlledTranslate,swiper=this,controlled=swiper.controller.control,Swiper=swiper.constructor;function setControlledTranslate(c){var translate=swiper.rtlTranslate?-swiper.translate:swiper.translate;"slide"===swiper.params.controller.by&&(swiper.controller.getInterpolateFunction(c),controlledTranslate=-swiper.controller.spline.interpolate(-translate)),controlledTranslate&&"container"!==swiper.params.controller.by||(multiplier=(c.maxTranslate()-c.minTranslate())/(swiper.maxTranslate()-swiper.minTranslate()),controlledTranslate=(translate-swiper.minTranslate())*multiplier+c.minTranslate()),swiper.params.controller.inverse&&(controlledTranslate=c.maxTranslate()-controlledTranslate),c.updateProgress(controlledTranslate),c.setTranslate(controlledTranslate,swiper),c.updateActiveIndex(),c.updateSlidesClasses()}if(Array.isArray(controlled))for(var i=0;i<controlled.length;i+=1)controlled[i]!==byController&&controlled[i]instanceof Swiper&&setControlledTranslate(controlled[i]);else controlled instanceof Swiper&&byController!==controlled&&setControlledTranslate(controlled)},setTransition:function setTransition(duration,byController){var i,swiper=this,Swiper=swiper.constructor,controlled=swiper.controller.control;function setControlledTransition(c){c.setTransition(duration,swiper),0!==duration&&(c.transitionStart(),c.params.autoHeight&&(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.Y3)((function(){c.updateAutoHeight()})),c.$wrapperEl.transitionEnd((function(){controlled&&(c.params.loop&&"slide"===swiper.params.controller.by&&c.loopFix(),c.transitionEnd())})))}if(Array.isArray(controlled))for(i=0;i<controlled.length;i+=1)controlled[i]!==byController&&controlled[i]instanceof Swiper&&setControlledTransition(controlled[i]);else controlled instanceof Swiper&&byController!==controlled&&setControlledTransition(controlled)}};__webpack_exports__.Z={name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function create(){(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.cR)(this,{controller:_extends({control:this.params.controller.control},Controller)})},on:{update:function update(swiper){swiper.controller.control&&swiper.controller.spline&&(swiper.controller.spline=void 0,delete swiper.controller.spline)},resize:function resize(swiper){swiper.controller.control&&swiper.controller.spline&&(swiper.controller.spline=void 0,delete swiper.controller.spline)},observerUpdate:function observerUpdate(swiper){swiper.controller.control&&swiper.controller.spline&&(swiper.controller.spline=void 0,delete swiper.controller.spline)},setTranslate:function setTranslate(swiper,translate,byController){swiper.controller.control&&swiper.controller.setTranslate(translate,byController)},setTransition:function setTransition(swiper,duration,byController){swiper.controller.control&&swiper.controller.setTransition(duration,byController)}}}},"./node_modules/swiper/esm/components/keyboard/keyboard.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var ssr_window__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ssr-window/ssr-window.esm.js"),_utils_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/esm/utils/dom.js"),_utils_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/swiper/esm/utils/utils.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Keyboard={handle:function handle(event){if(this.enabled){var window=(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Jj)(),document=(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Me)(),rtl=this.rtlTranslate,e=event;e.originalEvent&&(e=e.originalEvent);var kc=e.keyCode||e.charCode,pageUpDown=this.params.keyboard.pageUpDown,isPageUp=pageUpDown&&33===kc,isPageDown=pageUpDown&&34===kc,isArrowLeft=37===kc,isArrowRight=39===kc,isArrowUp=38===kc,isArrowDown=40===kc;if(!this.allowSlideNext&&(this.isHorizontal()&&isArrowRight||this.isVertical()&&isArrowDown||isPageDown))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&isArrowLeft||this.isVertical()&&isArrowUp||isPageUp))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(isPageUp||isPageDown||isArrowLeft||isArrowRight||isArrowUp||isArrowDown)){var inView=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var $el=this.$el,swiperWidth=$el[0].clientWidth,swiperHeight=$el[0].clientHeight,windowWidth=window.innerWidth,windowHeight=window.innerHeight,swiperOffset=this.$el.offset();rtl&&(swiperOffset.left-=this.$el[0].scrollLeft);for(var swiperCoord=[[swiperOffset.left,swiperOffset.top],[swiperOffset.left+swiperWidth,swiperOffset.top],[swiperOffset.left,swiperOffset.top+swiperHeight],[swiperOffset.left+swiperWidth,swiperOffset.top+swiperHeight]],i=0;i<swiperCoord.length;i+=1){var point=swiperCoord[i];if(point[0]>=0&&point[0]<=windowWidth&&point[1]>=0&&point[1]<=windowHeight){if(0===point[0]&&0===point[1])continue;inView=!0}}if(!inView)return}this.isHorizontal()?((isPageUp||isPageDown||isArrowLeft||isArrowRight)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),((isPageDown||isArrowRight)&&!rtl||(isPageUp||isArrowLeft)&&rtl)&&this.slideNext(),((isPageUp||isArrowLeft)&&!rtl||(isPageDown||isArrowRight)&&rtl)&&this.slidePrev()):((isPageUp||isPageDown||isArrowUp||isArrowDown)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(isPageDown||isArrowDown)&&this.slideNext(),(isPageUp||isArrowUp)&&this.slidePrev()),this.emit("keyPress",kc)}}},enable:function enable(){var document=(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Me)();this.keyboard.enabled||((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.Z)(document).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function disable(){var document=(0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.Me)();this.keyboard.enabled&&((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.Z)(document).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}};__webpack_exports__.Z={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function create(){(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cR)(this,{keyboard:_extends({enabled:!1},Keyboard)})},on:{init:function init(swiper){swiper.params.keyboard.enabled&&swiper.keyboard.enable()},destroy:function destroy(swiper){swiper.keyboard.enabled&&swiper.keyboard.disable()}}}}}]);