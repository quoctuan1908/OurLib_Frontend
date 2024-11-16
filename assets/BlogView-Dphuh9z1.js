import{u as c,T as D,b as h}from"./TrackingTable-agdGc372.js";import{_ as b,o as d,c as f,a as t,w as o,v as l,b as g,F as U,n,g as p,e as m,h as _}from"./index-BRCspy1n.js";const x={name:"UserProfile",props:["data"],data(){return{userData:this.data,avatarFile:null,imageApiPath:"https://ourlib-backend.onrender.com/public/data/uploads/avatar/",password:{}}},methods:{format_date(a){this.userData.ngaysinh=new Date(a).toISOString().slice(0,10)},async handleChangeUserProfile(){const a=new FormData;a.append("userData",JSON.stringify(this.userData)),a.append("file",this.avatarFile),await c.updateData(this.userData._id,a),this.emitter.emit("popUpMessage",{message:"Change successful.!"})},getAvatarFile(a){this.avatarFile=a.target.files[0],console.log(this.avatarFile)},async changePassword(){try{this.password.new==this.password.repeatNew?(await c.changePassword(this.userData._id,this.userData.taikhoan,this.password.old,this.password.new),this.emitter.emit("popUpMessage",{message:"Change successful.!"})):this.emitter.emit("popUpMessage",{message:"Password and repeat password are not sync."})}catch(a){console.log(a),this.emitter.emit("popUpMessage",{message:a.response.status})}}},mounted(){this.format_date(this.data.ngaysinh)}},k={class:"p-3"},P={class:"row"},C={class:"col-md-4 text-center"},M=["src"],S={class:"col-md-8 row"},Y={class:"col-md-6"},L=t("label",null,"FirstName: ",-1),B=["value"],F=t("label",null,"LastName: ",-1),V=["value"],q=t("label",null,"Gender: ",-1),R=["value"],N=t("label",null,"Birthday: ",-1),$=["value"],O={class:"col-md-6"},T=t("label",null,"Email: ",-1),A=["value"],E=t("label",null,"Address: ",-1),I=["value"],G=t("label",null,"Phone: ",-1),J=["value"],j=t("div",{class:"text-center"},[t("button",{type:"button",class:"btn-custom-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Change your profile "),t("button",{type:"button",class:"btn-custom-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}," Change password ")],-1),z={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},H={class:"modal-dialog"},K={class:"modal-content"},Q=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"staticBackdropLabel"},"Change Password"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),W={class:"modal-body"},X=t("label",null,"Old Password: ",-1),Z=t("label",null,"New Password: ",-1),tt=t("label",null,"Confirm Password: ",-1),st={class:"modal-footer"},et=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),at={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ot={class:"modal-dialog"},lt={class:"modal-content"},it=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Personal Profile"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),nt={class:"modal-body"},dt={class:"row"},rt={class:"col-md-6"},ut=t("label",null,"ID: ",-1),ct=["value"],ht=t("label",null,"Username: ",-1),pt=["value"],mt=t("label",null,"FirstName: ",-1),_t=t("label",null,"LastName: ",-1),bt=t("label",null,"Gender: ",-1),ft=t("option",{value:"male"},"Male",-1),gt=t("option",{value:"female"},"Female",-1),yt=t("option",{value:"other"},"Other",-1),vt=[ft,gt,yt],wt={class:"col-md-6"},Dt=t("label",null,"Birthday: ",-1),Ut=t("label",null,"Email: ",-1),xt=t("label",null,"Address: ",-1),kt=t("label",null,"Phone: ",-1),Pt=t("label",null,"Image: ",-1),Ct={class:"modal-footer"},Mt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function St(a,s,y,v,r,i){return d(),f(U,null,[t("div",k,[t("div",P,[t("div",C,[t("img",{src:this.imageApiPath+this.userData.anhdaidien,class:"form-control"},null,8,M)]),t("div",S,[t("div",Y,[L,t("input",{type:"text",value:this.data.ten,class:"form-control",disabled:""},null,8,B),F,t("input",{type:"text",value:this.data.holot,class:"form-control",disabled:""},null,8,V),q,t("input",{type:"text",value:this.data.phai,class:"form-control",disabled:""},null,8,R),N,t("input",{type:"date",value:this.data.ngaysinh,class:"form-control",disabled:""},null,8,$)]),t("div",O,[T,t("input",{type:"text",value:this.data.email,class:"form-control",disabled:""},null,8,A),E,t("input",{type:"text",value:this.data.diachi,class:"form-control",disabled:""},null,8,I),G,t("input",{type:"text",value:this.data.dienthoai,class:"form-control",disabled:""},null,8,J)])])])]),j,t("div",z,[t("div",H,[t("div",K,[Q,t("div",W,[t("div",null,[X,o(t("input",{type:"password",class:"form-control",placeholder:"Enter your old password","onUpdate:modelValue":s[0]||(s[0]=e=>this.password.old=e)},null,512),[[l,this.password.old]]),Z,o(t("input",{type:"password",class:"form-control",placeholder:"Enter new password","onUpdate:modelValue":s[1]||(s[1]=e=>this.password.new=e)},null,512),[[l,this.password.new]]),tt,o(t("input",{type:"password",class:"form-control",placeholder:"Repeat new password","onUpdate:modelValue":s[2]||(s[2]=e=>this.password.repeatNew=e)},null,512),[[l,this.password.repeatNew]])])]),t("div",st,[et,t("button",{type:"button",class:"btn btn-primary",onClick:s[3]||(s[3]=(...e)=>this.changePassword&&this.changePassword(...e)),"data-bs-dismiss":"modal"},"Change")])])])]),t("div",at,[t("div",ot,[t("div",lt,[it,t("div",nt,[t("div",dt,[t("div",rt,[ut,t("input",{type:"text",value:this.userData._id,disabled:"",class:"form-control"},null,8,ct),ht,t("input",{type:"text",value:this.userData.taikhoan,disabled:"",class:"form-control"},null,8,pt),mt,o(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=e=>this.userData.ten=e),class:"form-control"},null,512),[[l,this.userData.ten]]),_t,o(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=e=>this.userData.holot=e),class:"form-control"},null,512),[[l,this.userData.holot]]),bt,o(t("select",{"onUpdate:modelValue":s[6]||(s[6]=e=>this.userData.phai=e),class:"form-control"},vt,512),[[g,this.userData.phai]])]),t("div",wt,[Dt,o(t("input",{type:"date","onUpdate:modelValue":s[7]||(s[7]=e=>this.userData.ngaysinh=e),class:"form-control"},null,512),[[l,this.userData.ngaysinh]]),Ut,o(t("input",{type:"text","onUpdate:modelValue":s[8]||(s[8]=e=>this.userData.email=e),class:"form-control"},null,512),[[l,this.userData.email]]),xt,o(t("input",{type:"text","onUpdate:modelValue":s[9]||(s[9]=e=>this.userData.diachi=e),class:"form-control"},null,512),[[l,this.userData.diachi]]),kt,o(t("input",{type:"text","onUpdate:modelValue":s[10]||(s[10]=e=>this.userData.dienthoai=e),class:"form-control"},null,512),[[l,this.userData.dienthoai]])])]),Pt,t("input",{type:"file",name:"file",class:"form-control",onChange:s[11]||(s[11]=e=>i.getAvatarFile(e))},null,32)]),t("div",Ct,[Mt,t("button",{type:"button",class:"btn btn-primary",onClick:s[12]||(s[12]=(...e)=>i.handleChangeUserProfile&&i.handleChangeUserProfile(...e)),"data-bs-dismiss":"modal"},"Save changes")])])])])],64)}const Yt=b(x,[["render",St]]),Lt={data(){return{isLoaded:!1,userData:{},borrowRequests:[],filtedList:[],filterOption:""}},components:{UserProfile:Yt,TrackingTable:D},methods:{async fetchUserData(){this.userData=await c.getOne(localStorage.getItem("id")),this.borrowRequests=await h.getAllByFilter({madocgia:this.userData.madocgia}),this.format_date(this.borrowRequests),this.filterSelect(),this.isLoaded=!0},filterSelect(){this.filtedList=this.borrowRequests.filter(a=>a.trangthai==this.filterOption)},async refreshList(){await this.fetchUserData(),await this.filterSelect(),console.log(this.filtedList)},async refuseRequest(a){await h.refuseRequest(a),this.emitter.emit("popUpMessage",{message:"Request Deleted!"}),await this.refreshList()},format_date(a){a.forEach(s=>{s.ngayyeucau=n(String(s.ngayyeucau)).format("DD/MM/YYYY"),s.ngaymuon&&(s.ngaymuon=n(String(s.ngaymuon)).format("DD/MM/YYYY"),s.hantra=n(String(s.hantra)).format("DD/MM/YYYY"),s.ngaytra&&(s.ngaytra=n(String(s.ngaytra)).format("DD/MM/YYYY")))})}},mounted(){localStorage.getItem("token")||this.$router.push({name:"login"}),this.fetchUserData()}},Bt={class:"p-3"},Ft=t("h3",null,"Filter",-1),Vt=t("option",{value:"processing",selected:""},"Requests",-1),qt=t("option",{value:"borrowing"},"Borrowing Books",-1),Rt=t("option",{value:"returned"},"Returned Books",-1),Nt=[Vt,qt,Rt];function $t(a,s,y,v,r,i){const e=_("UserProfile"),w=_("TrackingTable");return d(),f("div",null,[r.isLoaded?(d(),p(e,{key:0,data:this.userData},null,8,["data"])):m("",!0),t("div",Bt,[Ft,o(t("select",{onChange:s[0]||(s[0]=(...u)=>this.filterSelect&&this.filterSelect(...u)),"onUpdate:modelValue":s[1]||(s[1]=u=>this.filterOption=u),class:"form-control"},Nt,544),[[g,this.filterOption]]),r.isLoaded?(d(),p(w,{key:0,data:this.filtedList,"refuse-request":i.refuseRequest,"accept-request":null,"table-label":"Your Request",class:"overflow-auto"},null,8,["data","refuse-request"])):m("",!0)])])}const At=b(Lt,[["render",$t]]);export{At as default};
