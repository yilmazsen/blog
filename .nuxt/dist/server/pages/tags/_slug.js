exports.ids = [4];
exports.modules = {

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tags/_slug.vue?vue&type=template&id=d4ea46dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"posts"},[_vm._ssrNode("<h1>"+_vm._ssrEscape("Tags: "+_vm._s(_vm.$route.params.slug))+"</h1> "),_vm._l((_vm.posts),function(post){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h3 class=\"heading\">"+_vm._ssrEscape(_vm._s(post.title))+"</h3> <p>"+_vm._ssrEscape(_vm._s(post.description))+"</p> "),_vm._ssrNode("<p class=\"tags\">","</p>",_vm._l((post.tags),function(tag){return _vm._ssrNode("<span class=\"tag\">","</span>",[_c('nuxt-link',{attrs:{"to":("/tags/" + tag)}},[_vm._v(_vm._s(tag))]),_vm._ssrNode("\n         \n      ")],2)}),0),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":post.dir}},[_vm._v("Read more")])],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tags/_slug.vue?vue&type=template&id=d4ea46dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tags/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    params,
    error,
    $content
  }) {
    try {
      const posts = await $content("posts", {
        deep: true
      }).where({
        tags: {
          $contains: params.slug
        }
      }).fetch();
      return {
        posts
      };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found"
      });
    }
  },

  head() {
    return {
      title: "Tags",
      meta: [{
        hid: "description",
        name: "description",
        content: "Cool nuxt blog tags"
      }],
      link: [{
        rel: "canonical",
        href: "https://nuxt-blog.com/tags"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/tags/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var tags_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/tags/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tags_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5e6f2b71"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map