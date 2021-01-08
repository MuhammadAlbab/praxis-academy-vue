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
    setAuthentication(state, payload) {
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


    login(store, payload) {
     store.commit('loginAdmin', payload)
    }
  },
  getters:{
  },
  modules: {
  }
})
