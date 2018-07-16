import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function policyCategoryReducer(state = initialState.policyCategories, action) {
  switch(action.type) {
    case types.LOAD_POLICY_CATEGORIES_SUCCESS: {
      return action.categories;
    }

    case types.LOAD_POLICY_CATEGORIES_ERROR: {
      return state;
    }

    default: {
      return state;
    }
  }
}
