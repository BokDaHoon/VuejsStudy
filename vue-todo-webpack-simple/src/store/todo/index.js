import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { FILTER } from '../../constant.js'


const state = {
  todos: [],
  showState : FILTER.ALL,
  newTodoId : 0,
}

export default {
  state,
  actions,
  mutations,
  getters
}
