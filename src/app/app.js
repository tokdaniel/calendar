import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from 'screens';
import { Today } from 'utility';

import 'assets/styles/main';
import { store, history } from './store';

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Switch>
        <Route exact path="/" component={ Today }/>
        <Route path="/:year/:month" component={ Home }/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);
