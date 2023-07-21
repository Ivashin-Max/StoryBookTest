"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[4807],{"./src/stories/TabsTags/Tags/Tags.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tags_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/TabsTags/Tags/Tags.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h4:"h4",strong:"strong",blockquote:"blockquote",a:"a",hr:"hr"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Tags_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tags",children:"Tags"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Теги"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tags_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"блок-используется-на-страницах-приложения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Блок используется на страницах приложения:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"dev:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://dev-www.tektorg.ru/vitrina/procedures",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://dev-www.tektorg.ru/vitrina/procedures"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"prod:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.tektorg.ru/vitrina/procedures",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.tektorg.ru/vitrina/procedures"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/TabsTags/Tags/Tags.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return Tags_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),ResizeObserver_es=__webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),swiper_slide=__webpack_require__("./node_modules/swiper/esm/react/swiper-slide.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/style/mixins.ts"),SimpleSlider_styled=__webpack_require__("./src/components/common/SimpleSlider/SimpleSlider.styled.tsx"),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tagsstyled__Container",componentId:"sc-15te06i-0"})(["position:relative;"]),TagsHeader=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tagsstyled__TagsHeader",componentId:"sc-15te06i-1"})(["background-color:",";",";",";"," ","{margin-bottom:-6px;}","{margin-bottom:",";}button{background-color:",";}","{padding:0;}","{margin:0 -3px;overflow:visible;.swiper-slide{margin:0 3px;width:auto;}}"],(function(_ref){var bgColor=_ref.bgColor;return bgColor&&(0,mixins.$_)(bgColor)}),(function(_ref2){var topOffset=_ref2.topOffset;return topOffset?(0,mixins.cv)(topOffset,"padding-top"):(0,mixins.cv)("xxxl","padding-top")}),(function(_ref3){var bottomOffset=_ref3.bottomOffset;return bottomOffset&&(0,mixins.cv)(bottomOffset,"padding-bottom")}),(function(_ref4){return _ref4.hasSideOffsets&&(0,mixins.h$)("padding")}),(0,mixins.Ot)("md"),(0,mixins.Ot)("fhd"),(0,mixins.vw)(-8,"fhd"),(function(_ref5){return"gray2"===_ref5.bgColor?(0,mixins.$_)("white"):(0,mixins.$_)("gray2")}),SimpleSlider_styled.W2,SimpleSlider_styled.HS),TagsHeaderTitle=styled_components_browser_esm.ZP.p.withConfig({displayName:"Tagsstyled__TagsHeaderTitle",componentId:"sc-15te06i-2"})(["",";position:relative;z-index:1;"],(0,mixins.LZ)("text1-b")),TagsHeaderBtn=styled_components_browser_esm.ZP.button.withConfig({displayName:"Tagsstyled__TagsHeaderBtn",componentId:"sc-15te06i-3"})(["position:relative;cursor:pointer;border-radius:24px;padding:8px 16px;color:",";transition:color 0.3s ease-in-out,background-color 0.3s ease-in-out;&._is-active{background-color:",";color:",";&::after{background-color:",";}}","{margin-bottom:6px;&:not(:last-child){margin-right:6px;}}","{padding:6px 16px;&:not(._is-active){& > p{transition:opacity 0.3s ease-in-out;}","}}","{padding:8px 18px;}","{margin-bottom:",";padding:"," ",";&:not(:last-child){margin-right:",";}}"],(0,mixins.$_)("blue"),(0,mixins.$_)("blue"),(0,mixins.$_)("white"),(0,mixins.$_)("blue"),(0,mixins.Ot)("md"),(0,mixins.Ot)("xl"),(0,mixins.Mr)("\n                & > p {\n                    opacity: 0.5;\n                }\n            "),(0,mixins.Ot)("xxl"),(0,mixins.Ot)("fhd"),(0,mixins.vw)(8,"fhd"),(0,mixins.vw)(8,"fhd"),(0,mixins.vw)(25,"fhd"),(0,mixins.vw)(8,"fhd")),TagsWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tagsstyled__TagsWrapper",componentId:"sc-15te06i-4"})(["position:relative;transition:height 0.3s ease-in-out;"]),TagsItem=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tagsstyled__TagsItem",componentId:"sc-15te06i-5"})(["overflow:hidden;width:100%;opacity:0;position:absolute;transition:opacity 0.3s ease;&._is-active{opacity:1;position:relative;}"]);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/blocks/Tags/Tags.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{TagsHeader.displayName="TagsHeader",TagsHeader.__docgenInfo={description:"",displayName:"TagsHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.styled.tsx#TagsHeader"]={docgenInfo:TagsHeader.__docgenInfo,name:"TagsHeader",path:"src/components/blocks/Tags/Tags.styled.tsx#TagsHeader"})}catch(__react_docgen_typescript_loader_error){}try{TagsHeaderTitle.displayName="TagsHeaderTitle",TagsHeaderTitle.__docgenInfo={description:"",displayName:"TagsHeaderTitle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.styled.tsx#TagsHeaderTitle"]={docgenInfo:TagsHeaderTitle.__docgenInfo,name:"TagsHeaderTitle",path:"src/components/blocks/Tags/Tags.styled.tsx#TagsHeaderTitle"})}catch(__react_docgen_typescript_loader_error){}try{TagsHeaderBtn.displayName="TagsHeaderBtn",TagsHeaderBtn.__docgenInfo={description:"",displayName:"TagsHeaderBtn",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.styled.tsx#TagsHeaderBtn"]={docgenInfo:TagsHeaderBtn.__docgenInfo,name:"TagsHeaderBtn",path:"src/components/blocks/Tags/Tags.styled.tsx#TagsHeaderBtn"})}catch(__react_docgen_typescript_loader_error){}try{TagsWrapper.displayName="TagsWrapper",TagsWrapper.__docgenInfo={description:"",displayName:"TagsWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.styled.tsx#TagsWrapper"]={docgenInfo:TagsWrapper.__docgenInfo,name:"TagsWrapper",path:"src/components/blocks/Tags/Tags.styled.tsx#TagsWrapper"})}catch(__react_docgen_typescript_loader_error){}try{TagsItem.displayName="TagsItem",TagsItem.__docgenInfo={description:"",displayName:"TagsItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.styled.tsx#TagsItem"]={docgenInfo:TagsItem.__docgenInfo,name:"TagsItem",path:"src/components/blocks/Tags/Tags.styled.tsx#TagsItem"})}catch(__react_docgen_typescript_loader_error){}var useIsMatches=__webpack_require__("./src/hooks/useIsMatches.ts"),helpers=__webpack_require__("./src/helpers/index.ts"),metriks_metriksSample=__webpack_require__("./src/metriks/metriksSample.ts"),next_router=__webpack_require__("./node_modules/next/router.js"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var SimpleSlider=dynamic_default()((function(){return __webpack_require__.e(6079).then(__webpack_require__.bind(__webpack_require__,"./src/components/common/SimpleSlider/SimpleSlider.tsx"))}),{loadableGenerated:{webpack:function webpack(){return["./src/components/common/SimpleSlider/SimpleSlider.tsx"]}}}),Tags=function Tags(_ref){var tagsHeader=_ref.tagsHeader,onClickTag=_ref.onClickTag,content=_ref.content,_ref$hasSideOffsets=_ref.hasSideOffsets,hasSideOffsets=void 0===_ref$hasSideOffsets||_ref$hasSideOffsets,topOffset=_ref.topOffset,bottomOffset=_ref.bottomOffset,bg=_ref.bg,className=_ref.className,_ref$firstTagActive=_ref.firstTagActive,firstTagActive=void 0===_ref$firstTagActive?0:_ref$firstTagActive,metriksSample=_ref.metriksSample,isMobile=(0,useIsMatches.Z)("md"),pathname=(0,next_router.useRouter)().pathname,router=(0,next_router.useRouter)(),_useState=(0,react.useState)(0),activeTag=_useState[0],setActiveTag=_useState[1],_useState2=(0,react.useState)(0),heightTagWrapper=_useState2[0],setHeightTagWrapper=_useState2[1],refTag=(0,react.useRef)(null);(0,react.useEffect)((function(){setActiveTag(firstTagActive)}),[firstTagActive]),(0,react.useEffect)((function(){var resizeObserver;if(refTag.current){var _resizeObserver,resizeHandler=function resizeHandler(){refTag.current&&setHeightTagWrapper(refTag.current.offsetHeight)};null===(_resizeObserver=resizeObserver=new ResizeObserver_es.Z(resizeHandler))||void 0===_resizeObserver||_resizeObserver.observe(refTag.current),resizeHandler()}return function(){var _resizeObserver2;return null===(_resizeObserver2=resizeObserver)||void 0===_resizeObserver2?void 0:_resizeObserver2.disconnect()}}),[activeTag]);var changeTab=(0,react.useCallback)(function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(nextTag,query){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,router.push({query:_objectSpread(_objectSpread({},query),{},{tag:nextTag})},void 0,{scroll:!1,shallow:!0});case 2:case"end":return _context.stop()}}),_callee)})));return function(_x,_x2){return _ref2.apply(this,arguments)}}(),[]),tagMetriks=function tagMetriks(tag){var _METRIKS_SAMPLES$path;(null===(_METRIKS_SAMPLES$path=metriks_metriksSample.Ir[pathname])||void 0===_METRIKS_SAMPLES$path?void 0:_METRIKS_SAMPLES$path.tags)&&(0,metriks_metriksSample._L)(pathname,"tags",[{neededKey:"click-selector",newValue:tag},{neededKey:"property-customer-type-selector",newValue:tag}])};return __jsx(Container,{className:className},__jsx(TagsHeader,{hasSideOffsets:hasSideOffsets,topOffset:topOffset,bottomOffset:bottomOffset,bgColor:bg},isMobile?__jsx(SimpleSlider,null,tagsHeader.map((function(tag,index){return __jsx(swiper_slide.o,{key:index},__jsx(TagsHeaderBtn,{onClick:function onClick(){setActiveTag(index),tagMetriks(tag),onClickTag&&onClickTag(index),null==onClickTag&&changeTab(index,router.query),metriksSample&&(0,helpers.k2)(metriksSample.event,metriksSample.category,(0,defineProperty.Z)({},metriksSample.action,(0,helpers.D7)(tag)))},className:activeTag===index?"_is-active":""},__jsx(TagsHeaderTitle,{dangerouslySetInnerHTML:{__html:tag}})))}))):__jsx(react.Fragment,null,tagsHeader.map((function(tag,index){return __jsx(TagsHeaderBtn,{onClick:function onClick(){setActiveTag(index),tagMetriks(tag),onClickTag&&onClickTag(index),null==onClickTag&&changeTab(index,router.query),metriksSample&&(0,helpers.k2)(metriksSample.event,metriksSample.category,(0,defineProperty.Z)({},metriksSample.action,tag))},className:activeTag===index?"_is-active":"",key:index},__jsx(TagsHeaderTitle,{dangerouslySetInnerHTML:{__html:tag}}))})))),__jsx(TagsWrapper,{style:{height:"".concat(heightTagWrapper,"px")}},__jsx("div",{ref:refTag},null==content?void 0:content.map((function(item,index){return __jsx(TagsItem,{className:activeTag===index?"_is-active":"",key:index},item)})))))};Tags.displayName="Tags",Tags.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{hasSideOffsets:{defaultValue:{value:"true",computed:!1},required:!1},firstTagActive:{defaultValue:{value:"0",computed:!1},required:!1}}};var _Default$parameters,_Default$parameters2,_Default$parameters3,Tags_Tags=Tags;try{Tags.displayName="Tags",Tags.__docgenInfo={description:"",displayName:"Tags",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagsHeader:{defaultValue:null,description:"",name:"tagsHeader",required:!0,type:{name:"string[]"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element[]"}},hasSideOffsets:{defaultValue:{value:"true"},description:"",name:"hasSideOffsets",required:!1,type:{name:"boolean"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"black2"'},{value:'"blue"'},{value:'"blue2"'},{value:'"blue3"'},{value:'"gray"'},{value:'"gray2"'},{value:'"gray3"'},{value:'"gray4"'},{value:'"gray5"'},{value:'"gray6"'},{value:'"red"'},{value:'"red2"'},{value:'"maskColor1"'},{value:'"yellow"'},{value:'"orange"'},{value:'"yellow2"'},{value:'"orange2"'},{value:'"darkBlue"'},{value:'"green"'},{value:'"grayish"'}]}},firstTagActive:{defaultValue:{value:"0"},description:"",name:"firstTagActive",required:!1,type:{name:"number"}},onClickTag:{defaultValue:null,description:"",name:"onClickTag",required:!1,type:{name:"((activeTag: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/Tags/Tags.tsx#Tags"]={docgenInfo:Tags.__docgenInfo,name:"Tags",path:"src/components/blocks/Tags/Tags.tsx#Tags"})}catch(__react_docgen_typescript_loader_error){}var Tags_stories_jsx=react.createElement;function Tags_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Tags_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Tags_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tags_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Tags_stories={title:"TabsTags/Tags",component:Tags_Tags,argTypes:{tagsHeader:{description:"Заголовки тэгов",defaultValue:["Коммерческое имущество","Государственное имущество","Арестованное имущество"]},onClickTag:{description:"Колбэк-функция которая будет вызвана при клике на тэг"},content:{description:"Набор контента под каждый тэг"},hasSideOffsets:{description:"Определяет боковые отступы компонента",type:"boolean",defaultValue:"false",control:"radio",options:[!1,!0]},topOffset:{type:"string",description:"Верхний отступ компонента по схеме отступов из ui-kit",control:"select",options:["none","xxxl","xxl","xl","l","m","s","xs","xxs","xxxs","xxxxs"],defaultValue:"none"},bottomOffset:{type:"string",description:"Нижний отступ компонента по схеме отступов из ui-kit",defaultValue:"none",control:"select",options:["none","xxxl","xxl","xl","l","m","s","xs","xxs","xxxs","xxxxs"]},bg:{description:"Задает цвет фона для компонента",defaultValue:"gray",control:"select",options:["white","black","black2","blue","blue2","blue3","gray","gray2","gray3","gray4","gray5","gray6","red","red2","maskColor1","yellow","orange","yellow2","orange2","darkBlue","green","grayish"]},className:{description:"Дополнительный класс, задаваемый для компонента",defaultValue:""},firstTagActive:{description:"Какой тэг сделать активным по умолчанию",defaultValue:0},metriksSample:{description:"Данные для подключения метрики",defaultValue:{event:"property-sale-interaction",category:"property-sale",action:"property-category-selector"}}}},Default={name:"Default",args:{tagsHeader:["Коммерческое имущество","Государственное имущество","Арестованное имущество"],onClickTag:function onClickTag(activeTag){return alert("активный таб: "+activeTag)},content:[Tags_stories_jsx("p",{key:"1"},"Контент 1"),Tags_stories_jsx("p",{key:"1"},"Контент 2"),Tags_stories_jsx("p",{key:"1"},"Контент 3")],bg:"gray",firstTagActive:1,topOffset:"xxxl",bottomOffset:"l",metriksSample:{event:"property-sale-interaction",category:"property-sale",action:"property-category-selector"}}};Default.parameters=Tags_stories_objectSpread(Tags_stories_objectSpread({},Default.parameters),{},{docs:Tags_stories_objectSpread(Tags_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:Tags_stories_objectSpread({originalSource:"{\n  name: 'Default',\n  args: {\n    tagsHeader: ['Коммерческое имущество', 'Государственное имущество', 'Арестованное имущество'],\n    onClickTag: (activeTag: number) => alert('активный таб: ' + activeTag),\n    content: [<p key=\"1\">Контент 1</p>, <p key=\"1\">Контент 2</p>, <p key=\"1\">Контент 3</p>],\n    bg: 'gray',\n    firstTagActive: 1,\n    topOffset: 'xxxl',\n    bottomOffset: 'l',\n    metriksSample: {\n      event: 'property-sale-interaction',\n      category: 'property-sale',\n      action: 'property-category-selector'\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:Tags_stories_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/TabsTags/Tags/Tags.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/TabsTags/Tags/Tags.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useIsMatches.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/index.ts");__webpack_exports__.Z=function useIsMatches(){var breakpoint=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg",initialState=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),isMatches=_useState[0],setIsMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("undefined"!=typeof window){var mql=(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.Yz)(breakpoint),testIsMobile=function testIsMobile(){return setIsMatches(mql.matches)};return testIsMobile(),null!=mql&&mql.addEventListener?mql.addEventListener("change",testIsMobile):mql.addListener(testIsMobile),function(){null!=mql&&mql.removeEventListener?mql.removeEventListener("change",testIsMobile):mql.removeListener(testIsMobile)}}}),[]),isMatches}}}]);