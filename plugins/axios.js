import axios from 'axios'

const httpAxios = {}
httpAxios.install = function (Vue) {
// 创建实例时设置配置的默认值
  const instance = axios.create({
    baseURL: '/api'
  })

  // 覆写库的超时默认值
  // 现在，在超时前，所有请求都会等待 2.5 秒
  instance.defaults.timeout = 2500

  Vue.prototype.$axios = instance
}
// export default httpHelper
export default httpAxios
