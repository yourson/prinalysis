webpackJsonp([6],{372:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(514);a.d(e,"default",function(){return o.a})},379:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modal-backdrop",data:()=>({})}},380:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(391);a.d(e,"default",function(){return o.a})},381:function(t,e,a){(t.exports=a(369)(!1)).push([t.i,".left[data-v-000b0ab1]{float:left}.right[data-v-000b0ab1]{float:right}.gray[data-v-000b0ab1]{color:#fff;background-color:#999}.orange[data-v-000b0ab1]{color:#fff;background-color:#f90}.fade-enter[data-v-000b0ab1],.fade-leave-to[data-v-000b0ab1]{opacity:0}.fade-enter-active[data-v-000b0ab1],.fade-leave-active[data-v-000b0ab1]{transition:opacity .2s ease}.fade-enter-to[data-v-000b0ab1],.fade-leave[data-v-000b0ab1]{opacity:1}.float-fade-enter[data-v-000b0ab1]{opacity:.1;-webkit-transform:translateY(20px);transform:translateY(20px)}.float-fade-enter-active[data-v-000b0ab1]{transition:all .2s ease-out}.float-fade-enter-to[data-v-000b0ab1]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.left-fade-enter[data-v-000b0ab1],.left-fade-leave-to[data-v-000b0ab1]{opacity:.1;-webkit-transform:translateX(20px);transform:translateX(20px)}.left-fade-enter-active[data-v-000b0ab1],.left-fade-leave-active[data-v-000b0ab1]{transition:all .3s ease-out}.left-fade-enter-to[data-v-000b0ab1]{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.zoom-in[data-v-000b0ab1]{-webkit-animation:zoom-in-data-v-000b0ab1 .2s ease-out;animation:zoom-in-data-v-000b0ab1 .2s ease-out}@-webkit-keyframes fade-in-data-v-000b0ab1{0%{opacity:.1}to{opacity:1}}@keyframes fade-in-data-v-000b0ab1{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes flicker-data-v-000b0ab1{0%{opacity:1}50%{opacity:.8}to{opacity:1}}@keyframes flicker-data-v-000b0ab1{0%{opacity:1}50%{opacity:.8}to{opacity:1}}@-webkit-keyframes zoom-in-data-v-000b0ab1{0%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes zoom-in-data-v-000b0ab1{0%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes spin-bounce-data-v-000b0ab1{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes spin-bounce-data-v-000b0ab1{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.modal-wrapper[data-v-000b0ab1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow-x:hidden;overflow-y:autoi;position:fixed;top:0;left:0;z-index:20;width:100%;height:100%;transition:opacity .3s ease-out}.modal-wrapper .modal-backdrop[data-v-000b0ab1]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:0;background-color:rgba(0,0,0,.65);transition:background-color .3s ease-out}.modal-wrapper .modal-dialog[data-v-000b0ab1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;z-index:1;margin-right:auto;margin-left:auto;width:100%;height:100%;transition:height .8s ease}",""])},382:function(t,e,a){var o=a(381);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(370)("033893f1",o,!0)},391:function(t,e,a){"use strict";var o=a(379),n=a.n(o),i=a(392),r=function(t){a(382)},s=a(20)(n.a,i.a,!1,r,"data-v-000b0ab1",null);e.a=s.exports},392:function(t,e,a){"use strict";var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-backdrop"}),this._v(" "),e("div",{staticClass:"modal-dialog"},[this._t("default")],2)])])},staticRenderFns:[]};e.a=o},431:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(a(24)),i=o(a(9)),r=a(31);e.default={name:"captcha-card",props:{userform:Object,back:Function},data(){return{header:{title:"验证手机",subtitle:"请输入你收到的 6 位数验证码"},form:(0,i.default)({},this.userform),awaitCaptcha:0,rules:{captcha:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:6,max:6,message:"请输入 6 位验证码",trigger:"blur"}]}}},mounted(){this.accept()},methods:{accept(){var t=this;return(0,n.default)(function*(){(0,r.requireSMS)(t.form),t.awaitCaptcha=59;let e=setInterval(function(){t.awaitCaptcha<=0?clearInterval(e):t.awaitCaptcha--},1e3)})()},signup(){var t=this;return(0,n.default)(function*(){t.$refs.captchaForm.validate(function(t){if(!t)throw new Error("signup form not validated")});let e=yield(0,r.signup)(t.form);t.$emit("signed",e)})()}}}},432:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(a(24)),i=o(a(64)),r=o(a(9)),s=o(a(222)),l=a(42),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a(32)),f=a(31),d=o(a(380)),p=o(a(513));const u=[{code:"+86",name:"中国",abbr:"CN"},{code:"+1",name:"美国",abbr:"US"},{code:"+81",name:"日本",abbr:"JP"},{code:"+886",name:"中国台湾",abbr:"TW"}],b={login:{title:"登录知书",subtitle:"获取来自世界的知识和力量"},signup:{title:"加入知书",subtitle:"与世界探讨知识的绚丽多彩"},accept:{title:"验证手机",subtitle:"请输入你收到的 6 位数验证码"}};e.default={name:"login-card",components:{modalBackdrop:d.default,captchaCard:p.default},data:()=>({visible:!1,mode:"login",header:b,form:{username:"",password:""},syssee:!1,registerable:!0,acceptCaptcha:!1,country:{code:"+86",name:"中国"},countries:u,rules:{username:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^[0-9]{11}$/,message:"请输入正确长度的手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:20,message:"请输入8-20位密码",trigger:"blur"}],nickname:[{required:!0,message:"请输入姓名",trigger:"blur"},{max:20,message:"名字不能超过20位哦",trigger:"blur"}]},result:{resolve(){},reject(){}}}),computed:{prefix:{get(){return(0,s.default)(this.country)},set(t){this.country=JSON.parse(t)}},prefixWidth(){let{name:t,code:e}=this.country;return 16*t.length+16*e.length/2+16},fullaccount(){return`${this.country.code}${this.form.username}`},requestForm(){return(0,r.default)({},this.form,{code:this.country.code})}},methods:(0,r.default)({},(0,l.mapMutations)("user",[c.SET_USER]),{open(){return this.visible=!0,new i.default((t,e)=>{this.result={resolve:t,reject:e}})},close(){this.result.reject(),this.visible=!1,this.$nextTick(this.$destroy)},loginMode(){this.mode="login"},signupMode(){this.mode="signup"},backLogin(){this.acceptCaptcha=!1},login(){var t=this;return(0,n.default)(function*(){t.$refs.loginForm.validate(function(t){if(!t)throw new Error("login form not validated")});let e=yield(0,f.login)(t.requestForm);t[c.SET_USER](e),t.result.resolve("logined"),t.close()})()},isRegisted(){var t=this;return(0,n.default)(function*(){try{yield(0,f.isRegisterable)(t.requestForm)}catch(e){throw t.registerable=!1,e}})()},accept(){var t=this;return(0,n.default)(function*(){t.$refs.loginForm.validate(function(t){if(!t)throw new Error("captcha form not validated")}),yield t.isRegisted(),t.acceptCaptcha=!0})()},onSigned(t){this[c.SET_USER](t),this.result.resolve("logined"),this.close()}})}},467:function(t,e,a){(t.exports=a(369)(!1)).push([t.i,'.left{float:left}.right{float:right}.gray{color:#fff;background-color:#999}.orange{color:#fff;background-color:#f90}.fade-enter,.fade-leave-to{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .2s ease}.fade-enter-to,.fade-leave{opacity:1}.float-fade-enter{opacity:.1;-webkit-transform:translateY(20px);transform:translateY(20px)}.float-fade-enter-active{transition:all .2s ease-out}.float-fade-enter-to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.left-fade-enter,.left-fade-leave-to{opacity:.1;-webkit-transform:translateX(20px);transform:translateX(20px)}.left-fade-enter-active,.left-fade-leave-active{transition:all .3s ease-out}.left-fade-enter-to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.zoom-in{-webkit-animation:zoom-in .2s ease-out;animation:zoom-in .2s ease-out}@-webkit-keyframes fade-in{0%{opacity:.1}to{opacity:1}}@keyframes fade-in{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes flicker{0%{opacity:1}50%{opacity:.8}to{opacity:1}}@keyframes flicker{0%{opacity:1}50%{opacity:.8}to{opacity:1}}@-webkit-keyframes zoom-in{0%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes zoom-in{0%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes spin-bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes spin-bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.login-modal{position:absolute;width:400px;max-height:calc(100vh - 48px);outline:0;box-shadow:0 5px 20px 0 rgba(34,34,34,.5)}.login-modal .login-inner{overflow:auto;border-radius:2px;background:#fff}.login-modal .login-inner .close{position:absolute;top:8px;right:-60px;border:none;padding:12px;font-size:18px;color:#ddd;background-color:transparent}.login-modal .login-inner .close:hover{color:#ddd}.login-modal .login-inner .login-content{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:0;padding:0 24px 32px;line-height:1.7;opacity:1}.login-modal .login-inner .login-content .plain-button{border:none;border-radius:0;padding:0;text-align:center;color:#8590a6;background-color:transparent}.login-header{margin:0 -24px;padding:24px 0 28px;background:#0f88eb}.login-header .login-header-title{font-size:24px;text-align:center;color:#fff}.login-header .login-header-subTitle{margin-top:4px;font-size:14px;text-align:center;color:#fff}.login-flow{overflow:hidden;margin-top:0}.login-flow .flow-account{margin-top:16px;margin-bottom:0}.login-flow .flow-nickname,.login-flow .flow-password{position:relative;margin-top:12px;margin-bottom:0}.login-flow .flow-nickname .password input.el-input__inner,.login-flow .flow-nickname nickname input.el-input__inner,.login-flow .flow-password .password input.el-input__inner,.login-flow .flow-password nickname input.el-input__inner{font-size:24px;letter-spacing:1.8px}.login-flow .endMask{position:absolute;right:0;margin-top:-15%;padding:10px 0 0 10px;height:90%;font-size:14px;text-align:right;color:rgba(255,0,0,.8);background:#fff;opacity:1;cursor:text}.login-flow .endMask:before{position:absolute;top:0;left:-16px;width:16px;height:46px;background:linear-gradient(90deg,transparent,#fff);content:""}.login-flow .el-input input.el-input__inner{border:none;border-bottom:1px solid #e7eaf1;border-radius:0;padding:0 3px;height:48px;font-size:14px;font-weight:700;line-height:24px;text-align:start;background:none}.login-flow .el-input .el-input-group__append,.login-flow .el-input .el-input-group__prepend{padding:0;border:none;border-radius:0;background:none}.login-flow .el-input .el-input-group__prepend .el-select{margin:0}.login-flow .el-input .el-input-group__prepend .el-select .el-input__icon{width:auto}.login-flow .el-input .el-input-group__prepend .el-select .el-input__inner:focus{box-shadow:none}.login-flow .el-input .el-input-group__append,.login-flow .el-input .el-input-group__prepend .el-select:hover .el-input__inner{border-bottom:1px solid #e7eaf1}.login-flow .el-input .el-input-group__append .el-button{margin:0}.login-flow .el-input .el-input-group__append .syssee{font-size:16px}.login-flow .el-form-item.is-error .el-input__inner{border-color:#e7eaf1}.login-flow .login-options{margin-top:16px}.login-flow .el-button.switch-type,.login-flow .forget-pass{display:inline-block;border:none;border-radius:0;padding:0;height:auto;font-size:14px;line-height:inherit;text-align:center;color:#175199;background:none}.login-flow .forget-pass{float:right;color:#8590a6}.login-flow .submit{margin-top:32px;border-radius:3px;padding:0;width:100%;font-size:14px;line-height:32px;color:#fff;background:#0f88eb}.login-flow .login-footer{margin-top:22px;text-align:center}.login-flow .login-footer .footer-separate,.login-flow .login-footer .footer-text{display:inline-block;font-size:15px;vertical-align:middle;color:#8590a6}.login-flow .login-footer .footer-separate{width:6%}',""])},475:function(t,e,a){(t.exports=a(369)(!1)).push([t.i,".left[data-v-7b495dae]{float:left}.right[data-v-7b495dae]{float:right}.gray[data-v-7b495dae]{color:#fff;background-color:#999}.orange[data-v-7b495dae]{color:#fff;background-color:#f90}.fade-enter[data-v-7b495dae],.fade-leave-to[data-v-7b495dae]{opacity:0}.fade-enter-active[data-v-7b495dae],.fade-leave-active[data-v-7b495dae]{transition:opacity .2s ease}.fade-enter-to[data-v-7b495dae],.fade-leave[data-v-7b495dae]{opacity:1}.float-fade-enter[data-v-7b495dae]{opacity:.1;-webkit-transform:translateY(20px);transform:translateY(20px)}.float-fade-enter-active[data-v-7b495dae]{transition:all .2s ease-out}.float-fade-enter-to[data-v-7b495dae]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.left-fade-enter[data-v-7b495dae],.left-fade-leave-to[data-v-7b495dae]{opacity:.1;-webkit-transform:translateX(20px);transform:translateX(20px)}.left-fade-enter-active[data-v-7b495dae],.left-fade-leave-active[data-v-7b495dae]{transition:all .3s ease-out}.left-fade-enter-to[data-v-7b495dae]{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.zoom-in[data-v-7b495dae]{-webkit-animation:zoom-in-data-v-7b495dae .2s ease-out;animation:zoom-in-data-v-7b495dae .2s ease-out}@-webkit-keyframes fade-in-data-v-7b495dae{0%{opacity:.1}to{opacity:1}}@keyframes fade-in-data-v-7b495dae{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes flicker-data-v-7b495dae{0%{opacity:1}50%{opacity:.8}to{opacity:1}}@keyframes flicker-data-v-7b495dae{0%{opacity:1}50%{opacity:.8}to{opacity:1}}@-webkit-keyframes zoom-in-data-v-7b495dae{0%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes zoom-in-data-v-7b495dae{0%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes spin-bounce-data-v-7b495dae{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes spin-bounce-data-v-7b495dae{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.accept-content[data-v-7b495dae]{margin-top:24px}.accept-content .accept-container[data-v-7b495dae]{box-shadow:0 -1px 0 0 #eee}.accept-content .accept-account[data-v-7b495dae]{margin-top:24px}.backButton[data-v-7b495dae]{position:relative;top:28px;height:17px}.accept-header[data-v-7b495dae]{padding-top:23px;text-align:center}.accept-header .accept-title[data-v-7b495dae]{font-size:24px;color:#333}.accept-header .accept-subtitle[data-v-7b495dae]{font-size:14px;color:#8590a6}.await-time[data-v-7b495dae]{font-size:14px}.accept-footer-container[data-v-7b495dae]{padding:0 58px;text-align:center}.accept-footer-container .enter[data-v-7b495dae]{margin:72px auto 0}",""])},489:function(t,e,a){var o=a(467);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(370)("6c72b26c",o,!0)},497:function(t,e,a){var o=a(475);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(370)("38ff094a",o,!0)},513:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(431),n=a.n(o),i=a(551),r=function(t){a(497)},s=a(20)(n.a,i.a,!1,r,"data-v-7b495dae",null);e.default=s.exports},514:function(t,e,a){"use strict";var o=a(432),n=a.n(o),i=a(541),r=function(t){a(489)},s=a(20)(n.a,i.a,!1,r,null,null);e.a=s.exports},541:function(t,e,a){"use strict";var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("modal-backdrop",[a("div",{staticClass:"login-modal",attrs:{tabindex:"0"}},[a("div",{staticClass:"login-inner"},[a("el-button",{staticClass:"close",attrs:{icon:"close"},on:{click:t.close}}),t._v(" "),t.acceptCaptcha?a("captcha-card",{attrs:{userform:t.requestForm,back:t.backLogin},on:{signed:t.onSigned}}):a("el-form",{ref:"loginForm",staticClass:"login-content",attrs:{rules:t.rules,model:t.form}},[a("header",{staticClass:"login-header"},[a("div",{staticClass:"login-header-title"},[t._v(t._s(t.header[t.mode].title))]),t._v(" "),a("div",{staticClass:"login-header-subTitle"},[t._v(t._s(t.header[t.mode].subtitle))])]),t._v(" "),a("div",{staticClass:"login-flow"},[a("el-form-item",{staticClass:"flow-account",attrs:{prop:"username"}},[a("el-input",{staticClass:"account",attrs:{placeholder:"请输入手机号"},on:{focus:function(e){t.registerable=!0}},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[a("el-select",{style:{width:t.prefixWidth+"px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.prefix,callback:function(e){t.prefix=e},expression:"prefix"}},t._l(t.countries,function(t){var e=t.code,o=t.name;return a("el-option",{key:e,attrs:{label:""+o+e,value:JSON.stringify({code:e,name:o})}})}))],1),t._v(" "),"login"==t.mode||t.registerable?t._e():a("div",{staticClass:"endMask"},[a("span",{staticClass:"await-time"},[t._v("该手机号已注册 · ")]),t._v(" "),a("el-button",{staticClass:"switch-type",on:{click:t.loginMode}},[t._v("直接登录")])],1)],1),t._v(" "),a("el-form-item",{staticClass:"flow-password",attrs:{prop:"password"}},[a("el-input",{class:{password:t.form.password&&!t.syssee},attrs:{placeholder:"密码",type:t.syssee?"text":"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[a("el-button",{staticClass:"plain-button syssee",attrs:{slot:"append",icon:t.syssee?"fa-eye":"fa-eye-slash"},on:{click:function(e){t.syssee=!t.syssee}},slot:"append"})],1)],1),t._v(" "),"login"==t.mode?[a("div",{staticClass:"login-options"},[a("el-button",{staticClass:"switch-type"},[t._v("手机验证码登录")]),t._v(" "),a("el-button",{staticClass:"forget-pass"},[t._v("忘记密码？")])],1),t._v(" "),a("el-button",{staticClass:"submit",on:{click:t.login}},[t._v("登录")]),t._v(" "),a("footer",{staticClass:"login-footer"},[a("span",{staticClass:"footer-text"},[a("el-button",{staticClass:"plain-button",on:{click:t.signupMode}},[t._v("新用户注册")])],1),t._v(" "),a("span",{staticClass:"footer-separate"},[t._v(" · ")]),t._v(" "),a("span",{staticClass:"footer-text"},[a("el-button",{staticClass:"plain-button",on:{click:t.close}},[t._v("二维码登录")])],1),t._v(" "),a("span",{staticClass:"footer-separate"},[t._v(" · ")]),t._v(" "),a("span",{staticClass:"footer-text"},[a("el-button",{staticClass:"plain-button",on:{click:t.close}},[t._v("社交账号登录")])],1)])]:[a("el-form-item",{staticClass:"flow-nickname",attrs:{prop:"nickname"}},[a("el-input",{staticClass:"nickname",attrs:{placeholder:"姓名"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),t._v(" "),a("el-button",{staticClass:"submit",on:{click:t.accept}},[t._v("注册")]),t._v(" "),a("footer",{staticClass:"login-footer"},[a("div",{staticClass:"left"},[a("span",{staticClass:"footer-text"},[t._v("注册即代表同意")]),t._v(" "),a("span",{staticClass:"footer-text"},[a("el-button",{staticClass:"plain-button",on:{click:t.close}},[t._v("《知书协议》")])],1)]),t._v(" "),a("div",{staticClass:"right"},[a("span",{staticClass:"footer-text"},[t._v("已有账号?")]),t._v(" "),a("span",{staticClass:"footer-text"},[a("el-button",{staticClass:"switch-type",on:{click:t.loginMode}},[t._v("登录")])],1)])])]],2)])],1)])]):t._e()},staticRenderFns:[]};e.a=o},551:function(t,e,a){"use strict";var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"captchaForm",staticClass:"login-content accept-content",attrs:{rules:t.rules,model:t.form}},[a("div",{staticClass:"accept-container"},[a("el-button",{staticClass:"plain-button backButton",attrs:{icon:"arrow-left"},on:{click:t.back}}),t._v(" "),a("header",{staticClass:"accept-header"},[a("div",{staticClass:"accept-title"},[t._v(t._s(t.header.title))]),t._v(" "),a("div",{staticClass:"accept-subtitle"},[t._v(t._s(t.header.subtitle))])]),t._v(" "),a("div",{staticClass:"login-flow"},[a("el-form-item",{staticClass:"flow-account accept-account"},[a("el-input",{staticClass:"account",attrs:{value:""+t.form.code+t.form.username,disabled:""}})],1),t._v(" "),a("el-form-item",{staticClass:"flow-nickname",attrs:{prop:"captcha"}},[a("el-input",{staticClass:"nickname",attrs:{placeholder:"请输入 6 位短信验证码"},model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}},[t.awaitCaptcha?a("span",{staticClass:"await-time",attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.awaitCaptcha)+" 秒后可重发")]):a("el-button",{staticClass:"switch-type",attrs:{slot:"append"},on:{click:t.accept},slot:"append"},[t._v("重新获取短信验证码")])],1)],1),t._v(" "),a("div",{staticClass:"login-options"},[a("el-button",{staticClass:"forget-pass",on:{click:t.back}},[t._v("更换登录方式")])],1),t._v(" "),a("footer",{staticClass:"accept-footer-container"},[a("el-button",{staticClass:"submit enter",on:{click:t.signup}},[t._v("进入知书")])],1)],1)],1)])},staticRenderFns:[]};e.a=o}});