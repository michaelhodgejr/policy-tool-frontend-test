import React from 'react';
import PropTypes from 'prop-types';
import PolicyCategoryList from '../components/policy_categories/policy_category_list';
import { loadPolicyCategories } from '../actions/policyCategoryActions';
import { connect } from 'react-redux';

class PolicyCategoryPage extends React.Component{
  render() {
     return(
       <PolicyCategoryList policyCategories={this.props.policyCategories} />
     )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    policyCategories: state.policyCategories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPolicyCategories: dispatch(loadPolicyCategories())
  }
}

PolicyCategoryPage.propTypes = {
  policyCategories: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PolicyCategoryPage);
