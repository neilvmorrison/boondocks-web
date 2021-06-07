import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../pages/Home';
import FourOhFour from '../../pages/404';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/404' component={FourOhFour} />
    <Redirect to='/404' />
  </Switch>
);

export default Router;
