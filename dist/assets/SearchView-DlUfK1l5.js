import{_ as a,u as r,L as c,m as l,c as d,g as o,i as s,o as h}from"./index-CxP04c_4.js";const u={data(){return{filtedList:[],isReady:!1}},components:{BookList:r,VueSkeletonLoader:c},methods:{async fetchBooksWithFilter(t){const e=await l.getAllByFilter({tensach:t});this.filtedList=e.data,this.isReady=!0,console.log(this.filtedList),this.filtedList.length==0&&this.$router.push({name:"notfound"})}},created(){this.emitter.on("searchQuery",async t=>{await this.fetchBooksWithFilter(t)})},mounted(){this.fetchBooksWithFilter(this.$route.query.tensach)}};function f(t,e,p,m,k,L){const i=s("VueSkeletonLoader"),n=s("BookList");return h(),d("div",null,[o(i,{type:"image@2",loading:!this.isReady,height:"300px",class:"loading-custom"},null,8,["loading"]),o(n,{booksList:this.filtedList,size:2,class:"d-flex flex-wrap border justify-content-center"},null,8,["booksList"])])}const y=a(u,[["render",f]]);export{y as default};
