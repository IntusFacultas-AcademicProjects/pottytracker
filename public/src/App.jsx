import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FormView from './views/FormView';
import { ToastManager } from './components/ToastManager';
import PageLayout from './components/PageLayout';

function App() {
  return (
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
}

export default App;
