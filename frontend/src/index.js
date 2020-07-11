import React from 'react'
import ReactDOM from 'react-dom'
import 'web/styles/main.scss'
import App from 'web/App.jsx'
import { Provider } from 'react-redux'
import store from 'core/store'
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root')
)
