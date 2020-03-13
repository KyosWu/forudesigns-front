// import api from '../../api/viewed'
import {
  SHOW_MODEL,
  SHOW_MODEL_LOGIN_OR_REGISTER
} from '../mutation-types'

const state = {
  // 显示通用model层
  isShowModel: false,
  isShowLoginOrRegisterModel: false
}

const getters = {
  isShowModel: state => state.isShowModel,
  isShowLoginOrRegisterModel: state => state.isShowLoginOrRegisterModel
}

const mutations = {
  [SHOW_MODEL] (state, data) {
    state.isShowModel = data
  },
  [SHOW_MODEL_LOGIN_OR_REGISTER] (state, data) {
    state.isShowLoginOrRegisterModel = data
  }
}

const actions = {
  ShowModel (store, params) {
    store.commit(SHOW_MODEL, params)
  },
  ShowModel_LoginOrRegister (store, params) {
    store.commit(SHOW_MODEL_LOGIN_OR_REGISTER, params)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
