'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0x1b8;let h=e[f];return h;},b(c,d);}const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x1b9))/0x1+-parseInt(k(0x1c3))/0x2+-parseInt(k(0x1c7))/0x3*(parseInt(k(0x1be))/0x4)+parseInt(l(0x1ce))/0x5*(parseInt(l(0x1bb))/0x6)+parseInt(l(0x1c4))/0x7+parseInt(k(0x1c6))/0x8*(parseInt(k(0x1d0))/0x9)+parseInt(k(0x1d5))/0xa*(-parseInt(k(0x1d4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4eae6));var __importDefault=this&&this[m(0x1c5)]||function(c){const n=m;return c&&c[n(0x1bd)]?c:{'default':c};};Object[m(0x1c2)](exports,o(0x1bd),{'value':!![]});const sequelize_1=require(o(0x1cc)),Queue_1=__importDefault(require('../../models/Queue')),Tenant_1=__importDefault(require(o(0x1bc))),User_1=__importDefault(require('../../models/User')),AdminListUsersService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const p=m,q=m,c={[sequelize_1['Op']['or']]:[{'name':sequelize_1[p(0x1bf)][q(0x1b8)](sequelize_1[q(0x1bf)]['fn'](p(0x1cb),sequelize_1[p(0x1bf)]['col']('User.name')),p(0x1ca),'%'+searchParam[p(0x1c9)]()+'%')},{'email':{[sequelize_1['Op'][p(0x1d1)]]:'%'+searchParam[p(0x1c9)]()+'%'}}]},d=0x28,e=d*(+pageNumber-0x1),{count:f,rows:g}=await User_1['default'][p(0x1ba)]({'where':c,'include':[{'model':Queue_1[p(0x1cd)],'attributes':['id',p(0x1d2)]},{'model':Tenant_1[p(0x1cd)],'attributes':['id',p(0x1c0)]}],'attributes':[q(0x1c0),'id',q(0x1c8),q(0x1d3)],'limit':d,'offset':e,'distinct':!![],'order':[[q(0x1c0),q(0x1c1)]]}),h=f>e+g[p(0x1cf)];return{'users':g,'count':f,'hasMore':h};};function a(){const r=['profile','22OaYVgi','1526540RVGWiN','where','124200FFqZao','findAndCountAll','119226lkEdoU','../../models/Tenant','__esModule','699508cqTJpj','Sequelize','name','ASC','defineProperty','134928oHYtTr','595196frBUyJ','__importDefault','160856eNCosG','3UUHADH','email','toLowerCase','LIKE','LOWER','sequelize','default','60YzQXFa','length','189sZpCPy','like','queue'];a=function(){return r;};return a();}exports[m(0x1cd)]=AdminListUsersService;