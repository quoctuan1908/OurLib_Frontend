import{_ as p,y as _,o as u,h as b,k as h,i as m,a as e,g as r,t as y,x as U,e as c,c as V}from"./index-CxP04c_4.js";import{c as F,b as d,f as D,F as v,a as P,E as S}from"./index.esm-CMeHLogV.js";const x={name:"UserForm",data(){const n=F().shape({username:d().min(4,"Username must be at least 4 character").max(20,"Username must be less than 20 character").required("Please type your username"),password:d().min(4,"Password must be at least 4 character").max(20,"Password must be less than 20 character").required("Please type your password"),confirmPassword:d().required("Please confirm your passsword").oneOf([D("password"),null],"Passwords must match")});return{signUpData:{},signUpFormValidate:n,message:null}},components:{Form:v,Field:P,ErrorMessage:S},methods:{async handleSignUp(){const n=new FormData;n.append("data",JSON.stringify(this.signUpData));let s=await _.signup(n);console.log(s)},gotoLogin(){this.$router.push({name:"login"})}}},q=e("h1",{class:"form-title"},"Sign up",-1),L={class:"mb-3 row"},k={class:"col-md-6"},C=e("label",{for:"InputFirstName",class:"form-label"},"First name",-1),N={class:"col-md-6"},I=e("label",{for:"InputLastName",class:"form-label"},"Last name",-1),E={class:"mb-3"},T=e("label",{for:"InputUsername",class:"form-label"},"Username",-1),B={class:"mb-3"},M=e("label",{for:"password1",class:"form-label"},"Password",-1),H={class:"mb-3"},O=e("label",{for:"password2",class:"form-label"},"Confirm password",-1);function z(n,s,f,g,a,l){const t=m("Field"),i=m("ErrorMessage"),w=m("Form");return u(),b(w,{class:"form-control form-custom","validation-schema":a.signUpFormValidate},{default:h(()=>[q,e("div",L,[e("div",k,[C,r(t,{type:"text",name:"firstname",class:"form-control form-input-custom icon-custom",id:"InputFirstName","aria-describedby":"emailHelp",modelValue:a.signUpData.firstname,"onUpdate:modelValue":s[0]||(s[0]=o=>a.signUpData.firstname=o),placeholder:"Type your first name",required:""},null,8,["modelValue"])]),e("div",N,[I,r(t,{type:"text",name:"lastname",class:"form-control form-input-custom icon-custom",id:"InputLastName","aria-describedby":"emailHelp",modelValue:a.signUpData.lastname,"onUpdate:modelValue":s[1]||(s[1]=o=>a.signUpData.lastname=o),placeholder:"Type your last name",required:""},null,8,["modelValue"])])]),e("div",E,[T,r(t,{type:"username",name:"username",class:"form-control form-input-custom icon-custom",id:"InputUsername","aria-describedby":"emailHelp",modelValue:a.signUpData.username,"onUpdate:modelValue":s[2]||(s[2]=o=>a.signUpData.username=o),placeholder:" Type your username",required:""},null,8,["modelValue"]),r(i,{name:"username",class:"error-message"})]),e("div",B,[M,r(t,{type:"password",name:"password",class:"form-control form-input-custom icon-custom",id:"password1",modelValue:a.signUpData.password,"onUpdate:modelValue":s[3]||(s[3]=o=>a.signUpData.password=o),placeholder:" Type your password",required:""},null,8,["modelValue"]),r(i,{name:"password",class:"error-message"})]),e("div",H,[O,r(t,{type:"password",name:"confirmPassword",class:"form-control form-input-custom icon-custom",id:"password2",modelValue:a.signUpData.confirmPassword,"onUpdate:modelValue":s[4]||(s[4]=o=>a.signUpData.confirmPassword=o),placeholder:" Type your password",onchange:n.checkConfirmPassword,required:""},null,8,["modelValue","onchange"]),r(i,{name:"confirmPassword",class:"error-message"})]),e("div",{id:"message",class:U(this.message?"alert alert-warning":"")},y(this.message),3),e("button",{type:"submit",class:"btn btn-primary",onClick:s[5]||(s[5]=c((...o)=>l.handleSignUp&&l.handleSignUp(...o),["prevent"]))},"Login"),e("button",{type:"button",onClick:s[6]||(s[6]=c((...o)=>l.gotoLogin&&l.gotoLogin(...o),["prevent"]))},"Login")]),_:1},8,["validation-schema"])}const J=p(x,[["render",z]]),j={components:{SignupForm:J}};function A(n,s,f,g,a,l){const t=m("SignupForm");return u(),V("div",null,[r(t)])}const Q=p(j,[["render",A]]);export{Q as default};
