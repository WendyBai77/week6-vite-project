import{_ as f,r as l,o as h,c as b,a as s,b as o,w as v,n as u}from"./index-127f23ae.js";const w={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},2e3);const r="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(r,this.user).then(e=>{const{token:i,expired:d}=e.data;document.cookie=`wendyToken=${i}; expires=${new Date(d)}`,this.$router.push("/admin/products")}).catch(e=>{alert(e.response.data.message)})}}},g={class:"container"},V=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),k={class:"my-5 row justify-content-center"},x={class:"mb-3"},y=s("label",{for:"email",class:"form-label"},"Email",-1),$={class:"mb-3"},L=s("label",{for:"password",class:"form-label"},"密碼",-1),B=s("button",{type:"submit",class:"btn btn-lg btn-primary w-100 mt-3"}," 登入 ",-1);function C(r,e,i,d,a,p){const m=l("v-field"),c=l("error-message"),_=l("v-form");return h(),b("div",g,[V,s("div",k,[o(_,{ref:"form",class:"col-lg-10",onSubmit:e[2]||(e[2]=t=>p.signIn())},{default:v(({errors:t})=>[s("div",x,[y,o(m,{id:"email",name:"email",type:"email",class:u(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.user.username,"onUpdate:modelValue":e[0]||(e[0]=n=>a.user.username=n)},null,8,["class","modelValue"]),o(c,{name:"email",class:"invalid-feedback"})]),s("div",$,[L,o(m,{id:"password",name:"password",type:"password",class:u(["form-control",{"is-invalid":t.password}]),placeholder:"請輸入密碼",rules:"required",modelValue:a.user.password,"onUpdate:modelValue":e[1]||(e[1]=n=>a.user.password=n)},null,8,["class","modelValue"]),o(c,{name:"password",class:"invalid-feedback"})]),B]),_:1},512)])])}const q=f(w,[["render",C]]);export{q as default};
