
module.exports = {
  mode: 'universal',
  target: 'serverheroku logs --tail',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Produits artisanaux et Cuisine de terroir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/cvz2sdi.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: '~/components/default/loading.vue',

  /*
  ** Global CSS
  */
  css: [
  ],

  serverMiddleware: [
    { path: '/api/index', handler: '~/api/index' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client"
    },
    { src: '~/plugins/vee-validate', 
    ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi'
  ],

  strapi: {
    url: 'https://my-terroir-admin.herokuapp.com',
    entities: ['Articles']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
