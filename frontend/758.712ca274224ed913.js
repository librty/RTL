"use strict";(self.webpackChunkRTLApp=self.webpackChunkRTLApp||[]).push([[758],{3891:(X,k,r)=>{r.d(k,{D:()=>w});var a=r(8645),T=r(9773),m=r(2154),e=r(4818),t=r(5879),A=r(6339),E=r(4221),N=r(6814),V=r(3814),c=r(617),B=r(2596),D=r(4104);function y(h,g){if(1&h&&(t.TgZ(0,"mat-icon",10),t._uU(1,"info_outline"),t.qZA()),2&h){const d=t.oxw().$implicit;t.Q6J("matTooltip",d.tooltip)}}function x(h,g){if(1&h&&(t.TgZ(0,"span",11),t._uU(1),t.ALo(2,"number"),t.qZA()),2&h){const d=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,d.dataValue,"1.0-0")," ")}}function b(h,g){if(1&h&&(t.TgZ(0,"span",11),t._uU(1),t.ALo(2,"number"),t.qZA()),2&h){const d=t.oxw().$implicit,s=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,d[s.currencyUnitEnum.BTC],s.currencyUnitFormats.BTC)," ")}}function S(h,g){if(1&h&&(t.TgZ(0,"span",11),t._uU(1),t.ALo(2,"number"),t.qZA()),2&h){const d=t.oxw().$implicit,s=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,d[s.currencyUnitEnum.OTHER],s.currencyUnitFormats.OTHER)," ")}}function Z(h,g){if(1&h&&(t.TgZ(0,"div",6)(1,"div",7),t._uU(2),t.YNc(3,y,2,1,"mat-icon",8),t.qZA(),t.YNc(4,x,3,4,"span",9),t.YNc(5,b,3,4,"span",9),t.YNc(6,S,3,4,"span",9),t.qZA()),2&h){const d=g.$implicit,s=t.oxw().$implicit,H=t.oxw();t.xp6(2),t.hij(" ",d.title," "),t.xp6(1),t.Q6J("ngIf",d.tooltip),t.xp6(1),t.Q6J("ngIf",s===H.currencyUnitEnum.SATS),t.xp6(1),t.Q6J("ngIf",s===H.currencyUnitEnum.BTC),t.xp6(1),t.Q6J("ngIf",H.fiatConversion&&s!==H.currencyUnitEnum.SATS&&s!==H.currencyUnitEnum.BTC&&""===H.conversionErrorMsg)}}function O(h,g){if(1&h&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2),t.qZA()()),2&h){const d=t.oxw(2);t.xp6(2),t.Oqu(d.conversionErrorMsg)}}function P(h,g){if(1&h&&(t.TgZ(0,"mat-tab",2)(1,"div",3),t.YNc(2,Z,7,5,"div",4),t.qZA(),t.YNc(3,O,3,1,"div",5),t.qZA()),2&h){const d=g.$implicit,s=t.oxw();t.s9C("label",d),t.xp6(2),t.Q6J("ngForOf",s.values),t.xp6(1),t.Q6J("ngIf",s.fiatConversion&&d!==s.currencyUnitEnum.SATS&&d!==s.currencyUnitEnum.BTC&&""!==s.conversionErrorMsg)}}let w=(()=>{class h{constructor(d,s){this.commonService=d,this.store=s,this.values=[],this.currencyUnitEnum=m.NT,this.currencyUnitFormats=m.Xz,this.currencyUnits=[],this.fiatConversion=!1,this.conversionErrorMsg="",this.unSubs=[new a.x,new a.x,new a.x]}ngOnInit(){this.store.select(e.dT).pipe((0,T.R)(this.unSubs[0])).subscribe(d=>{this.fiatConversion=d.settings.fiatConversion,this.currencyUnits=d.settings.currencyUnits,this.fiatConversion||this.currencyUnits.splice(2,1),this.currencyUnits.length>1&&this.values[0]&&this.values[0].dataValue>=0&&this.getCurrencyValues(this.values)})}ngOnChanges(){this.currencyUnits.length>1&&this.values[0]&&this.values[0].dataValue>=0&&this.getCurrencyValues(this.values)}getCurrencyValues(d){d.forEach(s=>{s.dataValue>0?(this.commonService.convertCurrency(s.dataValue,m.NT.SATS,m.NT.BTC,"",!0).pipe((0,T.R)(this.unSubs[1])).subscribe(H=>{s[m.NT.BTC]=H.BTC}),this.commonService.convertCurrency(s.dataValue,m.NT.SATS,m.NT.OTHER,this.currencyUnits[2],this.fiatConversion).pipe((0,T.R)(this.unSubs[2])).subscribe({next:H=>{s[m.NT.OTHER]=H.OTHER},error:H=>{this.conversionErrorMsg="Conversion Error: "+H}})):(s[m.NT.BTC]=s.dataValue,""===this.conversionErrorMsg&&(s[m.NT.OTHER]=s.dataValue))})}ngOnDestroy(){this.unSubs.forEach(d=>{d.next(null),d.complete()})}static#c=this.\u0275fac=function(s){return new(s||h)(t.Y36(A.v),t.Y36(E.yh))};static#a=this.\u0275cmp=t.Xpm({type:h,selectors:[["rtl-currency-unit-converter"]],inputs:{values:"values"},features:[t.TTD],decls:2,vars:1,consts:[["mat-stretch-tabs","false","mat-align-tabs","start"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["fxLayout","row","fxFlex","100","fxLayoutAlign","start start"],["fxLayout","column","fxLayoutAlign","center start","class","cc-data-block",4,"ngFor","ngForOf"],["fxLayout","row","fxFlex","100","class","p-1 error-border mt-1",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center start",1,"cc-data-block"],["fxLayout","row","fxFlex","100","fxLayoutAlign","start start",1,"cc-data-title"],["matTooltipPosition","below","class","info-icon",3,"matTooltip",4,"ngIf"],["class","cc-data-value",4,"ngIf"],["matTooltipPosition","below",1,"info-icon",3,"matTooltip"],[1,"cc-data-value"],["fxLayout","row","fxFlex","100",1,"p-1","error-border","mt-1"],[1,"cc-data-block"]],template:function(s,H){1&s&&(t.TgZ(0,"mat-tab-group",0),t.YNc(1,P,4,3,"mat-tab",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",H.currencyUnits))},dependencies:[N.sg,N.O5,V.xw,V.Wh,V.yH,c.Hw,B.gM,D.uX,D.SP,N.JJ]})}return h})()},6105:(X,k,r)=>{r.d(k,{n:()=>d});var a=r(7700),T=r(590),m=r(2154),e=r(5879),t=r(5980),A=r(6339),E=r(2939),N=r(6814),V=r(5597),c=r(3814),B=r(7509),D=r(2296),y=r(5195),x=r(6385),b=r(6828),S=r(7313),Z=r(6985);const O=function(s){return{"display-none":s}};function P(s,H){if(1&s&&(e.TgZ(0,"div",20),e._UZ(1,"qr-code",21),e.qZA()),2&s){const _=e.oxw();e.Q6J("ngClass",e.VKq(4,O,_.screenSize===_.screenSizeEnum.XS||_.screenSize===_.screenSizeEnum.SM)),e.xp6(1),e.Q6J("value",_.address)("size",_.qrWidth)("errorCorrectionLevel","L")}}function w(s,H){if(1&s&&(e.TgZ(0,"div",22),e._UZ(1,"qr-code",21),e.qZA()),2&s){const _=e.oxw();e.Q6J("ngClass",e.VKq(4,O,_.screenSize!==_.screenSizeEnum.XS&&_.screenSize!==_.screenSizeEnum.SM)),e.xp6(1),e.Q6J("value",_.address)("size",_.qrWidth)("errorCorrectionLevel","L")}}function h(s,H){if(1&s&&(e.TgZ(0,"div",13)(1,"div",14)(2,"h4",15),e._uU(3,"Address Type"),e.qZA(),e.TgZ(4,"span",23),e._uU(5),e.qZA()()()),2&s){const _=e.oxw();e.xp6(5),e.Oqu(_.addressType)}}function g(s,H){1&s&&e._UZ(0,"mat-divider",17)}let d=(()=>{class s{constructor(_,F,v,I,U){this.dialogRef=_,this.data=F,this.logger=v,this.commonService=I,this.snackBar=U,this.faReceipt=T.dLy,this.address="",this.addressType="",this.qrWidth=230,this.screenSize="",this.screenSizeEnum=m.cu}ngOnInit(){this.address=this.data.address,this.addressType=this.data.addressType,this.screenSize=this.commonService.getScreenSize()}onClose(){this.dialogRef.close(!1)}onCopyAddress(_){this.snackBar.open("Generated address copied."),this.logger.info("Copied Text: "+_)}static#c=this.\u0275fac=function(F){return new(F||s)(e.Y36(a.so),e.Y36(a.WI),e.Y36(t.mQ),e.Y36(A.v),e.Y36(E.ux))};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["rtl-on-chain-generated-address"]],decls:25,vars:8,consts:[["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign","space-between stretch"],["fxFlex","35","fxLayoutAlign","center start","class","modal-qr-code-container padding-gap-large",3,"ngClass",4,"ngIf"],["fxFlex","65"],["fxLayout","row","fxLayoutAlign","space-between center",1,"modal-info-header"],["fxFlex","95","fxLayoutAlign","start start"],[1,"page-title-img","mr-1",3,"icon"],[1,"page-title"],["tabindex","2","fxFlex","5","fxLayoutAlign","center center","mat-button","",1,"btn-close-x","p-0",3,"click"],[1,"padding-gap-x-large"],["fxLayout","column"],["fxFlex","50","fxLayoutAlign","center start","class","modal-qr-code-container padding-gap-large",3,"ngClass",4,"ngIf"],["fxLayout","row",4,"ngIf"],["class","w-100 my-1",4,"ngIf"],["fxLayout","row"],["fxFlex","100"],["fxLayoutAlign","start",1,"font-bold-500"],[1,"overflow-wrap","foreground-secondary-text"],[1,"w-100","my-1"],["fxLayout","row","fxLayoutAlign","end center",1,"mt-1"],["autoFocus","","mat-button","","color","primary","tabindex","1","type","submit","rtlClipboard","",3,"payload","copied"],["fxFlex","35","fxLayoutAlign","center start",1,"modal-qr-code-container","padding-gap-large",3,"ngClass"],[3,"value","size","errorCorrectionLevel"],["fxFlex","50","fxLayoutAlign","center start",1,"modal-qr-code-container","padding-gap-large",3,"ngClass"],[1,"foreground-secondary-text"]],template:function(F,v){1&F&&(e.TgZ(0,"div",0),e.YNc(1,P,2,6,"div",1),e.TgZ(2,"div",2)(3,"mat-card-header",3)(4,"div",4),e._UZ(5,"fa-icon",5),e.TgZ(6,"span",6),e._uU(7),e.qZA()(),e.TgZ(8,"button",7),e.NdJ("click",function(){return v.onClose()}),e._uU(9,"X"),e.qZA()(),e.TgZ(10,"mat-card-content",8)(11,"div",9),e.YNc(12,w,2,6,"div",10),e.YNc(13,h,6,1,"div",11),e.YNc(14,g,1,0,"mat-divider",12),e.TgZ(15,"div",13)(16,"div",14)(17,"h4",15),e._uU(18,"Address"),e.qZA(),e.TgZ(19,"span",16),e._uU(20),e.qZA()()(),e._UZ(21,"mat-divider",17),e.TgZ(22,"div",18)(23,"button",19),e.NdJ("copied",function(U){return v.onCopyAddress(U)}),e._uU(24,"Copy Address"),e.qZA()()()()()()),2&F&&(e.xp6(1),e.Q6J("ngIf",v.address),e.xp6(4),e.Q6J("icon",v.faReceipt),e.xp6(2),e.Oqu(v.screenSize===v.screenSizeEnum.XS?"Address":"Generated Address"),e.xp6(5),e.Q6J("ngIf",v.address),e.xp6(1),e.Q6J("ngIf",""!==v.addressType),e.xp6(1),e.Q6J("ngIf",""!==v.addressType),e.xp6(6),e.Oqu(v.address),e.xp6(3),e.Q6J("payload",v.address))},dependencies:[N.mk,N.O5,V.BN,c.xw,c.Wh,c.yH,B.oO,D.lW,y.dn,y.dk,x.d,b.uU,S.y,Z.h]})}return s})()},1948:(X,k,r)=>{r.d(k,{D:()=>Q});var a=r(5879),T=r(3214),m=r(2154),e=r(5980),t=r(6814),A=r(6223),E=r(3814),N=r(2296),V=r(8034),c=r(617),B=r(2032),D=r(5683),y=r(8525),x=r(3680),b=r(2831);let S=(()=>{class o extends x.LF{constructor(i,f){super(i,f)}format(i,f){return"MMM YYYY"===f?m.gg[i.getMonth()].name+", "+i.getFullYear():"YYYY"===f?i.getFullYear().toString():i.getDate()+"/"+m.gg[i.getMonth()].name+"/"+i.getFullYear()}static#c=this.\u0275fac=function(f){return new(f||o)(a.LFG(x.Ad,8),a.LFG(b.t4))};static#a=this.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac})}return o})();const Z={parse:{dateInput:"LL"},display:{dateInput:"MMM YYYY",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}},O={parse:{dateInput:"LL"},display:{dateInput:"YYYY",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}};let P=(()=>{class o{static#c=this.\u0275fac=function(f){return new(f||o)};static#a=this.\u0275dir=a.lG2({type:o,selectors:[["","monthlyDate",""]],features:[a._Bn([{provide:x._A,useClass:S},{provide:x.sG,useValue:Z}])]})}return o})(),w=(()=>{class o{static#c=this.\u0275fac=function(f){return new(f||o)};static#a=this.\u0275dir=a.lG2({type:o,selectors:[["","yearlyDate",""]],features:[a._Bn([{provide:x._A,useClass:S},{provide:x.sG,useValue:O}])]})}return o})();var h=r(3362),g=r(6082);const d=["monthlyDatepicker"],s=["yearlyDatepicker"],H=function(){return{animationDirection:"forward"}};function _(o,R){if(1&o&&a.GkF(0,9),2&o){a.oxw();const i=a.MAs(19);a.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",a.DdM(2,H))}}const F=function(){return{animationDirection:"backward"}};function v(o,R){if(1&o&&a.GkF(0,9),2&o){a.oxw();const i=a.MAs(19);a.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",a.DdM(2,F))}}const I=function(){return{animationDirection:""}};function U(o,R){if(1&o&&a.GkF(0,9),2&o){a.oxw();const i=a.MAs(19);a.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",a.DdM(2,I))}}function q(o,R){if(1&o&&(a.TgZ(0,"mat-option",17),a._uU(1),a.ALo(2,"titlecase"),a.qZA()),2&o){const i=R.$implicit;a.Q6J("value",i),a.xp6(1),a.hij(" ",a.lcZ(2,2,i)," ")}}function W(o,R){if(1&o){const i=a.EpF();a.TgZ(0,"mat-form-field",18)(1,"input",19,20),a.NdJ("ngModelChange",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.selectedValue=u)}),a.qZA(),a._UZ(3,"mat-datepicker-toggle",21),a.TgZ(4,"mat-datepicker",22,23),a.NdJ("monthSelected",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.onMonthSelected(u))})("dateSelected",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.onMonthSelected(u))}),a.qZA()()}if(2&o){const i=a.MAs(5),f=a.oxw(2);a.xp6(1),a.Q6J("matDatepicker",i)("min",f.first)("max",f.last)("ngModel",f.selectedValue),a.xp6(2),a.Q6J("for",i),a.xp6(1),a.Q6J("startAt",f.selectedValue)}}function K(o,R){if(1&o){const i=a.EpF();a.TgZ(0,"mat-form-field",24)(1,"input",25,26),a.NdJ("ngModelChange",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.selectedValue=u)}),a.qZA(),a._UZ(3,"mat-datepicker-toggle",21),a.TgZ(4,"mat-datepicker",27,28),a.NdJ("yearSelected",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.onYearSelected(u))})("monthSelected",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.onYearSelected(u))})("dateSelected",function(u){a.CHM(i);const C=a.oxw(2);return a.KtG(C.onYearSelected(u))}),a.qZA()()}if(2&o){const i=a.MAs(5),f=a.oxw(2);a.xp6(1),a.Q6J("matDatepicker",i)("min",f.first)("max",f.last)("ngModel",f.selectedValue),a.xp6(2),a.Q6J("for",i),a.xp6(1),a.Q6J("startAt",f.selectedValue)}}function J(o,R){if(1&o){const i=a.EpF();a.TgZ(0,"div",10)(1,"div",11)(2,"mat-select",12),a.NdJ("ngModelChange",function(u){a.CHM(i);const C=a.oxw();return a.KtG(C.selScrollRange=u)})("selectionChange",function(u){a.CHM(i);const C=a.oxw();return a.KtG(C.onRangeChanged(u))}),a.YNc(3,q,3,4,"mat-option",13),a.qZA()(),a.TgZ(4,"div",14),a.YNc(5,W,6,6,"mat-form-field",15),a.YNc(6,K,6,6,"mat-form-field",16),a.qZA()()}if(2&o){const i=a.oxw();a.Q6J("@sliderAnimation",i.animationDirection),a.xp6(2),a.Q6J("ngModel",i.selScrollRange),a.xp6(1),a.Q6J("ngForOf",i.scrollRanges),a.xp6(2),a.Q6J("ngIf",i.selScrollRange===i.scrollRanges[0]),a.xp6(1),a.Q6J("ngIf",i.selScrollRange===i.scrollRanges[1])}}let Q=(()=>{class o{constructor(i){this.logger=i,this.scrollRanges=m.op,this.selScrollRange=this.scrollRanges[0],this.today=new Date(Date.now()),this.first=new Date(2018,0,1,0,0,0),this.last=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0),this.disablePrev=!1,this.disableNext=!0,this.animationDirection="",this.selectedValue=this.last,this.stepChanged=new a.vpe}onRangeChanged(i){this.selScrollRange=i.value,this.onStepChange("LAST")}onMonthSelected(i){this.selectedValue=i,this.onStepChange("SELECTED"),this.monthlyDatepicker.close()}onYearSelected(i){this.selectedValue=i,this.onStepChange("SELECTED"),this.yearlyDatepicker.close()}onStepChange(i){switch(this.logger.info(i),i){case"FIRST":this.animationDirection="backward",this.selectedValue!==this.first&&(this.selectedValue=this.first,this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange}));break;case"PREVIOUS":this.selectedValue=this.selScrollRange===m.op[1]?new Date(this.selectedValue.getFullYear()-1,0,1,0,0,0):new Date(this.selectedValue.getFullYear(),this.selectedValue.getMonth()-1,1,0,0,0),this.animationDirection="backward",this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange});break;case"NEXT":this.selectedValue=this.selScrollRange===m.op[1]?new Date(this.selectedValue.getFullYear()+1,0,1,0,0,0):new Date(this.selectedValue.getFullYear(),this.selectedValue.getMonth()+1,1,0,0,0),this.animationDirection="forward",this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange});break;case"LAST":this.animationDirection="forward",this.selectedValue=this.last,this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange});break;default:this.animationDirection="",this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange})}this.disablePrev=this.selScrollRange===m.op[1]?this.selectedValue.getFullYear()<=this.first.getFullYear():this.selectedValue.getFullYear()<=this.first.getFullYear()&&this.selectedValue.getMonth()<=this.first.getMonth(),this.disableNext=this.selScrollRange===m.op[1]?this.selectedValue.getFullYear()>=this.last.getFullYear():this.selectedValue.getFullYear()>=this.last.getFullYear()&&this.selectedValue.getMonth()>=this.last.getMonth(),this.logger.info(this.disablePrev),this.logger.info(this.disableNext),setTimeout(()=>{this.animationDirection=""},800)}onChartMouseUp(i){"monthlyDate"===i.srcElement.name?this.monthlyDatepicker.open():"yearlyDate"===i.srcElement.name&&this.yearlyDatepicker.open()}static#c=this.\u0275fac=function(f){return new(f||o)(a.Y36(e.mQ))};static#a=this.\u0275cmp=a.Xpm({type:o,selectors:[["rtl-horizontal-scroller"]],viewQuery:function(f,u){if(1&f&&(a.Gf(d,5),a.Gf(s,5)),2&f){let C;a.iGM(C=a.CRH())&&(u.monthlyDatepicker=C.first),a.iGM(C=a.CRH())&&(u.yearlyDatepicker=C.first)}},hostBindings:function(f,u){1&f&&a.NdJ("click",function(Y){return u.onChartMouseUp(Y)})},outputs:{stepChanged:"stepChanged"},decls:20,vars:5,consts:[["fxLayout","row","fxLayoutAlign","space-between stretch","fxFlex","100",1,"padding-gap-x"],["fxLayout","row","fxLayoutAlign","start center","fxFlex","20"],["mat-icon-button","","color","primary","type","button","tabindex","1",1,"pr-4",3,"click"],["mat-icon-button","","color","primary","type","button","tabindex","2",3,"disabled","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["fxLayout","row","fxLayoutAlign","end center","fxFlex","20"],["mat-icon-button","","color","primary","type","button","tabindex","5",1,"pr-4",3,"disabled","click"],["mat-icon-button","","color","primary","type","button","tabindex","6",3,"click"],["controlsPanel",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["fxLayout","row","fxLayoutAlign","center center","fxFlex","58"],["fxFlex","50","fxLayoutAlign","center center","fxLayoutAlign.gt-xs","end center",1,"font-bold-700"],["fxFlex","60","fxFlex.gt-md","30","name","selScrlRange","tabindex","3",1,"font-bold-700",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","50","fxLayout","row","fxLayoutAlign","center center","fxLayoutAlign.gt-xs","start center"],["monthlyDate","","fxLayoutAlign","center center",4,"ngIf"],["yearlyDate","","fxLayoutAlign","center center",4,"ngIf"],[3,"value"],["monthlyDate","","fxLayoutAlign","center center"],["matInput","","name","monthlyDate","tabindex","4","readonly","",3,"matDatepicker","min","max","ngModel","ngModelChange"],["monthlyDt","ngModel"],["matSuffix","",3,"for"],["startView","year",3,"startAt","monthSelected","dateSelected"],["monthlyDatepicker",""],["yearlyDate","","fxLayoutAlign","center center"],["matInput","","name","yearlyDate","tabindex","4","readonly","",3,"matDatepicker","min","max","ngModel","ngModelChange"],["yearlyDt","ngModel"],["startView","multi-year",3,"startAt","yearSelected","monthSelected","dateSelected"],["yearlyDatepicker",""]],template:function(f,u){1&f&&(a.TgZ(0,"div",0)(1,"div",1)(2,"button",2),a.NdJ("click",function(){return u.onStepChange("FIRST")}),a.TgZ(3,"mat-icon"),a._uU(4,"skip_previous"),a.qZA()(),a.TgZ(5,"button",3),a.NdJ("click",function(){return u.onStepChange("PREVIOUS")}),a.TgZ(6,"mat-icon"),a._uU(7,"navigate_before"),a.qZA()()(),a.YNc(8,_,1,3,"ng-container",4),a.YNc(9,v,1,3,"ng-container",4),a.YNc(10,U,1,3,"ng-container",4),a.TgZ(11,"div",5)(12,"button",6),a.NdJ("click",function(){return u.onStepChange("NEXT")}),a.TgZ(13,"mat-icon"),a._uU(14,"navigate_next"),a.qZA()(),a.TgZ(15,"button",7),a.NdJ("click",function(){return u.onStepChange("LAST")}),a.TgZ(16,"mat-icon"),a._uU(17,"skip_next"),a.qZA()()()(),a.YNc(18,J,7,5,"ng-template",null,8,a.W1O)),2&f&&(a.xp6(5),a.Q6J("disabled",u.disablePrev),a.xp6(3),a.Q6J("ngIf","forward"===u.animationDirection),a.xp6(1),a.Q6J("ngIf","backward"===u.animationDirection),a.xp6(1),a.Q6J("ngIf",""===u.animationDirection),a.xp6(2),a.Q6J("disabled",u.disableNext))},dependencies:[t.sg,t.O5,t.tP,A.Fj,A.JJ,A.On,E.xw,E.Wh,E.yH,N.RK,V.Mq,V.hl,V.nW,c.Hw,B.Nt,D.KE,D.R9,y.gD,x.ey,P,w,h.F,g.q,t.rS],data:{animation:[T.l]}})}return o})()},5362:(X,k,r)=>{r.d(k,{g:()=>c2});var a=r(1476),T=r(3566),m=r(5313),e=r(2154),t=r(9103),A=r(8645),E=r(9773),N=r(4818),V=r(8525),c=r(5879),B=r(6339),D=r(4221),y=r(6814),x=r(2995),b=r(6223),S=r(3814),Z=r(7509),O=r(2296),P=r(2032),w=r(5683),h=r(3680),g=r(2159);function d(l,M){if(1&l&&(c.TgZ(0,"mat-option",30),c._uU(1),c.qZA()),2&l){const n=M.$implicit,z=c.oxw();c.Q6J("value",n),c.xp6(1),c.Oqu(z.getLabel(n))}}function s(l,M){1&l&&(c.TgZ(0,"th",31),c._uU(1,"Date"),c.qZA())}function H(l,M){if(1&l&&(c.TgZ(0,"td",32),c._uU(1),c.ALo(2,"date"),c.qZA()),2&l){const n=M.$implicit,z=c.oxw();c.xp6(1),c.Oqu(c.xi3(2,1,null==n?null:n.date,z.dataRange===z.scrollRanges[1]?"MMM/yyyy":"dd/MMM/yyyy"))}}function _(l,M){1&l&&(c.TgZ(0,"th",33),c._uU(1,"Amount Paid (Sats)"),c.qZA())}function F(l,M){if(1&l&&(c.TgZ(0,"td",32)(1,"span",34),c._uU(2),c.ALo(3,"number"),c.qZA()()),2&l){const n=M.$implicit;c.xp6(2),c.Oqu(c.xi3(3,1,null==n?null:n.amount_paid,"1.0-2"))}}function v(l,M){1&l&&(c.TgZ(0,"th",33),c._uU(1,"# Payments"),c.qZA())}function I(l,M){if(1&l&&(c.TgZ(0,"td",32)(1,"span",34),c._uU(2),c.ALo(3,"number"),c.qZA()()),2&l){const n=M.$implicit;c.xp6(2),c.Oqu(c.lcZ(3,1,null==n?null:n.num_payments))}}function U(l,M){1&l&&(c.TgZ(0,"th",33),c._uU(1,"Amount Received (Sats)"),c.qZA())}function q(l,M){if(1&l&&(c.TgZ(0,"td",32)(1,"span",34),c._uU(2),c.ALo(3,"number"),c.qZA()()),2&l){const n=M.$implicit;c.xp6(2),c.Oqu(c.xi3(3,1,null==n?null:n.amount_received,"1.0-2"))}}function W(l,M){1&l&&(c.TgZ(0,"th",33),c._uU(1,"# Invoices"),c.qZA())}function K(l,M){if(1&l&&(c.TgZ(0,"td",32)(1,"span",34),c._uU(2),c.ALo(3,"number"),c.qZA()()),2&l){const n=M.$implicit;c.xp6(2),c.Oqu(c.lcZ(3,1,null==n?null:n.num_invoices))}}function J(l,M){if(1&l){const n=c.EpF();c.TgZ(0,"th",35)(1,"div",36)(2,"mat-select",37),c._UZ(3,"mat-select-trigger"),c.TgZ(4,"mat-option",38),c.NdJ("click",function(){c.CHM(n);const p=c.oxw();return c.KtG(p.onDownloadCSV())}),c._uU(5,"Download CSV"),c.qZA()()()()}}function Q(l,M){if(1&l){const n=c.EpF();c.TgZ(0,"td",39)(1,"button",40),c.NdJ("click",function(){const L=c.CHM(n).$implicit,G=c.oxw();return c.KtG(G.onTransactionClick(L))}),c._uU(2,"View Info"),c.qZA()()}}function o(l,M){1&l&&(c.TgZ(0,"p"),c._uU(1,"No transaction available."),c.qZA())}function R(l,M){if(1&l&&(c.TgZ(0,"td",41),c.YNc(1,o,2,0,"p",42),c.qZA()),2&l){const n=c.oxw();c.xp6(1),c.Q6J("ngIf",!(null!=n.transactions&&n.transactions.data)||(null==n.transactions||null==n.transactions.data?null:n.transactions.data.length)<1)}}const i=function(l){return{"display-none":l}};function f(l,M){if(1&l&&c._UZ(0,"tr",43),2&l){const n=c.oxw();c.Q6J("ngClass",c.VKq(1,i,(null==n.transactions?null:n.transactions.data)&&(null==n.transactions||null==n.transactions.data?null:n.transactions.data.length)>0))}}function u(l,M){1&l&&c._UZ(0,"tr",44)}function C(l,M){1&l&&c._UZ(0,"tr",45)}const Y=function(){return["all"]},$=function(){return["no_transaction"]};let c2=(()=>{class l{constructor(n,z,p,L){this.commonService=n,this.store=z,this.datePipe=p,this.camelCaseWithReplace=L,this.dataRange=e.op[0],this.dataList=[],this.selFilter="",this.displayedColumns=["date","amount_paid","num_payments","amount_received","num_invoices"],this.tableSetting={tableId:"transactions",recordsPerPage:e.IV,sortBy:"date",sortOrder:e.Pi.DESCENDING},this.nodePageDefs=e.hG,this.selFilterBy="all",this.timezoneOffset=60*new Date(Date.now()).getTimezoneOffset(),this.scrollRanges=e.op,this.transactions=new m.by([]),this.pageSize=e.IV,this.pageSizeOptions=e.TJ,this.screenSize="",this.screenSizeEnum=e.cu,this.unSubs=[new A.x,new A.x],this.screenSize=this.commonService.getScreenSize()}ngOnInit(){this.store.select(N.dT).pipe((0,E.R)(this.unSubs[0])).subscribe(n=>{this.nodePageDefs="CLN"===n.lnImplementation?e.At:"ECL"===n.lnImplementation?e.Xk:e.hG}),this.pageSize=this.tableSetting.recordsPerPage?+this.tableSetting.recordsPerPage:e.IV,this.dataList&&this.dataList.length>0&&this.loadTransactionsTable(this.dataList)}ngAfterViewInit(){setTimeout(()=>{this.setTableWidgets()},0)}ngOnChanges(n){n.dataList&&!n.dataList.firstChange&&(this.pageSize=this.tableSetting.recordsPerPage?+this.tableSetting.recordsPerPage:e.IV,this.loadTransactionsTable(this.dataList)),n.selFilter&&!n.selFilter.firstChange&&(this.selFilterBy="all",this.applyFilter())}onTransactionClick(n){const z=[[{key:"date",value:this.datePipe.transform(n.date,this.dataRange===e.op[1]?"MMM/yyyy":"dd/MMM/yyyy"),title:"Date",width:100,type:e.Gi.DATE}],[{key:"amount_paid",value:Math.round(n.amount_paid),title:"Amount Paid (Sats)",width:50,type:e.Gi.NUMBER},{key:"num_payments",value:n.num_payments,title:"# Payments",width:50,type:e.Gi.NUMBER}],[{key:"amount_received",value:Math.round(n.amount_received),title:"Amount Received (Sats)",width:50,type:e.Gi.NUMBER},{key:"num_invoices",value:n.num_invoices,title:"# Invoices",width:50,type:e.Gi.NUMBER}]];this.store.dispatch((0,t.qR)({payload:{data:{type:e.n_.INFORMATION,alertTitle:"Transaction Summary",message:z}}}))}applyFilter(){this.transactions&&(this.transactions.filter=this.selFilter.trim().toLowerCase())}getLabel(n){const z=this.nodePageDefs.reports[this.tableSetting.tableId].allowedColumns.find(p=>p.column===n);return z?z.label?z.label:this.camelCaseWithReplace.transform(z.column,"_"):this.commonService.titleCase(n)}setFilterPredicate(){this.transactions.filterPredicate=(n,z)=>{let p="";switch(this.selFilterBy){case"all":p=(n.date?(this.datePipe.transform(n.date,"dd/MMM")+"/"+n.date.getFullYear()).toLowerCase():"")+JSON.stringify(n).toLowerCase();break;case"date":p=this.datePipe.transform(new Date(n[this.selFilterBy]||0),this.dataRange===this.scrollRanges[1]?"MMM/yyyy":"dd/MMM/yyyy")?.toLowerCase()||"";break;default:p=typeof n[this.selFilterBy]>"u"?"":"string"==typeof n[this.selFilterBy]?n[this.selFilterBy].toLowerCase():"boolean"==typeof n[this.selFilterBy]?n[this.selFilterBy]?"yes":"no":n[this.selFilterBy].toString()}return p.includes(z)}}loadTransactionsTable(n){this.transactions=new m.by(n?[...n]:[]),this.setTableWidgets()}setTableWidgets(){this.transactions&&this.transactions.data&&this.transactions.data.length>0&&(this.transactions.sort=this.sort,this.transactions.sortingDataAccessor=(n,z)=>n[z]&&isNaN(n[z])?n[z].toLocaleLowerCase():n[z]?+n[z]:null,this.transactions.paginator=this.paginator,this.setFilterPredicate(),this.applyFilter())}onDownloadCSV(){this.transactions.data&&this.transactions.data.length>0&&this.commonService.downloadFile(this.dataList,"Transactions-report-"+this.dataRange.toLowerCase())}ngOnDestroy(){this.unSubs.forEach(n=>{n.next(),n.complete()})}static#c=this.\u0275fac=function(z){return new(z||l)(c.Y36(B.v),c.Y36(D.yh),c.Y36(y.uU),c.Y36(x.D3))};static#a=this.\u0275cmp=c.Xpm({type:l,selectors:[["rtl-transactions-report-table"]],viewQuery:function(z,p){if(1&z&&(c.Gf(T.YE,5),c.Gf(a.NW,5)),2&z){let L;c.iGM(L=c.CRH())&&(p.sort=L.first),c.iGM(L=c.CRH())&&(p.paginator=L.first)}},inputs:{dataRange:"dataRange",dataList:"dataList",selFilter:"selFilter",displayedColumns:"displayedColumns",tableSetting:"tableSetting"},features:[c._Bn([{provide:V.PG,useValue:{overlayPanelClass:"rtl-select-overlay"}},{provide:a.ye,useValue:(0,e.pt)("Transactions")}]),c.TTD],decls:43,vars:14,consts:[["fxLayout","column","fxFlex","100","fxLayoutAlign","space-between stretch",1,"padding-gap-x"],["fxLayout","column","fxLayoutAlign","start stretch"],["fxLayout","column","fxLayoutAlign","start stretch","fxLayout.gt-sm","row wrap",1,"page-sub-title-container","mt-1"],["fxFlex","70"],["fxFlex.gt-xs","30","fxLayoutAlign.gt-xs","space-between center","fxLayout","row","fxLayoutAlign","space-between stretch"],["fxLayout","column","fxFlex","49"],["tabindex","1","name","filterBy",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","filter",3,"ngModel","ngModelChange","input","keyup"],["fxLayout","row","fxLayoutAlign","start start"],["fxLayout","column","fxFlex","100",1,"table-container",3,"perfectScrollbar"],["mat-table","","fxFlex","100","matSort","",1,"overflow-auto",3,"matSortActive","matSortDirection","dataSource"],["table",""],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount_paid"],["mat-header-cell","","mat-sort-header","","arrowPosition","before",4,"matHeaderCellDef"],["matColumnDef","num_payments"],["matColumnDef","amount_received"],["matColumnDef","num_invoices"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","fxLayoutAlign","end center",4,"matCellDef"],["matColumnDef","no_transaction"],["mat-footer-cell","","colspan","4",4,"matFooterCellDef"],["mat-footer-row","",3,"ngClass",4,"matFooterRowDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"mb-1",3,"pageSize","pageSizeOptions","showFirstLastButtons"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","","arrowPosition","before"],["fxLayoutAlign","end center"],["mat-header-cell",""],["fxLayoutAlign","center center",1,"bordered-box","table-actions-select"],["placeholder","Actions","tabindex","1",1,"mr-0"],[3,"click"],["mat-cell","","fxLayoutAlign","end center"],["mat-stroked-button","","color","primary","type","button","tabindex","4",1,"table-actions-button",3,"click"],["mat-footer-cell","","colspan","4"],[4,"ngIf"],["mat-footer-row","",3,"ngClass"],["mat-header-row",""],["mat-row",""]],template:function(z,p){1&z&&(c.TgZ(0,"div",0)(1,"div",1)(2,"div",2),c._UZ(3,"div",3),c.TgZ(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),c._uU(7,"Filter By"),c.qZA(),c.TgZ(8,"mat-select",6),c.NdJ("ngModelChange",function(G){return p.selFilterBy=G})("selectionChange",function(){return p.selFilter="",p.applyFilter()}),c.TgZ(9,"perfect-scrollbar"),c.YNc(10,d,2,2,"mat-option",7),c.qZA()()(),c.TgZ(11,"mat-form-field",5)(12,"mat-label"),c._uU(13,"Filter"),c.qZA(),c.TgZ(14,"input",8),c.NdJ("ngModelChange",function(G){return p.selFilter=G})("input",function(){return p.applyFilter()})("keyup",function(){return p.applyFilter()}),c.qZA()()()(),c.TgZ(15,"div",9)(16,"div",10)(17,"table",11,12),c.ynx(19,13),c.YNc(20,s,2,0,"th",14),c.YNc(21,H,3,4,"td",15),c.BQk(),c.ynx(22,16),c.YNc(23,_,2,0,"th",17),c.YNc(24,F,4,4,"td",15),c.BQk(),c.ynx(25,18),c.YNc(26,v,2,0,"th",17),c.YNc(27,I,4,3,"td",15),c.BQk(),c.ynx(28,19),c.YNc(29,U,2,0,"th",17),c.YNc(30,q,4,4,"td",15),c.BQk(),c.ynx(31,20),c.YNc(32,W,2,0,"th",17),c.YNc(33,K,4,3,"td",15),c.BQk(),c.ynx(34,21),c.YNc(35,J,6,0,"th",22),c.YNc(36,Q,3,0,"td",23),c.BQk(),c.ynx(37,24),c.YNc(38,R,2,1,"td",25),c.BQk(),c.YNc(39,f,1,3,"tr",26),c.YNc(40,u,1,0,"tr",27),c.YNc(41,C,1,0,"tr",28),c.qZA(),c._UZ(42,"mat-paginator",29),c.qZA()()()()),2&z&&(c.xp6(8),c.Q6J("ngModel",p.selFilterBy),c.xp6(2),c.Q6J("ngForOf",c.DdM(12,Y).concat(p.displayedColumns.slice(0,-1))),c.xp6(4),c.Q6J("ngModel",p.selFilter),c.xp6(3),c.Q6J("matSortActive",p.tableSetting.sortBy)("matSortDirection",p.tableSetting.sortOrder)("dataSource",p.transactions),c.xp6(22),c.Q6J("matFooterRowDef",c.DdM(13,$)),c.xp6(1),c.Q6J("matHeaderRowDef",p.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",p.displayedColumns),c.xp6(1),c.Q6J("pageSize",p.pageSize)("pageSizeOptions",p.pageSizeOptions)("showFirstLastButtons",p.screenSize!==p.screenSizeEnum.XS))},dependencies:[y.mk,y.sg,y.O5,b.Fj,b.JJ,b.On,S.xw,S.Wh,S.yH,Z.oO,O.lW,P.Nt,w.KE,w.hX,V.gD,V.$L,h.ey,T.YE,T.nU,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.mD,m.Ke,m.ge,m.ev,m.yh,m.XQ,m.Gk,m.Q2,a.NW,g.Vv,g.$V,y.JJ,y.uU]})}return l})()},1449:(X,k,r)=>{r.d(k,{KfU:()=>P2,ctA:()=>r1});var P2={prefix:"far",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},r1={prefix:"far",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]}}}]);