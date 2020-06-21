import React from 'react'
import ReactDOM from 'react-dom'
import 'web/styles/main.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './web/store'
import { SnackbarProvider } from 'notistack'

ReactDOM.render(
  <Provider store={store}>
      <SnackbarProvider
        hideIconVariant
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <App />
      </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
