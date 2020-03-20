const state = {
  isAddress: false,
  isMessage: false,
  isManage: false,
  isConfirm: false,
  tableIndex: 0
}

const getters = {
  isAddress: state => state.isAddress,
  isMessage: state => state.isMessage,
  isManage: state => state.isManage,
  isDefault: state => state.isDefault,
  isConfirm: state => state.isConfirm,
  tableIndex: state => state.tableIndex
}

const mutations = {
  ISADDRESS (state, params) {
    state.isAddress = params
  },
  ISMESSAGE (state, params) {
    if (params[1]) {
      state.isMessage = params[0]
      state.tableIndex = params[1]
    } else {
      state.isMessage = params[0]
    }
  },
  ISMANAGE (state, params) {
    state.isManage = params
  },
  ISDEFAULT (state, params) {
    state.tableIndex = params
  },
  ISCONFIRM (state, params) {
    state.isConfirm = params
  },
}

const actions = {
  // list-total-wrap
  set_address (store, params) {
    store.commit('ISADDRESS', params)
  },
  set_message (store, params) {
    store.commit('ISMESSAGE', params)
  },
  set_manage (store, params) {
    store.commit('ISMANAGE', params)
  },
  set_default (store, params) {
    store.commit('ISDEFAULT', params)
  },
  set_confirm (store, params) {
    store.commit('ISCONFIRM', params)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
