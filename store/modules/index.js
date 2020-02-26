// import api from '../../api/index'
import {
  SHOW_MODEL,
} from '../mutation-types'

const state = {
  // 显示通用model层
  isShowModel: false,
}

const getters = {
  isShowModel: state => state.isShowModel,
}

const mutations = {
  [SHOW_MODEL] (state, data) {
    state.isShowModel = data
  }
}

const actions = {
  ShowModel (store, params) {
    store.commit(SHOW_MODEL, params)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
