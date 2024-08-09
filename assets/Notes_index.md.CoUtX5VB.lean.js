import{d as k,a5 as w,o as a,c as i,j as t,t as n,n as x,F as b,E as v,a6 as C,y as N,e as f,u as B,k as d,I as $,b as T}from"./chunks/framework.D1poPhlk.js";const L=JSON.parse("[]"),j={"0tutorial":"使用指南",Interviews:"示例文件"},z={class:"w-full px-5"},S={class:"text-sm text-zinc-400"},D={class:"flex-1 mt-2 leading-relaxed transition-all duration-300 text-black/60 dark:text-slate-500 dark:group-hover:text-white/80 group-hover:text-black"},A={class:"flex justify-end w-full mt-3"},E=k({__name:"BlogArchivePostCard",props:["post","flow"],setup(c){const u=w(),p=l=>{var h;const e=(h=l.frontmatter)==null?void 0:h.title;if(e)return e;const{url:s}=l,r=s.match(/.*\/(.*.html)/);let o=r&&r[1].replace(".html","");return o?j[o]||o:"Error Title"},m=l=>{const e=l.frontmatter.tags;return e?e.split("/").slice(0,2):[]},_=l=>u.go(l);return(l,e)=>(a(),i("div",{onClick:e[0]||(e[0]=s=>_(c.post.url)),class:"relative py-4 mt-6 transition-all border rounded-lg cursor-pointer dark:border-transparent hover:border-indigo-800 break-inside-avoid-column bg-zinc-50/50 sm:pl-0 dark:bg-slate-800/80 first:mt-0 dark:hover:bg-sky-950/80 dark:hover:border-sky-300"},[t("div",z,[t("p",S,n(c.post.date.string),1),t("h1",{class:x([c.flow?"":"lg:text-2xl","my-2 text-xl font-bold leading-8 tracking-tight"])},n(p(c.post)),3),t("p",D,n(c.post.frontmatter.desc),1),t("div",A,[(a(!0),i(b,null,v(m(c.post),(s,r)=>(a(),i("p",{key:r,class:x([r>=1?"ml-2":"","px-2 text-sm border rounded-full border-sky-400/80 dark:border-zinc-200 text-sky-400 dark:text-zinc-200"])},n(s),3))),128))])])]))}}),H={class:"lg:sticky lg:top-20"},I={class:"px-2 pb-3 border-b-2 border-sky-400 dark:border-sky-700"},O=t("h1",{class:"pb-2 text-3xl font-bold transition-all duration-300 border-b-4 border-sky-500 dark:border-sky-700 w-fit hover:pr-6"}," 🏷️ 文章分类 ",-1),P={class:"mt-4"},V=["onClick"],q={class:"font-bold"},F={class:"text-sm line-clamp-1"},J={class:"absolute flex items-center justify-end -translate-y-1/2 right-2 top-1/2"},M=t("svg",{class:"",width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"})],-1),R={key:0,class:"flex gap-2 py-2 mt-4 rounded-lg shadow-md bg-amber-100/80 dark:bg-amber-950/80"},U=t("span",{class:"self-start text-2xl"},"“",-1),Z={class:"flex-1 my-4 indent-4"},G={key:0,class:"text-right"},K=t("span",{class:"self-end text-2xl"},"”",-1),Q=k({__name:"BlogArchiveSidebar",props:["types","features"],setup(c){const u=w(),{types:p,features:m}=c,_=[...p],l=s=>s&&u.go(s),e=C({string:"",from:""});return N(async()=>{fetch("https://v1.hitokoto.cn?c=a&c=b&c=d&c=i&min_length=10").then(s=>s.json()).then(({hitokoto:s,from:r})=>{e.string=s,e.from=r}).catch(console.error)}),(s,r)=>(a(),i("div",H,[t("div",I,[O,t("div",P,[(a(),i(b,null,v(_,o=>t("div",{onClick:h=>l(o.link),class:"relative px-2 py-1 transition-all rounded-lg hover:cursor-pointer hover:bg-sky-200/80 dark:hover:bg-sky-900/80",key:o.name},[t("h1",q,n(o.name),1),t("p",F,n(o.desc),1),t("div",J,[t("p",null,n(o.icon||"🔗"),1),M])],8,V)),64))])]),e.string?(a(),i("div",R,[U,t("div",Z,[t("h1",null,n(e.string),1),e.from?(a(),i("p",G,"—— 《"+n(e.from)+"》",1)):f("",!0)]),K])):f("",!0)]))}}),W={class:"max-w-3xl px-4 pb-8 mx-auto my-20 sm:px-6 xl:max-w-5xl xl:px-0 dark:divide-slate-200/20"},X={class:"relative flex justify-center mt-2 0"},Y={class:"text-5xl font-bold"},tt={class:"absolute text-6xl tracking-wider text-transparent -translate-x-1/2 opacity-60 bottom-1/3 left-1/2 bg-gradient-to-b from-black/20 to-black/10 bg-clip-text dark:from-white/20 dark:to-white/10"},et={class:"mt-2 text-center text-black/50 dark:text-slate-500"},st={class:"grid grid-cols-1 pt-6 mt-6 lg:gap-8 lg:grid-cols-3"},ot=t("h1",{class:"pb-2 text-3xl font-bold transition-all duration-300 border-b-4 border-sky-500 dark:border-sky-700 w-fit hover:pr-6"}," ✨ 近期更新 ",-1),rt={key:0,class:"order-1 col-span-1 lg:order-2"},nt=k({__name:"BlogArchive",setup(c){var h;const{frontmatter:u,theme:p}=B(),{hero:m,types:_,features:l,flow:e}=u.value,s=window.location.pathname,r=(h=p.value.sidebar)==null?void 0:h[s],o=_||(r==null?void 0:r.items.map(g=>({name:g.text,link:g.link})));return(g,lt)=>(a(),i("div",W,[t("div",X,[t("h1",Y,n(d(m).title||"Blogs"),1),t("span",tt,n(d(m).title||"Blogs"),1)]),t("p",et,n(d(m).subTitle),1),t("ul",st,[t("div",{class:x([d(o)?"col-span-2":"col-span-3","order-2 pt-6 lg:pt-0 lg:order-1 lg:mt-0"])},[ot,t("div",{class:x(["mt-4",d(e)?"columns-1 lg:columns-2 gap-8":""])},[(a(!0),i(b,null,v(d(L),(y,it)=>(a(),T(E,{key:y.date.time,post:y,flow:d(e)},null,8,["post","flow"]))),128))],2)],2),d(o)||d(l)?(a(),i("div",rt,[$(Q,{types:d(o)},null,8,["types"])])):f("",!0)])]))}}),dt=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","sidebar":false,"hero":{"title":"Document","subTitle":"📚 欢迎来到本项目的使用说明书"},"types":[{"name":"使用指南","desc":"How to Use","link":"/Notes/0tutorial/quickstart","icon":"✨"},{"name":"面经分享","desc":"interview experiences","link":"/Notes/Interviews/","icon":"🏃"}]},"headers":[],"relativePath":"Notes/index.md","filePath":"Notes/index.md"}'),at={name:"Notes/index.md"},ut=Object.assign(at,{setup(c){return(u,p)=>(a(),i("div",null,[$(nt)]))}});export{dt as __pageData,ut as default};
