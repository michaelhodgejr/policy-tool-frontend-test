import React from 'react';
import PropTypes from 'prop-types';
import PolicyCategoryList from '../components/policy_categories/policy_category_list';
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

PolicyCategoryPage.propTypes = {
  policyCategories: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
)(PolicyCategoryPage);
