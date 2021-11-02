import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import Splash from './splash/splash';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import Me from './main/me';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path='/register' component={RegisterContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />
      <ProtectedRoute exact path='/@me' component={Me} />
    </Switch>
  </div>
);

export default App;