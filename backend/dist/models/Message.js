'use strict';const a2=b,a5=b;function a(){const ad=['quotedMsg','dataJson','received','ack','24ozHQTJ','./User','./Tenant','mediaName','userId','__metadata','BIGINT','Column','DATE','campaign','CreatedAt','metadata','schedule','env','mediaUrl','3973833GjkjUw','decorate','./Ticket','Default','3758552AuRQfN','PrimaryKey','3579650neOdUr','__esModule','quotedMsgId','__decorate','isDeleted','ticket','timestamp','BelongsTo','wabaMediaId','user','messageId','TEXT','tenantId','length','getOwnPropertyDescriptor','default','STRING','1820031OQmuys','pending','DataType','chat','defineProperty','bot','ENUM','2fmOsCv','design:paramtypes','./Contact','sequelize-typescript','design:type','external','AllowNull','idFront','prototype','/public/','body','1473570Obsubh','getDataValue','Table','function','ForeignKey','1398089VFISuC','object','1561940fJbbvc','tenant','updatedAt','contactId','fromMe','__importDefault','createdAt','sync','edited'];a=function(){return ad;};return a();}(function(c,d){const a0=b,a1=b,e=c();while(!![]){try{const f=-parseInt(a0(0x176))/0x1+-parseInt(a1(0x166))/0x2*(parseInt(a1(0x15f))/0x3)+parseInt(a1(0x178))/0x4+parseInt(a0(0x19a))/0x5+-parseInt(a1(0x171))/0x6+parseInt(a0(0x198))/0x7+-parseInt(a0(0x185))/0x8*(-parseInt(a0(0x194))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaf321));function b(c,d){const e=a();return b=function(f,g){f=f-0x14f;let h=e[f];return h;},b(c,d);}var __decorate=this&&this[a2(0x151)]||function(e,f,g,h){const a3=a2,a4=a2;var j=arguments[a3(0x15b)],k=j<0x3?f:h===null?h=Object[a3(0x15c)](f,g):h,l;if(typeof Reflect===a3(0x177)&&typeof Reflect[a3(0x195)]==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e[a4(0x15b)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a3(0x163)](f,g,k),k;},__metadata=this&&this[a5(0x18a)]||function(c,d){const a6=a5,a7=a2;if(typeof Reflect===a6(0x177)&&typeof Reflect[a7(0x190)]===a7(0x174))return Reflect[a7(0x190)](c,d);},__importDefault=this&&this[a5(0x17d)]||function(c){const a8=a2;return c&&c[a8(0x14f)]?c:{'default':c};},Message_1;Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_typescript_1=require(a5(0x169)),uuid_1=require('uuid'),Contact_1=__importDefault(require(a5(0x168))),Tenant_1=__importDefault(require(a2(0x187))),Ticket_1=__importDefault(require(a2(0x196))),User_1=__importDefault(require(a2(0x186)));let Message=Message_1=class Message extends sequelize_typescript_1['Model']{get[a2(0x188)](){const a9=a2,aa=a5;return this[a9(0x172)](aa(0x193));}get[a5(0x193)](){const ab=a2,ac=a5;if(this[ab(0x172)](ac(0x193))){const {BACKEND_URL:c}=process[ac(0x192)],d=this[ac(0x172)](ab(0x193));return c+':'+process[ac(0x192)]['PROXY_PORT']+ac(0x16f)+d;}return null;}};__decorate([sequelize_typescript_1[a5(0x199)],(0x0,sequelize_typescript_1[a5(0x197)])(uuid_1['v4']),sequelize_typescript_1[a2(0x18c)],__metadata(a5(0x16a),String)],Message[a5(0x16e)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x197)])(null),sequelize_typescript_1[a5(0x16c)],sequelize_typescript_1[a2(0x18c)],__metadata(a5(0x16a),String)],Message[a5(0x16e)],a5(0x158),void 0x0),__decorate([sequelize_typescript_1[a2(0x16c)],(0x0,sequelize_typescript_1[a2(0x18c)])(sequelize_typescript_1[a5(0x161)][a5(0x15e)]),__metadata(a2(0x16a),String)],Message['prototype'],a5(0x182),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x18c)])(sequelize_typescript_1[a2(0x161)][a2(0x159)]),__metadata(a5(0x16a),String)],Message['prototype'],a2(0x180),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(0x0),sequelize_typescript_1[a2(0x18c)],__metadata(a2(0x16a),Number)],Message['prototype'],a5(0x184),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x197)])(null),sequelize_typescript_1[a2(0x16c)],(0x0,sequelize_typescript_1[a2(0x18c)])(sequelize_typescript_1['DataType']['ENUM'](a2(0x160),'sended',a5(0x183))),__metadata(a2(0x16a),String)],Message[a2(0x16e)],'status',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(null),sequelize_typescript_1[a2(0x16c)],(0x0,sequelize_typescript_1[a5(0x18c)])(sequelize_typescript_1['DataType']['TEXT']),__metadata(a5(0x16a),String)],Message['prototype'],a2(0x156),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x197)])(![]),sequelize_typescript_1[a5(0x18c)],__metadata(a2(0x16a),Boolean)],Message[a5(0x16e)],'read',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a2(0x18c)],__metadata('design:type',Boolean)],Message[a5(0x16e)],a5(0x17c),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x18c)])(sequelize_typescript_1['DataType'][a5(0x159)]),__metadata(a5(0x16a),String)],Message[a2(0x16e)],a2(0x170),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x18c)])(sequelize_typescript_1[a2(0x161)]['VIRTUAL']),__metadata(a5(0x16a),String),__metadata(a2(0x167),[])],Message[a5(0x16e)],a2(0x188),null),__decorate([(0x0,sequelize_typescript_1[a5(0x18c)])(sequelize_typescript_1[a5(0x161)]['STRING']),__metadata('design:type',String),__metadata(a5(0x167),[])],Message['prototype'],a2(0x193),null),__decorate([sequelize_typescript_1[a5(0x18c)],__metadata('design:type',String)],Message['prototype'],'mediaType',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1['Column'],__metadata(a5(0x16a),Boolean)],Message[a5(0x16e)],a2(0x152),void 0x0),__decorate([sequelize_typescript_1[a2(0x18f)],(0x0,sequelize_typescript_1[a5(0x18c)])(sequelize_typescript_1[a5(0x161)][a2(0x18d)](0x6)),__metadata('design:type',Date)],Message[a5(0x16e)],a2(0x17e),void 0x0),__decorate([sequelize_typescript_1['UpdatedAt'],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a2(0x161)]['DATE'](0x6)),__metadata(a2(0x16a),Date)],Message['prototype'],a5(0x17a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x175)])(()=>Message_1),sequelize_typescript_1[a2(0x18c)],__metadata(a5(0x16a),String)],Message['prototype'],a5(0x150),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x155)])(()=>Message_1,'quotedMsgId'),__metadata(a5(0x16a),Message)],Message[a2(0x16e)],a2(0x181),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x175)])(()=>Ticket_1['default']),sequelize_typescript_1[a2(0x18c)],__metadata(a5(0x16a),Number)],Message['prototype'],'ticketId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x155)])(()=>Ticket_1[a2(0x15d)]),__metadata(a5(0x16a),Ticket_1[a5(0x15d)])],Message[a5(0x16e)],a2(0x153),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x175)])(()=>Contact_1['default']),sequelize_typescript_1['Column'],__metadata('design:type',Number)],Message[a5(0x16e)],a5(0x17b),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x155)])(()=>Contact_1[a2(0x15d)],a5(0x17b)),__metadata(a5(0x16a),Contact_1['default'])],Message[a5(0x16e)],'contact',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x197)])(null),sequelize_typescript_1[a2(0x16c)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a5(0x161)][a5(0x18b)]),__metadata(a2(0x16a),Number)],Message['prototype'],a2(0x154),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x175)])(()=>User_1['default']),(0x0,sequelize_typescript_1[a5(0x197)])(null),sequelize_typescript_1['AllowNull'],sequelize_typescript_1[a2(0x18c)],__metadata('design:type',Number)],Message[a5(0x16e)],a5(0x189),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1[a2(0x15d)]),__metadata(a2(0x16a),User_1[a5(0x15d)])],Message[a2(0x16e)],a2(0x157),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x197)])(null),sequelize_typescript_1[a2(0x16c)],(0x0,sequelize_typescript_1[a5(0x18c)])(sequelize_typescript_1[a5(0x161)][a2(0x18d)]),__metadata(a5(0x16a),Date)],Message[a2(0x16e)],'scheduleDate',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x197)])(null),sequelize_typescript_1['AllowNull'],(0x0,sequelize_typescript_1[a2(0x18c)])(sequelize_typescript_1[a2(0x161)][a5(0x165)](a5(0x18e),a5(0x162),a5(0x16b),a5(0x191),a2(0x164),a2(0x17f))),__metadata(a2(0x16a),String)],Message['prototype'],'sendType',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x175)])(()=>Tenant_1[a2(0x15d)]),sequelize_typescript_1['Column'],__metadata(a5(0x16a),Number)],Message[a2(0x16e)],a2(0x15a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x155)])(()=>Tenant_1[a5(0x15d)]),__metadata(a2(0x16a),Tenant_1[a2(0x15d)])],Message[a5(0x16e)],a5(0x179),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x197)])(null),sequelize_typescript_1[a5(0x16c)],sequelize_typescript_1[a5(0x18c)],__metadata('design:type',String)],Message[a2(0x16e)],a5(0x16d),void 0x0),Message=Message_1=__decorate([sequelize_typescript_1[a5(0x173)]],Message),exports['default']=Message;