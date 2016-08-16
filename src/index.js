import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import BoardsDashboard from './components/BoardsDashboard';

const content = document.getElementById('content');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/(:board)" component={BoardsDashboard}>
    </Route>
  </Router>,
  content);
