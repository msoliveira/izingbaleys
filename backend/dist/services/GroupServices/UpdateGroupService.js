'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x1ec))/0x1+parseInt(k(0x1e6))/0x2*(parseInt(k(0x1f6))/0x3)+-parseInt(l(0x1eb))/0x4*(parseInt(l(0x1ee))/0x5)+parseInt(l(0x1e8))/0x6+parseInt(l(0x1f2))/0x7+parseInt(l(0x1ef))/0x8+-parseInt(k(0x1e9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9e067));var __importDefault=this&&this[m(0x1f0)]||function(c){return c&&c['__esModule']?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x1e6;let h=e[f];return h;},b(c,d);}function a(){const q=['2fzIZtq','reload','5404218DVUzzy','33257691BycCNc','__esModule','1039420uJrjnJ','775264dnqHRH','group','5UGClIp','7110576UPYJmI','__importDefault','isActive','5546065SbjmRm','../../models/Group','default','../../errors/AppError','3736023lGeigx','userId','update'];a=function(){return q;};return a();}Object['defineProperty'](exports,n(0x1ea),{'value':!![]});const AppError_1=__importDefault(require(m(0x1f5))),Group_1=__importDefault(require(m(0x1f3))),UpdateGroupService=async({groupData:c,groupId:d})=>{const o=m,p=n,{group:e,isActive:f,userId:g,tenantId:h}=c,i=await Group_1[o(0x1f4)]['findOne']({'where':{'id':d,'tenantId':h},'attributes':['id',p(0x1ed),o(0x1f1),'userId']});if(!i)throw new AppError_1[(p(0x1f4))]('ERR_NO_GROUP_FOUND',0x194);return await i[o(0x1f8)]({'group':e,'isActive':f,'userId':g}),await i[o(0x1e7)]({'attributes':['id','group',p(0x1f1),p(0x1f7)]}),i;};exports[m(0x1f4)]=UpdateGroupService;