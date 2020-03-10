import api from '../../api/login'
// import {
//   LocalStorage,
//   saveAccessToken,
//   getAccessToken,
//   removeAccessToken
// } from '../../api/cache'

import {

} from '../mutation-types'

const state = {
  token: '',
  userId: '',
  userInfo: []
}

const getters = {
  // isShowModel: state => state.isShowModel,
  Token: state => state.token,
  UserId: state => state.userId,
  userInfo: state => state.userInfo
}

const mutations = {
  // [LOGIN] (state, data) {
  //   state.isShowModel = data
  // }
  TOKEN (state, data) {
    // console.log(data)
    state.token = data
  },
  USERID (state, data) {
    state.userId = data
  },
  USERINFO (state, data) {
    state.userInfo = data
  }
}

const actions = {
  // 暂废弃 axios api 相关
  toLogin (store, params) {
    return api.LOGIN(params).then(
      res =>
        // token 存到state
        store.commit('TOKEN', res)
    )
  },
  // 存储用户token
  saveToken (store, params) {
    store.commit('TOKEN', params)
  },
  // 存储用户id
  saveUserId (store, params) {
    store.commit('USERID', params)
  },
  // 存储用户基本信息
  saveUserInfo (store, params) {
    store.commit('USERINFO', params)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
