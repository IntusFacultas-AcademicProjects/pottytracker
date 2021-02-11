import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FormView from './views/FormView';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/">
            <FormView />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
