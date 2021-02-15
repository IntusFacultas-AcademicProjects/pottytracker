import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FormView from './views/FormView';
import { ToastManager } from './components/ToastManager';
import PageLayout from './components/PageLayout';

const App = () => (
  <Router>
    <PageLayout>
      <ToastManager>
        <Switch>
          <Route path="/">
            <FormView />
          </Route>
        </Switch>
      </ToastManager>
    </PageLayout>
  </Router>
);

export default App;
