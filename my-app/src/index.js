import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';

console.log(Router);

ReactDOM.render(
    <Provider store={"somethingthatneeeeedstofilledinlater"}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
