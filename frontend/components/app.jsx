import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import Splash from './splash/splash';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import Main from './main/main';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path='/register' component={RegisterContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />
      <ProtectedRoute path='/channels/' component={Main} />
    </Switch>
  </div>
);

export default App;