"use strict";(self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[]).push([[9333],{"./src/stories/Spoilers/WrapperSpoiler/WrapperSpoiler.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return WrapperSpoiler_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),ContentSpoiler=__webpack_require__("./src/components/blocks/ContentSpoiler/ContentSpoiler.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/style/mixins.ts"),Container=styled_components_browser_esm.ZP.ul.withConfig({displayName:"WrapperSpoilerstyled__Container",componentId:"sc-wwxvrh-0"})(["position:relative;margin:0;padding:0;list-style:none;& > li:nth-child(odd){background-color:",";}& > li:nth-child(even){background-color:",";}"],(0,mixins.$_)("gray2"),(0,mixins.$_)("white"));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/WrapperSpoiler/WrapperSpoiler.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/blocks/WrapperSpoiler/WrapperSpoiler.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,WrapperSpoiler=function WrapperSpoiler(_ref){var content=_ref.content,header=_ref.header,metriksSample=_ref.metriksSample,topOffset=_ref.topOffset,bottomOffset=_ref.bottomOffset;return __jsx(Container,null,header&&header.map((function(header,index){return __jsx("li",{key:index},__jsx(ContentSpoiler.Z,(0,esm_extends.Z)({},header,{metriksSample:metriksSample,topOffset:topOffset,bottomOffset:bottomOffset}),content[index]))})))};WrapperSpoiler.displayName="WrapperSpoiler",WrapperSpoiler.__docgenInfo={description:"",methods:[],displayName:"WrapperSpoiler"};var _Default$parameters,_Default$parameters2,_Default$parameters3,WrapperSpoiler_WrapperSpoiler=WrapperSpoiler;try{WrapperSpoiler.displayName="WrapperSpoiler",WrapperSpoiler.__docgenInfo={description:"",displayName:"WrapperSpoiler",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element[]"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ISpoilerHead[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blocks/WrapperSpoiler/WrapperSpoiler.tsx#WrapperSpoiler"]={docgenInfo:WrapperSpoiler.__docgenInfo,name:"WrapperSpoiler",path:"src/components/blocks/WrapperSpoiler/WrapperSpoiler.tsx#WrapperSpoiler"})}catch(__react_docgen_typescript_loader_error){}var WrapperSpoiler_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var WrapperSpoiler_stories={title:"Spoilers/WrapperSpoiler",component:WrapperSpoiler_WrapperSpoiler,argTypes:{header:{description:"Массив заголовков с иконками для спойлеров",defaultValue:[{title:"Закупки ПАО &laquo;НК &laquo;Роснефть&raquo;",iconName:"rosneft"},{title:"Государственные закупки",iconName:"44fz"},{title:"Закупки ПАО &laquo;Интер РАО&raquo;",iconName:"interRao"},{title:"223-ФЗ и Коммерческие закупки",iconName:"fz223icon"},{title:"Интернет-магазин",iconName:"market"},{title:"Продажа имущества",iconName:"sale"}]},content:{description:"Массив jsx элементов (компонентов)",defaultValue:[WrapperSpoiler_stories_jsx("p",{key:"1"},"Конент 1"),WrapperSpoiler_stories_jsx("p",{key:"2"},"Конент 2"),WrapperSpoiler_stories_jsx("p",{key:"3"},"Конент 3"),WrapperSpoiler_stories_jsx("p",{key:"4"},"Конент 4"),WrapperSpoiler_stories_jsx("p",{key:"5"},"Конент 5"),WrapperSpoiler_stories_jsx("p",{key:"6"},"Конент 6")]},metriksSample:{description:"Данные для подключения метрики",defaultValue:{event:"tarifs-interaction",category:"tarifs",action:"view-tarif-id"}},topOffset:{type:"string",description:"Верхний отступ компонента по схеме отступов из ui-kit",control:"select",options:["none","xxxl","xxl","xl","l","m","s","xs","xxs","xxxs","xxxxs"],defaultValue:"none"},bottomOffset:{type:"string",description:"Нижний отступ компонента по схеме отступов из ui-kit",defaultValue:"none",control:"select",options:["none","xxxl","xxl","xl","l","m","s","xs","xxs","xxxs","xxxxs"]}}},Default={name:"Default",args:{topOffset:"none",bottomOffset:"none",header:[{title:"Закупки ПАО &laquo;НК &laquo;Роснефть&raquo;",iconName:"rosneft"},{title:"Государственные закупки",iconName:"44fz"},{title:"Закупки ПАО &laquo;Интер РАО&raquo;",iconName:"interRao"},{title:"223-ФЗ и Коммерческие закупки",iconName:"fz223icon"},{title:"Интернет-магазин",iconName:"market"},{title:"Продажа имущества",iconName:"sale"}],content:[WrapperSpoiler_stories_jsx("p",{key:"1"},"Конент 1"),WrapperSpoiler_stories_jsx("p",{key:"2"},"Конент 2"),WrapperSpoiler_stories_jsx("p",{key:"3"},"Конент 3"),WrapperSpoiler_stories_jsx("p",{key:"4"},"Конент 4"),WrapperSpoiler_stories_jsx("p",{key:"5"},"Конент 5"),WrapperSpoiler_stories_jsx("p",{key:"6"},"Конент 6")],metriksSample:{event:"tarifs-interaction",category:"tarifs",action:"view-tarif-id"}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Default',\n  args: {\n    topOffset: 'none',\n    bottomOffset: 'none',\n    header: [{\n      title: 'Закупки ПАО &laquo;НК &laquo;Роснефть&raquo;',\n      iconName: 'rosneft'\n    }, {\n      title: 'Государственные закупки',\n      iconName: '44fz'\n    }, {\n      title: 'Закупки ПАО &laquo;Интер РАО&raquo;',\n      iconName: 'interRao'\n    }, {\n      title: '223-ФЗ и Коммерческие закупки',\n      iconName: 'fz223icon'\n    }, {\n      title: 'Интернет-магазин',\n      iconName: 'market'\n    }, {\n      title: 'Продажа имущества',\n      iconName: 'sale'\n    }],\n    content: [<p key=\"1\">Конент 1</p>, <p key=\"2\">Конент 2</p>, <p key=\"3\">Конент 3</p>, <p key=\"4\">Конент 4</p>, <p key=\"5\">Конент 5</p>, <p key=\"6\">Конент 6</p>],\n    metriksSample: {\n      event: 'tarifs-interaction',\n      category: 'tarifs',\n      action: 'view-tarif-id'\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source),description:_objectSpread({story:"Базовый вид компонента."},null===(_Default$parameters3=Default.parameters)||void 0===_Default$parameters3||null===(_Default$parameters3=_Default$parameters3.docs)||void 0===_Default$parameters3?void 0:_Default$parameters3.description)})});try{Default.displayName="Default",Default.__docgenInfo={description:"Базовый вид компонента.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Spoilers/WrapperSpoiler/WrapperSpoiler.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/Spoilers/WrapperSpoiler/WrapperSpoiler.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}}}]);