(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{408:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(48),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,o=t.$content,e.prev=1,e.next=4,o("posts",{deep:!0}).where({tags:{$contains:n.slug}}).fetch();case 4:return c=e.sent,e.abrupt("return",{posts:c});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Cool nuxt blog tags"}],link:[{rel:"canonical",href:"https://nuxt-blog.com/tags"}]}}}),c=n(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Tags: "+t._s(t.$route.params.slug))]),t._v(" "),t._l(t.posts,(function(e){return n("div",{key:e.dir},[n("h3",{staticClass:"heading"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("p",{staticClass:"tags"},t._l(e.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v("\n         \n      ")],1)})),0),t._v(" "),n("nuxt-link",{attrs:{to:e.dir}},[t._v("Read more")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);