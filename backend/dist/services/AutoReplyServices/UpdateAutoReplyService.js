'use strict';const n=b,p=b;function a(){const s=['3504484JFLLYG','1908458kTWKqz','isActive','188499DHLJEO','action','userId','12366pnETUU','celularTeste','ERR_NO_AUTO_REPLY_FOUND','default','2523duowqW','../../errors/AppError','__esModule','name','__importDefault','../../models/AutoReply','5268907qUaIbF','update','484415bntyga','defineProperty','findOne'];a=function(){return s;};return a();}(function(c,d){const l=b,m=b,e=c();while(!![]){try{const f=-parseInt(l(0x1fd))/0x1+-parseInt(l(0x1f4))/0x2+-parseInt(m(0x1f6))/0x3+parseInt(l(0x1f3))/0x4+-parseInt(m(0x1f0))/0x5+-parseInt(m(0x1f9))/0x6+parseInt(m(0x1ee))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7c955));var __importDefault=this&&this[n(0x1ec)]||function(c){const o=n;return c&&c[o(0x1ff)]?c:{'default':c};};Object[p(0x1f1)](exports,'__esModule',{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x1eb;let h=e[f];return h;},b(c,d);}const AppError_1=__importDefault(require(p(0x1fe))),AutoReply_1=__importDefault(require(p(0x1ed))),UpdateAutoReplyService=async({autoReplyData:c,autoReplyId:d,tenantId:e})=>{const q=p,r=p,{name:f,action:g,userId:h,isActive:i,celularTeste:j}=c,k=await AutoReply_1[q(0x1fc)][q(0x1f2)]({'where':{'id':d,'tenantId':e},'attributes':['id',q(0x1eb),r(0x1f7),q(0x1f8),r(0x1f5),r(0x1fa)]});if(!k)throw new AppError_1[(r(0x1fc))](r(0x1fb),0x194);return await k[r(0x1ef)]({'name':f,'action':g,'userId':h,'isActive':i,'celularTeste':j}),await k['reload']({'attributes':['id','name',r(0x1f7),q(0x1f8),r(0x1f5),q(0x1fa)]}),k;};exports[p(0x1fc)]=UpdateAutoReplyService;