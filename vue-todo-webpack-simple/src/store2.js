import Vue from 'vue'
import Vuex from 'vuex'
import {FILTER} from './constant'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [{ todoId: 1, todoMsg: "Test", state : FILTER.ACTIVE}],
  },
  getters: {
    doubleCounter: function (state) {
      return state.counter * 2;
    }
  },

});
