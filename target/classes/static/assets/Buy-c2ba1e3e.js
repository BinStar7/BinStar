/* empty css                *//* empty css                   *//* empty css              *//* empty css               *//* empty css               *//* empty css                     *//* empty css                */import{r as y}from"./request-db19cced.js";import{r as B,o as n,c as d,d as a,e as c,w as r,P as h,F as v,B as f,g as u,h as k,z as L,s as U,Q as P,G as T,n as p,t as i,E as C,R as $,S as F,N as D,T as G}from"./index-8c701111.js";const R={style:{"padding-bottom":"50px"}},j={class:"card",style:{"margin-bottom":"10px"}},q={style:{"margin-bottom":"10px"}},A={class:"card"},J=["src"],M={style:{"font-size":"18px",margin:"5px 0",color:"#333"}},O={class:"line2",style:{margin:"5px 0",color:"#666","font-size":"14px",height:"40px"}},Q={key:1,class:"line2",style:{margin:"5px 0",color:"#666","font-size":"14px",height:"40px"}},H={style:{margin:"5px 0"}},K={style:{margin:"10px 0",display:"flex","align-items":"center",color:"#666"}},W={style:{flex:"1"}},X={style:{color:"red","font-size":"18px"}},Y={style:{flex:"1","text-align":"center"}},Z={key:2,style:{display:"flex","align-items":"center","justify-content":"flex-end"}},ee={style:{"margin-right":"5px",display:"inline-block","min-width":"50px","font-size":"18px",color:"red"}},te={key:1,style:{padding:"50px 0","text-align":"center","font-size":"24px",color:"#888"}},oe={key:2,style:{"margin-top":"10px"}},ue={__name:"Buy",setup(se){const t=B({user:JSON.parse(localStorage.getItem("system-user")||"{}"),categoryList:[],pageNum:1,pageSize:10,total:0,goodsList:[],name:"",activeCategoryId:null}),z=o=>{let s={goodsId:o.id,num:o.num,userId:t.user.id};y.post("/orders/add",s).then(l=>{l.code==="200"?(C.success("购买成功"),_()):C.error(l.msg)})},E=o=>{o.total=(o.price*o.num).toFixed(2)};y.get("/category/selectAll").then(o=>{t.categoryList=o.data});const _=()=>{y.get("/goods/selectPage",{params:{pageNum:t.pageNum,pageSize:t.pageSize,name:t.name,categoryId:t.activeCategoryId}}).then(o=>{var s,l;t.goodsList=(s=o.data)==null?void 0:s.list,t.total=(l=o.data)==null?void 0:l.total,t.goodsList.forEach(m=>{m.num=0})})},x=o=>{t.activeCategoryId=o,_()};return _(),(o,s)=>{const l=L,m=U,N=$,I=F,V=D,S=G,b=P,w=T;return n(),d("div",R,[a("div",j,[c(l,{class:h({active:t.activeCategoryId===null}),onClick:s[0]||(s[0]=e=>x(null))},{default:r(()=>[p("全部")]),_:1},8,["class"]),(n(!0),d(v,null,f(t.categoryList,e=>(n(),u(l,{class:h({active:t.activeCategoryId===e.id}),onClick:g=>x(e.id),key:e.id},{default:r(()=>[p(i(e.name),1)]),_:2},1032,["class","onClick"]))),128))]),a("div",q,[c(m,{style:{width:"300px","margin-right":"5px"},modelValue:t.name,"onUpdate:modelValue":s[1]||(s[1]=e=>t.name=e),placeholder:"请输入商品名称关键字查询"},null,8,["modelValue"]),c(l,{type:"primary"},{default:r(()=>[p("搜索")]),_:1})]),t.total>0?(n(),u(b,{key:0,gutter:10},{default:r(()=>[(n(!0),d(v,null,f(t.goodsList,e=>(n(),u(S,{style:{"margin-bottom":"10px"},span:6,key:e.id},{default:r(()=>[a("div",A,[a("img",{src:e.img,alt:"",style:{width:"100%",height:"280px"}},null,8,J),a("div",M,i(e.name),1),e.descr.length>40?(n(),u(N,{key:0,content:e.descr,effect:"light",placement:"top"},{default:r(()=>[a("div",O,i(e.descr),1)]),_:2},1032,["content"])):(n(),d("div",Q,i(e.descr),1)),a("div",H,[c(I,{type:"success"},{default:r(()=>[p(i(e.specials),1)]),_:2},1024)]),a("div",K,[a("div",W,[a("strong",X,"￥"+i(e.price),1),p("/"+i(e.unit),1)]),a("div",Y," 库存："+i(e.store),1),a("div",null,[c(V,{onChange:g=>E(e),modelValue:e.num,"onUpdate:modelValue":g=>e.num=g,style:{width:"120px"},min:0,max:999},null,8,["onChange","modelValue","onUpdate:modelValue"])])]),e.num>0?(n(),d("div",Z,[p(" 总价："),a("strong",ee,"￥"+i(e.total),1),c(l,{type:"primary",onClick:g=>z(e)},{default:r(()=>[p("购买")]),_:2},1032,["onClick"])])):k("",!0)])]),_:2},1024))),128))]),_:1})):(n(),d("div",te,"暂无农产品...")),t.total?(n(),d("div",oe,[c(w,{layout:"prev, pager, next","page-size":t.pageSize,"onUpdate:pageSize":s[2]||(s[2]=e=>t.pageSize=e),"current-page":t.pageNum,"onUpdate:currentPage":s[3]||(s[3]=e=>t.pageNum=e),total:t.total},null,8,["page-size","current-page","total"])])):k("",!0)])}}};export{ue as default};
