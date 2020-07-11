export const API_REQUEST = '[app] API Request'

export const apiRequest = (useCase, body, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: { useCase, onSuccess, onError }
})
