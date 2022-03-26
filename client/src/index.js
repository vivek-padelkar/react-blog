import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContextProvider } from './context/context'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
