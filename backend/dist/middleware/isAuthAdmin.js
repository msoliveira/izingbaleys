'use strict';const u=b,v=b;function a(){const y=['ADMIN_DOMAIN','8wLvOWU','10vksjrw','findByPk','env','5329302UirmBk','5703SvavHE','2569973wfQLyU','1554668VpSGUR','jsonwebtoken','5600997gCalOi','70SITurL','Not\x20exists\x20admin\x20domains\x20defined.','../models/User','QVpIF','9364333OppgVn','email','678732FJAchv','lHJHq','verify','VzcNp','__esModule','Invalid\x20token\x20or\x20not\x20Admin','user','indexOf','secret','Not\x20admin\x20permission','headers','default','1894QEbpsq','split'];a=function(){return y;};return a();}(function(c,d){const r=b,s=b,e=c();while(!![]){try{const f=-parseInt(r(0xad))/0x1+-parseInt(r(0xa3))/0x2*(parseInt(r(0xab))/0x3)+-parseInt(r(0x97))/0x4+parseInt(s(0xa7))/0x5*(-parseInt(s(0xaa))/0x6)+-parseInt(s(0xac))/0x7+parseInt(r(0xa6))/0x8*(parseInt(r(0x90))/0x9)+parseInt(r(0x91))/0xa*(parseInt(s(0x95))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdef83));var __importDefault=this&&this['__importDefault']||function(c){const t=b;return c&&c[t(0x9b)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x8f;let h=e[f];return h;},b(c,d);}Object['defineProperty'](exports,u(0x9b),{'value':!![]});const jsonwebtoken_1=require(u(0x8f)),AppError_1=__importDefault(require('../errors/AppError')),auth_1=__importDefault(require('../config/auth')),User_1=__importDefault(require(v(0x93))),isAuthAdmin=async(c,d,e)=>{const w=v,x=v,f=c[w(0xa1)]['authorization'],g=process[x(0xa9)][w(0xa5)];if(!f){if('QVpIF'!==x(0x94))throw new d[(x(0xa2))](w(0x9c),0x193);else throw new AppError_1[(x(0xa2))]('Token\x20was\x20not\x20provided.',0x193);}if(!g){if(w(0x98)===x(0x98))throw new AppError_1[(w(0xa2))](w(0x92),0x193);else throw new d[(w(0xa2))](x(0xa0),0x193);}const [,h]=f[w(0xa4)]('\x20');try{if('VzcNp'!==x(0x9a))throw new d[(x(0xa2))]('Not\x20exists\x20admin\x20domains\x20defined.',0x193);else{const l=(0x0,jsonwebtoken_1[x(0x99)])(h,auth_1['default'][w(0x9f)]),{id:m,profile:n,tenantId:o}=l,p=await User_1[w(0xa2)][x(0xa8)](m);if(!p||p[w(0x96)][x(0x9e)](g)===0x1)throw new AppError_1[(x(0xa2))](w(0xa0),0x193);c[w(0x9d)]={'id':m,'profile':n,'tenantId':o};}}catch(q){throw new AppError_1[(x(0xa2))](x(0x9c),0x193);}return e();};exports[u(0xa2)]=isAuthAdmin;