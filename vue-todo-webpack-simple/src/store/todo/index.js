import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { FILTER } from '../../constant'


const state = {
  todos: [],
  showState : FILTER.ALL,
}

export default {
  state,
  actions,
  mutations,
  getters
}
