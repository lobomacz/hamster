(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"vYm/":function(e,i,n){"use strict";n.r(i),n.d(i,"BeneficiariosPageModule",function(){return D});var t=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),c=n("mrSG"),b=n("fXoL"),s=n("lGQG"),l=n("EnSQ"),d=n("myAU");const h=function(e){return["/beneficiarios/ver/",e]};let u=(()=>{class e{constructor(e){this._data=e,this.color=""}ngOnInit(){this.color=d.a.BadgeColor(this.beneficiario.contribuciones.length)}}return e.\u0275fac=function(i){return new(i||e)(b.Kb(l.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-item-benef"]],inputs:{beneficiario:"beneficiario"},decls:10,vars:12,consts:[[3,"routerLink","detail"],["slot","end",3,"color"]],template:function(e,i){1&e&&(b.Nb(0,"ion-item",0),b.Nb(1,"div"),b.Nb(2,"ion-label"),b.mc(3),b.Yb(4,"uppercase"),b.Mb(),b.Nb(5,"ion-note"),b.mc(6),b.Yb(7,"uppercase"),b.Mb(),b.Mb(),b.Nb(8,"ion-badge",1),b.mc(9),b.Mb(),b.Mb()),2&e&&(b.dc("routerLink",b.gc(10,h,i.beneficiario.cedula))("detail",!0),b.zb(3),b.oc(" ",b.Zb(4,6,i.beneficiario.primer_nombre+" "+i.beneficiario.primer_apellido)," "),b.zb(3),b.nc(b.Zb(7,8,i.beneficiario.cedula)),b.zb(2),b.ec("color",i.color),b.zb(1),b.nc(i.beneficiario.contribuciones.length))},directives:[a.t,a.N,r.h,a.v,a.y,a.e],pipes:[t.n],styles:[""]}),e})();function f(e,i){1&e&&b.Lb(0,"app-item-benef",11),2&e&&b.dc("beneficiario",i.$implicit)}function p(e,i){if(1&e){const e=b.Ob();b.Nb(0,"ion-content"),b.Nb(1,"ion-refresher",8),b.Vb("ionRefresh",function(i){return b.ic(e),b.Xb().refresh(i)}),b.Lb(2,"ion-refresher-content"),b.Mb(),b.Nb(3,"ion-list"),b.Nb(4,"ion-list-header"),b.Nb(5,"ion-text",9),b.Nb(6,"h2"),b.mc(7),b.Yb(8,"uppercase"),b.Mb(),b.Mb(),b.Mb(),b.lc(9,f,1,1,"app-item-benef",10),b.Mb(),b.Mb()}if(2&e){const e=b.Xb();b.zb(7),b.nc(b.Zb(8,2,"Lista de Beneficiarios")),b.zb(2),b.dc("ngForOf",e.beneficiarios)}}const m=function(){return["/inicio"]},g=function(){return["/beneficiarios/nuevo"]};let M=(()=>{class e{constructor(e,i,n,t,o){this._auth=e,this._data=i,this._router=n,this.toastCtrl=t,this.platform=o}ngOnInit(){this._auth.getAuthToken().then(e=>{this.token=e.value,this.LlenaDatos()}).catch(e=>{this.showToast(e)})}ionViewDidEnter(){this.refresh(null)}refresh(e){this._auth.getAuthToken().then(i=>{this.token=i.value,this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.getBenefCount(this.token).subscribe(i=>{this.CountList(i,e)},e=>{console.error("Error: ".concat(e)),this.showToast(e)}):this._data.getBenefCountNative(this.token).then(i=>{this.CountList(i,e)}).catch(e=>{this.showToast(e.error)})}).catch(e=>{this.showToast(e)})}CountList(e,i){let n=0;e.data?n=JSON.parse(e.data).count:e.body&&(n=JSON.parse(e.body).count),null!=this.beneficiarios&&this.beneficiarios.length>0&&n>this.beneficiarios.length&&this.LlenaDatos(),null!=i&&i.detail.complete()}LlenaDatos(){this._auth.updateSession().then(()=>{}),this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.getBeneficiarios(this.token).subscribe(e=>{this.beneficiarios=e.body},e=>{console.error("Error: ".concat(e)),this.showToast(e)}):this._data.getBeneficiariosNative(this.token).then(e=>{e.data&&(this.beneficiarios=JSON.parse(e.data))}).catch(e=>{console.error("Error: ".concat(e.error)),this.showToast(e.error)})}showToast(e,i=!1){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.toastCtrl.create({message:e,duration:2e3,position:"middle"});1==i&&n.onDidDismiss().then(()=>{this._router.navigateByUrl("/hamster")}),n.present()})}Logout(){this._auth.UserLogout().then(()=>{this.showToast("\xa1Adi\xf3s!",!0)}).catch(e=>{this.showToast(e)})}}return e.\u0275fac=function(i){return new(i||e)(b.Kb(s.a),b.Kb(l.a),b.Kb(r.g),b.Kb(a.Q),b.Kb(a.M))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-beneficiarios"]],decls:14,vars:8,consts:[["slot","start"],[3,"click"],["name","exit-outline","slot","icon-only"],["slot","end"],[3,"routerLink"],["slot","icon-only","name","hand-left-outline","fill","clear"],["slot","icon-only","name","add-outline","fill","clear"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["color","primary"],[3,"beneficiario",4,"ngFor","ngForOf"],[3,"beneficiario"]],template:function(e,i){1&e&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Nb(3,"ion-button",1),b.Vb("click",function(){return i.Logout()}),b.Lb(4,"ion-icon",2),b.Mb(),b.Mb(),b.Nb(5,"ion-title",1),b.Vb("click",function(){return i.LlenaDatos()}),b.mc(6),b.Yb(7,"uppercase"),b.Mb(),b.Nb(8,"ion-buttons",3),b.Nb(9,"ion-button",4),b.Lb(10,"ion-icon",5),b.Mb(),b.Nb(11,"ion-button",4),b.Lb(12,"ion-icon",6),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.lc(13,p,10,4,"ion-content",7)),2&e&&(b.zb(6),b.nc(b.Zb(7,4,"Beneficiarios")),b.zb(3),b.dc("routerLink",b.fc(6,m)),b.zb(2),b.dc("routerLink",b.fc(7,g)),b.zb(2),b.dc("ngIf",i.beneficiarios))},directives:[a.q,a.I,a.g,a.f,a.r,a.H,a.N,r.h,t.k,a.n,a.z,a.A,a.w,a.x,a.F,t.j,u],pipes:[t.n],styles:[""]}),e})();const N=["txtCedula"],_=["datFechaNac"],v=["txtPrimerNombre"],z=["txtPrimerApellido"],C=["optSexo"],w=["optEtnia"];function y(e,i){if(1&e&&(b.Nb(0,"ion-select-option",31),b.mc(1),b.Yb(2,"uppercase"),b.Mb()),2&e){const e=i.$implicit,n=b.Xb(2);b.ec("value",e),b.zb(1),b.nc(b.Zb(2,2,n.etnias[e]))}}function k(e,i){if(1&e){const e=b.Ob();b.Nb(0,"ion-content"),b.Nb(1,"ion-card"),b.Nb(2,"ion-card-content"),b.Nb(3,"ion-text",3),b.Nb(4,"h4",4),b.mc(5," Llene los campos con los datos correspondientes y presione el bot\xf3n para guardar el registro en la base central. "),b.Mb(),b.Mb(),b.Lb(6,"ion-item-divider"),b.Nb(7,"ion-text",5),b.Nb(8,"h5",4),b.mc(9," Verifique que la informaci\xf3n sea correcta. Una vez enviado, no podr\xe1 modificar el registro sin ayuda del administrador. "),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(10,"ion-item",6),b.Nb(11,"ion-label",7),b.mc(12),b.Yb(13,"uppercase"),b.Mb(),b.Nb(14,"ion-input",8,9),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.cedula=i}),b.Mb(),b.Mb(),b.Nb(16,"ion-item",6),b.Nb(17,"ion-label",7),b.mc(18),b.Yb(19,"uppercase"),b.Mb(),b.Nb(20,"ion-datetime",10,11),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.fecha_nac=i}),b.Mb(),b.Mb(),b.Nb(22,"ion-item",6),b.Nb(23,"ion-label",7),b.mc(24),b.Yb(25,"uppercase"),b.Mb(),b.Nb(26,"ion-input",12,13),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.primer_nombre=i}),b.Mb(),b.Mb(),b.Nb(28,"ion-item",6),b.Nb(29,"ion-label",7),b.mc(30),b.Yb(31,"uppercase"),b.Mb(),b.Nb(32,"ion-input",14,15),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.segundo_nombre=i}),b.Mb(),b.Mb(),b.Nb(34,"ion-item",6),b.Nb(35,"ion-label",7),b.mc(36),b.Yb(37,"uppercase"),b.Mb(),b.Nb(38,"ion-input",16,17),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.primer_apellido=i}),b.Mb(),b.Mb(),b.Nb(40,"ion-item",6),b.Nb(41,"ion-label",7),b.mc(42),b.Yb(43,"uppercase"),b.Mb(),b.Nb(44,"ion-input",18,19),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.segundo_apellido=i}),b.Mb(),b.Mb(),b.Nb(46,"ion-item",6),b.Nb(47,"ion-label",7),b.mc(48),b.Yb(49,"uppercase"),b.Mb(),b.Nb(50,"ion-select",20,21),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.sexo=i}),b.Nb(52,"ion-select-option",22),b.mc(53),b.Yb(54,"uppercase"),b.Mb(),b.Nb(55,"ion-select-option",23),b.mc(56),b.Yb(57,"uppercase"),b.Mb(),b.Mb(),b.Mb(),b.Nb(58,"ion-item",6),b.Nb(59,"ion-label",7),b.mc(60),b.Yb(61,"uppercase"),b.Mb(),b.Nb(62,"ion-select",24,25),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.etnia=i}),b.lc(64,y,3,4,"ion-select-option",26),b.Mb(),b.Mb(),b.Nb(65,"ion-item",6),b.Nb(66,"ion-label",7),b.mc(67),b.Yb(68,"uppercase"),b.Mb(),b.Nb(69,"ion-textarea",27,28),b.Vb("ngModelChange",function(i){return b.ic(e),b.Xb().beneficiario.direccion=i}),b.Mb(),b.Mb(),b.Nb(71,"ion-item"),b.Nb(72,"ion-button",29),b.Vb("click",function(){return b.ic(e),b.Xb().showAlert()}),b.mc(73),b.Yb(74,"uppercase"),b.Lb(75,"ion-icon",30),b.Mb(),b.Mb(),b.Mb()}if(2&e){const e=b.Xb();b.zb(12),b.nc(b.Zb(13,24,"C\xe9dula")),b.zb(2),b.dc("ngModel",e.beneficiario.cedula),b.zb(4),b.nc(b.Zb(19,26,"Fecha de Nacimiento")),b.zb(2),b.ec("value",e.hoy),b.ec("max",e.hoy),b.dc("ngModel",e.beneficiario.fecha_nac),b.zb(4),b.nc(b.Zb(25,28,"Primer nombre")),b.zb(2),b.dc("ngModel",e.beneficiario.primer_nombre),b.zb(4),b.nc(b.Zb(31,30,"Segundo nombre")),b.zb(2),b.dc("ngModel",e.beneficiario.segundo_nombre),b.zb(4),b.nc(b.Zb(37,32,"Primer Apellido")),b.zb(2),b.dc("ngModel",e.beneficiario.primer_apellido),b.zb(4),b.nc(b.Zb(43,34,"Segundo Apellido")),b.zb(2),b.dc("ngModel",e.beneficiario.segundo_apellido),b.zb(4),b.nc(b.Zb(49,36,"Sexo")),b.zb(2),b.dc("ngModel",e.beneficiario.sexo),b.zb(3),b.nc(b.Zb(54,38,"Masculino")),b.zb(3),b.nc(b.Zb(57,40,"Femenino")),b.zb(4),b.nc(b.Zb(61,42,"Etnia")),b.zb(2),b.dc("ngModel",e.beneficiario.etnia),b.zb(2),b.dc("ngForOf",e.keyEtnias),b.zb(3),b.nc(b.Zb(68,44,"Direcci\xf3n")),b.zb(2),b.dc("ngModel",e.beneficiario.direccion),b.zb(4),b.oc(" ",b.Zb(74,46,"Guardar"),"\xa0 ")}}let x=(()=>{class e{constructor(e,i,n,t,o,a,r){this._auth=e,this._data=i,this.alertCtrl=n,this.toastCtrl=t,this._router=o,this._activatedRoute=a,this.platform=r,this.backroute="/beneficiarios",this.hoy=(new Date).toISOString()}ngOnInit(){this.LlenaDatos()}LlenaDatos(){this._activatedRoute.snapshot.paramMap.has("ref")&&(this.backroute="/inicio/nuevo/ref"),this.etnias=this._data.Etnias,this.keyEtnias=Object.keys(this.etnias),this.beneficiario={cedula:null,primer_nombre:null,segundo_nombre:null,primer_apellido:null,segundo_apellido:null,fecha_nac:null,sexo:null,etnia:null,direccion:null,contribuciones:null},this._auth.updateSession().then(()=>{})}showToast(e,i=!1,n){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.toastCtrl.create({message:e,position:"middle",duration:2e3});i&&t.onDidDismiss().then(()=>{n&&this._router.navigateByUrl(n)}),t.present()})}showAlert(){return Object(c.a)(this,void 0,void 0,function*(){if(this.Validar()){const e=yield this.alertCtrl.create({message:"Se guardar\xe1 el registro en la BD. \xbfDesea Continuar?",header:"Confirmar Guardar",buttons:[{text:"Si",handler:()=>{this.Guardar()}},{text:"No",role:"cancel"}]});yield e.present()}else this.showToast("Datos No V\xe1lidos")})}Guardar(){this.beneficiario.fecha_nac=d.a.DateFormat(this.beneficiario.fecha_nac),this.beneficiario.cedula=this.beneficiario.cedula.toUpperCase(),this._auth.getAuthToken().then(e=>{this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.newBeneficiario(this.beneficiario,e.value).subscribe(e=>{e.ok&&this.showToast("Registro Guardado",!0,this.backroute)},e=>{console.error("Error: ".concat(e)),this.showToast(e)}):this._data.newBeneficiarioNative(this.beneficiario,e.value).then(e=>{200==e.status&&this.showToast("Registro Guardado",!0,this.backroute)}).catch(e=>{console.error("Error: ".concat(e.error)),this.showToast(e.error)})}).catch(e=>{this.showToast(e)})}Validar(){let e=!1;return this.cedulaField.valid&&this.fechaField.valid&&this.nombreField.valid&&this.apellidoField.valid&&this.sexField.valid&&this.etniaField.valid&&(e=!0),e}}return e.\u0275fac=function(i){return new(i||e)(b.Kb(s.a),b.Kb(l.a),b.Kb(a.a),b.Kb(a.Q),b.Kb(r.g),b.Kb(r.a),b.Kb(a.M))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-new-benef"]],viewQuery:function(e,i){if(1&e&&(b.qc(N,1),b.qc(_,1),b.qc(v,1),b.qc(z,1),b.qc(C,1),b.qc(w,1)),2&e){let e;b.hc(e=b.Wb())&&(i.cedulaField=e.first),b.hc(e=b.Wb())&&(i.fechaField=e.first),b.hc(e=b.Wb())&&(i.nombreField=e.first),b.hc(e=b.Wb())&&(i.apellidoField=e.first),b.hc(e=b.Wb())&&(i.sexField=e.first),b.hc(e=b.Wb())&&(i.etniaField=e.first)}},decls:8,vars:5,consts:[["slot","start"],["id","btnRegreso",3,"defaultHref"],[4,"ngIf"],["color","dark"],[1,"uppercase"],["color","secondary"],[1,"field-item"],["position","stacked"],["type","text","name","cedula","pattern","[0-9]{3}-[0-9]{6}-[0-9A-Za-z]{5}","placeholder","000-000000-XXXXX","maxlength","16","required","",3,"ngModel","ngModelChange"],["txtCedula","ngModel"],["name","fecha_nac","doneText","Hecho","cancelText","Cancelar","displayFormat","D/M/YYYY","required","",3,"ngModel","value","max","ngModelChange"],["datFechaNac","ngModel"],["type","text","name","primer_nombre","maxlength","25","required","",3,"ngModel","ngModelChange"],["txtPrimerNombre","ngModel"],["type","text","name","segundo_nombre","maxlength","25",3,"ngModel","ngModelChange"],["txtSegundoNombre","ngModel"],["type","text","name","primer_apellido","maxlength","25","required","",3,"ngModel","ngModelChange"],["txtPrimerApellido","ngModel"],["type","text","name","segundo_apellido","maxlength","25",3,"ngModel","ngModelChange"],["txtSegundoApellido","ngModel"],["name","sexo","required","",3,"ngModel","ngModelChange"],["optSexo","ngModel"],["value","M"],["value","F"],["required","",3,"ngModel","ngModelChange"],["optEtnia","ngModel"],[3,"value",4,"ngFor","ngForOf"],["name","direccion","cols","25","rows","10","maxlength","250",3,"ngModel","ngModelChange"],["txtDireccion","ngModel"],["size","big",3,"click"],["name","save-outline"],[3,"value"]],template:function(e,i){1&e&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Lb(3,"ion-back-button",1),b.Mb(),b.Nb(4,"ion-title"),b.mc(5),b.Yb(6,"uppercase"),b.Mb(),b.Mb(),b.Mb(),b.lc(7,k,76,48,"ion-content",2)),2&e&&(b.zb(3),b.ec("defaultHref",i.backroute),b.zb(2),b.nc(b.Zb(6,3,"Nuevo Beneficiario")),b.zb(2),b.dc("ngIf",i.beneficiario))},directives:[a.q,a.I,a.g,a.c,a.d,a.H,t.k,a.n,a.h,a.i,a.F,a.u,a.t,a.v,a.s,a.P,o.h,o.b,o.i,o.f,o.g,a.o,a.O,a.D,a.E,t.j,a.G,a.f,a.r],pipes:[t.n],styles:[".field-item[_ngcontent-%COMP%]:not(:first-child){margin-top:1rem}.field-label[_ngcontent-%COMP%]{margin-right:2rem}"]}),e})();const L=function(e){return["/inicio/ver/",e]};function Y(e,i){if(1&e&&(b.Nb(0,"ion-item",7),b.Nb(1,"ion-label"),b.mc(2),b.Yb(3,"date"),b.Mb(),b.Nb(4,"ion-label",8),b.mc(5),b.Yb(6,"number"),b.Mb(),b.Mb()),2&e){const e=i.$implicit;b.dc("routerLink",b.gc(9,L,e.id)),b.zb(2),b.nc(b.ac(3,3,e.fecha,"d-MM-y")),b.zb(3),b.oc("C$ ",b.ac(6,6,e.monto,"1.2-2"),"")}}function F(e,i){if(1&e&&(b.Nb(0,"ion-card"),b.Nb(1,"ion-card-header"),b.Nb(2,"ion-card-title"),b.mc(3),b.Yb(4,"uppercase"),b.Nb(5,"ion-badge",3),b.mc(6),b.Mb(),b.Mb(),b.Nb(7,"ion-card-subtitle"),b.mc(8),b.Yb(9,"uppercase"),b.Mb(),b.Mb(),b.Nb(10,"ion-card-content"),b.Nb(11,"ion-grid"),b.Nb(12,"ion-row"),b.Nb(13,"ion-col",4),b.Nb(14,"h2"),b.mc(15),b.Mb(),b.Mb(),b.Nb(16,"ion-col",5),b.mc(17),b.Mb(),b.Mb(),b.Nb(18,"ion-row"),b.Nb(19,"ion-col",4),b.Nb(20,"h2"),b.mc(21),b.Mb(),b.Mb(),b.Nb(22,"ion-col",5),b.mc(23),b.Yb(24,"number"),b.Mb(),b.Mb(),b.Nb(25,"ion-row"),b.Nb(26,"ion-col",4),b.Nb(27,"h2"),b.mc(28),b.Mb(),b.Mb(),b.Nb(29,"ion-col",5),b.mc(30),b.Yb(31,"uppercase"),b.Mb(),b.Mb(),b.Nb(32,"ion-row"),b.Nb(33,"ion-col",4),b.Nb(34,"h2"),b.mc(35),b.Mb(),b.Mb(),b.Nb(36,"ion-col",5),b.mc(37),b.Yb(38,"uppercase"),b.Mb(),b.Mb(),b.Nb(39,"ion-row"),b.Nb(40,"ion-col",4),b.Nb(41,"h2"),b.mc(42),b.Mb(),b.Mb(),b.Nb(43,"ion-col",5),b.mc(44),b.Yb(45,"uppercase"),b.Mb(),b.Mb(),b.Mb(),b.Nb(46,"h2"),b.mc(47),b.Mb(),b.Nb(48,"ion-list"),b.lc(49,Y,7,11,"ion-item",6),b.Mb(),b.Mb(),b.Mb()),2&e){const e=b.Xb();b.zb(3),b.oc(" ",b.Zb(4,16,e.beneficiario.primer_nombre+" "+e.beneficiario.primer_apellido)," "),b.zb(2),b.ec("color",e.color),b.zb(1),b.nc(e.beneficiario.contribuciones.length),b.zb(2),b.nc(b.Zb(9,18,e.beneficiario.cedula)),b.zb(7),b.nc("Nombre Completo"),b.zb(2),b.nc(e.nombreCompleto),b.zb(4),b.nc("Edad"),b.zb(2),b.nc(b.ac(24,20,e.edad,"2.0-0")),b.zb(5),b.nc("Sexo"),b.zb(2),b.nc(b.Zb(31,23,e.beneficiario.sexo)),b.zb(5),b.nc("Etnia"),b.zb(2),b.nc(b.Zb(38,25,e.etnias[e.beneficiario.etnia])),b.zb(5),b.nc("Direcci\xf3n"),b.zb(2),b.nc(b.Zb(45,27,e.beneficiario.direccion)),b.zb(3),b.nc("Ayudas Recibidas"),b.zb(2),b.dc("ngForOf",e.beneficiario.contribuciones)}}let O=(()=>{class e{constructor(e,i,n,t,o,a){this._auth=e,this._router=i,this._activatedRoute=n,this._data=t,this.toastCtrl=o,this.platform=a,this.nombreCompleto="N/A"}ngOnInit(){this.LlenaDatos()}LlenaDatos(){let e=this._activatedRoute.snapshot.paramMap.get("id");this.etnias=this._data.Etnias,this._auth.updateSession().then(()=>{}),this._auth.getAuthToken().then(i=>{this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.getBeneficiarioById(e,i.value).subscribe(e=>{this.beneficiario=Object.assign({},e.body),this.Complementos()},e=>{console.error("Error: ".concat(e)),this.showToast(e)}):this._data.getBeneficiarioByIdNative(e,i.value).then(e=>{e.data&&(this.beneficiario=Object.assign({},JSON.parse(e.data)),this.Complementos())}).catch(e=>{console.error("Error: ".concat(e.error)),this.showToast(e.error)})}).catch(e=>{this.showToast(e)})}Complementos(){this.nombreCompleto=d.a.FullName([this.beneficiario.primer_nombre,this.beneficiario.segundo_nombre,this.beneficiario.primer_apellido,this.beneficiario.segundo_apellido]),this.edad=d.a.CalculaEdad(this.beneficiario.fecha_nac),this.color=d.a.BadgeColor(this.beneficiario.contribuciones.length),this._auth.updateSession().then(()=>{})}showToast(e){return Object(c.a)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e,position:"middle",duration:2e3})).present()})}}return e.\u0275fac=function(i){return new(i||e)(b.Kb(s.a),b.Kb(r.g),b.Kb(r.a),b.Kb(l.a),b.Kb(a.Q),b.Kb(a.M))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-benef-detail"]],decls:9,vars:4,consts:[["slot","start"],["defaultHref","/beneficiarios"],[4,"ngIf"],[1,"benef-badge",3,"color"],["size","3"],["size","9"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["slot","end"]],template:function(e,i){1&e&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Lb(3,"ion-back-button",1),b.Mb(),b.Nb(4,"ion-title"),b.mc(5),b.Yb(6,"uppercase"),b.Mb(),b.Mb(),b.Mb(),b.Nb(7,"ion-content"),b.lc(8,F,50,29,"ion-card",2),b.Mb()),2&e&&(b.zb(5),b.nc(b.Zb(6,2,"Detalle de Beneficiario")),b.zb(3),b.dc("ngIf",i.beneficiario))},directives:[a.q,a.I,a.g,a.c,a.d,a.H,a.n,t.k,a.h,a.j,a.l,a.e,a.k,a.i,a.p,a.C,a.m,a.w,t.j,a.t,a.N,r.h,a.v],pipes:[t.n,t.e,t.d],styles:[".benef-badge[_ngcontent-%COMP%]{float:right}"]}),e})();var T=n("UTcu");const E=[{path:"",component:M},{path:"nuevo",canActivate:[T.a],component:x},{path:"nuevo/:ref",canActivate:[T.a],component:x},{path:"ver/:id",canActivate:[T.a],component:O}];let Z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({imports:[[r.i.forChild(E)],r.i]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({imports:[[t.b,o.a,a.J,Z]]}),e})()}}]);