/*! For license information please see stories-Cards-EducationReview-EducationReview-mdx.d8135c9a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[1832,2046],{"./node_modules/@kunukn/react-collapse/dist/Collapse.umd.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){"use strict";var t="default"in e?e.default:e;function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))}return function(n){var o=n.children,l=n.transition,s=n.style,f=n.render,p=n.elementType,y=void 0===p?"div":p,d=n.isOpen,b=n.collapseHeight,h=void 0===b?"0px":b,g=n.onInit,v=n.onChange,m=n.className,O=void 0===m?"collapse-css-transition":m,j=n.addState,w=n.noAnim,x=n.overflowOnExpanded,S=a(n,["children","transition","style","render","elementType","isOpen","collapseHeight","onInit","onChange","className","addState","noAnim","overflowOnExpanded"]),P=function(){return"0px"===h?"hidden":""},A=c(e.useReducer((function(e){return e+1}),0),2),E=(A[0],A[1]),D=e.useRef(),I=c(e.useState(0),2),T=I[0],C=I[1],k=e.useRef({collapse:d?"expanded":"collapsed",style:{height:d?"":h,visibility:d?"":P()}}).current;e.useEffect((function(){T&&N(v)}),[T]);var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e&&(e.name,e(i({state:k.collapse,style:k.style},t)))};function R(){D.current&&(k.collapse="collapsed",k.style={height:h,visibility:P()},E(),setTimeout((function(){return C(Date.now)}),0))}function q(){D.current&&(k.collapse="expanded",k.style={height:"",visibility:""},E(),setTimeout((function(){return C(Date.now)}),0))}function H(){return"".concat(D.current.scrollHeight,"px")}var F="expanded"===k.collapse||"expanding"===k.collapse;!F&&d&&function(){if(D.current){if(w)return q();k.collapse="expanding",u((function(){D.current&&"expanding"===k.collapse&&(k.style={height:H(),visibility:""},C(Date.now))}))}}(),F&&!d&&function(){if(D.current){if(w)return R();k.collapse="collapsing",k.style={height:H(),visibility:""},E(),u((function(){D.current&&"collapsing"===k.collapse&&(k.style={height:h,visibility:""},C(Date.now))}))}}();var M=i({overflow:"expanded"===k.collapse&&x?"":"hidden",transition:l},s,{},k.style),U=y,$=e.useCallback((function(e){e&&(D.current=e,N(g,{node:e}))}),[y]),z=j?"".concat(O," --c-").concat(k.collapse):O;return t.createElement(U,r({ref:$,style:M,onTransitionEnd:function(e){var t=e.target,n=e.propertyName;if(t===D.current&&"height"===n){var r=t.style.height;switch(k.collapse,k.collapse){case"expanding":""===r||r===h||q();break;case"collapsing":""===r||r!==h||R()}}},className:z},S),"function"==typeof o?o(k.collapse):"function"==typeof f?f(k.collapse):o)}}(__webpack_require__("./node_modules/react/index.js"))},"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Cards/EducationReview/EducationReview.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_EducationReview_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Cards/EducationReview/EducationReview.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h4:"h4",strong:"strong",blockquote:"blockquote"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_EducationReview_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"educationreview",children:"EducationReview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Блок отзыва об обучающих курсах ТЭК-Торг"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_EducationReview_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"блок-используется-на-страницах-приложения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Блок используется на страницах приложения:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"dev/prod, с нашего бэка:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"/education\r\n/education/courses/[id]\r\n/education/events/[id]"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"пропсы-получаемые-компонентом",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Пропсы, получаемые компонентом:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Cards/EducationReview/EducationReview.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _Default$parameters,_Default$parameters2,_Default$parameters3,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_components_blocks_EducationReview_EducationReview__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/blocks/EducationReview/EducationReview.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Cards/EducationReview",component:_components_blocks_EducationReview_EducationReview__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{bgColor:{description:"Определяет цвет фона компонента"},index:{description:"Индекс блока отзыва и его модального окна"},review:{description:"Содержимое отзыва, текст и аватар пользователя"}},args:{review:{name:'АО "Корпорация "МСП"',summary:"",review:'<p>АО &laquo;Корпорация &laquo;МСП&raquo; выражает благодарность АО &laquo;ТЭК-Торг&raquo; и ведущему специалисту отдела обучения АО &laquo;ТЭК Торг&raquo; Быкову Андрею Сергеевичу за эффективное взаимодействие в организации и проведении обучающих семинаров по вопросам участия субъектов малого и среднего предпринимательства в закупках в соответствии с Федеральным законом от 18 июля 2018 г. № 223-ФЗ &laquo;О закупках товаров, работ, услуг отдельными видами юридических лиц&raquo;.</p>\n<p>Одним из крупнейших блоков оказания АО &laquo;Корпорация &laquo;МСП&raquo; поддержки субъектам МСП является обеспечение доступа субъектов МСП к закупкам товаров, работ, услуг крупнейших заказчиков, определяемых Правительством Российской Федерации и осуществляющих закупочную деятельность в соответствии с Федеральным законом от&nbsp;18.07.2011 № 223-ФЗ &laquo;О закупках товаров, работ, услуг отдельными видами юридических лиц&raquo;.</p>\n<p>Активное участие в работе и заинтересованный подход со стороны Быкова А.С. позволили провести мероприятия АО &laquo;Корпорация &laquo;МСП&raquo;, направленные на повышение информационной открытости закупок крупнейших заказчиков у субъектов МСП, на высоком уровне.</p>\n<p>Желаем Вам и Вашему коллективу дальнейшего процветания и профессиональных успехов!</p>\n<p>&nbsp;</p>\n<div class="experts__item-position">Н.Н. Коротченкова, заместитель Генерального директора</div>',image:{title:"",alt:"",desktop:"https://dev-www.tektorg.ru/storage/photos/shares/Отзывы%20обучение/АО%20Корпорация%20МСП.jpg",tablet:null,mobile:null}},index:0}};var Default={name:"Default"};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Default'\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Cards/EducationReview/EducationReview.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/Cards/EducationReview/EducationReview.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/ModalBtn/ModalBtn.styled.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{W:function(){return Container}});var C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_style_mixins__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/style/mixins.ts"),Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.button.withConfig({displayName:"ModalBtnstyled__Container",componentId:"sc-a3kec6-0"})(["cursor:pointer;",";align-self:flex-start;&:not(:last-child){",";}&:nth-child(1){background-color:",";border-color:",";}&:nth-child(2){color:",";border-color:",";",";}"],(function(_ref){var view=_ref.view;return"rectangle"===(null==view?void 0:view.viewType)?_style_mixins__WEBPACK_IMPORTED_MODULE_0__.jn.apply(void 0,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(null==view?void 0:view.buttonParams)):"\n            position: relative;\n            background: transparent;\n            padding: 0;\n            outline: transparent;\n        "}),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.cv)("s","margin-right"),(function(_ref2){return _ref2.haveBg&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("white")}),(function(_ref3){return _ref3.haveBg&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("white")}),(function(_ref4){return _ref4.haveBg&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("white")}),(function(_ref5){return _ref5.haveBg&&(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.$_)("white")}),(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.Mr)("\n        span {\n            opacity: 0.5;\n        }\n    "));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{clickOnMapButton:{defaultValue:null,description:"",name:"clickOnMapButton",required:!1,type:{name:"{ event: string; category: string; action: string; }"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:'{ viewType: ModalBtnView; buttonParams: [transparent?: boolean, small?: boolean, colorBg?: "white" | "black" | "black2" | "blue" | "blue2" | "blue3" | "gray" | "gray2" | ... 14 more ... | undefined, colorText?: "white" | ... 21 more ... | undefined]; } | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},fromFooter:{defaultValue:null,description:"",name:"fromFooter",required:!1,type:{name:"boolean"}},haveBg:{defaultValue:null,description:"",name:"haveBg",required:!1,type:{name:"boolean"}},onOpenModalFormMetrik:{defaultValue:null,description:"",name:"onOpenModalFormMetrik",required:!1,type:{name:"{ event: string; category: string; actions: [{ key: string; value: boolean; }, { key: string; }, { key: string; }]; }"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ModalBtn/ModalBtn.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/ui/ModalBtn/ModalBtn.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/ModalBtn/ModalBtn.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ModalBtn_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/ModalBtn/ModalBtn.styled.tsx"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),_redux_modal_modalSlice__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/redux/modal/modalSlice.ts"),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,mapDispatchToProps={setModal:_redux_modal_modalSlice__WEBPACK_IMPORTED_MODULE_3__.cf},connector=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.$j)((function mapStateToProps(_ref){return{modal:_ref.modal}}),mapDispatchToProps),ModalBtn=function ModalBtn(_ref2){var children=_ref2.children,className=_ref2.className,id=_ref2.id,_ref2$view=_ref2.view,view=void 0===_ref2$view?{viewType:"simple",buttonParams:[!0,!1]}:_ref2$view,setModal=_ref2.setModal,haveBg=_ref2.haveBg,as=_ref2.as,clickOnMapButton=_ref2.clickOnMapButton,onOpenModalFormMetrik=_ref2.onOpenModalFormMetrik,fromFooter=_ref2.fromFooter;return __jsx(_ModalBtn_styled__WEBPACK_IMPORTED_MODULE_1__.W,{className:className,view:view,haveBg:haveBg,id:id,onClick:function onClick(){var _sendMetrik2;setModal({id:id,open:!0,fromFooter:fromFooter&&!0}),clickOnMapButton&&(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.k2)(clickOnMapButton.event,clickOnMapButton.category,(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},clickOnMapButton.action,children)),onOpenModalFormMetrik&&(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.k2)(onOpenModalFormMetrik.event,onOpenModalFormMetrik.category,(_sendMetrik2={},(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_sendMetrik2,onOpenModalFormMetrik.actions[0].key,onOpenModalFormMetrik.actions[0].value),(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_sendMetrik2,onOpenModalFormMetrik.actions[1].key,id),(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_sendMetrik2,onOpenModalFormMetrik.actions[2].key,"undefined"),_sendMetrik2))},as:as},children)};ModalBtn.displayName="ModalBtn",ModalBtn.__docgenInfo={description:"",methods:[],displayName:"ModalBtn",props:{view:{defaultValue:{value:"{ viewType: 'simple', buttonParams: [true, false] }",computed:!1},required:!1}}},__webpack_exports__.default=connector(ModalBtn);try{ModalBtn.displayName="ModalBtn",ModalBtn.__docgenInfo={description:"",displayName:"ModalBtn",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},clickOnMapButton:{defaultValue:null,description:"",name:"clickOnMapButton",required:!1,type:{name:"{ event: string; category: string; action: string; }"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},view:{defaultValue:{value:"{ viewType: 'simple', buttonParams: [true, false] }"},description:"",name:"view",required:!1,type:{name:'{ viewType: ModalBtnView; buttonParams: [transparent?: boolean, small?: boolean, colorBg?: "white" | "black" | "black2" | "blue" | "blue2" | "blue3" | "gray" | "gray2" | ... 14 more ... | undefined, colorText?: "white" | ... 21 more ... | undefined]; } | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},fromFooter:{defaultValue:null,description:"",name:"fromFooter",required:!1,type:{name:"boolean"}},haveBg:{defaultValue:null,description:"",name:"haveBg",required:!1,type:{name:"boolean"}},onOpenModalFormMetrik:{defaultValue:null,description:"",name:"onOpenModalFormMetrik",required:!1,type:{name:"{ event: string; category: string; actions: [{ key: string; value: boolean; }, { key: string; }, { key: string; }]; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ModalBtn/ModalBtn.tsx#ModalBtn"]={docgenInfo:ModalBtn.__docgenInfo,name:"ModalBtn",path:"src/components/ui/ModalBtn/ModalBtn.tsx#ModalBtn"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{D7:function(){return clearFromNBSP},Ef:function(){return getResizeObserverWidthChangeHandler},N4:function(){return declineWords},Yz:function(){return matchMediaBreakpoint},aF:function(){return truncateText},dk:function(){return getSrc},ev:function(){return compareEventDateTimeWithNow},k2:function(){return sendMetrik},kC:function(){return capitalize}});var C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_style_breakpoints__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/style/breakpoints.ts")),dayjs__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/hooks/useDebounce.ts"),__webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),__webpack_require__("./node_modules/dayjs/dayjs.min.js")),dayjs__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var matchMediaBreakpoint=function matchMediaBreakpoint(breakpoint){return window.matchMedia("(max-width: ".concat(_style_breakpoints__WEBPACK_IMPORTED_MODULE_2__.Z[breakpoint]-1,"px)"))},compareEventDateTimeWithNow=function compareEventDateTimeWithNow(date){return dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(date,"DD.MM.YYYY h:mm:ss").format("YYYY-MM-DD h:mm:ss")).diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()((new Date).toLocaleString("en-US",{timeZone:"Europe/Moscow"})).format("YYYY-MM-DD h:mm:ss"),"minute")},truncateText=function truncateText(text,maxSymbols){return(null==text?void 0:text.length)>maxSymbols?"".concat(text.substring(0,maxSymbols).trim(),"..."):text},capitalize=function capitalize(text){return text.charAt(0).toUpperCase()+text.slice(1)},getResizeObserverWidthChangeHandler=function getResizeObserverWidthChangeHandler(callback){var prevWidth=0;return function(entries){entries||callback(),null==entries||entries.forEach((function(entry){prevWidth!==entry.contentRect.width&&callback(),prevWidth=entry.contentRect.width}))}},CLEAR_REGEXP=("".concat("GTM-NMVPV6S"),new RegExp(["&nbsp;","&laquo;","&raquo;","&mdash;","</br>","<br>","<br/>"].join("|"),"g")),clearFromNBSP=function clearFromNBSP(text){return text?text.replace(CLEAR_REGEXP," "):null},sendMetrik=function sendMetrik(eventName,eventCategory,eventAction,GA_EventAction){eventAction&&(eventAction=function ObjectPropertiesStringify(obj){return Object.keys(obj).forEach((function(key){"number"==typeof obj[key]&&(obj[key]+="")})),obj}(eventAction));var _eventLabel=window.location.href;if(eventName&&eventCategory&&eventAction){var _parameters=(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},_eventLabel,function toArrayOfObjects(obj){return Object.keys(obj).length?Object.entries(obj).map((function(entry){return(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},entry[0],entry[1])})):[{}]}(eventAction));window.ym("91415546","reachGoal",eventName),window.ym("91415546","params",_parameters),metriksDebugger("Ya Params:",_parameters),pushDataLayer(eventName,eventCategory,eventAction,GA_EventAction)}},pushDataLayer=function pushDataLayer(eventName,eventCategory,eventAction,GA_EventAction){var eventLabel=window.location.href;window.dataLayer=window.dataLayer||[];var tags=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_Max_Work_Only_Test_www_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({event:eventName,eventCategory:eventCategory,eventAction:GA_EventAction||eventAction,eventLabel:eventLabel},eventAction);window.dataLayer.push(tags),metriksDebugger("GTM Data Layer:",tags)},metriksDebugger=function metriksDebugger(msg,data){"localhost:3000"===window.location.host&&console.log(msg,data)},getSrc=function getSrc(image){var _image$desktop,_image$tablet,_image$mobile;return"object"==typeof image?null!=(null==image||null===(_image$desktop=image.desktop)||void 0===_image$desktop?void 0:_image$desktop.length)?null==image?void 0:image.desktop:null!=(null==image||null===(_image$tablet=image.tablet)||void 0===_image$tablet?void 0:_image$tablet.length)?null==image?void 0:image.tablet:null!=(null==image||null===(_image$mobile=image.mobile)||void 0===_image$mobile?void 0:_image$mobile.length)?null==image?void 0:image.mobile:"":image},declineWords=function declineWords(number,words){return words[number%100>4&&number%100<20?2:[2,0,1,1,1,2][number%10<5?number%10:5]]}},"./src/hooks/useDebounce.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useDebounce(value,delay){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),debouncedValue=_useState[0],setDebouncedValue=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var timer=setTimeout((function(){return setDebouncedValue(value)}),delay||500);return function(){return clearTimeout(timer)}}),[value,delay]),debouncedValue}},"./node_modules/next/dist/client/router.js":function(module,exports,__webpack_require__){"use strict";var console=__webpack_require__("./node_modules/console-browserify/index.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return _router.default}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function(){return _withRouter.default}}),exports.useRouter=function useRouter(){return _react.default.useContext(_routerContext.RouterContext)},exports.createRouter=function createRouter(...args){return singletonRouter.router=new _router.default(...args),singletonRouter.readyCallbacks.forEach((cb=>cb())),singletonRouter.readyCallbacks=[],singletonRouter.router},exports.makePublicRouterInstance=function makePublicRouterInstance(router){const scopedRouter=router,instance={};for(const property of urlPropertyFields)"object"!=typeof scopedRouter[property]?instance[property]=scopedRouter[property]:instance[property]=Object.assign(Array.isArray(scopedRouter[property])?[]:{},scopedRouter[property]);return instance.events=_router.default.events,coreMethodFields.forEach((field=>{instance[field]=(...args)=>scopedRouter[field](...args)})),instance},exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_router=_interopRequireDefault(__webpack_require__("./node_modules/next/dist/shared/lib/router/router.js")),_routerContext=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.js"),_isError=_interopRequireDefault(__webpack_require__("./node_modules/next/dist/lib/is-error.js")),_withRouter=_interopRequireDefault(__webpack_require__("./node_modules/next/dist/client/with-router.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const singletonRouter={router:null,readyCallbacks:[],ready(cb){if(this.router)return cb();"undefined"!=typeof window&&this.readyCallbacks.push(cb)}},urlPropertyFields=["pathname","route","query","asPath","components","isFallback","basePath","locale","locales","defaultLocale","isReady","isPreview","isLocaleDomain","domainLocales"],coreMethodFields=["push","replace","reload","back","prefetch","beforePopState"];function getRouter(){if(!singletonRouter.router){throw new Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n')}return singletonRouter.router}Object.defineProperty(singletonRouter,"events",{get(){return _router.default.events}}),urlPropertyFields.forEach((field=>{Object.defineProperty(singletonRouter,field,{get(){return getRouter()[field]}})})),coreMethodFields.forEach((field=>{singletonRouter[field]=(...args)=>getRouter()[field](...args)})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((event=>{singletonRouter.ready((()=>{_router.default.events.on(event,((...args)=>{const eventField=`on${event.charAt(0).toUpperCase()}${event.substring(1)}`,_singletonRouter=singletonRouter;if(_singletonRouter[eventField])try{_singletonRouter[eventField](...args)}catch(err){console.error(`Error when running the Router event: ${eventField}`),console.error(_isError.default(err)?`${err.message}\n${err.stack}`:err+"")}}))}))}));var _default=singletonRouter;exports.default=_default,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/use-intersection.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIntersection=function useIntersection({rootRef:rootRef,rootMargin:rootMargin,disabled:disabled}){const isDisabled=disabled||!hasIntersectionObserver,unobserve=_react.useRef(),[visible,setVisible]=_react.useState(!1),[element,setElement]=_react.useState(null);_react.useEffect((()=>{if(hasIntersectionObserver){if(unobserve.current&&(unobserve.current(),unobserve.current=void 0),isDisabled||visible)return;return element&&element.tagName&&(unobserve.current=function observe(element,callback,options){const{id:id,observer:observer,elements:elements}=function createObserver(options){const id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find((obj=>obj.root===id.root&&obj.margin===id.margin));let instance;if(existing&&(instance=observers.get(existing),instance))return instance;const elements=new Map,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)}))}),options);return instance={id:id,observer:observer,elements:elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function unobserve(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);const index=idList.findIndex((obj=>obj.root===id.root&&obj.margin===id.margin));index>-1&&idList.splice(index,1)}}}(element,(isVisible=>isVisible&&setVisible(isVisible)),{root:null==rootRef?void 0:rootRef.current,rootMargin:rootMargin})),()=>{null==unobserve.current||unobserve.current(),unobserve.current=void 0}}if(!visible){const idleCallback=_requestIdleCallback.requestIdleCallback((()=>setVisible(!0)));return()=>_requestIdleCallback.cancelIdleCallback(idleCallback)}}),[element,isDisabled,rootMargin,rootRef,visible]);const resetVisible=_react.useCallback((()=>{setVisible(!1)}),[]);return[setElement,visible,resetVisible]};var _react=__webpack_require__("./node_modules/react/index.js"),_requestIdleCallback=__webpack_require__("./node_modules/next/dist/client/request-idle-callback.js");const hasIntersectionObserver="function"==typeof IntersectionObserver;const observers=new Map,idList=[];("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/with-router.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function withRouter(ComposedComponent){function WithRouterWrapper(props){return _react.default.createElement(ComposedComponent,Object.assign({router:_router.useRouter()},props))}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,!1;return WithRouterWrapper};var _react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")),_router=__webpack_require__("./node_modules/next/dist/client/router.js");("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/router.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/client/router.js")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);