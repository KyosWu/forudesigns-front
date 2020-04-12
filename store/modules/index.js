import api from '../../api/index'

import {
  SHOW_MODEL,
  SHOW_MODEL_LOGIN_OR_REGISTER,
  ISTOP,
  ISHALF,
  ISMOBILE,
  SETBANNER,
  SETCATPRIMARY,
  FEATURED
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
  isMobile: '',
  // 轮播图
  banner: [],
  // 商品一级分类
  categoryPri: [],
  //  创客作品展示
  featured: []
}

const getters = {
  isShowModel: state => state.isShowModel,
  isShowLoginOrRegisterModel: state => state.isShowLoginOrRegisterModel,
  isTop: state => state.isTop,
  isHalf: state => state.isHalf,
  isMobile: state => state.isMobile,
  bannerList: state => state.banner,
  categoryPri: state => state.categoryPri,
  featured: state => state.featured
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
  [SETBANNER](state, params) {
    state.banner = params
  },
  [SETCATPRIMARY](state, params) {
    state.categoryPri = params
  },
  [FEATURED](state, params) {
    state.featured = params
  }
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
  },
  // 获取商品banner轮播图
  getBanner (store, params) {
    return api.getBanner()
  },
  // 获取一级分类
  getCatPrimary (store, params) {
    return api.getCatPrimary()
  },
  // 创客作品展示
  getArtistFeatured (store, params) {
    return api.getArtistFeatured()
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
