'use strict';const q=b,s=b;(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=-parseInt(o(0x1cd))/0x1+-parseInt(p(0x1ce))/0x2+parseInt(o(0x1cf))/0x3*(parseInt(o(0x1d4))/0x4)+parseInt(o(0x1d1))/0x5+parseInt(o(0x1ca))/0x6*(-parseInt(p(0x1e3))/0x7)+parseInt(p(0x1c9))/0x8+parseInt(p(0x1e2))/0x9*(parseInt(o(0x1d5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x484a0));var __importDefault=this&&this[q(0x1cb)]||function(c){const r=q;return c&&c[r(0x1c8)]?c:{'default':c};};Object['defineProperty'](exports,s(0x1c8),{'value':!![]});const AppError_1=__importDefault(require(q(0x1d2))),socketEmit_1=__importDefault(require(s(0x1dd))),Contact_1=__importDefault(require('../../models/Contact')),ContactWallet_1=__importDefault(require(q(0x1c7))),CreateContactService=async({name:c,number:d,email:email='',extraInfo:extraInfo=[],profilePicUrl:e,tenantId:f,wallets:g})=>{const t=s,u=s,h=await Contact_1[t(0x1da)][u(0x1d7)]({'where':{'number':d,'tenantId':f}});if(h)throw new AppError_1[(u(0x1da))](t(0x1df));const i=await Contact_1['default'][u(0x1c6)]({'name':c,'number':d,'email':email,'extraInfo':extraInfo,'profilePicUrl':e,'tenantId':f},{'include':[t(0x1de),u(0x1d0),{'association':t(0x1c5),'attributes':['id',u(0x1d8)]}]});if(g){await ContactWallet_1['default'][u(0x1e0)]({'where':{'tenantId':f,'contactId':i['id']}});const j=[];g[t(0x1d6)](k=>{const v=u;j[v(0x1e1)]({'walletId':!k['id']?k:k['id'],'contactId':i['id'],'tenantId':f});}),await ContactWallet_1[u(0x1da)][u(0x1d9)](j);}return await i[t(0x1d3)]({'attributes':['id','name',t(0x1dc),u(0x1cc),'profilePicUrl'],'include':[t(0x1de),'tags',{'association':t(0x1c5),'attributes':['id',t(0x1d8)]}]}),(0x0,socketEmit_1['default'])({'tenantId':f,'type':u(0x1db),'payload':i}),i;};exports['default']=CreateContactService;function b(c,d){const e=a();return b=function(f,g){f=f-0x1c5;let h=e[f];return h;},b(c,d);}function a(){const w=['118425fKAwJY','tags','1670700hjfriC','../../errors/AppError','reload','4SouLQd','10LMETdm','forEach','findOne','name','bulkCreate','default','contact:update','number','../../helpers/socketEmit','extraInfo','ERR_DUPLICATED_CONTACT','destroy','push','8983647cnEalX','7znPCMc','wallets','create','../../models/ContactWallet','__esModule','777168aLnLdl','2911386LlMctP','__importDefault','email','254380SSBcXK','866474jTIGAv'];a=function(){return w;};return a();}