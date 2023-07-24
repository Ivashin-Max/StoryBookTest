!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({71:"stories-TabsTags-Tags-Tags-stories",220:"stories-Cards-TileCards-TileCards-stories",239:"stories-Icons-Icons-stories",326:"stories-TextBlocks-InfoBlockWithIcons-InfoBlockWithIcons-stories",353:"stories-Cards-CustomersGrig-CustomersGrig-mdx",567:"stories-TextBlocks-InfoCardsWithLinks-InfoCardsWithLinks-mdx",601:"stories-Cards-EducationLectors-EducationLectors-mdx",637:"stories-Cards-ServiceBenefits-ServiceBenefits-stories",654:"stories-Tables-TableTwoColumns-TableTwoColumns-stories",870:"stories-TextBlocks-Contacts-Contacts-mdx",936:"stories-Cards-CardSet-CardSet-mdx",967:"stories-Steps-StepsTabs-StepsTabs-mdx",1115:"stories-Documents-DocumentSpoiler-DocumentSpoiler-mdx",1427:"stories-TextBlocks-BannerText-BannerText-mdx",1438:"stories-Spoilers-ContentSpoiler-ContentSpoiler-mdx",1528:"stories-Cards-SocialNetworks-SocialNetworks-mdx",1575:"stories-Cards-EducationCourses-EducationCourses-mdx",1626:"stories-TextBlocks-BlockWithTable-BlockWithTable-mdx",1686:"stories-TextBlocks-TextWithImage-TextWithImage-stories",1810:"stories-TextBlocks-BlockWithTable-BlockWithTable-stories",1904:"stories-Tables-ListingPartners-ListingPartners-stories",1919:"stories-Banners-BannerSlider-BannerSlider-stories",1965:"stories-Cards-ServiceTariffSlider-ServiceTariffSlider-stories",2068:"stories-Cards-CardSet-CardSet-stories",2130:"stories-Cards-EducationInner-EducationInner-mdx",2148:"stories-Tables-ListingQualification-ListingQualification-mdx",2561:"stories-Cards-Program-Program-stories",2941:"stories-Cards-Card1-Card1-mdx",3087:"stories-Cards-EducationLectorsColumn-EducationLectorsColumn-mdx",3181:"stories-Spoilers-VacanciesSpoilers-VacanciesSpoilers-stories",3236:"stories-Cards-EducationLectors-EducationLectors-stories",3298:"stories-TextBlocks-Contacts-Contacts-stories",3388:"stories-Cards-ServiceBenefits-ServiceBenefits-mdx",3696:"stories-Cards-CustomersSliderInner-CustomersSliderInner-stories",3775:"stories-Cards-TariffGrid-TariffGrid-mdx",3811:"stories-Icons-Icons-mdx",3867:"stories-Cards-SocialNetworks-SocialNetworks-stories",3952:"stories-Cards-TariffGrid-TariffGrid-stories",4150:"stories-Documents-Documents-Documents-mdx",4565:"stories-TabsTags-Tabs-Tabs-mdx",4807:"stories-TabsTags-Tags-Tags-mdx",4890:"stories-TextBlocks-InfoCards-InfoCards-mdx",4997:"stories-TabsTags-FilterTags-FilterTags-stories",5056:"stories-Cards-TileCards-TileCards-mdx",5099:"stories-Lead-LeadImg-LeadImg-stories",5415:"stories-Cards-PurchasesSlider-PurchasesSlider-stories",5421:"stories-TabsTags-Tabs-Tabs-stories",5489:"stories-Tables-ListingPartners-ListingPartners-mdx",5643:"stories-Spoilers-VacanciesSpoilers-VacanciesSpoilers-mdx",5687:"stories-TextBlocks-InfoBlockWithIcons-InfoBlockWithIcons-mdx",5689:"stories-Tables-ListingQualification-ListingQualification-stories",5739:"stories-Lead-LeadText-LeadText-stories",5885:"stories-TabsTags-FilterTags-FilterTags-mdx",5947:"stories-TextBlocks-ShowMoreTextWrapper-ShowMoreTextWrapper-mdx",5951:"stories-Cards-ServiceTariffSlider-ServiceTariffSlider-mdx",6119:"stories-Spoilers-ContentSpoilerInner-ContentSpoilerInner-stories",6216:"stories-Steps-StepsStatic-StepsStatic-mdx",6225:"stories-Cards-Program-Program-mdx",6277:"stories-TextBlocks-InfoCards-InfoCards-stories",6301:"stories-Cards-EducationLectorsColumn-EducationLectorsColumn-stories",6480:"stories-TextBlocks-BannerText-BannerText-stories",6555:"stories-TextBlocks-TextWithImage-TextWithImage-mdx",6623:"stories-TextBlocks-ArticleSupportNavigator-ArticleSupportNavigator-stories",6664:"stories-Spoilers-TextWithSpoiler-TextWithSpoiler-mdx",6973:"stories-Cards-ServicesCardsInner-ServicesCardsInner-mdx",7053:"stories-Banners-BannerSlider-BannerSlider-mdx",7154:"stories-TextBlocks-InfoCardsWithLinks-InfoCardsWithLinks-stories",7453:"stories-Colors-Colors-stories",7466:"stories-Lead-LeadText-LeadText-mdx",7641:"stories-Spoilers-ContentSpoiler-ContentSpoiler-stories",7741:"stories-Documents-Documents-Documents-stories",7796:"stories-Cards-PurchasesSlider-PurchasesSlider-mdx",7846:"stories-Colors-Colors-mdx",7872:"stories-Cards-CustomersSliderInner-CustomersSliderInner-mdx",8060:"stories-Lead-LeadImg-LeadImg-mdx",8076:"stories-Tables-TableTwoColumns-TableTwoColumns-mdx",8195:"stories-TextBlocks-Article-Article-mdx",8295:"stories-Cards-EducationInner-EducationInner-stories",8393:"stories-Spoilers-ContentSpoilerInner-ContentSpoilerInner-mdx",8396:"stories-TextBlocks-ArticleSupportNavigator-ArticleSupportNavigator-mdx",8419:"stories-Documents-DocumentSpoiler-DocumentSpoiler-stories",8425:"stories-Cards-ServicesCardsInner-ServicesCardsInner-stories",8560:"stories-Spoilers-WrapperSpoiler-WrapperSpoiler-mdx",8578:"stories-Steps-StepsStatic-StepsStatic-stories",8673:"stories-TextBlocks-ShowMoreTextWrapper-ShowMoreTextWrapper-stories",8676:"stories-Cards-CustomersGrig-CustomersGrig-stories",8837:"stories-TextBlocks-Article-Article-stories",9026:"stories-Spoilers-TextWithSpoiler-TextWithSpoiler-stories",9147:"stories-Cards-Card1-Card1-stories",9333:"stories-Spoilers-WrapperSpoiler-WrapperSpoiler-stories",9655:"stories-TextBlocks-InfoList-InfoList-stories",9700:"stories-Cards-EducationCourses-EducationCourses-stories",9758:"stories-Steps-StepsTabs-StepsTabs-stories",9797:"stories-TextBlocks-InfoList-InfoList-mdx"}[chunkId]||chunkId)+"."+{71:"0128c35a",73:"a2ff2ba2",220:"082dadcc",239:"1b7dab92",326:"3f46a518",353:"cfe4c6c4",454:"be1bf5b9",511:"92070731",567:"6a11131b",601:"5a590aa2",637:"3359f2c6",654:"208456f3",812:"7967d33f",870:"475fc653",890:"10f49314",936:"f84da2d2",967:"e2accdf6",1110:"d07d4521",1115:"68b8ff2c",1122:"3b664b77",1423:"c34a4c41",1427:"043a0e19",1438:"9ec589b2",1528:"07abb45e",1575:"99a46d3c",1626:"5dc51c76",1664:"b142d192",1686:"93bdd7f9",1725:"1cc07c5e",1810:"b9334d11",1861:"e8f4c5e6",1904:"3ea0acb2",1919:"3f26dc38",1965:"d5c7ba45",1974:"3adc3212",2068:"6df2a687",2130:"bb7cdc04",2148:"09eb7955",2223:"7af43317",2278:"756f575c",2333:"481613cf",2561:"2cafe4fd",2908:"fdf4132d",2941:"59a868ac",3087:"4d83ac2d",3169:"ddaa2ec9",3181:"915ef31f",3184:"833fe8ea",3236:"a43e40b3",3253:"2be763a6",3298:"e2a52ecf",3367:"285b5486",3388:"7e718083",3416:"46240e5e",3424:"725f5324",3459:"4821a5ed",3567:"cf772f36",3696:"3f83cb03",3716:"c5b2d1be",3775:"99dbdcc6",3787:"7fb2b5b0",3811:"428721ee",3867:"eda85852",3952:"a5e76410",3966:"e47e5097",4110:"b0afbf88",4150:"7312bcc2",4197:"501a4369",4320:"946ba310",4446:"f6e0e69c",4463:"ae717816",4565:"b61168d8",4594:"a03bc124",4768:"04ffe08b",4807:"c73dae0b",4865:"59d24a5f",4870:"a8bc49a4",4890:"b06e00f1",4924:"fae5f1c9",4929:"22d8def8",4936:"1c92738d",4997:"ce9867f6",5005:"383108a9",5056:"a30a2b4a",5099:"99773d37",5261:"72166a80",5264:"023d8d3a",5290:"70190007",5291:"1d243c28",5320:"086d8483",5415:"f0c4dfd7",5421:"135f8928",5489:"49ae0888",5519:"09f3cddf",5538:"8e8a7f2b",5593:"2ae259bc",5617:"d8bdcbcb",5643:"467bd3e4",5661:"adc220e4",5680:"653818fc",5687:"f7c76f1e",5689:"a0300345",5718:"07d9164c",5739:"549e3a47",5758:"3762b8f3",5885:"99f7af2a",5894:"c99e4430",5947:"9dad13c4",5951:"a4f06d8a",5989:"eca809cb",6079:"66b88c47",6119:"9eef158d",6216:"43b9689c",6225:"ab6ba29e",6277:"93637f37",6301:"5af7b0e3",6363:"39667667",6408:"da796bac",6480:"4a972068",6555:"685c160b",6623:"3315ba1a",6664:"18702238",6832:"f32b02e7",6973:"2dff5265",7053:"50eb27ae",7058:"f434d47b",7154:"c617cbb4",7239:"a737f9db",7331:"144ed01f",7453:"172645f0",7466:"e62a93a4",7641:"5db6d977",7697:"1b1e4b78",7741:"21c81cb9",7796:"45ac939e",7846:"85f61354",7872:"d3974efd",8014:"dcb0c603",8060:"aa94f1da",8076:"a3a9b798",8108:"bfc6e3ca",8195:"a753f548",8295:"5b2668e3",8311:"fc66b95a",8393:"c29b33ab",8396:"cc896f82",8419:"5a803c08",8425:"9ac59700",8560:"5c969dfb",8578:"4951eba9",8664:"1d0009cc",8673:"d1c82972",8676:"d5cbe911",8707:"e1a74441",8837:"3075acf6",8887:"503ec253",8923:"c686eb01",8966:"035e5d95",9026:"47b25dd4",9147:"ef3c7672",9169:"169bdcdf",9173:"9a29f820",9333:"5760e11e",9433:"76e9cb02",9472:"2b6c01d4",9655:"c36406a8",9700:"c64afd8d",9720:"c280d667",9758:"9548dc51",9797:"9c2fa76c",9862:"85da2658",9904:"ef4de52b"}[chunkId]+".iframe.bundle.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="only-template-next:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","only-template-next:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkonly_template_next=self.webpackChunkonly_template_next||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();