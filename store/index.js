import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules'

Vue.use(Vuex)

const modules = {
  index,
}

const store = () => {  // 返回store为一个函数就行了
  return new Vuex.Store({
    modules
  })
}

export default store
