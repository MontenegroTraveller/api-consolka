import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createStore from './store';

import LoginPage from './components/LoginPage/LoginPage';
import ConsolePage from './components/ConsolePage/ConsolePage';

const {store, persistor} = createStore();

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/console">
              <ConsolePage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
