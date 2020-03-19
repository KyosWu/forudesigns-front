const state = {
  isMultiple: true,
  isSingle: false
}

const getters = {
  isMultiple: state => state.isMultiple,
  isSingle: state => state.isSingle
}

const mutations = {
  MULTIPLE (state, params) {
    state.isMultiple = params
  },
  SINGLE (state, params) {
    state.isSingle = params
  }
}

const actions = {
  // list-total-wrap
  set_multiple (store, params) {
    store.commit('MULTIPLE', params)
  },
  set_single (store, params) {
    store.commit('SINGLE', params)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
