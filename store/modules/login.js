import api from '../../api/login'

import {
  saveSessionAccessToken,
} from '../../utils/cache'

import {Message} from 'element-ui'

import {
} from '../mutation-types'

const state = {
  token: '',
  userId: '',
  userInfo: [],
  user: [],
  isLogin: false
}

const getters = {
  // isShowModel: state => state.isShowModel,
  Token: state => state.token,
  UserId: state => state.userId,
  userInfo: state => state.userInfo
}

const mutations = {
  TOKEN (state, data) {
    // console.log(data)
    state.token = data
  },
  // 用户ID
  USERID (state, data) {
    state.userId = data
  },
  // 用户信息
  USERINFO (state, data) {
    state.user = data.user
    state.Token = data.token
    state.isLogin = true
    // 存入storage
    saveSessionAccessToken(state.token, 1)
  }
}

const actions = {
  toLogin (store, params) {
    return api.LOGIN(params).then(async res => {
      if (res.status === 200) {
        Message.success('登录成功')
        await store.commit('USERINFO', res.data)
        this.$router.push({path:'/'})
      }}
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
  },
  toRegister (store, params) {
    return api.REGISTER(params).then(async res => {
      console.log(res)
      if (res.status === 200) {
        Message.success('注册成功')
        await store.commit('USERINFO', res.data)
        this.$router.push({path: '/'})
      }
    })
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
