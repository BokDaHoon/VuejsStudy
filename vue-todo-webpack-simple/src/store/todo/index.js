import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { FILTER } from '../../constants';

const state = {
  todos: [],
  filter: FILTER.ALL,
}

export default {
  state,
  actions,
  mutations,
  getters,
}
