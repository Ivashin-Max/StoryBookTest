/*! For license information please see stories-Cards-CategoryCards-CategoryCards-mdx.03a6b135.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[9823,1641],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Cards/CategoryCards/CategoryCards.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_CategoryCards_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Cards/CategoryCards/CategoryCards.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h4:"h4",strong:"strong",blockquote:"blockquote",a:"a",br:"br",hr:"hr"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_CategoryCards_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"categorycards",children:"CategoryCards"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Карточки категорий товаров (например категории объектов для продажи).\r\nИспользуется в компоненте ListingLotsFilter и как отдельный блок."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_CategoryCards_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"блок-используется-на-страницах-приложения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Блок используется на страницах приложения:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"dev, с  бэка заказчика:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://dev-www.tektorg.ru/sale",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://dev-www.tektorg.ru/sale"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://dev-www.tektorg.ru/vitrina/procedures",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://dev-www.tektorg.ru/vitrina/procedures"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"prod, с  бэка заказчика:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.tektorg.ru/sale",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.tektorg.ru/sale"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.tektorg.ru/vitrina/procedures",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.tektorg.ru/vitrina/procedures"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"пропсы-получаемые-компонентом",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Пропсы, получаемые компонентом:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@storybook/nextjs/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./src/stories/Cards/CategoryCards/CategoryCards.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return CategoryCards_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/style/mixins.ts"),SimpleSlider_styled=__webpack_require__("./src/components/common/SimpleSlider/SimpleSlider.styled.tsx"),Image=__webpack_require__("./src/components/common/Image/Image.tsx"),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CardCategorystyled__Container",componentId:"sc-1er8bed-0"})(["position:relative;overflow:hidden;display:flex;flex-direction:column;height:100%;border-radius:8px;background-color:",";color:",";cursor:pointer;",""],(0,mixins.$_)("white"),(0,mixins.$_)("black"),(0,mixins.Mr)("\n        svg {\n            transform: translateX(8px);\n        }\n    ")),CardCategoryImage=(0,styled_components_browser_esm.ZP)(Image.Z).withConfig({displayName:"CardCategorystyled__CardCategoryImage",componentId:"sc-1er8bed-1"})(["",";width:100%;pointer-events:none;user-select:none;"],(0,mixins.Di)("height",200,150,160,160,160)),CardCategoryText=styled_components_browser_esm.ZP.div.withConfig({displayName:"CardCategorystyled__CardCategoryText",componentId:"sc-1er8bed-2"})(["",";",";"," user-select:none;svg{stroke:currentColor;display:inline-block;vertical-align:middle;width:10px;height:10px;",";",";",";","{transition:transform 0.3s ease-in-out;}}"],(0,mixins.Di)("max-width",230,200),(0,mixins.cv)("xs","padding"),(0,mixins.LZ)("text2-b"),(0,mixins.cv)("xxxs","margin-left"),(0,mixins.Di)("width",10,10),(0,mixins.Di)("height",10,10),(0,mixins.Ot)("xl"));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CardCategory/CardCategory.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/blocks/CardCategory/CardCategory.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{CardCategoryImage.displayName="CardCategoryImage",CardCategoryImage.__docgenInfo={description:"",displayName:"CardCategoryImage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CardCategory/CardCategory.styled.tsx#CardCategoryImage"]={docgenInfo:CardCategoryImage.__docgenInfo,name:"CardCategoryImage",path:"src/components/blocks/CardCategory/CardCategory.styled.tsx#CardCategoryImage"})}catch(__react_docgen_typescript_loader_error){}try{CardCategoryText.displayName="CardCategoryText",CardCategoryText.__docgenInfo={description:"",displayName:"CardCategoryText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CardCategory/CardCategory.styled.tsx#CardCategoryText"]={docgenInfo:CardCategoryText.__docgenInfo,name:"CardCategoryText",path:"src/components/blocks/CardCategory/CardCategory.styled.tsx#CardCategoryText"})}catch(__react_docgen_typescript_loader_error){}var CategoryCards_styled_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CategoryCardsstyled__Container",componentId:"sc-12ernc-0"})(["position:relative;background-color:",";",";",";"," ","{padding:0;}","{margin:0 -4px;","{overflow:visible;}.swiper-slide{margin:0 4px;width:",";height:auto;min-height:",";","{width:",";min-height:",";}}}"],(function(_ref){var bgColor=_ref.bgColor;return bgColor&&(0,mixins.$_)(bgColor)}),(function(_ref2){var topOffset=_ref2.topOffset;return topOffset?(0,mixins.cv)(topOffset,"padding-top"):(0,mixins.cv)("xxxl","padding-top")}),(function(_ref3){var bottomOffset=_ref3.bottomOffset;return bottomOffset&&(0,mixins.cv)(bottomOffset,"padding-bottom")}),(function(_ref4){return _ref4.hasSideOffsets&&(0,mixins.h$)("padding")}),SimpleSlider_styled.W2,SimpleSlider_styled.HS,(0,mixins.ip)("xl"),(0,mixins.vw)(213,"xs"),(0,mixins.vw)(224,"xs"),(0,mixins.Ot)("md"),(0,mixins.vw)(213,"md"),(0,mixins.vw)(224,"md")),CategoryCardsContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"CategoryCardsstyled__CategoryCardsContainer",componentId:"sc-12ernc-1"})(["display:flex;flex-wrap:wrap;","{","{height:auto;",";width:calc(100% / 5 - 6.5px);margin-right:8px;&:nth-child(5n + 5){margin-right:0;}&:nth-child(n + 6){margin-top:8px;}}}"],Container,(0,mixins.Ot)("xl"),(0,mixins.Di)("min-height",284,218,220));try{CategoryCards_styled_Container.displayName="Container",CategoryCards_styled_Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CategoryCards/CategoryCards.styled.tsx#Container"]={docgenInfo:CategoryCards_styled_Container.__docgenInfo,name:"Container",path:"src/components/blocks/CategoryCards/CategoryCards.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{CategoryCardsContainer.displayName="CategoryCardsContainer",CategoryCardsContainer.__docgenInfo={description:"",displayName:"CategoryCardsContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CategoryCards/CategoryCards.styled.tsx#CategoryCardsContainer"]={docgenInfo:CategoryCardsContainer.__docgenInfo,name:"CategoryCardsContainer",path:"src/components/blocks/CategoryCards/CategoryCards.styled.tsx#CategoryCardsContainer"})}catch(__react_docgen_typescript_loader_error){}var swiper_slide=__webpack_require__("./node_modules/swiper/esm/react/swiper-slide.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),__jsx=react.createElement,Arrow=function Arrow(props){return __jsx("svg",props,__jsx("path",{d:"M1 1L9 9L1 17",strokeWidth:"2"}))};Arrow.displayName="Arrow",Arrow.defaultProps={width:"11",height:"18",viewBox:"0 0 11 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var CardCategory=function CardCategory(_ref){var image=_ref.image,link=_ref.link,name=_ref.name,onClick=_ref.onClick;return __jsx(react.Fragment,null,link?__jsx(link_default(),{href:link.href,passHref:!0,prefetch:!1},__jsx(Container,{as:"a"},__jsx(CardCategoryImage,{src:image,alt:link.text,layout:"fill",objectFit:"cover"}),__jsx(CardCategoryText,null,__jsx("span",{dangerouslySetInnerHTML:{__html:link.text}}),__jsx(Arrow,null)))):__jsx(Container,{onClick:onClick},__jsx(CardCategoryImage,{src:image,alt:name,layout:"fill",objectFit:"cover"}),__jsx(CardCategoryText,null,name&&__jsx("span",{dangerouslySetInnerHTML:{__html:name}}),__jsx(Arrow,null))))};CardCategory.__docgenInfo={description:"",methods:[],displayName:"CardCategory"};var CardCategory_CardCategory=CardCategory;try{CardCategory.displayName="CardCategory",CardCategory.__docgenInfo={description:"",displayName:"CardCategory",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CardCategory/CardCategory.tsx#CardCategory"]={docgenInfo:CardCategory.__docgenInfo,name:"CardCategory",path:"src/components/blocks/CardCategory/CardCategory.tsx#CardCategory"})}catch(__react_docgen_typescript_loader_error){}var useIsMatches=__webpack_require__("./src/hooks/useIsMatches.ts"),helpers=__webpack_require__("./src/helpers/index.ts"),CategoryCards_jsx=react.createElement,SimpleSlider=dynamic_default()((function(){return __webpack_require__.e(6079).then(__webpack_require__.bind(__webpack_require__,"./src/components/common/SimpleSlider/SimpleSlider.tsx"))}),{loadableGenerated:{webpack:function webpack(){return["./src/components/common/SimpleSlider/SimpleSlider.tsx"]}}}),CategoryCards=function CategoryCards(_ref){var cards=_ref.cards,getParamsProperty=_ref.getParamsProperty,bgColor=_ref.bgColor,_ref$hasSideOffsets=_ref.hasSideOffsets,hasSideOffsets=void 0===_ref$hasSideOffsets||_ref$hasSideOffsets,topOffset=_ref.topOffset,bottomOffset=_ref.bottomOffset,clickOnWrapper=_ref.clickOnWrapper,isMobile=(0,useIsMatches.Z)("xl");return CategoryCards_jsx(CategoryCards_styled_Container,{bgColor:bgColor,hasSideOffsets:hasSideOffsets,topOffset:topOffset,bottomOffset:bottomOffset},isMobile?CategoryCards_jsx(SimpleSlider,{showNavigation:!0,swiperOptions:{allowTouchMove:!0}},cards.map((function(item,index){return CategoryCards_jsx(swiper_slide.o,{key:item.id||index},CategoryCards_jsx(CardCategory_CardCategory,(0,esm_extends.Z)({},item,{onClick:function onClick(){getParamsProperty&&getParamsProperty(item.code||"",item.id||0,item.name||""),clickOnWrapper&&(0,helpers.k2)(clickOnWrapper.event,clickOnWrapper.category,(0,defineProperty.Z)({},clickOnWrapper.action,item.name))}})))}))):CategoryCards_jsx(CategoryCardsContainer,null,cards.map((function(item,index){return CategoryCards_jsx(CardCategory_CardCategory,(0,esm_extends.Z)({},item,{key:item.id||index,onClick:function onClick(){getParamsProperty&&getParamsProperty(item.code||"",item.id||0,item.name||""),clickOnWrapper&&(0,helpers.k2)(clickOnWrapper.event,clickOnWrapper.category,(0,defineProperty.Z)({},clickOnWrapper.action,item.name))}}))}))))};CategoryCards.displayName="CategoryCards",CategoryCards.__docgenInfo={description:"",methods:[],displayName:"CategoryCards",props:{hasSideOffsets:{defaultValue:{value:"true",computed:!1},required:!1}}};var _Default$parameters,_Default$parameters2,_Default$parameters3,CategoryCards_CategoryCards=CategoryCards;try{CategoryCards.displayName="CategoryCards",CategoryCards.__docgenInfo={description:"",displayName:"CategoryCards",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardCategoryProps[]"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray2"'}]}},hasSideOffsets:{defaultValue:{value:"true"},description:"",name:"hasSideOffsets",required:!1,type:{name:"boolean"}},getParamsProperty:{defaultValue:null,description:"",name:"getParamsProperty",required:!1,type:{name:"((code: string, id: number, name: string) => void)"}},clickOnWrapper:{defaultValue:null,description:"",name:"clickOnWrapper",required:!1,type:{name:"{ event: string; category: string; action: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/CategoryCards/CategoryCards.tsx#CategoryCards"]={docgenInfo:CategoryCards.__docgenInfo,name:"CategoryCards",path:"src/components/blocks/CategoryCards/CategoryCards.tsx#CategoryCards"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var CategoryCards_stories={title:"Cards/CategoryCards",component:CategoryCards_CategoryCards,argTypes:{clickOnWrapper:{description:"Объект с данными для отправки метрики"},hasSideOffsets:{description:"Определяет боковые отступы компонента"},bgColor:{description:"Определяет цвет фона компонента, белый либо серый"},cards:{description:"Содержимое карточек для отрисовки, передаваемые в компонент"},getParamsProperty:{description:""},topOffset:{description:"Верхний отступ компонента по схеме отступов из ui-kit"},bottomOffset:{description:"Нижний отступ компонента по схеме отступов из ui-kit"}},args:{topOffset:"l",bottomOffset:"l",bgColor:"gray2",cards:[{id:1,code:"003",name:"Недвижимость",actual:!0,order:1,image:"./images/pages/vitrina/procedures/categoryCards/immovables.jpg",link:{text:"Недвижимость",href:"#"}},{id:26,code:"007",name:"Транспорт и спецтехника",actual:!0,order:2,image:"./images/pages/vitrina/procedures/categoryCards/transport.jpg",link:{text:"Транспорт и спецтехника",href:"#"}},{id:65,code:"036",name:"Оборудование и МТР",actual:!0,order:3,image:"./images/pages/vitrina/procedures/categoryCards/intangible.jpg",link:{text:"Оборудование и МТР",href:"#"}},{id:35,code:"008",name:"Нематериальные и финансовые активы",actual:!0,order:4,image:"./images/pages/vitrina/procedures/categoryCards/other.jpg",link:{text:"Нематериальные и финансовые активы",href:"#"}},{id:64,code:"018",name:"Иное",actual:!0,order:5,image:"./images/pages/vitrina/procedures/categoryCards/MTR.jpg",link:{text:"Иное",href:"#"}}]}},Default={name:"Default"};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Default'\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Cards/CategoryCards/CategoryCards.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/Cards/CategoryCards/CategoryCards.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Image/Image.styled.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{W:function(){return Container}});var Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div.withConfig({displayName:"Imagestyled__Container",componentId:"sc-13su04k-0"})(["position:relative;display:inline-block;"]);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Image/Image.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/common/Image/Image.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Image/Image.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Image_Image}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),placeholder={src:"static/media/placeholder.dab5f5ae.jpg",height:1,width:1,blurDataURL:"static/media/placeholder.dab5f5ae.jpg"},Image_styled=__webpack_require__("./src/components/common/Image/Image.styled.tsx"),useIsIE11=__webpack_require__("./src/hooks/useIsIE11.ts"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var defaultOption={src:placeholder,alt:"",quality:90,lazyBoundary:"500px",placeholder:"blur",blurDataURL:placeholder.blurDataURL,objectPosition:"50% 50%"},Image=function Image(props){var _props$src,isIE11=(0,useIsIE11.Z)(),options=_objectSpread(_objectSpread(_objectSpread({},defaultOption),props),{},{src:null!==(_props$src=props.src)&&void 0!==_props$src?_props$src:defaultOption.src});return __jsx(Image_styled.W,{className:props.className},isIE11||props.simple?__jsx("img",{src:options.src,alt:options.alt,style:{fontFamily:"'object-fit: ".concat(props.objectFit,"; object-position: ").concat(options.objectPosition,";'"),width:"100%",height:"100%",objectFit:props.objectFit,objectPosition:options.objectPosition}}):__jsx(next_image.Z,options))};Image.displayName="Image",Image.__docgenInfo={description:"",methods:[],displayName:"Image"};var Image_Image=(0,react.memo)(Image);try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Image/Image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/components/common/Image/Image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useIsIE11.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useIsIE11(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isIE11=_useState[0],setIsIE11=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setIsIE11("undefined"!=typeof window&&!!window.MSInputMethodContext&&!!document.DOCUMENT_NODE)}),[]),isIE11}},"./src/hooks/useIsMatches.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/index.ts");__webpack_exports__.Z=function useIsMatches(){var breakpoint=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg",initialState=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),isMatches=_useState[0],setIsMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("undefined"!=typeof window){var mql=(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.Yz)(breakpoint),testIsMobile=function testIsMobile(){return setIsMatches(mql.matches)};return testIsMobile(),null!=mql&&mql.addEventListener?mql.addEventListener("change",testIsMobile):mql.addListener(testIsMobile),function(){null!=mql&&mql.removeEventListener?mql.removeEventListener("change",testIsMobile):mql.removeListener(testIsMobile)}}}),[]),isMatches}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/swiper/esm/react/swiper-slide.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return SwiperSlide}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/swiper/esm/react/utils.js"),_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js"),_excluded=["tag","children","className","swiper","zoom","virtualIndex"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SwiperSlide=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_temp,externalRef){var slideData,_ref=void 0===_temp?{}:_temp,_ref$tag=_ref.tag,Tag=void 0===_ref$tag?"div":_ref$tag,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,swiper=_ref.swiper,zoom=_ref.zoom,virtualIndex=_ref.virtualIndex,rest=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),slideElRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("swiper-slide"),slideClasses=_useState[0],setSlideClasses=_useState[1];function updateClasses(swiper,el,classNames){el===slideElRef.current&&setSlideClasses(classNames)}(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){if(externalRef&&(externalRef.current=slideElRef.current),slideElRef.current&&swiper){if(!swiper.destroyed)return swiper.on("_slideClass",updateClasses),function(){swiper&&swiper.off("_slideClass",updateClasses)};"swiper-slide"!==slideClasses&&setSlideClasses("swiper-slide")}})),(0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.L)((function(){swiper&&slideElRef.current&&setSlideClasses(swiper.getSlideClasses(slideElRef.current))}),[swiper]),"function"==typeof children&&(slideData={isActive:slideClasses.indexOf("swiper-slide-active")>=0||slideClasses.indexOf("swiper-slide-duplicate-active")>=0,isVisible:slideClasses.indexOf("swiper-slide-visible")>=0,isDuplicate:slideClasses.indexOf("swiper-slide-duplicate")>=0,isPrev:slideClasses.indexOf("swiper-slide-prev")>=0||slideClasses.indexOf("swiper-slide-duplicate-prev")>=0,isNext:slideClasses.indexOf("swiper-slide-next")>=0||slideClasses.indexOf("swiper-slide-duplicate-next")>=0});var renderChildren=function renderChildren(){return"function"==typeof children?children(slideData):children};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({ref:slideElRef,className:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kI)(slideClasses+(className?" "+className:"")),"data-swiper-slide-index":virtualIndex},rest),zoom?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof zoom?zoom:void 0},renderChildren()):renderChildren())}));SwiperSlide.displayName="SwiperSlide"}}]);