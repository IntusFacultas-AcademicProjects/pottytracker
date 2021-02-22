import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PottyThemeProvider from './theme';
import FormView from './views/FormView';
import CalendarView from './views/CalendarView';
import { ToastManager } from './components/ToastManager';
import PageLayout from './components/PageLayout';

const App = () => (
  <Router>
    <PottyThemeProvider>
      <PageLayout>
        <ToastManager>
          <Switch>
            <Route path="/calendar">
              <CalendarView />
            </Route>
            <Route path="/">
              <FormView />
            </Route>
          </Switch>
        </ToastManager>
      </PageLayout>
    </PottyThemeProvider>
  </Router>
);

export default App;
