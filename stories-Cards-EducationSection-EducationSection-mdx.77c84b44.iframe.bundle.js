/*! For license information please see stories-Cards-EducationSection-EducationSection-mdx.77c84b44.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[1139,4300],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Cards/EducationSection/EducationSection.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_EducationSection_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Cards/EducationSection/EducationSection.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h4:"h4",strong:"strong",blockquote:"blockquote",p:"p",a:"a",hr:"hr"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_EducationSection_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"educationinner",children:"EducationInner"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_EducationSection_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"блок-используется-на-страницах-приложения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Блок используется на страницах приложения:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"dev:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://dev-www.tektorg.ru",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://dev-www.tektorg.ru"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"prod:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.tektorg.ru",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.tektorg.ru"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Cards/EducationSection/EducationSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return EducationSection_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/style/mixins.ts"),EducationWidgets_styled=__webpack_require__("./src/components/blocks/EducationWidgets/EducationWidgets.styled.tsx"),BlockWithCards=__webpack_require__("./src/components/blocks/BlockWithCards/BlockWithCards.tsx"),Card8_styled=__webpack_require__("./src/components/blocks/Card8/Card8.styled.tsx"),Container=(0,styled_components_browser_esm.ZP)(BlockWithCards.Z).withConfig({displayName:"EducationSectionstyled__Container",componentId:"sc-9blscv-0"})(["position:relative;",";","{",";}","{",";}"],(0,mixins.cv)("xxxl","padding-bottom"),EducationWidgets_styled.wN,(0,mixins.cv)("xl","padding-top"),Card8_styled.Cd,(0,mixins.LZ)("h5-b"));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"black2"'},{value:'"blue"'},{value:'"blue2"'},{value:'"blue3"'},{value:'"gray"'},{value:'"gray2"'},{value:'"gray3"'},{value:'"gray4"'},{value:'"gray5"'},{value:'"gray6"'},{value:'"red"'},{value:'"red2"'},{value:'"maskColor1"'},{value:'"yellow"'},{value:'"orange"'},{value:'"yellow2"'},{value:'"orange2"'},{value:'"darkBlue"'},{value:'"green"'},{value:'"grayish"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"LinkI[]"}},modals:{defaultValue:null,description:"",name:"modals",required:!1,type:{name:"ModalBtnI[]"}},inView:{defaultValue:null,description:"",name:"inView",required:!1,type:{name:"boolean"}},metrika:{defaultValue:null,description:"",name:"metrika",required:!1,type:{name:"MouseEventHandler<Element>"}},clickOnButton:{defaultValue:null,description:"",name:"clickOnButton",required:!1,type:{name:"{ event: string; category: string; action: string; }"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sections/EducationSection/EducationSection.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/sections/EducationSection/EducationSection.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var react_intersection_observer_m=__webpack_require__("./node_modules/react-intersection-observer/react-intersection-observer.m.js"),EducationWidgets=__webpack_require__("./src/components/blocks/EducationWidgets/EducationWidgets.tsx"),__jsx=react.createElement,EducationSection=function EducationSection(_ref){var wrapper=_ref.wrapper,educationsEvents=_ref.educationsEvents,educationsEventsImages=_ref.educationsEventsImages,cursesCards=_ref.cursesCards,cursesCardsHasBanner=_ref.cursesCardsHasBanner,metriksSampleHead=_ref.metriksSampleHead,metriksSample=_ref.metriksSample;if(educationsEventsImages&&educationsEvents){var i=0;educationsEvents.forEach((function(item){educationsEventsImages[i]||(i=0),item.image=educationsEventsImages[i],i++}))}return null!=educationsEvents&&educationsEvents.length||null!=cursesCards&&cursesCards.length?__jsx(react_intersection_observer_m.df,{triggerOnce:!0,threshold:.25},(function(_ref2){var inView=_ref2.inView,ref=_ref2.ref;return __jsx(Container,(0,esm_extends.Z)({},wrapper,{bg:"white",inView:inView,ref:ref,clickOnButton:metriksSampleHead}),__jsx(EducationWidgets.Z,{educationsEvents:educationsEvents,cursesCards:cursesCards,Card8HasBanner:cursesCardsHasBanner,metriksSample:metriksSample}))})):null};EducationSection.displayName="EducationSection",EducationSection.__docgenInfo={description:"",methods:[],displayName:"EducationSection"};var _Default$parameters,_Default$parameters2,_Default$parameters3,EducationSection_EducationSection=EducationSection;try{EducationSection.displayName="EducationSection",EducationSection.__docgenInfo={description:"",displayName:"EducationSection",props:{wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"{} | BlockWithCardsProps"}},educationsEvents:{defaultValue:null,description:"",name:"educationsEvents",required:!0,type:{name:"IEducationEvent[] | null"}},educationsEventsImages:{defaultValue:null,description:"",name:"educationsEventsImages",required:!1,type:{name:"string[]"}},cursesCards:{defaultValue:null,description:"",name:"cursesCards",required:!0,type:{name:"ICourse[] | null"}},cursesCardsHasBanner:{defaultValue:null,description:"",name:"cursesCardsHasBanner",required:!1,type:{name:"boolean"}},metriksSampleHead:{defaultValue:null,description:"",name:"metriksSampleHead",required:!1,type:{name:"{ event: string; category: string; action: string; }"}},metriksSample:{defaultValue:null,description:"",name:"metriksSample",required:!1,type:{name:"{ event: string; category: string; action: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sections/EducationSection/EducationSection.tsx#EducationSection"]={docgenInfo:EducationSection.__docgenInfo,name:"EducationSection",path:"src/components/sections/EducationSection/EducationSection.tsx#EducationSection"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var EducationSection_stories={title:"Cards/EducationSection",component:EducationSection_EducationSection,argTypes:{wrapper:{description:"Заголовок компонента, так же могут быть кнопки такие как [Смотреть всё]"},educationsEvents:{description:"Описания слайдов для главной карточки"},educationsEventsImages:{description:"Изображения для слайдов в главной карточке"},cursesCards:{description:"Данные для маленьких карточек"},cursesCardsHasBanner:{description:"В зависемости от того баннер это или нет, делает текст чёрным или белым",options:[!1,!0],control:{type:"radio"}},metriksSample:{description:"Данные для подключения метрики"},metriksSampleHead:{description:"Данные для подключения метрики"}}},Default={name:"Default",args:{wrapper:{name:"Обучающие мероприятия",links:[{href:"/education",text:"Смотреть все"}]},educationsEventsImages:["/images/index/educationsEvents/1.jpg","/images/index/educationsEvents/2.jpg","/images/index/educationsEvents/3.jpg"],educationsEvents:[{title:"УСПЕШНОЕ УЧАСТИЕ В ЗАКУПКАХ 223-ФЗ ДЛЯ КОМПАНИЙ МАЛОГО И СРЕДНЕГО БИЗНЕСА",slug:"uspesnoe-ucastie-v-zakupkax-223-fz-dlia-kompanii-malogo-i-srednego-biznesa-23",date_start:"22.11.2023 00:00:00",date:"",location:"Владимир",price:0,type:"seminar",audience:"not_specified"},{title:"АКТУАЛЬНЫЕ ИЗМЕНЕНИЯ ДЕЙСТВУЮЩЕГО ЗАКОНОДАТЕЛЬСТВА В ЭЛЕКТРОННЫХ ЗАКУПКАХ ПО 223-ФЗ",date:"",slug:"aktualnye-izmeneniia-deistvuiushhego-zakonodatelstva-v-elektronnyx-zakupkax-po-223-fz-3",date_start:"22.11.2023 00:00:00",location:"",price:0,type:"webinar",audience:"not_specified"},{title:'Учебный центр ООО "Специализированная организация Южного Урала" «УЧАСТИЕ В ЭЛЕКТРОННЫХ ТОРГАХ НА ЭТП ТЭК-ТОРГ СЕКЦИЯ ОАО «НК «РОСНЕФТЬ»',date:"",slug:"ucebnyi-centr-ooo-specializirovannaia-organizaciia-iuznogo-urala-ucastie-v-elektronnyx-torgax-na-etp",date_start:"20.09.2023 00:00:00",location:"Челябинск",price:0,type:"seminar",audience:"not_specified"}],cursesCards:[{banner:"",title:"тест",slug:"test-2",price:"",type:"course",audience:"customer"},{banner:"",price:"",title:"Test Course",slug:"test-course",type:"course",audience:"customer"},{banner:"",title:"Маниловым. Как он.",slug:"manilovym-kak-on",price:"41555",type:"course",audience:"customer"},{banner:"",title:"Противодействие коррупции в сфере закупок",slug:"protivodeistvie-korrupcii-v-sfere-zakupok",price:"7000",type:"course",audience:"customer"}],cursesCardsHasBanner:!1}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Default',\n  args: {\n    wrapper: {\n      name: 'Обучающие мероприятия',\n      links: [{\n        href: '/education',\n        text: 'Смотреть все'\n      }]\n    },\n    educationsEventsImages: ['/images/index/educationsEvents/1.jpg', '/images/index/educationsEvents/2.jpg', '/images/index/educationsEvents/3.jpg'],\n    educationsEvents: [{\n      title: 'УСПЕШНОЕ УЧАСТИЕ В ЗАКУПКАХ 223-ФЗ ДЛЯ КОМПАНИЙ МАЛОГО И СРЕДНЕГО БИЗНЕСА',\n      slug: 'uspesnoe-ucastie-v-zakupkax-223-fz-dlia-kompanii-malogo-i-srednego-biznesa-23',\n      date_start: '22.11.2023 00:00:00',\n      date: '',\n      location: 'Владимир',\n      price: 0,\n      type: 'seminar',\n      audience: 'not_specified'\n    }, {\n      title: 'АКТУАЛЬНЫЕ ИЗМЕНЕНИЯ ДЕЙСТВУЮЩЕГО ЗАКОНОДАТЕЛЬСТВА В ЭЛЕКТРОННЫХ ЗАКУПКАХ ПО 223-ФЗ',\n      date: '',\n      slug: 'aktualnye-izmeneniia-deistvuiushhego-zakonodatelstva-v-elektronnyx-zakupkax-po-223-fz-3',\n      date_start: '22.11.2023 00:00:00',\n      location: '',\n      price: 0,\n      type: 'webinar',\n      audience: 'not_specified'\n    }, {\n      title: 'Учебный центр ООО \"Специализированная организация Южного Урала\" «УЧАСТИЕ В ЭЛЕКТРОННЫХ ТОРГАХ НА ЭТП ТЭК-ТОРГ СЕКЦИЯ ОАО «НК «РОСНЕФТЬ»',\n      date: '',\n      slug: 'ucebnyi-centr-ooo-specializirovannaia-organizaciia-iuznogo-urala-ucastie-v-elektronnyx-torgax-na-etp',\n      date_start: '20.09.2023 00:00:00',\n      location: 'Челябинск',\n      price: 0,\n      type: 'seminar',\n      audience: 'not_specified'\n    }],\n    cursesCards: [{\n      banner: '',\n      title: 'тест',\n      slug: 'test-2',\n      price: '',\n      type: 'course',\n      audience: 'customer'\n    }, {\n      banner: '',\n      price: '',\n      title: 'Test Course',\n      slug: 'test-course',\n      type: 'course',\n      audience: 'customer'\n    }, {\n      banner: '',\n      title: 'Маниловым. Как он.',\n      slug: 'manilovym-kak-on',\n      price: '41555',\n      type: 'course',\n      audience: 'customer'\n    }, {\n      banner: '',\n      title: 'Противодействие коррупции в сфере закупок',\n      slug: 'protivodeistvie-korrupcii-v-sfere-zakupok',\n      price: '7000',\n      type: 'course',\n      audience: 'customer'\n    }],\n    cursesCardsHasBanner: false\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Cards/EducationSection/EducationSection.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/Cards/EducationSection/EducationSection.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-intersection-observer/react-intersection-observer.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{YD:function(){return useInView},df:function(){return InView}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}var observerMap=new Map,RootIds=new WeakMap,rootId=0,unsupportedValue=void 0;function optionsToId(options){return Object.keys(options).sort().filter((function(key){return void 0!==options[key]})).map((function(key){return key+"_"+("root"===key?function getRootId(root){return root?(RootIds.has(root)||(rootId+=1,RootIds.set(root,rootId.toString())),RootIds.get(root)):"0"}(options.root):options[key])})).toString()}function observe(element,callback,options,fallbackInView){if(void 0===options&&(options={}),void 0===fallbackInView&&(fallbackInView=unsupportedValue),void 0===window.IntersectionObserver&&void 0!==fallbackInView){var bounds=element.getBoundingClientRect();return callback(fallbackInView,{isIntersecting:fallbackInView,target:element,intersectionRatio:"number"==typeof options.threshold?options.threshold:0,time:0,boundingClientRect:bounds,intersectionRect:bounds,rootBounds:bounds}),function(){}}var _createObserver=function createObserver(options){var id=optionsToId(options),instance=observerMap.get(id);if(!instance){var thresholds,elements=new Map,observer=new IntersectionObserver((function(entries){entries.forEach((function(entry){var _elements$get,inView=entry.isIntersecting&&thresholds.some((function(threshold){return entry.intersectionRatio>=threshold}));options.trackVisibility&&void 0===entry.isVisible&&(entry.isVisible=inView),null==(_elements$get=elements.get(entry.target))||_elements$get.forEach((function(callback){callback(inView,entry)}))}))}),options);thresholds=observer.thresholds||(Array.isArray(options.threshold)?options.threshold:[options.threshold||0]),instance={id:id,observer:observer,elements:elements},observerMap.set(id,instance)}return instance}(options),id=_createObserver.id,observer=_createObserver.observer,elements=_createObserver.elements,callbacks=elements.get(element)||[];return elements.has(element)||elements.set(element,callbacks),callbacks.push(callback),observer.observe(element),function unobserve(){callbacks.splice(callbacks.indexOf(callback),1),0===callbacks.length&&(elements.delete(element),observer.unobserve(element)),0===elements.size&&(observer.disconnect(),observerMap.delete(id))}}var _excluded=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function isPlainChildren(props){return"function"!=typeof props.children}var InView=function(_React$Component){function InView(props){var _this;return(_this=_React$Component.call(this,props)||this).node=null,_this._unobserveCb=null,_this.handleNode=function(node){_this.node&&(_this.unobserve(),node||_this.props.triggerOnce||_this.props.skip||_this.setState({inView:!!_this.props.initialInView,entry:void 0})),_this.node=node||null,_this.observeNode()},_this.handleChange=function(inView,entry){inView&&_this.props.triggerOnce&&_this.unobserve(),isPlainChildren(_this.props)||_this.setState({inView:inView,entry:entry}),_this.props.onChange&&_this.props.onChange(inView,entry)},_this.state={inView:!!props.initialInView,entry:void 0},_this}!function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(InView,_React$Component);var _proto=InView.prototype;return _proto.componentDidUpdate=function componentDidUpdate(prevProps){prevProps.rootMargin===this.props.rootMargin&&prevProps.root===this.props.root&&prevProps.threshold===this.props.threshold&&prevProps.skip===this.props.skip&&prevProps.trackVisibility===this.props.trackVisibility&&prevProps.delay===this.props.delay||(this.unobserve(),this.observeNode())},_proto.componentWillUnmount=function componentWillUnmount(){this.unobserve(),this.node=null},_proto.observeNode=function observeNode(){if(this.node&&!this.props.skip){var _this$props=this.props,threshold=_this$props.threshold,root=_this$props.root,rootMargin=_this$props.rootMargin,trackVisibility=_this$props.trackVisibility,delay=_this$props.delay,fallbackInView=_this$props.fallbackInView;this._unobserveCb=observe(this.node,this.handleChange,{threshold:threshold,root:root,rootMargin:rootMargin,trackVisibility:trackVisibility,delay:delay},fallbackInView)}},_proto.unobserve=function unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},_proto.render=function render(){if(!isPlainChildren(this.props)){var _this$state=this.state,inView=_this$state.inView,entry=_this$state.entry;return this.props.children({inView:inView,entry:entry,ref:this.handleNode})}var _this$props2=this.props,children=_this$props2.children,as=_this$props2.as,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_this$props2,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(as||"div",_extends({ref:this.handleNode},props),children)},InView}(react__WEBPACK_IMPORTED_MODULE_0__.Component);function useInView(_temp){var _ref=void 0===_temp?{}:_temp,threshold=_ref.threshold,delay=_ref.delay,trackVisibility=_ref.trackVisibility,rootMargin=_ref.rootMargin,root=_ref.root,triggerOnce=_ref.triggerOnce,skip=_ref.skip,initialInView=_ref.initialInView,fallbackInView=_ref.fallbackInView,unobserve=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState({inView:!!initialInView}),state=_React$useState[0],setState=_React$useState[1],setRef=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(node){void 0!==unobserve.current&&(unobserve.current(),unobserve.current=void 0),skip||node&&(unobserve.current=observe(node,(function(inView,entry){setState({inView:inView,entry:entry}),entry.isIntersecting&&triggerOnce&&unobserve.current&&(unobserve.current(),unobserve.current=void 0)}),{root:root,rootMargin:rootMargin,threshold:threshold,trackVisibility:trackVisibility,delay:delay},fallbackInView))}),[Array.isArray(threshold)?threshold.toString():threshold,root,rootMargin,triggerOnce,skip,trackVisibility,fallbackInView,delay]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){unobserve.current||!state.entry||triggerOnce||skip||setState({inView:!!initialInView})}));var result=[setRef,state.inView,state.entry];return result.ref=result[0],result.inView=result[1],result.entry=result[2],result}InView.displayName="InView",InView.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);