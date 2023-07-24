"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[890],{"./src/components/blocks/BackRouterPage/BackRouterPage.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return BackRouterPage_BackRouterPage}});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/style/mixins.ts"),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"BackRouterPagestyled__Container",componentId:"sc-1b91b81-0"})(["position:relative;background-color:",";",";",";",""],(function(_ref){var bgColor=_ref.bgColor;return bgColor&&(0,mixins.$_)(bgColor)}),(function(_ref2){var topOffset=_ref2.topOffset;return topOffset&&(0,mixins.cv)(topOffset,"padding-top")}),(function(_ref3){var bottomOffset=_ref3.bottomOffset;return bottomOffset&&(0,mixins.cv)(bottomOffset,"padding-bottom")}),(function(_ref4){return _ref4.hasSideOffsets&&(0,mixins.h$)("padding")}));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/BackRouterPage/BackRouterPage.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/blocks/BackRouterPage/BackRouterPage.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var BackButton=__webpack_require__("./src/components/common/BackButton/BackButton.tsx"),__jsx=react.createElement,BackRouterPage=function BackRouterPage(_ref){var link=_ref.link,bgColor=_ref.bgColor,topOffset=_ref.topOffset,bottomOffset=_ref.bottomOffset,_ref$hasSideOffsets=_ref.hasSideOffsets,hasSideOffsets=void 0===_ref$hasSideOffsets||_ref$hasSideOffsets,isInitialRouterPage=(0,es.v9)((function(state){return state.pageTransition.isInitialRouterPage})),router=(0,next_router.useRouter)(),locale=(0,next_router.useRouter)().locale;return __jsx(react.Fragment,null,isInitialRouterPage?__jsx(BackButton.Z,{link:link,topOffset:topOffset,bottomOffset:bottomOffset,bgColor:bgColor,hasSideOffsets:hasSideOffsets}):__jsx(Container,{bgColor:bgColor,topOffset:topOffset,bottomOffset:bottomOffset,hasSideOffsets:hasSideOffsets},__jsx(BackButton.Z,{text:"ru"===locale?"Назад":"Back",onClick:function onClick(){return router.back()}})))};BackRouterPage.__docgenInfo={description:"",methods:[],displayName:"BackRouterPage",props:{hasSideOffsets:{defaultValue:{value:"true",computed:!1},required:!1}}};var BackRouterPage_BackRouterPage=BackRouterPage;try{BackRouterPage.displayName="BackRouterPage",BackRouterPage.__docgenInfo={description:"",displayName:"BackRouterPage",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"LinkI"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray2"'}]}},hasSideOffsets:{defaultValue:{value:"true"},description:"",name:"hasSideOffsets",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/BackRouterPage/BackRouterPage.tsx#BackRouterPage"]={docgenInfo:BackRouterPage.__docgenInfo,name:"BackRouterPage",path:"src/components/blocks/BackRouterPage/BackRouterPage.tsx#BackRouterPage"})}catch(__react_docgen_typescript_loader_error){}}}]);