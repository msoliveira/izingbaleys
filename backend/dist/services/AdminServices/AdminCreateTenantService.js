'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0xb7;let h=e[f];return h;},b(c,d);}const I=b,L=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=-parseInt(G(0xc7))/0x1*(parseInt(G(0xc9))/0x2)+parseInt(H(0xd6))/0x3+-parseInt(H(0xc4))/0x4*(-parseInt(H(0xd0))/0x5)+parseInt(H(0xc8))/0x6+-parseInt(H(0xcc))/0x7*(-parseInt(G(0xbd))/0x8)+-parseInt(H(0xbe))/0x9*(-parseInt(G(0xc6))/0xa)+parseInt(H(0xb7))/0xb*(-parseInt(H(0xbf))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe979b));var __createBinding=this&&this['__createBinding']||(Object[I(0xc0)]?function(c,d,e,f){const J=I,K=I;if(f===undefined)f=e;var g=Object['getOwnPropertyDescriptor'](d,e);(!g||('get'in g?!d[J(0xc3)]:g[K(0xb8)]||g[K(0xb9)]))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[J(0xbb)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0xd8)]||(Object[I(0xc0)]?function(c,d){const M=L;Object[M(0xbb)](c,'default',{'enumerable':!![],'value':d});}:function(c,d){const N=L;c[N(0xda)]=d;}),__importStar=this&&this['__importStar']||function(c){const O=L,P=L;if(c&&c['__esModule'])return c;var d={};if(c!=null){for(var e in c)if(e!=='default'&&Object[O(0xcd)][P(0xbc)][P(0xce)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this['__importDefault']||function(c){const Q=I;return c&&c[Q(0xc3)]?c:{'default':c};};Object[I(0xbb)](exports,L(0xc3),{'value':!![]}),exports['CreateTenantService']=void 0x0;const Yup=__importStar(require(L(0xd1))),AppError_1=__importDefault(require(L(0xc2))),Tenant_1=__importDefault(require(I(0xd9))),CreateDefaultSettings_1=__importDefault(require('../SettingServices/CreateDefaultSettings')),CreateTenantService=async({name:c,status:d,cnpj:e,tenantId:f,maxUsers:g,maxConnections:h,phone:i,email:j,planId:k,dueDate:l,recurrence:m})=>{const R=L,S=L,n=Yup['object']()['shape']({'name':Yup[R(0xcf)]()[R(0xc5)]()['min'](0x2)});try{await n[R(0xca)]({'name':c});}catch(r){if(R(0xd2)===R(0xd5)){if(n&&o[R(0xc3)])return p;var t={};if(q!=null){for(var u in r)if(u!==R(0xda)&&s[R(0xcd)]['hasOwnProperty'][R(0xce)](t,u))u(t,v,u);}return w(t,x),t;}else throw new AppError_1[(R(0xda))](r['message']);}const o=await Tenant_1[S(0xda)][R(0xc0)]({'name':c,'status':d,'cnpj':e,'maxUsers':g,'maxConnections':h,'phone':i,'email':j,'planId':k,'dueDate':l,'recurrence':m,'ownerId':f}),p=(0x0,CreateDefaultSettings_1[S(0xda)])(o['id']);await o[S(0xba)]({'settings':p});const q={'id':o['id'],'name':o['name'],'status':o['status'],'cnpj':o['cnpj'],'maxUsers':o['maxUsers'],'maxConnections':o[R(0xc1)],'phone':o[R(0xd4)],'email':o['email'],'planId':o[R(0xcb)],'dueDate':o[R(0xd7)],'recurrence':o[S(0xd3)],'ownerId':o['ownerId']};return q;};function a(){const T=['dqcUJ','4283394TqlTaY','dueDate','__setModuleDefault','../../models/Tenant','default','26937713YsGqJT','writable','configurable','update','defineProperty','hasOwnProperty','2248loFZpd','6219EqpluR','12VkHfpn','create','maxConnections','../../errors/AppError','__esModule','89876zWPeLd','required','5410JaPwgE','58xyewJw','843072xMjver','16948NIIhvz','validate','planId','15666KRxOsx','prototype','call','string','295zzbzDv','yup','zFbfB','recurrence','phone'];a=function(){return T;};return a();}exports['CreateTenantService']=CreateTenantService;