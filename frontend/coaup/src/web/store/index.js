import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import {companyMdl, companyReducer} from "../../core/company/presentation/redux";
import {apiRequest} from "../../core/common/redux";

const reducers = combineReducers({
  company  : companyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...companyMdl, apiRequest),
  )
);