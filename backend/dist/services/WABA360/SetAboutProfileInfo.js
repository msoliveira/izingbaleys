'use strict';function a(){const r=['4174930VKeNTe','200988sMTOUk','application/json','597332OtFyOA','logger','11PPzuXt','defineProperty','360_NOT_SET_ABOUT:\x20','351QYycZH','default','7CqrhHj','error','254927BOiBlY','/v1/settings/profile/about','env','5iGISxG','84933IIZTDR','741588mXyzii','__esModule','104IoTWpj','465720OGlPoz','../../errors/AppError','API_URL_360','axios','2ntqxtl','patch'];a=function(){return r;};return a();}const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x17a))/0x1*(-parseInt(l(0x16c))/0x2)+parseInt(l(0x168))/0x3+parseInt(l(0x171))/0x4*(-parseInt(l(0x17d))/0x5)+parseInt(k(0x17f))/0x6*(parseInt(l(0x178))/0x7)+-parseInt(l(0x181))/0x8*(parseInt(k(0x17e))/0x9)+parseInt(l(0x16e))/0xa*(parseInt(k(0x173))/0xb)+-parseInt(k(0x16f))/0xc*(parseInt(l(0x176))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x376cd));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x180)]?c:{'default':c};};Object[n(0x174)](exports,o(0x180),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x168;let h=e[f];return h;},b(c,d);}const axios_1=__importDefault(require(n(0x16b))),AppError_1=__importDefault(require(o(0x169))),logger_1=require('../../utils/logger'),SetAboutProfileInfo=async({text:c,apiKey:d})=>{const p=n,q=n,e=process[p(0x17c)][p(0x16a)]+q(0x17b);try{return await(0x0,axios_1[q(0x177)])({'method':q(0x16d),'url':e,'data':{'text':c},'headers':{'D360-API-KEY':d,'Content-Type':q(0x170)}}),!![];}catch(f){logger_1[q(0x172)][p(0x179)](f);throw new AppError_1[(q(0x177))](p(0x175)+f);}};exports[n(0x177)]=SetAboutProfileInfo;