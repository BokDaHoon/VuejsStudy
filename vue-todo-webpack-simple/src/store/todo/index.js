import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import { FILTER } from '../../constants.js'

const state = {
  todos: [],
  filter: FILTER.ALL,
}

export default {
    state,
    actions,
    mutations,
    getters
}
