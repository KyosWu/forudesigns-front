// import { getCookie, setCookie } from '@/pages/logreg/api/cookie'
// import axios from 'axios'

export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    let isClient = process.client
    // if (isClient) {
    //   let currentUrl = location.href
    //   if (currentUrl.indexOf('access_token=') !== -1) {
    //     let wechattoken = currentUrl.split('access_token=')[1]
    //     wechattoken = wechattoken.split('&')[0]
    //     setCookie('token', wechattoken, 5)
    //   }
    //   let token = getCookie('token')
    //   if (token) {
    //     store.state.user.userinfo.token = token
    //     axios
    //       .get('https://api.ass.net/pub/api/user_info', {
    //         params: {
    //           token
    //         }
    //       })
    //       .then(res => {
    //         res = res.data
    //         if (res.code == 0) {
    //           res = res.data
    //           res.headImg = res.headImg.replace('http:', 'https:')
    //           store.state.user.userinfo = Object.assign(
    //             {},
    //             store.state.user.userinfo,
    //             res
    //           )
    //         }
    //       })
    //       .catch(error => console.log(error))
    //   }
    // }
    next()
  })
}
