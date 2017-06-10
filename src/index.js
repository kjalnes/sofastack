import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import App from './containers/AppContainer.jsx';
import ModelDetailContainer from './containers/ModelDetailContainer';
import SidebarContainer from './containers/SidebarContainer';

const root = document.getElementById('root');

const RenderStuff = (<Provider store = {store}>
   <Router history={ browserHistory }>
    <Route path="/" component={ App }>
        <Route path="/:id" component={ ModelDetailContainer } />
    </Route>
   </Router>
</Provider>);

render(RenderStuff, root);
