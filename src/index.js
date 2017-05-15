import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';
import App from './containers/AppContainer.jsx';
import FormContainer from './containers/FormContainer';

const root = document.getElementById('root');

const RenderStuff = (<Provider store = {store}>
   <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ FormContainer } />
    </Route>
   </Router>
</Provider>);

render(RenderStuff, root);
