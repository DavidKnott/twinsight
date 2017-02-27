import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import {browserHistory} from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes();

ReactDOM.render(
  <App  history={browserHistory}
        routes={routes}/>,
  document.getElementById('root')
);
