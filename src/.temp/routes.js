const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/toni_el/project/toniel.github.io/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/home/toni_el/project/toniel.github.io/src/templates/Documentation.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/toni_el/project/toniel.github.io/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/toni_el/project/toniel.github.io/src/templates/Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/home/toni_el/project/toniel.github.io/src/pages/Docs.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/toni_el/project/toniel.github.io/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/toni_el/project/toniel.github.io/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/home/toni_el/project/toniel.github.io/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/what-i-ate-for-breakfast/",
    component: c4
  },
  {
    path: "/top-5-static-site-generators-in-vue/",
    component: c4
  },
  {
    path: "/vue-vs-react-comparison/",
    component: c4
  },
  {
    path: "/mac-pro-2019-review/",
    component: c4
  },
  {
    path: "/how-to-get-better-at-coding/",
    component: c4
  },
  {
    path: "/introduction-to-gridsome/",
    component: c4
  },
  {
    path: "/freelance-vs-full-time-work/",
    component: c4
  },
  {
    path: "/design-for-developers/",
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
