'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x1f6))/0x1+parseInt(l(0x1f0))/0x2+-parseInt(l(0x1fa))/0x3*(parseInt(k(0x1ec))/0x4)+-parseInt(k(0x1e4))/0x5+parseInt(l(0x1f7))/0x6+parseInt(l(0x1e9))/0x7*(parseInt(k(0x1e8))/0x8)+parseInt(l(0x1e1))/0x9*(parseInt(l(0x1e7))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf0989));var __importDefault=this&&this[m(0x202)]||function(c){const n=m;return c&&c[n(0x1f1)]?c:{'default':c};};Object[m(0x1e6)](exports,o(0x1f1),{'value':!![]}),exports[m(0x1f4)]=exports['update']=exports['store']=exports[m(0x201)]=exports[m(0x1f3)]=void 0x0;const socket_1=require('../libs/socket'),AppError_1=__importDefault(require('../errors/AppError')),DeleteWhatsAppService_1=__importDefault(require('../services/WhatsappService/DeleteWhatsAppService')),ListWhatsAppsService_1=__importDefault(require(o(0x1f8))),ShowWhatsAppService_1=__importDefault(require(o(0x1fc))),UpdateWhatsAppService_1=__importDefault(require('../services/WhatsappService/UpdateWhatsAppService')),CreateWhatsAppService_1=__importDefault(require('../services/WhatsappService/CreateWhatsAppService')),Tenant_1=__importDefault(require(o(0x1f2))),wbot_baileys_1=require('../libs/wbot-baileys'),index=async(c,d)=>{const p=m,q=o,{tenantId:e}=c[p(0x1e2)],f=await(0x0,ListWhatsAppsService_1[q(0x200)])(e);return d['status'](0xc8)[p(0x1ef)](f);};exports[o(0x1f3)]=index;function b(c,d){const e=a();return b=function(f,g){f=f-0x1e1;let h=e[f];return h;},b(c,d);}const show=async(c,d)=>{const r=m,s=o,{whatsappId:e}=c[r(0x1e3)],{tenantId:f}=c[s(0x1e2)],g=await(0x0,ShowWhatsAppService_1[s(0x200)])({'id':e,'tenantId':f});return d[r(0x1f5)](0xc8)[s(0x1ef)](g);};exports[o(0x201)]=show;function a(){const z=['1974cmGmBI','length','delete','81832eEcYub','store','getIO','json','167010GrjnhJ','__esModule','../models/Tenant','index','remove','status','1963092ZbXxmQ','5524176jiYZjO','../services/WhatsappService/ListWhatsAppsService','maxConnections','111gbEJRI','update','../services/WhatsappService/ShowWhatsAppService','body','ERR_NO_PERMISSION_CONNECTIONS_LIMIT','Whatsapp\x20deleted.','default','show','__importDefault','9hWUjFT','user','params','7964865NRBkzs','removeWbot','defineProperty','71470IFudkO','10240hmGjRN'];a=function(){return z;};return a();}const store=async(c,d)=>{const t=m,u=m,{whatsappId:e}=c['params'],f=c[t(0x1fd)],{tenantId:g}=c[u(0x1e2)],h=await(0x0,ListWhatsAppsService_1[t(0x200)])(g),i=await Tenant_1[t(0x200)]['findByPk'](g);if(h[u(0x1ea)]>=i?.[t(0x1f9)])throw new AppError_1['default'](u(0x1fe),0x190);const {whatsapp:j}=await(0x0,CreateWhatsAppService_1['default'])({...f,'whatsappId':e,'tenantId':g});return d['status'](0xc8)[u(0x1ef)](j);};exports[o(0x1ed)]=store;const update=async(c,d)=>{const v=m,w=o,{whatsappId:e}=c[v(0x1e3)],f=c['body'],{tenantId:g}=c[v(0x1e2)],{whatsapp:h}=await(0x0,UpdateWhatsAppService_1[v(0x200)])({'whatsappData':f,'whatsappId':e,'tenantId':g});return d[w(0x1f5)](0xc8)['json'](h);};exports[o(0x1fb)]=update;const remove=async(c,d)=>{const x=m,y=o,{whatsappId:e}=c[x(0x1e3)],{tenantId:f}=c[y(0x1e2)];await(0x0,DeleteWhatsAppService_1[x(0x200)])(e,f),(0x0,wbot_baileys_1[y(0x1e5)])(+e);const g=(0x0,socket_1[x(0x1ee)])();return g['emit'](f+':whatsapp',{'action':x(0x1eb),'whatsappId':+e}),d[y(0x1f5)](0xc8)[y(0x1ef)]({'message':y(0x1ff)});};exports['remove']=remove;