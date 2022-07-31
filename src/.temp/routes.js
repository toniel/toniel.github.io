const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/templates/Documentation.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/templates/Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/pages/Docs.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/tonilistiyo/Sites/toniel.github.io/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/Users/tonilistiyo/Sites/toniel.github.io/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/laravel-9-crud-1/",
    component: c4
  },
  {
    path: "/fibonacci-sequence-in-php/",
    component: c4
  },
  {
    path: "/docs/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
