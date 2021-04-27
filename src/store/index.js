import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state stores propertys that have values we can use globally
  state: {
    compSelection: '',
    userSelection: '',
    winsTotal: 0,
    lossTotal: 0,
  },
  mutations: {
  },
  actions: {
  },
  //each function returns a state value and we can call that function with out calling the state property
  getters: {
    getComputer: function(state){
      return state.compSelection
    },
    getUser: function(state){
      return state.userSelection
    },
    getLosses: function(state){
      return state.lossTotal
    },
    getWins: function(state){
      return state.winsTotal
    }
  }
})
