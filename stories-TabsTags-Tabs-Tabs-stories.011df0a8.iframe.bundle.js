"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[5421],{"./src/stories/TabsTags/Tabs/Tabs.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _Default$parameters,_Default$parameters2,_Default$parameters3,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_blocks_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/blocks/Tabs/Tabs.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"TabsTags/Tabs",component:_components_blocks_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{tabsHeader:{description:"Заголовки табов",defaultValue:["Лицензии","Аттестат соответствия","Паспорт оператора ЭДО","Благодарности"]},content:{description:"Набор контента под каждый таб"},bgColor:{description:"Задает цвет фона для компонента",defaultValue:"gray2",control:"radio",options:["white","gray2"]},smallPadding:{description:"Включает или выключает уменьшенные отступы",type:"boolean",defaultValue:"false",control:"radio",options:[!1,!0]},className:{description:"Дополнительный класс, задаваемый для компонента",defaultValue:""},topOffset:{type:"string",description:"Верхний отступ компонента по схеме отступов из ui-kit",control:"select",options:["none","xxxl","xxl","xl","l","m","s","xs","xxs","xxxs","xxxxs"],defaultValue:"none"},bottomOffset:{type:"string",description:"Нижний отступ компонента по схеме отступов из ui-kit",defaultValue:"none",control:"select",options:["none","xxxl","xxl","xl","l","m","s","xs","xxs","xxxs","xxxxs"]}}};var Default={name:"Default",args:{tabsHeader:["Лицензии","Аттестат соответствия","Паспорт оператора ЭДО","Благодарности"],content:[__jsx("p",{key:"1"},"Контент 1"),__jsx("p",{key:"1"},"Контент 2"),__jsx("p",{key:"1"},"Контент 3"),__jsx("p",{key:"1"},"Контент 4")],bgColor:"gray2",topOffset:"xxxl",bottomOffset:"l",smallPadding:!1}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Default',\n  args: {\n    tabsHeader: ['Лицензии', 'Аттестат соответствия', 'Паспорт оператора ЭДО', 'Благодарности'],\n    content: [<p key=\"1\">Контент 1</p>, <p key=\"1\">Контент 2</p>, <p key=\"1\">Контент 3</p>, <p key=\"1\">Контент 4</p>],\n    bgColor: 'gray2',\n    topOffset: 'xxxl',\n    bottomOffset: 'l',\n    smallPadding: false\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/TabsTags/Tabs/Tabs.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/TabsTags/Tabs/Tabs.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/blocks/Tabs/Tabs.styled.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{HF:function(){return TabsHeaderBtn},I0:function(){return TabsSliderNav},LM:function(){return TabsItem},St:function(){return TabsSliderSwiper},TX:function(){return TabsHeader},W2:function(){return Container},tS:function(){return TabsWrapper},uF:function(){return TabsHeaderTitle}});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_style_mixins__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/style/mixins.ts"),_components_blocks_BlockWithCards_BlockWithCards_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/blocks/BlockWithCards/BlockWithCards.styled.tsx"),swiper_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/swiper/esm/react/swiper.js"),_components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/SliderNavigation/SliderNavigation.tsx"),Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"Tabsstyled__Container",componentId:"sc-9ufqd8-0"})(["position:relative;overflow:hidden;",";background-color:",";"],(function(_ref){var bottomOffset=_ref.bottomOffset;return bottomOffset&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.cv)(bottomOffset,"padding-bottom")}),(function(_ref2){var bgColor=_ref2.bgColor;return bgColor&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)(bgColor)})),TabsHeader=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"Tabsstyled__TabsHeader",componentId:"sc-9ufqd8-1"})(["position:relative;max-width:100vw;overflow:hidden;",";&:after{content:'';z-index:10;position:absolute;bottom:0;left:0;right:0;width:100%;border-bottom:1px solid ",";}.swiper-container{",";","{padding-left:0;padding-right:",";margin-right:",";}","{padding-right:",";margin-right:",";}","{padding-right:",";margin-right:",";}",";}.swiper-slide{box-sizing:",";width:auto;",";&:first-child{",";}}"],(function(_ref3){var topOffset=_ref3.topOffset;return topOffset?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.cv)(topOffset,"padding-top"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.cv)("xl","padding-top")}),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("black",.1),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.h$)(),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Ot)("xl"),(function(_ref4){return _ref4.smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(22,"xl"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(54,"xl")}),(function(_ref5){return _ref5.smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(107,"xl"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(133,"xl")}),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Ot)("xxl"),(function(_ref6){return _ref6.smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(26,"xxl"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(70,"xxl")}),(function(_ref7){return _ref7.smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(112,"xxl"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(132,"xxl")}),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Ot)("fhd"),(function(_ref8){return _ref8.smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(40,"fhd"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(100,"fhd")}),(function(_ref9){return _ref9.smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(146,"fhd"):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(186,"fhd")}),(function(_ref10){var isEndTabs=_ref10.isEndTabs,smallPadding=_ref10.smallPadding;return!isEndTabs&&'\n                &:before {\n                    content: "";\n                    transition: background 0.3s ease-in-out;\n                    z-index: 5;\n                    display: block;\n                    width: '.concat(smallPadding?"5%":"20%",";\n                    height: 50%;\n                    position: absolute;\n                    bottom: 0;\n                    right: 0;\n                    background: linear-gradient(to left, #fff 0%, ").concat((0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("white",0),");\n                    pointer-events: none;\n                }\n            ")}),(function(_ref11){return _ref11.isIE&&"content-box"}),(function(_ref12){var smallPadding=_ref12.smallPadding;return"".concat(smallPadding?(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("padding-right",40,26,22,22,22):(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("padding-right",100,70,54,54,54))}),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("margin-left",80,60,54)),TabsSliderSwiper=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.t).withConfig({displayName:"Tabsstyled__TabsSliderSwiper",componentId:"sc-9ufqd8-2"})(["overflow:hidden;"]),TabsSliderNav=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_2__.default).withConfig({displayName:"Tabsstyled__TabsSliderNav",componentId:"sc-9ufqd8-3"})(["position:absolute;z-index:1;",";",";"],(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.cv)("xl","top"),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.cv)("xxl","right")),TabsHeaderBtn=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"Tabsstyled__TabsHeaderBtn",componentId:"sc-9ufqd8-4"})(["display:inline-flex;flex-direction:column;cursor:pointer;width:100%;background:transparent;transition:opacity 0.3s ease-in-out;padding-left:0;padding-right:0;padding-bottom:6px;","{padding-bottom:",";}&:after{content:'';position:absolute;bottom:0;left:0;right:0;width:100%;transition:border-bottom 0.3s ease-in-out;border-bottom:3px solid ",";}&:hover{opacity:0.6;}& > p{text-align:left;transition:opacity 0.3s ease-in-out;opacity:",";}"],(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Ot)("fhd"),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(8,"fhd"),(function(_ref13){return _ref13.activeBtn?"".concat((0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("black")):"transparent"}),(function(_ref14){return _ref14.activeBtn?"1":""})),TabsHeaderTitle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.p.withConfig({displayName:"Tabsstyled__TabsHeaderTitle",componentId:"sc-9ufqd8-5"})(["position:relative;",";opacity:0.5;"],(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.LZ)("text2-b")),TabsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"Tabsstyled__TabsWrapper",componentId:"sc-9ufqd8-6"})(["position:relative;overflow:hidden;background-color:",";transition:height 0.3s ease-in-out;"],(function(_ref15){var bgColor=_ref15.bgColor;return bgColor&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)(bgColor)})),TabsItem=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"Tabsstyled__TabsItem",componentId:"sc-9ufqd8-7"})(["overflow:hidden;width:100%;opacity:0;position:absolute;transition:opacity 0.3s ease;&._is-active{opacity:1;position:relative;}","{div:first-child{padding-top:0;border-bottom:none;}}"],_components_blocks_BlockWithCards_BlockWithCards_styled__WEBPACK_IMPORTED_MODULE_1__.W2);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/blocks/Tabs/Tabs.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{TabsHeader.displayName="TabsHeader",TabsHeader.__docgenInfo={description:"",displayName:"TabsHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsHeader"]={docgenInfo:TabsHeader.__docgenInfo,name:"TabsHeader",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsHeader"})}catch(__react_docgen_typescript_loader_error){}try{TabsSliderSwiper.displayName="TabsSliderSwiper",TabsSliderSwiper.__docgenInfo={description:"",displayName:"TabsSliderSwiper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsSliderSwiper"]={docgenInfo:TabsSliderSwiper.__docgenInfo,name:"TabsSliderSwiper",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsSliderSwiper"})}catch(__react_docgen_typescript_loader_error){}try{TabsSliderNav.displayName="TabsSliderNav",TabsSliderNav.__docgenInfo={description:"",displayName:"TabsSliderNav",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},swiper:{defaultValue:null,description:"",name:"swiper",required:!1,type:{name:"Swiper"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsSliderNav"]={docgenInfo:TabsSliderNav.__docgenInfo,name:"TabsSliderNav",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsSliderNav"})}catch(__react_docgen_typescript_loader_error){}try{TabsHeaderBtn.displayName="TabsHeaderBtn",TabsHeaderBtn.__docgenInfo={description:"",displayName:"TabsHeaderBtn",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},activeBtn:{defaultValue:null,description:"",name:"activeBtn",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsHeaderBtn"]={docgenInfo:TabsHeaderBtn.__docgenInfo,name:"TabsHeaderBtn",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsHeaderBtn"})}catch(__react_docgen_typescript_loader_error){}try{TabsHeaderTitle.displayName="TabsHeaderTitle",TabsHeaderTitle.__docgenInfo={description:"",displayName:"TabsHeaderTitle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsHeaderTitle"]={docgenInfo:TabsHeaderTitle.__docgenInfo,name:"TabsHeaderTitle",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsHeaderTitle"})}catch(__react_docgen_typescript_loader_error){}try{TabsWrapper.displayName="TabsWrapper",TabsWrapper.__docgenInfo={description:"",displayName:"TabsWrapper",props:{bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray2"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsWrapper"]={docgenInfo:TabsWrapper.__docgenInfo,name:"TabsWrapper",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsWrapper"})}catch(__react_docgen_typescript_loader_error){}try{TabsItem.displayName="TabsItem",TabsItem.__docgenInfo={description:"",displayName:"TabsItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.styled.tsx#TabsItem"]={docgenInfo:TabsItem.__docgenInfo,name:"TabsItem",path:"src/components/blocks/Tabs/Tabs.styled.tsx#TabsItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/blocks/Tabs/Tabs.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),swiper_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/swiper/esm/react/swiper-slide.js"),_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/blocks/Tabs/Tabs.styled.tsx"),resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),_hooks_useIsMatches__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsMatches.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,optionsSlider={slidesPerView:"auto",speed:800,freeMode:!1,preventInteractionOnTransition:!0,nested:!0,resistanceRatio:0,mousewheel:!0,observeParents:!0,followFinger:!0,grabCursor:!1,keyboard:!1,allowTouchMove:!0,observer:!0},Tabs=function Tabs(_ref){var _refTab$current,tabsHeader=_ref.tabsHeader,content=_ref.content,bgColor=_ref.bgColor,_ref$smallPadding=_ref.smallPadding,smallPadding=void 0!==_ref$smallPadding&&_ref$smallPadding,className=_ref.className,topOffset=_ref.topOffset,bottomOffset=_ref.bottomOffset,isMobile=(0,_hooks_useIsMatches__WEBPACK_IMPORTED_MODULE_3__.Z)("xl"),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),showNav=_useState[0],setShowNav=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),activeTab=_useState2[0],setActiveTab=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),heightTabWrapper=_useState3[0],setHeightTabWrapper=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),swiper=_useState4[0],setSwiper=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("beginning"),positionSlider=_useState5[0],setPositionSlider=_useState5[1],refTab=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState6=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isIE=_useState6[0],setIsIE=_useState6[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _document;setIsIE(null===(_document=document)||void 0===_document?void 0:_document.documentElement.classList.contains("_is-ie"))}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){isIE&&setPositionSlider("beginning")}),[isIE]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var resizeObserver;if(refTab.current){var _resizeObserver,resizeHandler=function resizeHandler(){refTab.current&&setHeightTabWrapper(refTab.current.offsetHeight)};null===(_resizeObserver=resizeObserver=new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__.Z(resizeHandler))||void 0===_resizeObserver||_resizeObserver.observe(refTab.current),resizeHandler()}return function(){var _resizeObserver2;return null===(_resizeObserver2=resizeObserver)||void 0===_resizeObserver2?void 0:_resizeObserver2.disconnect()}}),[activeTab]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){isMobile||(swiper&&(null==swiper?void 0:swiper.wrapperEl.scrollWidth)>(null==swiper?void 0:swiper.wrapperEl.clientWidth)?setShowNav(!0):setShowNav(!1))}),[null===(_refTab$current=refTab.current)||void 0===_refTab$current?void 0:_refTab$current.offsetWidth,isMobile,swiper]),__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.W2,{className:className,bottomOffset:bottomOffset,bgColor:bgColor},__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.TX,{topOffset:topOffset,smallPadding:smallPadding,isEndTabs:"end"===positionSlider,isIE:isIE},__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.St,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onSwiper:setSwiper},optionsSlider,{onSlideChange:function onSlideChange(swiper){(null==swiper||!swiper.isBeginning)&&setPositionSlider("")},onReachBeginning:function onReachBeginning(){return setPositionSlider("beginning")},onReachEnd:function onReachEnd(){setPositionSlider("end")}}),tabsHeader.map((function(tab,index){return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.o,{key:index},__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.HF,{onClick:function onClick(){return setActiveTab(index)},activeBtn:activeTab===index},__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.uF,{dangerouslySetInnerHTML:{__html:tab}})))}))),showNav&&__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.I0,{swiper:swiper,position:positionSlider})),__jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.tS,{bgColor:bgColor,style:{height:"".concat(heightTabWrapper,"px")}},__jsx("div",{ref:refTab},content.map((function(item,index){return __jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_1__.LM,{className:activeTab===index?"_is-active":"",key:index},item)})))))};Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{smallPadding:{defaultValue:{value:"false",computed:!1},required:!1}}},__webpack_exports__.Z=Tabs;try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabsHeader:{defaultValue:null,description:"",name:"tabsHeader",required:!0,type:{name:"string[]"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element[]"}},smallPadding:{defaultValue:{value:"false"},description:"",name:"smallPadding",required:!1,type:{name:"boolean"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray2"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/blocks/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Picture/Picture.styled.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return Container}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.picture.withConfig({displayName:"Picturestyled__Container",componentId:"sc-nngblz-0"})(["position:relative;display:inline-block;width:100%;height:100%;",";",";img{width:100%;height:100%;object-fit:cover;",";}"],(function(_ref){var sources=_ref.sources,isIE11=_ref.isIE11;return sources&&isIE11&&function createCSS(sources){for(var styles="",i=(null==sources?void 0:sources.length)-1;i>=0;i--)styles+="\n           @media(min-width: ".concat(sources[i].breakpoint,"px) {\n            background-image: url(").concat(sources[i].src,");\n        }\n     ");return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["",""],styles)}(sources)}),(function(_ref2){var isIE11=_ref2.isIE11,src=_ref2.src;return isIE11&&src&&"\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        \n         background-image: url(".concat(src,");\n    ")}),(function(_ref3){return _ref3.isIE11&&"opacity: 0"}));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},sources:{defaultValue:null,description:"",name:"sources",required:!1,type:{name:"{ src: string; breakpoint: number; }[]"}},isIE11:{defaultValue:null,description:"",name:"isIE11",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Picture/Picture.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/common/Picture/Picture.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SliderNavigation/SliderNavigation.styled.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return Container}});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_style_mixins__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/style/mixins.ts"),Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div.withConfig({displayName:"SliderNavigationstyled__Container",componentId:"sc-1euiq9k-0"})(["display:none;","{display:flex;align-items:center;}.swiper-button{display:flex;align-items:center;justify-content:center;padding:0 5px;cursor:pointer;transition:opacity 0.3s ease-in-out;&.disabled{opacity:0.3;cursor:default;}&.prev{&:hover:not(.disabled){svg{transform:translateX(-5px) rotate(-180deg);}}svg{transform:rotate(-180deg);}}&.next{",";&:hover:not(.disabled){svg{transform:translateX(5px);}}}svg{display:block;",";",";stroke:currentColor;transition:transform 0.3s ease-in-out;}}"],(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Ot)("xl"),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("margin-left",20,15,10),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("width",18,13.5,12),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Di)("height",18,13.5,12));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SliderNavigation/SliderNavigation.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/common/SliderNavigation/SliderNavigation.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SliderNavigation/SliderNavigation.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SliderNavigation_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/SliderNavigation/SliderNavigation.styled.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Arrow=function Arrow(props){return __jsx("svg",props,__jsx("path",{d:"M1 1L9 9L1 17",strokeWidth:"2"}))};Arrow.displayName="Arrow",Arrow.defaultProps={width:"11",height:"18",viewBox:"0 0 11 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var SliderNavigation=function SliderNavigation(_ref){var swiper=_ref.swiper,position=_ref.position,className=_ref.className;return __jsx(_SliderNavigation_styled__WEBPACK_IMPORTED_MODULE_1__.W,{className:className},__jsx("div",{className:"swiper-button prev ".concat("beginning"!==position||null!=swiper&&swiper.loopedSlides?"":"disabled"),onClick:function onClick(){return null==swiper?void 0:swiper.slidePrev()}},__jsx(Arrow,null)),__jsx("div",{className:"swiper-button next ".concat("end"!==position||null!=swiper&&swiper.loopedSlides?"":"disabled"),onClick:function onClick(){return null==swiper?void 0:swiper.slideNext()}},__jsx(Arrow,null)))};SliderNavigation.displayName="SliderNavigation",SliderNavigation.__docgenInfo={description:"",methods:[],displayName:"SliderNavigation"},__webpack_exports__.default=SliderNavigation;try{SliderNavigation.displayName="SliderNavigation",SliderNavigation.__docgenInfo={description:"",displayName:"SliderNavigation",props:{swiper:{defaultValue:null,description:"",name:"swiper",required:!1,type:{name:"Swiper"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SliderNavigation/SliderNavigation.tsx#SliderNavigation"]={docgenInfo:SliderNavigation.__docgenInfo,name:"SliderNavigation",path:"src/components/common/SliderNavigation/SliderNavigation.tsx#SliderNavigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useIsIE11.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useIsIE11(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isIE11=_useState[0],setIsIE11=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setIsIE11("undefined"!=typeof window&&!!window.MSInputMethodContext&&!!document.DOCUMENT_NODE)}),[]),isIE11}},"./src/hooks/useIsMatches.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/index.ts");__webpack_exports__.Z=function useIsMatches(){var breakpoint=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg",initialState=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),isMatches=_useState[0],setIsMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("undefined"!=typeof window){var mql=(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.Yz)(breakpoint),testIsMobile=function testIsMobile(){return setIsMatches(mql.matches)};return testIsMobile(),null!=mql&&mql.addEventListener?mql.addEventListener("change",testIsMobile):mql.addListener(testIsMobile),function(){null!=mql&&mql.removeEventListener?mql.removeEventListener("change",testIsMobile):mql.removeListener(testIsMobile)}}}),[]),isMatches}},"./node_modules/swiper/esm/react/swiper-slide.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return SwiperSlide}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/swiper/esm/react/utils.js"),_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js"),_excluded=["tag","children","className","swiper","zoom","virtualIndex"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SwiperSlide=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_temp,externalRef){var slideData,_ref=void 0===_temp?{}:_temp,_ref$tag=_ref.tag,Tag=void 0===_ref$tag?"div":_ref$tag,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,swiper=_ref.swiper,zoom=_ref.zoom,virtualIndex=_ref.virtualIndex,rest=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),slideElRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("swiper-slide"),slideClasses=_useState[0],setSlideClasses=_useState[1];function updateClasses(swiper,el,classNames){el===slideElRef.current&&setSlideClasses(classNames)}(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){if(externalRef&&(externalRef.current=slideElRef.current),slideElRef.current&&swiper){if(!swiper.destroyed)return swiper.on("_slideClass",updateClasses),function(){swiper&&swiper.off("_slideClass",updateClasses)};"swiper-slide"!==slideClasses&&setSlideClasses("swiper-slide")}})),(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){swiper&&slideElRef.current&&setSlideClasses(swiper.getSlideClasses(slideElRef.current))}),[swiper]),"function"==typeof children&&(slideData={isActive:slideClasses.indexOf("swiper-slide-active")>=0||slideClasses.indexOf("swiper-slide-duplicate-active")>=0,isVisible:slideClasses.indexOf("swiper-slide-visible")>=0,isDuplicate:slideClasses.indexOf("swiper-slide-duplicate")>=0,isPrev:slideClasses.indexOf("swiper-slide-prev")>=0||slideClasses.indexOf("swiper-slide-duplicate-prev")>=0,isNext:slideClasses.indexOf("swiper-slide-next")>=0||slideClasses.indexOf("swiper-slide-duplicate-next")>=0});var renderChildren=function renderChildren(){return"function"==typeof children?children(slideData):children};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({ref:slideElRef,className:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kI)(slideClasses+(className?" "+className:"")),"data-swiper-slide-index":virtualIndex},rest),zoom?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof zoom?zoom:void 0},renderChildren()):renderChildren())}));SwiperSlide.displayName="SwiperSlide"}}]);