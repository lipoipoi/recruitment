webpackJsonp([2],{"9g/a":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("AtM/"),o={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:25},fontSizeMax:{type:Number,default:30},backgroundColorMin:{type:Number,default:255},backgroundColorMax:{type:Number,default:255},colorMin:{type:Number,default:0},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:100},lineColorMax:{type:Number,default:255},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:114},contentHeight:{type:Number,default:39}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var e=0;e<this.identifyCode.length;e++)this.drawText(t,this.identifyCode[e],e);this.drawLine(t),this.drawDot(t)},drawText:function(t,e,r){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var n=(r+1)*(this.contentWidth/(this.identifyCode.length+1)),o=this.randomNum(this.fontSizeMax,this.contentHeight-5),i=this.randomNum(-45,45);t.translate(n,o),t.rotate(i*Math.PI/180),t.fillText(e,0,0),t.rotate(-i*Math.PI/180),t.translate(-n,-o)},drawLine:function(t){for(var e=0;e<5;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<80;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"s-canvas"},[e("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]};var a={name:"regist",components:{SIdentify:r("VU/8")(o,i,!1,function(t){r("zyaW")},"data-v-0ebfe20e",null).exports},data:function(){var t=this;return{type:1,identifyCodes:"123456789",identifyCode:"1234",ruleForm:{phonenumber:"",password:"",code:"",checked:!1},rules:{phonenumber:[{required:!0,message:"手机号不能为空",trigger:"change"}],password:[{required:!0,message:"密码不能为空",trigger:"change"}],code:[{required:!0,message:"验证码不能为空",trigger:"change"},{required:!0,trigger:"blur",validator:function(e,r,n){""===r?n(new Error("请输入验证码")):r!==t.identifyCode?(t.changeCode(),n(new Error("验证码不正确!"))):n()}}],checked:[{required:!0,trigger:"change",validator:function(t,e,r){console.log(e),!1===e?r(new Error("请勾选用户协议及隐私政策")):r()}}]}}},mounted:function(){var t=this;this.identifyCode="",this.makeCode(this.identifyCodes,4),this.resiZie(),window.onresize=function(){t.resiZie()}},methods:{changeCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4),console.log(this.identifyCode)},randomNum:function(t,e){return e+=1,Math.floor(Math.random()*(e-t)+t)},makeCode:function(t,e){for(var r=0;r<e;r++)this.identifyCode+=t[this.randomNum(0,t.length-1)]},changeType:function(t){this.type=t},resiZie:function(){var t=this.$root.$children[0].$children[0].$refs.header.$el.offsetHeight,e=this.$root.$children[0].$children[0].$refs.footer.$el.offsetHeight;this.$refs.registMoudel.style.height=window.innerHeight-t-e+"px"},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var r={userType:e.type,phonenumber:e.ruleForm.phonenumber,password:e.ruleForm.password};Object(n.c)(r).then(function(t){console.log(t),200===t.code&&e.$router.push({name:"ComplitInfo"})}),alert("submit!")})}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{ref:"registMoudel",staticClass:"registMoudel"},[r("div",{staticClass:"registForm"},[r("el-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.ruleForm,"label-width":"80px"}},[r("el-form-item",{staticClass:"type"},[r("button",{class:1===t.type?"active":"",attrs:{type:"button"},on:{click:function(e){return t.changeType(1)}}},[t._v("我要找工作")]),t._v(" "),r("button",{class:0===t.type?"active":"",attrs:{type:"button"},on:{click:function(e){return t.changeType(0)}}},[t._v("我要找招聘")])]),t._v(" "),r("el-form-item",{staticClass:"phone",attrs:{prop:"phonenumber"}},[r("span",[t._v("+86")]),r("el-input",{attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:t.ruleForm.phonenumber,callback:function(e){t.$set(t.ruleForm,"phonenumber",e)},expression:"ruleForm.phonenumber"}})],1),t._v(" "),r("el-form-item",{staticClass:"pwd",attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入账号密码"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),t._v(" "),r("el-form-item",{staticClass:"codeModel",attrs:{prop:"code"}},[r("div",{staticClass:"code"},[r("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.ruleForm.code,callback:function(e){t.$set(t.ruleForm,"code",e)},expression:"ruleForm.code"}})],1),t._v(" "),r("div",{staticClass:"codeCanvas",on:{click:t.changeCode}},[r("s-identify",{attrs:{identifyCode:t.identifyCode}})],1)]),t._v(" "),r("div",{staticClass:"loginBtn"},[r("button",{attrs:{type:"button"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("登录创业平台")])]),t._v(" "),r("el-form-item",{staticClass:"agree",attrs:{prop:"checked"}},[r("el-checkbox",{attrs:{label:"我已同意用户协议及隐私政策",name:"type"},model:{value:t.ruleForm.checked,callback:function(e){t.$set(t.ruleForm,"checked",e)},expression:"ruleForm.checked"}}),t._v(" "),r("span",{staticClass:"regist"},[r("router-link",{attrs:{to:"/Login"}},[t._v("去登陆")])],1)],1)],1)],1)])])},staticRenderFns:[]};var u=r("VU/8")(a,s,!1,function(t){r("prgS")},null,null);e.default=u.exports},"AtM/":function(t,e,r){"use strict";r.d(e,"c",function(){return l}),r.d(e,"b",function(){return h}),r.d(e,"a",function(){return f});var n,o,i,a=r("Xxa5"),s=r.n(a),u=r("exGp"),c=r.n(u),d=r("VsUZ"),l=(n=c()(s.a.mark(function t(e){var r,n,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n in r="?",e)r+=n+"="+e[n]+"&";return o="/env/user/register"+r,t.next=5,d.a.post(o);case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)}),h=(o=c()(s.a.mark(function t(e){var r,n,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n in r="?",e)r+=n+"="+e[n]+"&";return o="/env/user/login"+r,t.next=5,d.a.post(o,e);case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),f=(i=c()(s.a.mark(function t(e){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="/captchaImage",t.next=3,d.a.get(r,{params:e});case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)})},prgS:function(t,e){},zyaW:function(t,e){}});
//# sourceMappingURL=2.4f4d21f97db66bb94933.js.map