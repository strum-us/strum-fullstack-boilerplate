import { Route, Switch } from 'react-router-dom'

import {ApolloApp} from './App'
import { Auth } from '@pages/Auth'
import { Dashboard } from '@pages/Dashboard'

export const routes = {
  Auth: '/auth',
  Dashboard: '/',
  NotFound: '/404',
}


const Routes = () => {
  return (
    <ApolloApp>
      <Switch>
        <Route path={routes.Auth} component={Auth} />
        <Route exact path={routes.Dashboard} component={Dashboard} />
      </Switch>
    </ApolloApp>
  )
}

export default Routes
