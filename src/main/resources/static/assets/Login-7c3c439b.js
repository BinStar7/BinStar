/* empty css                *//* empty css                  *//* empty css              *//* empty css               *//* empty css               */import{_ as w,r as V,U as y,o as b,c as E,d as r,e,w as s,m as I,u as _,V as z,W as S,n as f,p as N,i as k,E as c,a as U,s as B,v as L,L as M,M as q,z as R}from"./index-8c701111.js";import{r as A}from"./request-db19cced.js";const d=a=>(N("data-v-246857e4"),a=a(),k(),a),C={class:"login-container"},D=d(()=>r("div",{style:{color:"#39bf23","font-size":"50px","font-weight":"bold",position:"absolute","text-align":"center",top:"50px"}},"农产品销售系统",-1)),F={class:"login-box"},O=d(()=>r("div",{style:{"font-weight":"bold","font-size":"24px","text-align":"center","margin-bottom":"30px",color:"#1450aa"}},"欢 迎 登 录",-1)),J=d(()=>r("div",{style:{"text-align":"right"}},[f(" 还没有账号？请 "),r("a",{href:"/register"},"注册")],-1)),T={__name:"Login",setup(a){const t=V({form:{role:"ADMIN"},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}),p=y(),g=()=>{p.value.validate(n=>{n&&A.post("/login",t.form).then(o=>{o.code==="200"?(c.success("登录成功"),U.push("/"),localStorage.setItem("system-user",JSON.stringify(o.data))):c.error(o.msg)})}).catch(n=>{console.error(n)})};return(n,o)=>{const m=B,i=L,u=M,x=q,h=R,v=I;return b(),E("div",C,[D,r("div",F,[O,e(v,{model:t.form,ref_key:"formRef",ref:p,rules:t.rules},{default:s(()=>[e(i,{prop:"username"},{default:s(()=>[e(m,{"prefix-icon":_(z),size:"large",modelValue:t.form.username,"onUpdate:modelValue":o[0]||(o[0]=l=>t.form.username=l),placeholder:"请输入账号"},null,8,["prefix-icon","modelValue"])]),_:1}),e(i,{prop:"password"},{default:s(()=>[e(m,{"prefix-icon":_(S),size:"large",modelValue:t.form.password,"onUpdate:modelValue":o[1]||(o[1]=l=>t.form.password=l),placeholder:"请输入密码","show-password":""},null,8,["prefix-icon","modelValue"])]),_:1}),e(i,{prop:"role"},{default:s(()=>[e(x,{size:"large",style:{width:"100%"},modelValue:t.form.role,"onUpdate:modelValue":o[2]||(o[2]=l=>t.form.role=l)},{default:s(()=>[e(u,{value:"ADMIN",label:"管理员"}),e(u,{value:"USER",label:"普通用户"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:s(()=>[e(h,{size:"large",type:"primary",style:{width:"100%"},onClick:g},{default:s(()=>[f("登 录")]),_:1})]),_:1})]),_:1},8,["model","rules"]),J])])}}},X=w(T,[["__scopeId","data-v-246857e4"]]);export{X as default};
