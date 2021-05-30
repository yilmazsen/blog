import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  PostCard: () => import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c)),
  VImg: () => import('../../components/VImg.vue' /* webpackChunkName: "components/v-img" */).then(c => wrapFunctional(c.default || c)),
  VTags: () => import('../../components/VTags.vue' /* webpackChunkName: "components/v-tags" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
