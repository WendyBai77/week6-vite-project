import{_,r as u,o as d,c as m,a as n,b as r,w as c,d as e,e as k,f,g as $}from"./index-127f23ae.js";const g={name:"Dashboard",data(){return{checkSuccess:!1}},mounted(){this.checkLogin()},methods:{checkLogin(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)wendyToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(o){this.$http.defaults.headers.common.Authorization=`${o}`;const t="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(t).then(()=>{this.checkSuccess=!0}).catch(a=>{alert(a.response.data.message),this.$router.push("/login")})}else alert("您尚未登入。"),this.$router.push("/login")},signout(){document.cookie="wendybai=;expires=;",alert("token 已清除"),this.$router.push("/login")}}},v=n("h1",null,"你現在在後台頁面",-1),w={id:"nav"};function x(o,t,a,b,h,i){const s=u("router-link"),l=u("router-view");return d(),m("div",null,[v,n("div",w,[r(s,{to:"/"},{default:c(()=>[e("回到前台")]),_:1}),e(" | "),r(s,{to:"/admin/products"},{default:c(()=>[e("後台產品列表")]),_:1}),e(" | "),r(s,{to:"/admin/orders"},{default:c(()=>[e("後台訂單")]),_:1}),e(" | "),n("a",{href:"#",onClick:t[0]||(t[0]=k((...p)=>i.signout&&i.signout(...p),["prevent"]))},"登出")]),h.checkSuccess?(d(),f(l,{key:0})):$("",!0)])}const C=_(g,[["render",x]]);export{C as default};
