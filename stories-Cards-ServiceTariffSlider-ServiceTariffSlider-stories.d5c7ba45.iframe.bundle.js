"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[1965],{"./src/stories/Cards/ServiceTariffSlider/ServiceTariffSlider.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return ServiceTariffSlider_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),swiper_slide=__webpack_require__("./node_modules/swiper/esm/react/swiper-slide.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/style/mixins.ts"),SimpleSlider_styled=__webpack_require__("./src/components/common/SimpleSlider/SimpleSlider.styled.tsx"),CardTariff_styled=__webpack_require__("./src/components/blocks/CardTariff/CardTariff.styled.tsx"),ModalBtn_styled=__webpack_require__("./src/components/ui/ModalBtn/ModalBtn.styled.tsx"),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"ServiceTariffSliderstyled__Container",componentId:"sc-4w1nlq-0"})(["position:relative;"," ",";",";background-color:",";","{",";","{",";}","{",";}","{width:100%;"," ",";a{position:relative;display:inline-block;&::after{content:'';width:100%;height:1px;display:block;background:",";}","{transition:color 0.3s ease-in-out;&::after{transition:background 0.3s ease-in-out;}",";}}}}","{padding:0;h2{",";}","{margin-top:",";","{margin-top:0;}}}","{margin:0 -4px;","{overflow:visible;}.swiper-slide{margin:0 4px;display:flex;flex-direction:column;width:",";","{width:",";}","{width:calc(100% / 3 - 8px);}","{height:100%;}&:nth-child(1){","{background-color:",";color:",";","{._is-ie &{margin-bottom:auto;}}","{border-top:none;}","{",";}}}}}"],(function(_ref){return _ref.hasSideOffsets&&(0,mixins.h$)()}),(function(_ref2){var topOffset=_ref2.topOffset;return topOffset?(0,mixins.cv)(topOffset,"padding-top"):(0,mixins.cv)("xxxl","padding-top")}),(function(_ref3){var bottomOffset=_ref3.bottomOffset;return bottomOffset&&(0,mixins.cv)(bottomOffset,"padding-bottom")}),(function(_ref4){var bgColor=_ref4.bgColor;return bgColor&&(0,mixins.$_)(bgColor)}),CardTariff_styled.W2,(0,mixins.Di)("min-height",430,322,286,322,322),CardTariff_styled.e4,(0,mixins.cv)("m","padding"),CardTariff_styled.z,(0,mixins.cv)("m","padding"),CardTariff_styled.dk,(0,mixins.LZ)("text1-l"),(0,mixins.cv)("xs","margin-top"),(0,mixins.$_)("black"),(0,mixins.Ot)("xl"),(0,mixins.Mr)("\n                        color: ".concat((0,mixins.$_)("blue"),";\n\n                        &::after {\n                            background: ").concat((0,mixins.$_)("blue"),";\n                        }\n                    ")),SimpleSlider_styled.W2,(0,mixins.LZ)("h4-b"),ModalBtn_styled.W,(0,mixins.vw)(15,"xs"),(0,mixins.Ot)("md"),SimpleSlider_styled.HS,(0,mixins.ip)("xl"),(0,mixins.vw)(314,"xs"),(0,mixins.Ot)("md"),(0,mixins.vw)(336,"md"),(0,mixins.Ot)("xl"),CardTariff_styled.W2,CardTariff_styled.W2,(0,mixins.$_)("blue"),(0,mixins.$_)("white"),CardTariff_styled.e4,CardTariff_styled.z,CardTariff_styled.tA,(function(_ref5){return!_ref5.firstPriceNormal&&(0,mixins.LZ)("text1-b")}));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/ServiceTariffSlider/ServiceTariffSlider.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/blocks/ServiceTariffSlider/ServiceTariffSlider.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var CardTariff=__webpack_require__("./src/components/blocks/CardTariff/CardTariff.tsx"),__jsx=react.createElement,Mask1=function Mask1(props){return __jsx("svg",props,__jsx("path",{opacity:"0.05",d:"M1502 -399L871.007 283.599H292.34L-234 844.518V1259L396.993 591.936H975.66L1502 41.3888V-399Z",fill:"black"}))};Mask1.displayName="Mask1",Mask1.defaultProps={width:"434",height:"430",viewBox:"0 0 434 430",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var SimpleSlider=dynamic_default()((function(){return __webpack_require__.e(4768).then(__webpack_require__.bind(__webpack_require__,"./src/components/common/SimpleSlider/SimpleSlider.tsx"))}),{loadableGenerated:{webpack:function webpack(){return["./src/components/common/SimpleSlider/SimpleSlider.tsx"]}}}),ServiceTariffSlider=function ServiceTariffSlider(_ref){var wrapper=_ref.wrapper,tariffs=_ref.content.tariffs,_ref$bg=_ref.bg,bg=void 0===_ref$bg?"white":_ref$bg,_ref$hasSideOffsets=_ref.hasSideOffsets,hasSideOffsets=void 0===_ref$hasSideOffsets||_ref$hasSideOffsets,topOffset=_ref.topOffset,bottomOffset=_ref.bottomOffset,firstPriceNormal=_ref.firstPriceNormal,metrika=_ref.metrika;return __jsx(Container,{firstPriceNormal:firstPriceNormal,hasSideOffsets:hasSideOffsets,topOffset:topOffset,bottomOffset:bottomOffset,bgColor:bg},__jsx(SimpleSlider,{title:wrapper.title,links:wrapper.links,modals:wrapper.modals,showNavigation:!!(tariffs.length>3),swiperOptions:{allowTouchMove:!1},metrika:metrika},tariffs.map((function(item,index){return __jsx(swiper_slide.o,{key:index},__jsx(CardTariff.ZP,{tariff:item,bgColor:"white"===bg?"gray2":"white",indexInList:index,renderSvg:0===index&&__jsx(Mask1,null)}))}))))};ServiceTariffSlider.displayName="ServiceTariffSlider",ServiceTariffSlider.__docgenInfo={description:"",methods:[],displayName:"ServiceTariffSlider",props:{bg:{defaultValue:{value:"'white'",computed:!1},required:!1},hasSideOffsets:{defaultValue:{value:"true",computed:!1},required:!1}}};var _Default$parameters,_Default$parameters2,_Default$parameters3,ServiceTariffSlider_ServiceTariffSlider=ServiceTariffSlider;try{ServiceTariffSlider.displayName="ServiceTariffSlider",ServiceTariffSlider.__docgenInfo={description:"",displayName:"ServiceTariffSlider",props:{wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"{ modals?: ModalBtnI[] | undefined; title: string; links?: LinkI[] | undefined; }"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"{ tariffs: ITariff[]; }"}},bg:{defaultValue:{value:"white"},description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray2"'}]}},hasSideOffsets:{defaultValue:{value:"true"},description:"",name:"hasSideOffsets",required:!1,type:{name:"boolean"}},firstPriceNormal:{defaultValue:null,description:"",name:"firstPriceNormal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/ServiceTariffSlider/ServiceTariffSlider.tsx#ServiceTariffSlider"]={docgenInfo:ServiceTariffSlider.__docgenInfo,name:"ServiceTariffSlider",path:"src/components/blocks/ServiceTariffSlider/ServiceTariffSlider.tsx#ServiceTariffSlider"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var serviceTariffs={wrapper:{title:"Экономьте вместе с ЭДО",modals:[{id:"ApplicationForm3",text:"Подключить ЭДО"}]},tariffs:[{nid:"30",title:"Экономьте 25&thinsp;400&thinsp;₽<br>в&nbsp;год с&nbsp;ЭДО",section:"rosneft",description:"<p>Мы&nbsp;подсчитали среднемесячный трафик документов на&nbsp;ЭТП для одного поставщика</p>",price:"5&nbsp;документов&nbsp;| пакет<br>50&nbsp;пакетов&nbsp;| месяц<br>50&nbsp;рублей&nbsp;| средняя цена доставки"},{nid:"31",title:"Бумажный<br>документооборот",section:"rosneft",description:"<p>Столько вы&nbsp;тратите ежегодно на&nbsp;печать и&nbsp;доставку 1&nbsp;800&nbsp;документов</p>",price_comment:"1 год",price:"38&thinsp;200&thinsp;₽"},{nid:"751",title:"Годовой тариф<br>Диадока",section:"rosneft",description:"<p>2000 исходящих документов, входящие&nbsp;&mdash; бесплатно. Цена без учета интеграции</p>",price_comment:"1 год",price:"12&thinsp;800&thinsp;₽"}]},ServiceTariffSlider_stories={title:"Cards/ServiceTariffSlider",component:ServiceTariffSlider_ServiceTariffSlider,argTypes:{hasSideOffsets:{description:"Определяет боковые отступы компонента"},bg:{description:"Задает цвет фона для компонента"},content:{description:"Контентная часть блока, список тарифов"},wrapper:{description:"Определяет заголовок и модальные окна, передаваемые в заголовок над слайдером"},firstPriceNormal:{description:"Задает увеличенный шрифт для первого элемента слайдера"}},args:{wrapper:serviceTariffs.wrapper,content:{tariffs:serviceTariffs.tariffs}}},Default={name:"Default"};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Default'\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Cards/ServiceTariffSlider/ServiceTariffSlider.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/Cards/ServiceTariffSlider/ServiceTariffSlider.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}}}]);