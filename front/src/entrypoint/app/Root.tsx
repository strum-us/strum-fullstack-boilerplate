import { AppFrame } from './AppFrame'
import { AutoUpdateNotification } from './AutoUpdateNotification'
import { HashRouter } from 'react-router-dom'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Routes from './Routes'

export default function Root() {
  console.log({ isElectron })
  return (
    <React.StrictMode>
      {/* <div>open-router: {history?.location?.pathname} </div> */}
      <Router>
        {/* <ElectronGateway> */}
        {isElectron
          ? <AutoUpdateNotification />
          : null
        }
        {/* </ElectronGateway> */}
        {/* <NetworkNotification/> */}
        <RecoilRoot>
          <AppFrame>
            <Routes />
          </AppFrame>
        </RecoilRoot>
      </Router>
    </React.StrictMode>
  )
}

export const isElectron = process.env.IS_ELECTRON
function Router({ children }) {
  if (isElectron) {
    return (
      <HashRouter>
        {children}
      </HashRouter>
    )
  }

  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}
