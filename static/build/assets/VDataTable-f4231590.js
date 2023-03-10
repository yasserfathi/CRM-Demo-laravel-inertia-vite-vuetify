import{N as ue,a as d,p as se,O as V,P as k,Q as W,R as O,S as q,T as B,U as _,W as C,Y as x,Z as z,_ as F,$ as K,a0 as de,a1 as ie,a2 as ce,a3 as L,a4 as fe,F as A,a5 as j,q as ge,n as D,j as Q,a6 as I,a7 as ve,a8 as Y,a9 as me,aa as ye,ab as be,ac as he,ad as pe,ae as xe,af as we,ag as Se,ah as ke,ai as Pe}from"./app-6524943b.js";const G=ue({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,n)=>{let{slots:a,attrs:t}=n;const l=e.tag??"td";return d(l,se({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:V(e.height),width:V(e.width),left:V(e.fixedOffset||null)}},t),{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}})}),Te=k({headers:{type:Array,default:()=>[]}},"v-data-table-header"),Z=Symbol.for("vuetify:data-table-headers");function Ie(e,n){const a=W([]),t=W([]);O(()=>e.headers,()=>{var h,y,w;const r=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],o=r.flatMap((v,s)=>v.map(p=>({column:p,row:s}))),u=r.length,f={title:"",sortable:!1},g={...f,width:48};if((h=n==null?void 0:n.groupBy)!=null&&h.value.length){const v=o.findIndex(s=>{let{column:p}=s;return p.key==="data-table-group"});v<0?o.unshift({column:{...f,key:"data-table-group",title:"Group",rowspan:u},row:0}):o.splice(v,1,{column:{...f,...o[v].column},row:o[v].row})}if((y=n==null?void 0:n.showSelect)!=null&&y.value){const v=o.findIndex(s=>{let{column:p}=s;return p.key==="data-table-select"});v<0?o.unshift({column:{...g,key:"data-table-select",rowspan:u},row:0}):o.splice(v,1,{column:{...g,...o[v].column},row:o[v].row})}if((w=n==null?void 0:n.showExpand)!=null&&w.value){const v=o.findIndex(s=>{let{column:p}=s;return p.key==="data-table-expand"});v<0?o.push({column:{...g,key:"data-table-expand",rowspan:u},row:0}):o.splice(v,1,{column:{...g,...o[v].column},row:o[v].row})}const i=q(u).map(()=>[]),c=q(u).fill(0);let m=0;o.forEach(v=>{let{column:s,row:p}=v;const P=s.key??`data-table-column-${m++}`;for(let S=p;S<=p+(s.rowspan??1)-1;S++)i[S].push({...s,key:P,fixedOffset:c[S],sortable:s.sortable??!!s.key}),c[S]+=s.width??0}),i.forEach(v=>{for(let s=v.length;s--;s>=0)if(v[s].fixed){v[s].lastFixed=!0;return}});const b=new Set;a.value=i.map(v=>{const s=[];for(const p of v)b.has(p.key)||(b.add(p.key),s.push(p));return s}),t.value=i.at(-1)??[]},{deep:!0,immediate:!0});const l={headers:a,columns:t};return B(Z,l),l}function H(){const e=_(Z);if(!e)throw new Error("Missing headers!");return e}const De=k({showSelect:Boolean,modelValue:{type:Array,default:()=>[]}},"v-data-table-select"),J=Symbol.for("vuetify:data-table-selection");function Ve(e,n){const a=C(e,"modelValue",e.modelValue,c=>new Set(c),c=>[...c.values()]);function t(c){return c.every(m=>a.value.has(m.value))}function l(c){return c.some(m=>a.value.has(m.value))}function r(c,m){const b=new Set(a.value);for(const h of c)m?b.add(h.value):b.delete(h.value);a.value=b}function o(c){r([c],!t([c]))}function u(c){r(n.value,c)}const f=x(()=>a.value.size>0),g=x(()=>t(n.value)),i={toggleSelect:o,select:r,selectAll:u,isSelected:t,isSomeSelected:l,someSelected:f,allSelected:g};return B(J,i),i}function R(){const e=_(J);if(!e)throw new Error("Missing selection!");return e}const Ce=k({sortBy:{type:Array,default:()=>[]},multiSort:Boolean,mustSort:Boolean},"v-data-table-sort"),X=Symbol.for("vuetify:data-table-sort");function Be(e){const n=C(e,"sortBy"),t={sortBy:n,toggleSort:l=>{let r=n.value.map(u=>({...u}))??[];const o=r.find(u=>u.key===l);o?o.order==="desc"?e.mustSort?o.order="asc":r=r.filter(u=>u.key!==l):o.order="desc":e.multiSort?r=[...r,{key:l,order:"asc"}]:r=[{key:l,order:"asc"}],n.value=r}};return B(X,t),t}function _e(){const e=_(X);if(!e)throw new Error("Missing sort!");return e}function $e(e,n,a){const t=x(()=>a.value.reduce((r,o)=>(o.sort&&(r[o.key]=o.sort),r),{}));return{sortedItems:x(()=>n.value.length?Fe(e.value,n.value,"en",t.value):e.value)}}function Fe(e,n,a,t){const l=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((r,o)=>{for(let u=0;u<n.length;u++){const f=n[u].key,g=n[u].order;if(g===!1)continue;let i=z(r.raw,f),c=z(o.raw,f);if(g==="desc"&&([i,c]=[c,i]),t!=null&&t[f]){const m=t[f](i,c);if(!m)continue;return m}if(!(i==null||c==null)){if(i instanceof Date&&c instanceof Date)return i.getTime()-c.getTime();if([i,c]=[i,c].map(m=>(m||"").toString().toLocaleLowerCase()),i!==c)return!isNaN(i)&&!isNaN(c)?Number(i)-Number(c):l.compare(i,c)}}return 0})}const Ee=F()({name:"VDataTableHeaders",props:{color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:K,default:"$sortAsc"},sortDescIcon:{type:K,default:"$sortDesc"},...de()},setup(e,n){let{slots:a,emit:t}=n;const{toggleSort:l,sortBy:r}=_e(),{someSelected:o,allSelected:u,selectAll:f}=R(),{columns:g,headers:i}=H(),{loaderClasses:c}=ie(e),m=(v,s)=>!e.sticky&&!v.fixed?null:{position:"sticky",zIndex:v.fixed?4:e.sticky?3:void 0,left:v.fixed?V(v.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${s})`:void 0};function b(v){const s=r.value.find(p=>p.key===v);return s?s.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:h,backgroundColorStyles:y}=ce(e,"color"),w=v=>{let{column:s,x:p,y:P}=v;const S=!!r.value.find(T=>T.key===s.key),E=s.key==="data-table-select"||s.key==="data-table-expand";return d(G,{tag:"th",align:s.align,class:["v-data-table__th",{"v-data-table__th--sortable":s.sortable,"v-data-table__th--sorted":S},c.value],style:{width:V(s.width),minWidth:V(s.width),...m(s,P)},colspan:s.colspan,rowspan:s.rowspan,onClick:s.sortable?()=>l(s.key):void 0,lastFixed:s.lastFixed,noPadding:E},{default:()=>{var N;const T=`column.${s.key}`,$={column:s,selectAll:f};return a[T]?a[T]($):s.key==="data-table-select"?((N=a["column.data-table-select"])==null?void 0:N.call(a,$))??d(j,{modelValue:u.value,indeterminate:o.value&&!u.value,"onUpdate:modelValue":f},null):d("div",{class:"v-data-table-header__content"},[d("span",null,[s.title]),s.sortable&&d(ge,{key:"icon",class:"v-data-table-header__sort-icon",icon:b(s.key)},null),e.multiSort&&S&&d("div",{key:"badge",class:["v-data-table-header__sort-badge",...h.value],style:y.value},[r.value.findIndex(M=>M.key===s.key)+1])])}})};L(()=>d(A,null,[i.value.map((v,s)=>d("tr",null,[v.map((p,P)=>d(w,{column:p,x:P,y:s},null))])),e.loading&&d("tr",{class:"v-data-table__progress"},[d("th",{colspan:g.value.length},[d(fe,{name:"v-data-table-headers",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),Ne=k({groupBy:{type:Array,default:()=>[]}},"data-table-group"),ee=Symbol.for("vuetify:data-table-group");function Oe(e,n,a){const t=W(new Set),l=x(()=>n.value.map(g=>({...g,order:g.order??!1})).concat(a.value));function r(g){return t.value.has(g.id)}function o(g){const i=new Set(t.value);r(g)?i.delete(g.id):i.add(g.id),t.value=i}function u(g){function i(c){const m=[];for(const b of c.items)b.type==="item"?m.push(b):m.push(...i(b));return m}return i({type:"group-header",items:g,id:"dummy",key:"dummy",value:"dummy",depth:0})}const f={sortByWithGroups:l,toggleGroup:o,opened:t,groupBy:n,extractRows:u,isGroupOpen:r};return B(ee,f),f}function te(){const e=_(ee);if(!e)throw new Error("Missing group!");return e}function Ae(e,n){if(!e.length)return[];const a=new Map;for(const t of e){const l=z(t.raw,n);a.has(l)||a.set(l,[]),a.get(l).push(t)}return a}function ae(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!n.length)return[];const l=Ae(e,n[0]),r=[],o=n.slice(1);return l.forEach((u,f)=>{const g=n[0],i=`${t}_${g}_${f}`;r.push({depth:a,id:i,key:g,value:f,items:o.length?ae(u,o,a+1,i):u,type:"group-header"})}),r}function ne(e,n){const a=[];for(const t of e)t.type==="group-header"?(t.value!=null&&a.push(t),(n.has(t.id)||t.value==null)&&a.push(...ne(t.items,n))):a.push(t);return a}function Ge(e,n,a){return{flatItems:x(()=>{if(!n.value.length)return e.value;const l=ae(e.value,n.value.map(r=>r.key));return ne(l,a.value)})}}const Le=F()({name:"VDataTableGroupHeaderRow",props:{item:{type:Object,required:!0}},setup(e,n){let{slots:a}=n;const{isGroupOpen:t,toggleGroup:l,extractRows:r}=te(),{isSelected:o,isSomeSelected:u,select:f}=R(),{columns:g}=H(),i=x(()=>r([e.item]));return()=>d("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[g.value.map(c=>{var m,b;if(c.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",y=()=>l(e.item);return((m=a["data-table-group"])==null?void 0:m.call(a,{item:e.item,count:i.value.length,props:{icon:h,onClick:y}}))??d(G,{class:"v-data-table-group-header-row__column"},{default:()=>[d(D,{size:"small",variant:"text",icon:h,onClick:y},null),d("span",null,[e.item.value]),d("span",null,[Q("("),i.value.length,Q(")")])]})}if(c.key==="data-table-select"){const h=o(i.value),y=u(i.value)&&!h,w=v=>f(i.value,v);return((b=a["data-table-select"])==null?void 0:b.call(a,{props:{modelValue:h,indeterminate:y,"onUpdate:modelValue":w}}))??d("td",null,[d(j,{modelValue:h,indeterminate:y,"onUpdate:modelValue":w},null)])}return d("td",null,null)})])}}),He=k({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"v-data-table-expand"),le=Symbol.for("vuetify:datatable:expanded");function Re(e){const n=I(e,"expandOnClick"),a=C(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,f){const g=new Set(a.value);f?g.add(u.value):g.delete(u.value),a.value=g}function l(u){return a.value.has(u.value)}function r(u){t(u,!l(u))}const o={expand:t,expanded:a,expandOnClick:n,isExpanded:l,toggleExpand:r};return B(le,o),o}function oe(){const e=_(le);if(!e)throw new Error("foo");return e}const U=ve({name:"VDataTableRow",props:{item:Object},setup(e,n){let{slots:a}=n;const{isSelected:t,toggleSelect:l}=R(),{isExpanded:r,toggleExpand:o}=oe(),{columns:u}=H();L(()=>d("tr",{class:["v-data-table__tr"]},[!u.value.length&&d(G,{key:"no-data"},a),e.item&&u.value.map((f,g)=>d(G,{align:f.align,fixed:f.fixed,fixedOffset:f.fixedOffset,lastFixed:f.lastFixed,noPadding:f.key==="data-table-select"||f.key==="data-table-expand",width:f.width},{default:()=>{var b,h;const i=e.item,c=`item.${f.key}`,m={item:e.item,columns:u.value,isSelected:t,toggleSelect:l,isExpanded:r,toggleExpand:o};return a[c]?a[c](m):f.key==="data-table-select"?((b=a["item.data-table-select"])==null?void 0:b.call(a,m))??d(j,{modelValue:t([i]),onClick:()=>l(i)},null):f.key==="data-table-expand"?((h=a["item.data-table-expand"])==null?void 0:h.call(a,m))??d(D,{icon:r(i)?"$collapse":"$expand",size:"small",variant:"text",onClick:()=>o(i)},null):i.columns[f.key]}}))]))}}),Me=F()({name:"VDataTableRows",props:{loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number},emits:{"click:row":(e,n)=>!0},setup(e,n){let{emit:a,slots:t}=n;const{columns:l}=H(),{expandOnClick:r,toggleExpand:o,isExpanded:u}=oe(),{isSelected:f,toggleSelect:g}=R(),{toggleGroup:i,isGroupOpen:c}=te(),{t:m}=Y();return L(()=>{var b,h;return d(A,null,[e.loading?((b=t.loading)==null?void 0:b.call(t))??d(U,{class:"v-data-table-rows-no-data",key:"loading"},{default:()=>[m(e.loadingText)]}):void 0,!e.loading&&!e.items.length&&!e.hideNoData&&(((h=t["no-data"])==null?void 0:h.call(t))??d(U,{class:"v-data-table-rows-no-data",key:"no-data"},{default:()=>[m(e.noDataText)]})),e.items.map((y,w)=>{var v;return y.type==="group-header"?t["group-header"]?t["group-header"]({index:w,item:y,columns:l.value,isExpanded:u,toggleExpand:o,isSelected:f,toggleSelect:g,toggleGroup:i,isGroupOpen:c}):d(Le,{key:`group-header_${y.id}`,item:y},t):d(A,null,[t.item?t.item({index:w,item:y,columns:l.value,isExpanded:u,toggleExpand:o,isSelected:f,toggleSelect:g}):d(U,{key:`item_${y.value}`,onClick:s=>{r.value&&o(y.value),a("click:row",s,{item:y})},item:y},t),u(y)&&((v=t["expanded-row"])==null?void 0:v.call(t,{item:y,columns:l.value}))])})])}),{}}});const Ue=k({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"v-data-table-paginate"),re=Symbol.for("vuetify:data-table-pagination");function We(e,n){const a=C(e,"page",void 0,g=>+(g??1)),t=C(e,"itemsPerPage",void 0,g=>+(g??10)),l=x(()=>+(e.itemsLength??n.value.length)),r=x(()=>t.value===-1?0:t.value*(a.value-1)),o=x(()=>t.value===-1?l.value:Math.min(l.value,r.value+t.value)),u=x(()=>t.value===-1||l.value===0?1:Math.ceil(l.value/t.value)),f={page:a,itemsPerPage:t,startIndex:r,stopIndex:o,pageCount:u,itemsLength:l};return B(re,f),f}function ze(){const e=_(re);if(!e)throw new Error("Missing pagination!");return e}function je(e,n,a,t){return{paginatedItems:x(()=>t.value<=0?e.value:e.value.slice(n.value,a.value))}}const qe=F()({name:"VDataTableFooter",props:{prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},setup(e,n){let{slots:a}=n;const{t}=Y(),{page:l,pageCount:r,startIndex:o,stopIndex:u,itemsLength:f,itemsPerPage:g}=ze(),i=x(()=>e.itemsPerPageOptions.map(c=>({...c,title:t(c.title)})));return()=>{var c;return d("div",{class:"v-data-table-footer"},[(c=a.prepend)==null?void 0:c.call(a),d("div",{class:"v-data-table-footer__items-per-page"},[d("span",null,[t(e.itemsPerPageText)]),d(me,{items:i.value,modelValue:g.value,"onUpdate:modelValue":m=>g.value=Number(m),density:"compact",variant:"outlined","hide-details":!0},null)]),d("div",{class:"v-data-table-footer__info"},[d("div",null,[t(e.pageText,f.value?o.value+1:0,u.value,f.value)])]),d("div",{class:"v-data-table-footer__pagination"},[d(D,{icon:e.firstIcon,variant:"plain",onClick:()=>l.value=1,disabled:l.value===1,"aria-label":t(e.firstPageLabel)},null),d(D,{icon:e.prevIcon,variant:"plain",onClick:()=>l.value=Math.max(1,l.value-1),disabled:l.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&d("span",{key:"page",class:"v-data-table-footer__page"},[l.value]),d(D,{icon:e.nextIcon,variant:"plain",onClick:()=>l.value=Math.min(r.value,l.value+1),disabled:l.value===r.value,"aria-label":t(e.nextPageLabel)},null),d(D,{icon:e.lastIcon,variant:"plain",onClick:()=>l.value=r.value,disabled:l.value===r.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),Ke=k({...ye({itemValue:"id"})},"v-data-table-item");function Qe(e,n){const{items:a}=be(e);return{items:x(()=>a.value.map(l=>({...l,type:"item",columns:n.value.reduce((r,o)=>(r[o.key]=he(l.raw,o.value??o.key),r),{})})))}}function Ye(e){let{page:n,itemsPerPage:a,sortBy:t,groupBy:l}=e;const r=pe("VDataTable"),o=x(()=>({page:n.value,itemsPerPage:a.value,sortBy:t.value,groupBy:l.value}));O(t,()=>{n.value=1},{deep:!0}),O(a,()=>{n.value=1});let u=null;O(o,()=>{xe(u,o.value)||(r.emit("update:options",o.value),u=o.value)},{deep:!0,immediate:!0})}const Ze=k({...Ke(),...Te(),hideNoData:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},height:[String,Number],width:[String,Number],fixedHeader:Boolean,fixedFooter:Boolean},"v-data-table"),Xe=F()({name:"VDataTable",props:{search:String,...Ze(),...He(),...Ne(),...De(),...Ce(),...Ue(),...we()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"click:row":(e,n)=>!0},setup(e,n){let{emit:a,slots:t}=n;const l=C(e,"groupBy"),{columns:r}=Ie(e,{groupBy:l,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:o}=Qe(e,r),u=x(()=>r.value.map(S=>"columns."+S.key)),{filteredItems:f}=Se(e,o,I(e,"search"),{filterKeys:u}),{sortBy:g}=Be(e),{sortByWithGroups:i,opened:c,extractRows:m}=Oe(e,l,g),{sortedItems:b}=$e(f,i,r),{flatItems:h}=Ge(b,l,c),{page:y,itemsPerPage:w,startIndex:v,stopIndex:s}=We(e,h),{paginatedItems:p}=je(h,v,s,w),P=x(()=>m(p.value));return Ve(e,P),Re(e),Ye({page:y,itemsPerPage:w,sortBy:g,groupBy:l}),ke({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText")}}),L(()=>d(Pe,{class:["v-data-table",{"v-data-table--show-select":e.showSelect}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height},{top:t.top,default:t.default??(()=>{var S,E,T,$;return d(A,null,[(S=t.colgroup)==null?void 0:S.call(t,{columns:r}),d("thead",null,[t.headers?t.headers():d(Ee,{sticky:e.fixedHeader,multiSort:e.multiSort},t)]),(E=t.thead)==null?void 0:E.call(t),d("tbody",null,[t.body?t.body():d(Me,{items:p.value,"onClick:row":(N,M)=>a("click:row",N,M)},t)]),(T=t.tbody)==null?void 0:T.call(t),($=t.tfoot)==null?void 0:$.call(t)])}),bottom:t.bottom??(()=>d(qe,null,{prepend:t["footer.prepend"]}))})),{}}});export{Xe as V};
