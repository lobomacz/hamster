(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{MpVM:function(i,o,n){"use strict";n.r(o),n.d(o,"InicioPageModule",function(){return S});var t=n("ofXK"),e=n("3Pt+"),c=n("TEn/"),b=n("tyNb"),s=n("mrSG"),a=n("fXoL"),r=n("EnSQ"),l=n("lGQG");const u=function(i){return["/inicio/ver/",i]};function h(i,o){if(1&i&&(a.Mb(0,"ion-item",1),a.Kb(1,"ion-icon",2),a.Mb(2,"ion-label",3),a.Mb(3,"h2"),a.lc(4),a.Xb(5,"uppercase"),a.Lb(),a.Mb(6,"ion-note",4),a.lc(7),a.Xb(8,"date"),a.Lb(),a.Mb(9,"ion-text",5),a.Mb(10,"p"),a.lc(11),a.Xb(12,"uppercase"),a.Lb(),a.Lb(),a.Lb(),a.Mb(13,"ion-label"),a.Mb(14,"h3"),a.lc(15),a.Xb(16,"number"),a.Lb(),a.Lb(),a.Lb()),2&i){const i=a.Wb();a.cc("routerLink",a.fc(17,u,i.contribucion.id))("detail",!0),a.zb(1),a.dc("name",i.icono),a.zb(3),a.nc(" ",a.Yb(5,7,i.beneficiario.primer_nombre.concat(" ",i.beneficiario.primer_apellido))," "),a.zb(3),a.mc(a.Zb(8,9,i.contribucion.fecha,"d-MM-yyyy")),a.zb(4),a.nc(" ",a.Yb(12,12,i.funcionario.institucion.siglas)," "),a.zb(4),a.nc("C$ ",a.Zb(16,14,i.contribucion.monto,"1.2-2"),"")}}let d=(()=>{class i{constructor(i){this._data=i}ngOnInit(){this.icono=this._data.Tipos[this.contribucion.tipo].icon,this._data.getBeneficiarioById(this.contribucion.beneficiario,this.token).subscribe(i=>{this.beneficiario=Object.assign({},i.body)}),this._data.getFuncionarioById(this.contribucion.funcionario,this.token).subscribe(i=>{this.funcionario=Object.assign({},i.body)})}}return i.\u0275fac=function(o){return new(o||i)(a.Jb(r.a))},i.\u0275cmp=a.Db({type:i,selectors:[["app-item-contribucion"]],inputs:{contribucion:"contribucion",token:"token"},decls:1,vars:1,consts:[[3,"routerLink","detail",4,"ngIf"],[3,"routerLink","detail"],["slot","start",1,"contrib-item__read",3,"name"],[1,"ion-text-wrap"],["slot","end"],["color","success"]],template:function(i,o){1&i&&a.kc(0,h,17,19,"ion-item",0),2&i&&a.cc("ngIf",o.contribucion&&o.beneficiario&&o.funcionario)},directives:[t.k,c.t,c.M,b.h,c.r,c.v,c.y,c.F],pipes:[t.n,t.d,t.e],styles:[".contrib-item__unread[_ngcontent-%COMP%]{color:--ion-color-success}.contrib-item__read[_ngcontent-%COMP%]{color:--ion-color-primary}.contrib-item__concept[_ngcontent-%COMP%]{text-overflow:ellipsis}"]}),i})();const p=["searchField"];function f(i,o){if(1&i&&a.Kb(0,"app-item-contribucion",27),2&i){const i=o.$implicit,n=a.Wb(2);a.cc("contribucion",i)("token",n.token)}}function M(i,o){if(1&i){const i=a.Nb();a.Mb(0,"ion-content"),a.Mb(1,"ion-item"),a.Mb(2,"ion-text",10),a.Mb(3,"h5"),a.lc(4),a.Xb(5,"uppercase"),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-item"),a.Mb(7,"ion-input",11,12),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().cedula=o}),a.Lb(),a.Mb(9,"ion-button",13),a.Ub("click",function(){return a.hc(i),a.Wb().ContribucionesPorBeneficiario()}),a.Kb(10,"ion-icon",14),a.Lb(),a.Lb(),a.Mb(11,"ion-item-divider",15),a.Mb(12,"ion-label"),a.lc(13,"Leyenda"),a.Lb(),a.Lb(),a.Mb(14,"ion-grid"),a.Mb(15,"ion-row"),a.Mb(16,"ion-col"),a.Mb(17,"ion-item"),a.Kb(18,"ion-icon",16),a.Mb(19,"ion-label",17),a.lc(20,"Dinero"),a.Lb(),a.Lb(),a.Lb(),a.Mb(21,"ion-col"),a.Mb(22,"ion-item"),a.Kb(23,"ion-icon",18),a.Mb(24,"ion-label",17),a.lc(25,"Medicinas"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(26,"ion-row"),a.Mb(27,"ion-col"),a.Mb(28,"ion-item"),a.Kb(29,"ion-icon",19),a.Mb(30,"ion-label",17),a.lc(31,"Provisi\xf3n"),a.Lb(),a.Lb(),a.Lb(),a.Mb(32,"ion-col"),a.Mb(33,"ion-item"),a.Kb(34,"ion-icon",20),a.Mb(35,"ion-label",17),a.lc(36,"Pasajes"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(37,"ion-row"),a.Mb(38,"ion-col"),a.Mb(39,"ion-item"),a.Kb(40,"ion-icon",21),a.Mb(41,"ion-label",17),a.lc(42,"Materiales"),a.Lb(),a.Lb(),a.Lb(),a.Mb(43,"ion-col"),a.Mb(44,"ion-item"),a.Kb(45,"ion-icon",22),a.Mb(46,"ion-label",17),a.lc(47,"Art. Escolares"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(48,"ion-row"),a.Mb(49,"ion-col",23),a.Mb(50,"ion-item"),a.Kb(51,"ion-icon",24),a.Mb(52,"ion-label",17),a.lc(53,"Otro"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(54,"ion-item-divider",15),a.Mb(55,"ion-label"),a.lc(56,"Lista"),a.Lb(),a.Lb(),a.Mb(57,"ion-refresher",25),a.Ub("ionRefresh",function(o){return a.hc(i),a.Wb().refresh(o)}),a.Kb(58,"ion-refresher-content"),a.Lb(),a.Mb(59,"ion-list"),a.kc(60,f,1,2,"app-item-contribucion",26),a.Lb(),a.Lb()}if(2&i){const i=a.Wb();a.zb(4),a.mc(a.Yb(5,3,"Instituciones auton\xf3micas")),a.zb(3),a.cc("ngModel",i.cedula),a.zb(53),a.cc("ngForOf",i.contribuciones)}}let m=(()=>{class i{constructor(i,o,n,t){this._data=i,this._auth=o,this._router=n,this.toastCtrl=t}refresh(i){this.LlenaDatos(!0,i)}LlenaDatos(i=!1,o){this._data.getContribuciones(this.token).subscribe(n=>{this.contribuciones=n.body,this._auth.updateSession().then(()=>{}),1==i&&o.detail.complete()},i=>{this.showToast(i,!1)})}ngOnInit(){this.CheckSession()}ContribucionesPorBeneficiario(){console.log(this.cedulaField.valid),this.cedulaField.valid?this._data.getContribucionesPorBeneficiario(this.cedula,this.token).subscribe(i=>{i.body&&i.body.length>0&&(console.log(i.body),this.contribuciones=i.body)},i=>{this.showToast(i)}):this.showToast("Valor Incorrecto")}CheckSession(){this._auth.getSession().then(i=>{if(i.value){let o=parseInt(i.value);this._auth.getAuthToken().then(i=>{this.token=i.value;let n=new Date(o);this.CheckExpiration(n)}).catch(i=>{this.showToast(i,!0)})}else this.showToast("Acceso Denegado",!0)}).catch(i=>{this.showToast(i,!0)})}CheckExpiration(i){i<new Date?this.showToast("Sesi\xf3n Expirada",!0):this.LlenaDatos()}Logout(){this._auth.UserLogout().then(()=>{this.showToast("\xa1Adi\xf3s!",!0)}).catch(i=>{this.showToast(i)})}Redirect(){this._router.navigateByUrl("/login")}showToast(i,o=!1){return Object(s.a)(this,void 0,void 0,function*(){const n=yield this.toastCtrl.create({message:i,position:"middle",duration:2e3});o&&n.onDidDismiss().then(()=>{this.Redirect()}),n.present()})}}return i.\u0275fac=function(o){return new(o||i)(a.Jb(r.a),a.Jb(l.a),a.Jb(b.g),a.Jb(c.P))},i.\u0275cmp=a.Db({type:i,selectors:[["app-inicio"]],viewQuery:function(i,o){if(1&i&&a.pc(p,1),2&i){let i;a.gc(i=a.Vb())&&(o.cedulaField=i.first)}},decls:14,vars:5,consts:[[3,"translucent"],["slot","start"],[3,"click"],["name","exit-outline","slot","icon-only"],["slot","end"],["routerLink","/beneficiarios","fill","clear"],["name","people-outline","slot","icon-only"],["routerLink","/inicio/nuevo","fill","clear"],["name","add-outline","slot","icon-only"],[4,"ngIf"],["color","dark"],["name","txtCedula","inputmode","text","slot","end","type","text","pattern","[0-9]{3}-[0-9]{6}-[0-9A-Z]{5}","maxlength","16","minlength","16","color","primary","placeholder","000-000000-XXXXX",1,"search-input",3,"ngModel","ngModelChange"],["searchField","ngModel"],["color","light","slot","end",3,"click"],["slot","icon-only","name","search-outline"],[1,"header-divider"],["name","cash-outline"],[1,"legend-label"],["name","medkit-outline"],["name","cart-outline"],["name","bus-outline"],["name","hammer-outline"],["name","library-outline"],["size","6"],["name","flower-outline"],["slot","fixed",3,"ionRefresh"],[3,"contribucion","token",4,"ngFor","ngForOf"],[3,"contribucion","token"]],template:function(i,o){1&i&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",1),a.Mb(3,"ion-button",2),a.Ub("click",function(){return o.Logout()}),a.Kb(4,"ion-icon",3),a.Lb(),a.Lb(),a.Mb(5,"ion-title"),a.lc(6),a.Xb(7,"uppercase"),a.Lb(),a.Mb(8,"ion-buttons",4),a.Mb(9,"ion-button",5),a.Kb(10,"ion-icon",6),a.Lb(),a.Mb(11,"ion-button",7),a.Kb(12,"ion-icon",8),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.kc(13,M,61,5,"ion-content",9)),2&i&&(a.cc("translucent",!0),a.zb(6),a.mc(a.Yb(7,3,"Ayudas Sociales")),a.zb(7),a.cc("ngIf",o.contribuciones))},directives:[c.q,c.I,c.g,c.f,c.r,c.H,c.M,b.h,t.k,c.n,c.t,c.F,c.s,c.O,e.h,e.b,e.c,e.f,e.g,c.u,c.v,c.p,c.C,c.m,c.z,c.A,c.w,t.j,d],pipes:[t.n],styles:[".legend-label[_ngcontent-%COMP%]{margin-left:2rem}.header-divider[_ngcontent-%COMP%]{background-color:#3880ff;color:#fff}.search-input[_ngcontent-%COMP%]{border:1px solid #000;border-radius:.5rem;text-align:right}"]}),i})();function g(i,o){if(1&i&&(a.Mb(0,"ion-card",3),a.Mb(1,"ion-card-header"),a.Mb(2,"ion-card-title"),a.lc(3),a.Xb(4,"uppercase"),a.Lb(),a.Mb(5,"ion-card-subtitle"),a.lc(6),a.Xb(7,"uppercase"),a.Lb(),a.Lb(),a.Mb(8,"ion-card-content"),a.Kb(9,"ion-icon",4),a.Mb(10,"ion-label",5),a.lc(11),a.Xb(12,"uppercase"),a.Xb(13,"date"),a.Lb(),a.Kb(14,"ion-item-divider"),a.Mb(15,"ion-item"),a.Mb(16,"h3"),a.lc(17),a.Xb(18,"uppercase"),a.Lb(),a.Lb(),a.Mb(19,"ion-item"),a.Mb(20,"h3"),a.lc(21),a.Xb(22,"uppercase"),a.Lb(),a.Lb(),a.Mb(23,"ion-item"),a.Mb(24,"h3"),a.lc(25),a.Xb(26,"uppercase"),a.Lb(),a.Lb(),a.Mb(27,"ion-item"),a.Mb(28,"h2"),a.lc(29),a.Xb(30,"uppercase"),a.Lb(),a.Mb(31,"ion-text",6),a.Mb(32,"h1"),a.lc(33),a.Xb(34,"number"),a.Lb(),a.Lb(),a.Lb(),a.Mb(35,"ion-item"),a.Mb(36,"h2"),a.lc(37),a.Lb(),a.lc(38,"\xa0 "),a.Mb(39,"ion-text",7),a.lc(40),a.Xb(41,"uppercase"),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&i){const i=a.Wb();a.zb(3),a.mc(a.Yb(4,12,i.beneficiario.primer_nombre.concat(" ",i.beneficiario.primer_apellido))),a.zb(3),a.nc(" ",a.Yb(7,14,i.beneficiario.cedula)," "),a.zb(3),a.dc("name",i.icono),a.zb(2),a.oc("",a.Yb(12,16,"Fecha: "),"",a.Zb(13,18,i.contribucion.fecha,"d-MM-y"),""),a.zb(6),a.mc(a.Yb(18,21,"Concepto: "+i.contribucion.concepto)),a.zb(4),a.nc(" ",a.Yb(22,23,"Entregado por: "+i.funcionario.nombre+" "+i.funcionario.apellido)," "),a.zb(4),a.nc(" ",a.Yb(26,25,"Instituci\xf3n: "+i.funcionario.institucion.nombre)," "),a.zb(4),a.nc("",a.Yb(30,27,"Monto: C$"),"\xa0"),a.zb(4),a.mc(a.Zb(34,29,i.contribucion.monto,"1.2-2")),a.zb(4),a.nc(" ","Digitador: "," "),a.zb(3),a.nc(" ",a.Yb(41,32,i.contribucion.digitador)," ")}}let L=(()=>{class i{constructor(i,o,n,t,e){this._auth=i,this._data=o,this._router=n,this._activatedRoute=t,this.toastCtrl=e}ngOnInit(){this.CheckSession()}CheckSession(){this._auth.getSession().then(i=>{if(i.value){let o=parseInt(i.value);this._auth.getAuthToken().then(i=>{this.token=i.value;let n=new Date(o);this.CheckExpiration(n)}).catch(i=>{this.showToast(i,!0)})}else this.showToast("Acceso Denegado",!0)}).catch(i=>{this.showToast(i,!0)})}CheckExpiration(i){i<new Date?this.showToast("Sesi\xf3n Expirada",!0):this.LlenaDatos()}LlenaDatos(){let i=this._activatedRoute.snapshot.paramMap.get("id");this._data.getContribucionById(parseInt(i),this.token).subscribe(i=>{this.contribucion=Object.assign({},i.body),this._auth.updateSession().then(()=>{}),this.icono=this._data.Tipos[this.contribucion.tipo].icon,this._data.getBeneficiarioById(this.contribucion.beneficiario,this.token).subscribe(i=>{this.beneficiario=Object.assign({},i.body)}),this._data.getFuncionarioById(this.contribucion.funcionario,this.token).subscribe(i=>{this.funcionario=Object.assign({},i.body)})},i=>{this.showToast(i)})}showToast(i,o=!1){return Object(s.a)(this,void 0,void 0,function*(){const n=yield this.toastCtrl.create({message:i,duration:2e3,position:"middle"});1==o&&n.onDidDismiss().then(()=>{this._router.navigateByUrl("/login")}),n.present()})}}return i.\u0275fac=function(o){return new(o||i)(a.Jb(l.a),a.Jb(r.a),a.Jb(b.g),a.Jb(b.a),a.Jb(c.P))},i.\u0275cmp=a.Db({type:i,selectors:[["app-contribucion"]],decls:9,vars:4,consts:[["slot","start"],["defaultHref","/inicio"],["class","card",4,"ngIf"],[1,"card"],["size","large",1,"card-icon",3,"name"],[1,"card-date"],["color","primary"],["color","secondary"]],template:function(i,o){1&i&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",0),a.Kb(3,"ion-back-button",1),a.Lb(),a.Mb(4,"ion-title"),a.lc(5),a.Xb(6,"uppercase"),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"ion-content"),a.kc(8,g,42,34,"ion-card",2),a.Lb()),2&i&&(a.zb(5),a.nc(" ",a.Yb(6,2,"Detalle de Ayuda")," "),a.zb(3),a.cc("ngIf",o.contribucion&&o.beneficiario&&o.funcionario))},directives:[c.q,c.I,c.g,c.c,c.d,c.H,c.n,t.k,c.h,c.j,c.l,c.k,c.i,c.r,c.v,c.u,c.t,c.F],pipes:[t.n,t.d,t.e],styles:[".card-icon[_ngcontent-%COMP%]{float:left}.card-date[_ngcontent-%COMP%]{float:right}"]}),i})();var y=n("AytR"),k=n("myAU");const v=["dtFecha"],_=["optBeneficiario"],C=["optTipoAporte"],w=["txtMonto"],z=["txtConcepto"],D=["optFuncionario"];function F(i,o){if(1&i&&(a.Mb(0,"ion-select-option",25),a.lc(1),a.Xb(2,"uppercase"),a.Lb()),2&i){const i=o.$implicit;a.dc("value",i.cedula),a.zb(1),a.mc(a.Yb(2,2,i.primer_nombre+" "+i.primer_apellido+" "+i.cedula))}}function T(i,o){if(1&i&&(a.Mb(0,"ion-select-option",25),a.lc(1),a.Xb(2,"uppercase"),a.Lb()),2&i){const i=o.$implicit,n=a.Wb(2);a.dc("value",i),a.zb(1),a.mc(a.Yb(2,2,n.tipos[i].label))}}function x(i,o){if(1&i&&(a.Mb(0,"ion-select-option",25),a.lc(1),a.Xb(2,"uppercase"),a.Xb(3,"uppercase"),a.Lb()),2&i){const i=o.$implicit;a.dc("value",i.id),a.zb(1),a.oc(" ",a.Yb(2,3,i.nombre+" "+i.apellido),"\u2014",a.Yb(3,5,i.institucion.siglas)," ")}}const X=function(){return["/beneficiarios/nuevo/contrib"]};function O(i,o){if(1&i){const i=a.Nb();a.Mb(0,"ion-content"),a.Mb(1,"ion-card"),a.Mb(2,"ion-card-content"),a.Mb(3,"ion-text",3),a.Mb(4,"h4",4),a.lc(5," Llene los campos con los datos correspondientes y presione el bot\xf3n para guardar el registro en la base central. "),a.Lb(),a.Lb(),a.Kb(6,"ion-item-divider"),a.Mb(7,"ion-text",5),a.Mb(8,"h5",4),a.lc(9," Verifique que la informaci\xf3n sea correcta. Una vez enviado, no podr\xe1 modificar el registro sin ayuda del administrador. "),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(10,"ion-item",6),a.Mb(11,"ion-label",7),a.lc(12),a.Xb(13,"uppercase"),a.Lb(),a.Mb(14,"ion-datetime",8,9),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().contribucion.fecha=o}),a.Lb(),a.Lb(),a.Mb(16,"ion-item",6),a.Mb(17,"ion-label",7),a.lc(18),a.Xb(19,"uppercase"),a.Lb(),a.Mb(20,"ion-select",10,11),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().contribucion.beneficiario=o}),a.kc(22,F,3,4,"ion-select-option",12),a.Lb(),a.Mb(23,"ion-button",13),a.Kb(24,"ion-icon",14),a.Lb(),a.Lb(),a.Mb(25,"ion-item",6),a.Mb(26,"ion-label",7),a.lc(27),a.Xb(28,"uppercase"),a.Lb(),a.Mb(29,"ion-select",15,16),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().contribucion.tipo=o}),a.kc(31,T,3,4,"ion-select-option",12),a.Lb(),a.Lb(),a.Mb(32,"ion-item",6),a.Mb(33,"ion-label",7),a.lc(34),a.Xb(35,"uppercase"),a.Lb(),a.Mb(36,"ion-input",17,18),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().contribucion.monto=o}),a.Lb(),a.Lb(),a.Mb(38,"ion-item",6),a.Mb(39,"ion-label",7),a.lc(40),a.Xb(41,"uppercase"),a.Lb(),a.Mb(42,"ion-textarea",19,20),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().contribucion.concepto=o}),a.Lb(),a.Lb(),a.Mb(44,"ion-item",6),a.Mb(45,"ion-label",7),a.lc(46),a.Xb(47,"uppercase"),a.Lb(),a.Mb(48,"ion-select",21,22),a.Ub("ngModelChange",function(o){return a.hc(i),a.Wb().contribucion.funcionario=o}),a.kc(50,x,4,7,"ion-select-option",12),a.Lb(),a.Lb(),a.Mb(51,"ion-item"),a.Mb(52,"ion-button",23),a.Ub("click",function(){return a.hc(i),a.Wb().showAlert()}),a.lc(53),a.Xb(54,"uppercase"),a.Kb(55,"ion-icon",24),a.Lb(),a.Lb(),a.Lb()}if(2&i){const i=a.Wb();a.zb(12),a.mc(a.Yb(13,21,"fecha")),a.zb(2),a.dc("max",i.hoy),a.dc("value",i.hoy),a.cc("ngModel",i.contribucion.fecha)("monthShortNames",i.meses)("dayNames",i.dias),a.zb(4),a.mc(a.Yb(19,23,"Beneficiario")),a.zb(2),a.cc("ngModel",i.contribucion.beneficiario),a.zb(2),a.cc("ngForOf",i.beneficiarios),a.zb(1),a.cc("routerLink",a.ec(35,X)),a.zb(4),a.mc(a.Yb(28,25,"Tipo")),a.zb(2),a.cc("ngModel",i.contribucion.tipo),a.zb(2),a.cc("ngForOf",i.keyTipo),a.zb(3),a.nc("",a.Yb(35,27,"Monto")," C$"),a.zb(2),a.cc("ngModel",i.contribucion.monto),a.zb(4),a.mc(a.Yb(41,29,"Concepto")),a.zb(2),a.cc("ngModel",i.contribucion.concepto),a.zb(4),a.mc(a.Yb(47,31,"Funcionario")),a.zb(2),a.cc("ngModel",i.contribucion.funcionario),a.zb(2),a.cc("ngForOf",i.funcionarios),a.zb(3),a.nc(" ",a.Yb(54,33,"Guardar"),"\xa0 ")}}const I=[{path:"",component:m},{path:"ver/:id",component:L},{path:"nuevo",component:(()=>{class i{constructor(i,o,n,t,e){this._auth=i,this._data=o,this._router=n,this._toastCtrl=t,this._alertCtrl=e,this.AppName=y.a.appName,this.digitador=255,this.meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],this.dias=["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"]}ngOnInit(){this.CheckSession()}CheckSession(){this._auth.getSession().then(i=>{if(i.value){let o=parseInt(i.value);this._auth.getAuthToken().then(i=>{this.token=i.value;let n=new Date(o);this.CheckExpiration(n)}).catch(i=>{this.showToast(i,!0)})}else this.showToast("Acceso Denegado",!0)}).catch(i=>{this.showToast(i,!0)})}CheckExpiration(i){i<new Date?this.showToast("Sesi\xf3n Expirada",!0):this.LlenaDatos()}LlenaDatos(){this.hoy=(new Date).toISOString(),this.contribucion={id:null,fecha:this.hoy,beneficiario:null,tipo:null,monto:null,concepto:null,funcionario:null,digitador:null,creado:this.hoy},this._auth.updateSession().then(()=>{}),this.tipos=this._data.Tipos,this.keyTipo=Object.keys(this.tipos),this._data.getBeneficiarios(this.token).subscribe(i=>{this.beneficiarios=i.body},i=>{this.showToast(i)}),this._data.getInstituciones(this.token).subscribe(i=>{this.instituciones=i.body},i=>{this.showToast(i)}),this._data.getFuncionarios(this.token).subscribe(i=>{this.funcionarios=i.body},i=>{this.showToast(i)})}showToast(i,o=!1){return Object(s.a)(this,void 0,void 0,function*(){const n=yield this._toastCtrl.create({message:i,duration:2e3,position:"middle"});1==o&&n.onDidDismiss().then(()=>{this._router.navigateByUrl("/login")}),n.present()})}showAlert(){return Object(s.a)(this,void 0,void 0,function*(){if(this.Validar()){const i=yield this._alertCtrl.create({header:"Confirma Guardar",message:"Verifique que los datos son correctos. \xbfDesea continuar?",buttons:[{text:"Si",handler:()=>{this.Guardar()}},{text:"No",role:"cancel"}]});yield i.present()}else this.showToast("Datos No V\xe1lidos")})}Guardar(){this.contribucion.fecha=k.a.DateFormat(this.contribucion.fecha),this._data.newContribucion(this.contribucion,this.token).subscribe(i=>{this._toastCtrl.create({message:"Registro Guardado",position:"bottom",duration:2e3}).then(i=>{i.onDidDismiss().then(()=>{this.gotoList()}),i.present()})},i=>{this.showToast(i)})}gotoList(){this._router.navigateByUrl("/inicio")}Validar(){let i=!1;return this.dateField.valid&&this.benefField.valid&&this.tipoField.valid&&this.montoField.valid&&this.conecptoField.valid&&this.funcionarioField.valid&&(i=!0),i}}return i.\u0275fac=function(o){return new(o||i)(a.Jb(l.a),a.Jb(r.a),a.Jb(b.g),a.Jb(c.P),a.Jb(c.a))},i.\u0275cmp=a.Db({type:i,selectors:[["app-nueva-contribucion"]],viewQuery:function(i,o){if(1&i&&(a.pc(v,1),a.pc(_,1),a.pc(C,1),a.pc(w,1),a.pc(z,1),a.pc(D,1)),2&i){let i;a.gc(i=a.Vb())&&(o.dateField=i.first),a.gc(i=a.Vb())&&(o.benefField=i.first),a.gc(i=a.Vb())&&(o.tipoField=i.first),a.gc(i=a.Vb())&&(o.montoField=i.first),a.gc(i=a.Vb())&&(o.conecptoField=i.first),a.gc(i=a.Vb())&&(o.funcionarioField=i.first)}},decls:8,vars:4,consts:[["slot","start"],["defaultHref","/inicio"],[4,"ngIf"],["color","dark"],[1,"uppercase"],["color","secondary"],[1,"field-item"],["position","stacked"],["displayFormat","DDDD, MMM D, YYYY","doneText","Hecho","cancelText","Cancelar","name","fecha","type","date","required","",3,"ngModel","max","value","monthShortNames","dayNames","ngModelChange"],["dtFecha","ngModel"],["interface","action-sheet","name","beneficiario","required","",3,"ngModel","ngModelChange"],["optBeneficiario","ngModel"],[3,"value",4,"ngFor","ngForOf"],["fill","clear","slot","end",3,"routerLink"],["slot","icon-only","name","add-outline"],["interface","action-sheet","name","tipoAporte","required","",3,"ngModel","ngModelChange"],["optTipoAporte","ngModel"],["type","number","name","monto","inputmode","numeric","required","",3,"ngModel","ngModelChange"],["txtMonto","ngModel"],["name","concepto","maxlength","150","cols","50","rows","3","inputmode","text","required","",3,"ngModel","ngModelChange"],["txtConcepto","ngModel"],["interface","action-sheet","name","funcionario","required","",3,"ngModel","ngModelChange"],["optFuncionario","ngModel"],["size","big",3,"click"],["name","save-outline"],[3,"value"]],template:function(i,o){1&i&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",0),a.Kb(3,"ion-back-button",1),a.Lb(),a.Mb(4,"ion-title"),a.lc(5),a.Xb(6,"uppercase"),a.Lb(),a.Lb(),a.Lb(),a.kc(7,O,56,36,"ion-content",2)),2&i&&(a.zb(5),a.mc(a.Yb(6,2,"Ingresar Ayuda")),a.zb(2),a.cc("ngIf",o.contribucion))},directives:[c.q,c.I,c.g,c.c,c.d,c.H,t.k,c.n,c.h,c.i,c.F,c.u,c.t,c.v,c.o,c.N,e.i,e.f,e.g,c.D,t.j,c.f,c.M,b.h,c.r,c.s,c.L,c.G,c.O,e.b,c.E],pipes:[t.n],styles:[".field-item[_ngcontent-%COMP%]:not(:first-child){margin-top:1.5rem}.field-label[_ngcontent-%COMP%]{margin-right:2rem}"]}),i})()}];let Y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=a.Hb({type:i}),i.\u0275inj=a.Gb({imports:[[b.i.forChild(I)],b.i]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=a.Hb({type:i}),i.\u0275inj=a.Gb({imports:[[t.b,e.a,c.J,Y]]}),i})()}}]);