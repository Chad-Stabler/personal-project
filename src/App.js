import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './Main';
import DetailPage from './DetailPage';

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path='/poke/:_id'>
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
