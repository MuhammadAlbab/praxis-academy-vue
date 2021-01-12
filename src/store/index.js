import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [
      {
      name: 'Aku Anak Frontend',
      address: 'Jl. Kaliurang',
      program: 'Frontend',
      isApproved: true
    },
    {
      name: 'Aku Anak Frontend 2',
      address: 'Jl. Tamsis',
      program: 'Frontend',
      isApproved: false
    },
    {
      name: 'Aku Anak Backend',
      address: 'Jl. Cinta',
      program: 'Backend',
      isApproved: true
    },
    {
      name: 'Aku Anak Backend 2',
      address: 'Jl. Sayang',
      program: 'Backend',
      isApproved: false
    },
    {
      name: 'Aku Anak Mobile',
      address: 'Jl. Kenangan',
      program: 'Mobile',
      isApproved: true
    },
    {
      name: 'Aku Anak Mobile 2',
      address: 'Jl. Sesat',
      program: 'Mobile',
      isApproved: false
    },
   ],

    admin: {
      username : 'admin',
      password : 'admin123',
      authenticated : false
    },

    kuota: {
      frontend: 5,
      backend: 5,
      mobile: 5
    }
  },
  
  mutations:{
    addingUser(state, payload){
      state.user.push(payload)
    },
    deletingUser(state, payload){
      for (let i = 0; state.user.length; i++){
        if(state.user[i].name === payload){
          state.user.splice(i, 1);
          break;
        }
      }
    },
    changeStat(state, payload){
      for (let i = 0; state.user.length; i++){
        if(state.user[i].name === payload){
          state.user[i].isApproved = !state.user[i].isApproved 
          break;
        }
      }
    },
    loginAdmin(state, payload){
      state.admin = payload
    },
    getAuthentication(state, payload) {
      state.authenticated = payload
    }
  },
  actions:{
    addedUser(store, payload){
      store.commit('addingUser', payload)
    },
    deletedUser(store, payload){
      store.commit('deletingUser', payload)
    },
    changedStat(store, payload){
      store.commit('changeStat', payload)
    },
    loggedAdmin(store, payload) {
      store.commit('loginAdmin', payload)
    },
    getAuthenticated(store, payload) {
      store.commit('getAuthentication', payload)
    }
  },
  getters: {
    //Get data frontend, backend, mobile
    getFrontend(state){
      return state.user.filter(i => i.program === 'Frontend')
    },
    getBackend(state){
      return state.user.filter(i => i.program === 'Backend')
    },
    getMobile(state){
      return state.user.filter(i => i.program === 'Mobile')
    },


    //Get Pending
    getPendingFrontend(state, getters){
      return getters.getFrontend.filter(i => i.isApproved === false)
    },

    getPendingBackend(state, getters){
      return getters.getBackend.filter(i => i.isApproved === false)
    },

    getPendingMobile(state, getters){
      return getters.getMobile.filter(i => i.isApproved === false)
    },
    
    //Get Approved
    getApprovedFrontend(state, getters){
      return getters.getFrontend.filter(i => i.isApproved === true)
    },

    getApprovedBackend(state, getters){
      return getters.getBackend.filter(i => i.isApproved === true)
    },

    getApprovedMobile(state, getters){
      return getters.getMobile.filter(i => i.isApproved === true)
    },

    //Get kuota frontend, backend, mobile
    getKuotaFrontend(state, getters){
      return state.kuota.frontend - getters.getApprovedFrontend.length
    },

    getKuotaBackend(state, getters){
      return state.kuota.backend - getters.getApprovedBackend.length
    },

    getKuotaMobile(state, getters){
      return state.kuota.mobile - getters.getApprovedMobile.length
    },
  },

  modules: {  
  }
})
