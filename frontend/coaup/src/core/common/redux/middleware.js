import {API_REQUEST} from "./action";

// this middleware care only for API calls
export const apiRequest = ({dispatch}) => next => async action => {
  next(action);
  if (action.type === API_REQUEST) {
    const { useCase, onSuccess, onError } = action.meta;

    try {
      const response = await useCase(action.payload);
      if (response.status === "success") {
        dispatch({type: onSuccess, payload: response })
      }
    } catch (e) {
      dispatch({type: onError, payload: e.message })
    }
  }
};