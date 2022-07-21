import Vue from 'vue'
import Vuex from 'vuex'
import CardItem from './modules/CardItem'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CardItem
  }
})
