import * as types from '../actions/actionTypes';
import initialState from './initialState';

const policyCategoryReducer = (state = initialState.policyCategories, action) => {

  switch(action.type) {
    case types.LOAD_POLICY_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case types.LOAD_POLICY_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isLoading: false
      }
    case types.LOAD_POLICY_CATEGORIES_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error
      }
    default:
      return state;
  }
}

export default policyCategoryReducer;
