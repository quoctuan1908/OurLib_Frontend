import{_ as d,p as w,o as u,g as U,j as h,h as m,a as e,f as r,t as b,x as y,d as p,c as V}from"./index-DBDSQuPs.js";import{c as F,b as c,f as D,F as v,a as P,E as S}from"./index.esm-BjM_lD2P.js";const x={name:"UserForm",data(){const n=F().shape({username:c().min(4,"Username must be at least 4 character").max(20,"Username must be less than 20 character").required("Please type your username"),password:c().min(4,"Password must be at least 4 character").max(20,"Password must be less than 20 character").required("Please type your password"),confirmPassword:c().required("Please confirm your passsword").oneOf([D("password"),null],"Passwords must match")});return{signUpData:{},signUpFormValidate:n,message:null}},components:{Form:v,Field:P,ErrorMessage:S},methods:{async handleSignUp(){const n=new FormData;n.append("data",JSON.stringify(this.signUpData));let s=await w.signup(n);console.log(s),s.status==200?this.emitter.emit("popUpMessage",{message:"Create account successfully.!"}):this.emitter.emit("popUpMessage",{message:"Fail to create account."})},gotoLogin(){this.$router.push({name:"login"})}}},q=e("h1",{class:"form-title"},"Sign up",-1),C={class:"mb-3 row"},k={class:"col-md-6"},L=e("label",{for:"InputFirstName",class:"form-label"},"First name",-1),N={class:"col-md-6"},I=e("label",{for:"InputLastName",class:"form-label"},"Last name",-1),M={class:"mb-3"},E=e("label",{for:"InputUsername",class:"form-label"},"Username",-1),T={class:"mb-3"},B=e("label",{for:"password1",class:"form-label"},"Password",-1),H={class:"mb-3"},O=e("label",{for:"password2",class:"form-label"},"Confirm password",-1),j=e("br",null,null,-1);function z(n,s,f,g,o,l){const t=m("Field"),i=m("ErrorMessage"),_=m("Form");return u(),U(_,{class:"form-control form-custom","validation-schema":o.signUpFormValidate},{default:h(()=>[q,e("div",C,[e("div",k,[L,r(t,{type:"text",name:"firstname",class:"form-control form-input-custom icon-custom",id:"InputFirstName","aria-describedby":"emailHelp",modelValue:o.signUpData.firstname,"onUpdate:modelValue":s[0]||(s[0]=a=>o.signUpData.firstname=a),placeholder:"Type your first name",required:""},null,8,["modelValue"])]),e("div",N,[I,r(t,{type:"text",name:"lastname",class:"form-control form-input-custom icon-custom",id:"InputLastName","aria-describedby":"emailHelp",modelValue:o.signUpData.lastname,"onUpdate:modelValue":s[1]||(s[1]=a=>o.signUpData.lastname=a),placeholder:"Type your last name",required:""},null,8,["modelValue"])])]),e("div",M,[E,r(t,{type:"username",name:"username",class:"form-control form-input-custom icon-custom",id:"InputUsername","aria-describedby":"emailHelp",modelValue:o.signUpData.username,"onUpdate:modelValue":s[2]||(s[2]=a=>o.signUpData.username=a),placeholder:" Type your username",required:""},null,8,["modelValue"]),r(i,{name:"username",class:"error-message"})]),e("div",T,[B,r(t,{type:"password",name:"password",class:"form-control form-input-custom icon-custom",id:"password1",modelValue:o.signUpData.password,"onUpdate:modelValue":s[3]||(s[3]=a=>o.signUpData.password=a),placeholder:" Type your password",required:""},null,8,["modelValue"]),r(i,{name:"password",class:"error-message"})]),e("div",H,[O,r(t,{type:"password",name:"confirmPassword",class:"form-control form-input-custom icon-custom",id:"password2",modelValue:o.signUpData.confirmPassword,"onUpdate:modelValue":s[4]||(s[4]=a=>o.signUpData.confirmPassword=a),placeholder:" Type your password",required:""},null,8,["modelValue"]),r(i,{name:"confirmPassword",class:"error-message"})]),e("div",{id:"message",class:y(this.message?"alert alert-warning":"")},b(this.message),3),e("button",{type:"submit",class:"btn btn-primary",onClick:s[5]||(s[5]=p((...a)=>l.handleSignUp&&l.handleSignUp(...a),["prevent"]))},"Sign Up"),j,e("span",{onClick:s[6]||(s[6]=p((...a)=>l.gotoLogin&&l.gotoLogin(...a),["prevent"])),class:"link-primary link-custom"},"Return to Login")]),_:1},8,["validation-schema"])}const J=d(x,[["render",z]]),R={components:{SignupForm:J}};function A(n,s,f,g,o,l){const t=m("SignupForm");return u(),V("div",null,[r(t,{class:"formCustom"})])}const Q=d(R,[["render",A]]);export{Q as default};
