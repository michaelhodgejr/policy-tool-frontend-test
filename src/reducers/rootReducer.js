import {combineReducers} from 'redux';
import policyCategories from './policyCategoryReducer';

const rootReducer = combineReducers({
  policyCategories
})

export default rootReducer;
