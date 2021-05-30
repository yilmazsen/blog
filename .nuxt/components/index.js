import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as PostCard } from '../../components/PostCard.vue'
export { default as VImg } from '../../components/VImg.vue'
export { default as VTags } from '../../components/VTags.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPostCard = import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const LazyVImg = import('../../components/VImg.vue' /* webpackChunkName: "components/v-img" */).then(c => wrapFunctional(c.default || c))
export const LazyVTags = import('../../components/VTags.vue' /* webpackChunkName: "components/v-tags" */).then(c => wrapFunctional(c.default || c))
