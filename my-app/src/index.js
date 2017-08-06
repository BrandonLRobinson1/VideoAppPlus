import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
  // BrowserHistory
} from 'react-router-dom';

// import * as miccheck from 'react-router-dom';
// console.log(miccheck)
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
