import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(createPersistedState)

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'wujk',
      storage: window.sessionStorage,
      // paths: [login],
      reducer(val) {
        return {
          // 只储存login.state中的token
          token: val.login.token
        }
      }
    })(store)
  })
}
