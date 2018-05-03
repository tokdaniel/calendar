import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';

export const history = createBrowserHistory();
const router = routerMiddleware(history);
const epic = createEpicMiddleware(rootEpic);

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(router, epic),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
