import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from 'components/Loader';
import { useAppSelector } from 'redux/hooks';
import { selectShowPopup, showPopup as setShowPopup } from 'pages/redux';
import { useDispatch } from 'react-redux';
import { Background } from 'pages/styles';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ResultsPage = lazy(() => import('pages/ResultsPage/ResultsPage'));
(document.body.style as any).zoom = '100%';

const Routing = function Routing() {
  const showPopup = useAppSelector(selectShowPopup);
  const dispatch = useDispatch();

  return (
    <>
      {showPopup.component
        && (
          <>
            <Background onClick={() => (
              showPopup.exitOnBgClick && dispatch(setShowPopup({}))
            )}
            />
            {showPopup.component}
          </>
        )}
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
    </>
  );
};

export default Routing;
