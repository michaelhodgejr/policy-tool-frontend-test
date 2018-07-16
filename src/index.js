import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers/rootReducer'
import './index.css';
import { loadPolicyCategories } from './actions/policyCategoryActions';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage';
import PolicyCategoryPage from './pages/PolicyCategoryPage';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadPolicyCategories());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/policy_categories" component={DashboardPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
