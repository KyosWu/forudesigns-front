// import api from '../../api/viewed'
import {
  SHOW_MODEL,
  SHOW_MODEL_LOGIN_OR_REGISTER,
  ISTOP,
  ISHALF,
  ISMOBILE
} from '../mutation-types'

const state = {
  // 显示通用model层
  isShowModel: false,
  isShowLoginOrRegisterModel: false,
  //返回顶部
  isTop: '',
  // 超过页面一半距离
  isHalf: '',
  // 移动端
  isMobile: ''
}

const getters = {
  isShowModel: state => state.isShowModel,
  isShowLoginOrRegisterModel: state => state.isShowLoginOrRegisterModel,
  isTop: state => state.isTop,
  isHalf: state => state.isHalf,
  isMobile: state => state.isMobile
}

const mutations = {
  [SHOW_MODEL] (state, data) {
    state.isShowModel = data
  },
  [SHOW_MODEL_LOGIN_OR_REGISTER] (state, data) {
    state.isShowLoginOrRegisterModel = data
  },
  [ISTOP] (state, params) {
    state.isTop = params
  },
  [ISHALF] (state, params) {
    state.isHalf = params
  },
  [ISMOBILE](state, params) {
    state.isMobile = params
  },
}

const actions = {
  ShowModel (store, params) {
    store.commit(SHOW_MODEL, params)
  },
  ShowModel_LoginOrRegister (store, params) {
    store.commit(SHOW_MODEL_LOGIN_OR_REGISTER, params)
  },
  is_Top (store, params) {
    store.commit('ISTOP', params)
  },
  is_Half (store, params) {
    store.commit('ISHALF', params)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
