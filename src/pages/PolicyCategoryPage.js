import React from 'react';
import PolicyCategoryList from '../components/policy_categories/policy_category_list';
import { loadPolicyCategories } from '../actions/policyCategoryActions';
import { connect } from 'react-redux';
import Spinner from '../components/shared/Spinner';

class PolicyCategoryPage extends React.Component{
  render() {
    return (
      <div>
        {this.props.isLoading ? <Spinner /> : <PolicyCategoryList policyCategories={this.props.policyCategories} />}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    policyCategories: state.policyCategories.categories,
    isLoading: state.policyCategories.isLoading,
    hasError: state.policyCategories.hasError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPolicyCategories: dispatch(loadPolicyCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PolicyCategoryPage);
