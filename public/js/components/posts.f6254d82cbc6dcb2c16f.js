(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"00RN":function(t,a,e){"use strict";e.r(a);var s={props:["post"]},n=e("KHd+"),l={data:function(){return{current_page:1,posts:[],last_page:null,next_page:null,prev_page:null}},methods:{getPage:function(t){var a=this;this.$http.get("/api/posts?page="+t).then((function(t){a.posts=t.data.data,a.curent_page=t.data.meta.curent_page,a.next_page=t.data.links.next_page,a.prev_page=t.data.links.prev_page,a.last_page=t.data.meta.last_page})),window.scrollTo(0,0)}},components:{PostCard:Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"my-8 mx-auto",attrs:{elevation:24,"max-width":"640"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.post.cover}},[e("v-card-title",{staticClass:"display-2 font-weight-bold"},[t._v(t._s(t.post.title))])],1),t._v(" "),e("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(t.post.publishedAt))]),t._v(" "),e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v(t._s(t.post.description))])]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{block:"",text:"",color:"orange",to:{name:"post",params:{postId:t.post.id}}}},[t._v("Подробней")])],1)],1)}),[],!1,null,null,null).exports},mounted:function(){this.getPage(1)}},r=Object(n.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"text-center display-4 my-8"},[t._v("Новости")]),t._v(" "),t._l(t.posts,(function(t){return e("post-card",{key:t.slug,attrs:{post:t}})})),t._v(" "),e("div",{staticClass:"text-center"},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-container",{staticClass:"max-width"},[e("v-pagination",{staticClass:"my-4",attrs:{next:5,length:t.last_page,"total-visible":7},on:{input:t.getPage},model:{value:t.current_page,callback:function(a){t.current_page=a},expression:"current_page"}})],1)],1)],1)],1)],1)],2)}),[],!1,null,null,null);a.default=r.exports}}]);