
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/js/flexible.js", type: 'text/javascript', charset: 'utf-8'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#ff6e7c' },
  // 禁用默认进度条，改用nprogress，免冲突
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.css',
    { src: "swiper/dist/css/swiper.css" }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // nprogress 加载进度条
    {src:'@/plugins/loading', ssr:false },
    '@/plugins/element-ui',
    '@/plugins/vue-lazyload',
    // '@/plugins/vue-notifications',
    { src: "@/plugins/vue-swiper.js", ssr: false },

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
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/css/public.scss']
    // less: './assets/css/variables.less'
    // sass: ...
  },
  // axios配置
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  // 代理
  proxy: {
    '/api': {
      target: 'http://localhost:4444/api', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', //将 /api 替换掉
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: [
      require("postcss-px2rem")({
        remUnit: 192
      }),
      require('autoprefixer')
    ],
    vendor: ['axios'] // 为防止重复打包
  }
}
