import * as types from '../actions/actionTypes';
import policyApi from '../api/policyApi';

export function loadPolicyCategories() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return policyApi.getAllPolicyCategories().then(categories => {
      dispatch(loadPolicyCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPolicyCategoriesLoading() {
  return {type: types.LOAD_POLICY_CATEGORIES_SUCCESS};
}

export function loadPolicyCategoriesSuccess(categories) {
  return {type: types.LOAD_POLICY_CATEGORIES_SUCCESS, categories};
}

export function loadPolicyCategoriesError(error) {
  return {type: types.LOAD_POLICY_CATEGORIES_ERROR, error};
}
