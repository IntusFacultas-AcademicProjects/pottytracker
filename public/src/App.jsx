import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import theme from './theme';
import FormView from './views/FormView';
import { ToastManager } from './components/ToastManager';
import PageLayout from './components/PageLayout';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <PageLayout>
        <ToastManager>
          <Switch>
            <Route path="/">
              <FormView />
            </Route>
          </Switch>
        </ToastManager>
      </PageLayout>
    </ThemeProvider>
  </Router>
);

export default App;
