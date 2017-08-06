import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
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
      <div>
        <Route  path="/" component={App} />
        <Route  path="/SignUp" component={SignUp} />
        <Route  path="/LogIn" component={LogIn} />
        </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
