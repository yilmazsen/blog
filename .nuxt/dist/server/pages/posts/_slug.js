exports.ids = [3];
exports.modules = {

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_slug.vue?vue&type=template&id=f0258ab4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post"},[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h1> <p class=\"lead\">"+_vm._ssrEscape(_vm._s(_vm.post.description))+"</p> "),_c('nuxt-content',{attrs:{"document":_vm.post}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/_slug.vue?vue&type=template&id=f0258ab4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_slug.vue?vue&type=script&lang=js&
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
      const postPath = `/posts/${params.slug}`;
      const [post] = await $content("posts", {
        deep: true
      }).where({
        dir: postPath
      }).fetch();
      return {
        post
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
      title: this.post.title,
      meta: [{
        hid: "description",
        name: "description",
        content: this.post.description
      }],
      link: [{
        rel: "canonical",
        href: "https://nuxt-blog.com/" + this.post.dir
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/posts/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/posts/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "50d09c7e"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map