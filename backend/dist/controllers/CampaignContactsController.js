'use strict';const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x10c))/0x1+-parseInt(k(0xfb))/0x2+parseInt(l(0xf6))/0x3*(-parseInt(l(0xfd))/0x4)+-parseInt(l(0x100))/0x5+-parseInt(k(0x10b))/0x6*(-parseInt(k(0x105))/0x7)+-parseInt(k(0x107))/0x8+parseInt(l(0xf9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd7da));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0xf8)]?c:{'default':c};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['removeAll']=exports['remove']=exports['index']=exports[n(0x109)]=void 0x0;const AppError_1=__importDefault(require('../errors/AppError')),CreateCampaignContactsService_1=__importDefault(require(o(0x101))),ListCampaignContactsService_1=__importDefault(require('../services/CampaignContactsServices/ListCampaignContactsService')),DeleteCampaignContactsService_1=__importDefault(require(n(0xfc))),DeleteAllCampaignContactsService_1=__importDefault(require('../services/CampaignContactsServices/DeleteAllCampaignContactsService')),store=async(c,d)=>{const p=o,q=o;if(c[p(0x104)][p(0x103)]!==p(0xfe))throw new AppError_1[(p(0xff))]('ERR_NO_PERMISSION',0x193);const e=[...c[p(0xf4)]],{campaignId:f}=c[q(0x106)],g=await(0x0,CreateCampaignContactsService_1['default'])({'campaignContacts':e,'campaignId':f});return d[p(0x102)](0xc8)[p(0x10a)](g);};exports[n(0x109)]=store;const index=async(c,d)=>{const r=n,s=n,{tenantId:e}=c[r(0x104)],{campaignId:f}=c[s(0x106)],g=await(0x0,ListCampaignContactsService_1[s(0xff)])({'campaignId':f,'tenantId':e});return d[r(0x102)](0xc8)[s(0x10a)](g);};exports['index']=index;const remove=async(c,d)=>{const t=o,u=o,{tenantId:e}=c['user'];if(c[t(0x104)][t(0x103)]!==u(0xfe))throw new AppError_1['default']('ERR_NO_PERMISSION',0x193);const {campaignId:f,contactId:g}=c[t(0x106)];return await(0x0,DeleteCampaignContactsService_1[u(0xff)])({'campaignId':f,'contactId':g,'tenantId':e}),d[u(0x102)](0xc8)['json']({'message':'Campagin\x20Contact\x20deleted'});};exports[n(0xfa)]=remove;function b(c,d){const e=a();return b=function(f,g){f=f-0xf4;let h=e[f];return h;},b(c,d);}const removeAll=async(c,d)=>{const v=n,w=n,{tenantId:e}=c['user'];if(c[v(0x104)][v(0x103)]!==w(0xfe))throw new AppError_1[(w(0xff))](w(0xf7),0x193);const {campaignId:f}=c[v(0x106)];return await(0x0,DeleteAllCampaignContactsService_1[v(0xff)])({'campaignId':f,'tenantId':e}),d[v(0x102)](0xc8)['json']({'message':v(0xf5)});};exports[n(0x108)]=removeAll;function a(){const x=['5082385DUnCzw','../services/CampaignContactsServices/CreateCampaignContactsService','status','profile','user','14AfEKJU','params','2144464vkLbdh','removeAll','store','json','2402226mVJrsd','700756PzSOOl','body','Campagin\x20Contacts\x20deleted','152259jdObLb','ERR_NO_PERMISSION','__esModule','6629436FJjajw','remove','122248JARSqk','../services/CampaignContactsServices/DeleteCampaignContactsService','4jcFdKO','admin','default'];a=function(){return x;};return a();}