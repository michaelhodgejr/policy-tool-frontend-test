import React from 'react';
import { Switch } from 'react-router-dom'
import MainLayoutRoute from './routes/MainLayoutRoute';
import DashboardPage from './pages/DashboardPage';
import PolicyCategoryPage from './pages/PolicyCategoryPage';

const Routes = () => {
  return(
    <Switch>
      <MainLayoutRoute exact path="/" component={DashboardPage} />
      <MainLayoutRoute exact path="/policy_categories" component={PolicyCategoryPage} />
    </Switch>
  )
};

export default Routes;
