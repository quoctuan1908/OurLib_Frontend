import{j as a}from"./index-8jTYeC_t.js";class n{constructor(t="/api/user/reader"){this.api=a(t)}async getAll(){try{return(await this.api.get("/")).data}catch(t){return console.log(t),null}}async getOne(t){try{return(await this.api.get("/get-one/"+t)).data}catch(r){return console.log(r),null}}async getQuantity(){return(await this.api.get("/quantity")).data}async updateData(t){return(await this.api.put("/get-one/"+t.id,t)).data}}const c=new n,o="/OurLib_Frontend/assets/blankavatar-CJYpdnIT.png";class s{constructor(t="http://localhost:3000/api/tracking"){this.api=a(t)}async getAll(){return(await this.api.get("/")).data}async getAllByFilter(t){return(await this.api.get("/",{params:t})).data}async getOne(t){return(await this.api.get("/get-one/"+t)).data}async acceptRequest(t){return(await this.api.post("/get-one/accept/"+t)).data}async refuseRequest(t){return console.log(t),(await this.api.delete("/get-one/"+t)).data}async acceptReturn(t){return(await this.api.put("/get-one/"+t)).data}}const p=new s;export{o as _,p as b,c as u};