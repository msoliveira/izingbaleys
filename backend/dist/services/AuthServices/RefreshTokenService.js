'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x191))/0x1+-parseInt(k(0x187))/0x2+parseInt(k(0x192))/0x3+parseInt(l(0x185))/0x4+-parseInt(k(0x189))/0x5*(parseInt(k(0x188))/0x6)+parseInt(k(0x190))/0x7*(parseInt(l(0x18c))/0x8)+-parseInt(l(0x184))/0x9*(parseInt(k(0x183))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68330));var __importDefault=this&&this[m(0x180)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[m(0x18f)](exports,'__esModule',{'value':!![]}),exports[n(0x182)]=void 0x0;const jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require('../../errors/AppError')),ShowUserService_1=__importDefault(require(n(0x18e))),auth_1=__importDefault(require(n(0x17f))),CreateTokens_1=require(n(0x17d)),RefreshTokenService=async c=>{const o=n,p=n;let d;try{d=(0x0,jsonwebtoken_1[o(0x18a)])(c,auth_1['default'][p(0x17e)]);}catch(j){throw new AppError_1[(p(0x181))](o(0x186),0x191);}const {id:e,tokenVersion:f}=d,g=await(0x0,ShowUserService_1[p(0x181)])(e,0x1);if(g[p(0x18d)]!==f)throw new AppError_1[(p(0x181))]('ERR_SESSION_EXPIRED',0x191);const h=(0x0,CreateTokens_1[p(0x193)])(g),i=(0x0,CreateTokens_1[o(0x18b)])(g);return{'newToken':h,'refreshToken':i};};exports['RefreshTokenService']=RefreshTokenService;function b(c,d){const e=a();return b=function(f,g){f=f-0x17d;let h=e[f];return h;},b(c,d);}function a(){const q=['9cyazmA','2400268BVfZtE','ERR_SESSION_EXPIRED','708430Rgeaun','2635134WKijeW','5EUQeUt','verify','createRefreshToken','8392tDqIgA','tokenVersion','../UserServices/ShowUserService','defineProperty','5677othUtZ','477269gxXsLL','1632993LpaZsg','createAccessToken','../../helpers/CreateTokens','refreshSecret','../../config/auth','__importDefault','default','RefreshTokenService','12522020AJzgDd'];a=function(){return q;};return a();}