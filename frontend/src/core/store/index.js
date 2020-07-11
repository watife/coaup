import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers
} from 'redux'
import {
  companyMdl,
  companyReducer
} from '../logic/company/presentation/redux'
import { apiRequest } from '../common/redux'
import { authMdl, authReducer } from '../logic/auth/redux'

const reducers = combineReducers({
  company: companyReducer,
  auth: authReducer
})

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...authMdl, ...companyMdl, apiRequest)
  )
)

window.store = store

export default store
