import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import Splash from './splash/splash';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import Home from './home/home';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path='/register' component={RegisterContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />
      <ProtectedRoute path='/channels/@me' component={Home} />
    </Switch>
  </div>
);

export default App;