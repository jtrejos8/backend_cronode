import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { routes } from './route-list';
import { startChecking } from '../redux/actions/auth';
import { CustomSpinner } from '../components/ui/spinner/styles';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { auth, checking } = useSelector((state) => state.auth);

  useEffect(() => {
      dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return (
      <CustomSpinner animation="border" />
    )
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {routes.map((route, i) =>
            route.isPublic ? (
              <PublicRoute key={i} isAuthenticated={auth} {...route} />
            ) : (
              <PrivateRoute key={i} isAuthenticated={auth} {...route} />
            ),
          )}
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};