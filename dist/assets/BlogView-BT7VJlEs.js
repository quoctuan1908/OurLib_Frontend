import{_ as h,u as f,b as p}from"./bookstracking.service-DwLqXdRN.js";import{_ as r,o as i,c as n,a as e,d as _,h as m,f as g,w as $,l as v,i as w}from"./index-DaTli4Ns.js";const b={name:"UserProfile",props:["data"],methods:{async getAllOfUserRequest(){}}},k={class:"p-3"},B=e("div",{class:"text-center image-area"},[e("img",{src:h,class:"d-block m-auto",width:"250px"}),e("button",{class:"btn-custom"},[e("i",{class:"fa-solid fa-pen"}),_(" Change your profile")])],-1),S=e("div",null,[e("h1",null,"Your request")],-1),U=[B,S];function q(o,t,l,c,a,d){return i(),n("div",k,U)}const x=r(b,[["render",q]]),L={data(){return{isLoaded:!1,data:{},borrowRequests:[],filtedList:[],filterOption:""}},components:{UserProfile:x},methods:{async fetchUserData(){this.data=await f.getOne(localStorage.getItem("id")),this.borrowRequest=await p.getAllByFilter({madocgia:this.data.madocgia}),this.isLoaded=!0,console.log(this.data),console.log(this.borrowRequest)},filterSelect(){this.filtedList=this.borrowRequest.filter(o=>o.trangthai==this.filterOption),console.log(this.filtedList)}},mounted(){localStorage.getItem("token")||this.$router.push({name:"login"}),this.fetchUserData()}},O=e("option",{value:"processing"},"Requests",-1),R=e("option",{value:"borrowing"},"Borrowing Books",-1),y=e("option",{value:"returned"},"Borrowed Books",-1),V=[O,R,y];function C(o,t,l,c,a,d){const u=w("UserProfile");return i(),n("div",null,[a.isLoaded?(i(),m(u,{key:0,data:this.data},null,8,["data"])):g("",!0),e("div",null,[$(e("select",{onChange:t[0]||(t[0]=(...s)=>this.filterSelect&&this.filterSelect(...s)),"onUpdate:modelValue":t[1]||(t[1]=s=>this.filterOption=s)},V,544),[[v,this.filterOption]])])])}const N=r(L,[["render",C]]);export{N as default};
