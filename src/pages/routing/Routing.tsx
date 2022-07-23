import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ResultsPage = lazy(() => import('pages/ResultsPage/ResultsPage'));
(document.body.style as any).zoom = '100%';

const Routing = function Routing() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routing;
