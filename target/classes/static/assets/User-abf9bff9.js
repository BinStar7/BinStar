/* empty css                *//* empty css               *//* empty css                    *//* empty css                  *//* empty css              *//* empty css                 *//* empty css                   *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                     */import{r as c}from"./request-db19cced.js";import{r as P,o as g,c as b,d as f,e as o,w as t,s as R,z as T,D as $,G as q,H as F,n as p,h as G,I as M,E as u,J as O,K as A,q as H,v as K,x as j,y as L,m as Q}from"./index-8c701111.js";const W={class:"card",style:{"margin-bottom":"5px"}},X={class:"card",style:{"margin-bottom":"5px"}},Y={style:{"margin-bottom":"10px"}},Z={key:0},ee={class:"card"},oe={class:"dialog-footer"},be={__name:"User",setup(le){const V="http://:9090/files/upload",e=P({pageNum:1,pageSize:10,total:0,formVisible:!1,form:{},tableData:[],name:null}),d=()=>{c.get("/user/selectPage",{params:{pageNum:e.pageNum,pageSize:e.pageSize,name:e.name}}).then(r=>{var l,n;e.tableData=(l=r.data)==null?void 0:l.list,e.total=(n=r.data)==null?void 0:n.total})},y=()=>{e.form={},e.formVisible=!0},x=r=>{e.form=JSON.parse(JSON.stringify(r)),e.formVisible=!0},E=()=>{c.post("/user/add",e.form).then(r=>{r.code==="200"?(d(),u.success("操作成功"),e.formVisible=!1):u.error(r.msg)})},h=()=>{c.put("/user/update",e.form).then(r=>{r.code==="200"?(d(),u.success("操作成功"),e.formVisible=!1):u.error(r.msg)})},v=()=>{e.form.id?h():E()},k=r=>{M.confirm("删除后数据无法恢复，您确定删除吗?","删除确认",{type:"warning"}).then(l=>{c.delete("/user/delete/"+r).then(n=>{n.code==="200"?(d(),u.success("操作成功")):u.error(n.msg)})}).catch(l=>{})},U=()=>{e.name=null,d()},w=r=>{e.form.avatar=r.data};return d(),(r,l)=>{const n=R,s=T,m=O,C=A,N=$,S=q,z=H,i=K,_=j,D=L,B=Q,I=F;return g(),b("div",null,[f("div",W,[o(n,{modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.name=a),style:{width:"300px","margin-right":"10px"},placeholder:"请输入名称查询"},null,8,["modelValue"]),o(s,{type:"primary",onClick:d},{default:t(()=>[p("查询")]),_:1}),o(s,{type:"info",style:{margin:"0 10px"},onClick:U},{default:t(()=>[p("重置")]),_:1})]),f("div",X,[f("div",Y,[o(s,{type:"primary",onClick:y},{default:t(()=>[p("新增")]),_:1})]),o(N,{data:e.tableData,stripe:""},{default:t(()=>[o(m,{label:"用户名",prop:"username"}),o(m,{label:"名称",prop:"name"}),o(m,{label:"头像"},{default:t(a=>[o(C,{src:a.row.avatar,style:{width:"40px",height:"40px","border-radius":"50%"}},null,8,["src"])]),_:1}),o(m,{label:"角色",prop:"role"},{default:t(a=>[a.row.role==="USER"?(g(),b("span",Z,"普通用户")):G("",!0)]),_:1}),o(m,{label:"性别",prop:"sex"}),o(m,{label:"电话",prop:"phone"}),o(m,{label:"邮箱",prop:"email"}),o(m,{label:"操作","header-align":"center",width:"160"},{default:t(a=>[o(s,{type:"primary",onClick:J=>x(a.row)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"]),o(s,{type:"danger",onClick:J=>k(a.row.id)},{default:t(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),f("div",ee,[o(S,{background:"",layout:"prev, pager, next","page-size":e.pageSize,"onUpdate:pageSize":l[1]||(l[1]=a=>e.pageSize=a),"current-page":e.pageNum,"onUpdate:currentPage":l[2]||(l[2]=a=>e.pageNum=a),total:e.total},null,8,["page-size","current-page","total"])]),o(I,{title:"信息",width:"40%",modelValue:e.formVisible,"onUpdate:modelValue":l[9]||(l[9]=a=>e.formVisible=a),"close-on-click-modal":!1,"destroy-on-close":""},{footer:t(()=>[f("span",oe,[o(s,{onClick:l[8]||(l[8]=a=>e.formVisible=!1)},{default:t(()=>[p("取 消")]),_:1}),o(s,{type:"primary",onClick:v},{default:t(()=>[p("保 存")]),_:1})])]),default:t(()=>[o(B,{model:e.form,"label-width":"100px",style:{"padding-right":"50px"}},{default:t(()=>[o(i,{label:"头像",prop:"avatar"},{default:t(()=>[o(z,{action:V,"list-type":"picture","on-success":w},{default:t(()=>[o(s,{type:"primary"},{default:t(()=>[p("上传图片")]),_:1})]),_:1})]),_:1}),o(i,{label:"账号",prop:"username"},{default:t(()=>[o(n,{modelValue:e.form.username,"onUpdate:modelValue":l[3]||(l[3]=a=>e.form.username=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(i,{label:"名称",prop:"name"},{default:t(()=>[o(n,{modelValue:e.form.name,"onUpdate:modelValue":l[4]||(l[4]=a=>e.form.name=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(i,{label:"性别",prop:"sex"},{default:t(()=>[o(D,{modelValue:e.form.sex,"onUpdate:modelValue":l[5]||(l[5]=a=>e.form.sex=a)},{default:t(()=>[o(_,{label:"男"}),o(_,{label:"女"})]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"电话",prop:"phone"},{default:t(()=>[o(n,{modelValue:e.form.phone,"onUpdate:modelValue":l[6]||(l[6]=a=>e.form.phone=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(i,{label:"邮箱",prop:"email"},{default:t(()=>[o(n,{modelValue:e.form.email,"onUpdate:modelValue":l[7]||(l[7]=a=>e.form.email=a),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}};export{be as default};
