import { Route, Switch } from 'react-router-dom'

// import { Admin } from '@pages/Admin'
import { ApolloApp } from './App'
import { Chatting } from 'src/pages/Dashboard/Chatting'
import { CreateWorkspace } from 'src/pages/CreateWorkspace'
import { Dashboard } from '@pages/Dashboard'
import { LoginPage } from '@pages/Auth'
import { NotFound } from 'src/pages/NotFound'
import { Onboarding } from 'src/pages/Onboarding'
import React from 'react'
import { Session } from 'src/pages/Dashboard/Session'
import { Verification } from 'src/pages/Process/Verification'

export const routes = {
  Admin: '/admin',
  NotFound: '/404',
  Verification: '/verification',

  Auth: '/auth',
  Login: '/auth/login',

  Onboarding: '/workspace/:workspaceId/onboarding',

  Dashboard: '/workspace/:workspaceId',
  Session: '/workspace/:workspaceId/session/:sessionId',
  Chatting: '/workspace/:workspaceId/chatting/:chattingRoomId',

  CreateWorkspace: '/createWorkspace',

  Widget: '/workspace/:workspaceId/widget/:widgetId',
}

const Routes = () => {
  return (
    <ApolloApp>
      <Switch>
        {/* <Route exact path={routes.Admin} component={Admin} /> */}
        <Route path={routes.Login} component={LoginPage} />
        <Route path={routes.Onboarding} component={Onboarding} />

        <Route exact path={routes.Dashboard} component={Dashboard} />
        <Route exact path={routes.Session} component={Session} />
        <Route exact path={routes.Chatting} component={Chatting} />

        <Route path={routes.CreateWorkspace} component={CreateWorkspace} />

        <Route path={routes.Verification} component={Verification} />
        <Route path={routes.NotFound} component={NotFound} />
      </Switch>
    </ApolloApp>
  )
}

export default Routes
