'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x1dc))/0x1*(-parseInt(k(0x1e2))/0x2)+-parseInt(l(0x1e0))/0x3+-parseInt(l(0x1d5))/0x4+-parseInt(k(0x1d7))/0x5*(-parseInt(l(0x1d6))/0x6)+parseInt(l(0x1d2))/0x7+parseInt(k(0x1e3))/0x8+-parseInt(l(0x1db))/0x9*(parseInt(k(0x1d3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a3ef));var __importDefault=this&&this[m(0x1dd)]||function(c){const n=m;return c&&c[n(0x1d8)]?c:{'default':c};};Object[o(0x1da)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(o(0x1d1))),Tenant_1=__importDefault(require(o(0x1d9))),UpdateBusinessHoursService=async({businessHours:c,tenantId:d})=>{const p=m,q=o,e=await Tenant_1[p(0x1de)][q(0x1df)]({'where':{'id':d}});if(!e)throw new AppError_1['default'](q(0x1d4),0x194);return await e['update']({'businessHours':c}),await e['reload']({'attributes':[p(0x1d0),p(0x1e1)]}),e;};function b(c,d){const e=a();return b=function(f,g){f=f-0x1d0;let h=e[f];return h;},b(c,d);}exports[o(0x1de)]=UpdateBusinessHoursService;function a(){const r=['5918101llBpqW','5502470TnhIvU','ERR_NO_TENANT_FOUND','320332SMYnqX','2886ChezBC','7195IkcmfI','__esModule','../../models/Tenant','defineProperty','18yNvyHA','1MfndXo','__importDefault','default','findOne','174645gFhxFI','messageBusinessHours','1400176sqIRiJ','6691688gZwlMD','businessHours','../../errors/AppError'];a=function(){return r;};return a();}