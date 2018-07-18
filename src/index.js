import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import { loadPolicyCategories } from './actions/policyCategoryActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage';
import PolicyCategoryPage from './pages/PolicyCategoryPage';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
loadPolicyCategories(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/policy_categories" component={PolicyCategoryPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
