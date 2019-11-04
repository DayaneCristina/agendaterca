import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
