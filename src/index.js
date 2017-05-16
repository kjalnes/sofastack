import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';
import App from './containers/AppContainer.jsx';
import ModelFormContainer from './containers/ModelFormContainer';

const root = document.getElementById('root');

const RenderStuff = (<Provider store = {store}>
   <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ ModelFormContainer } />
    </Route>
   </Router>
</Provider>);

render(RenderStuff, root);
