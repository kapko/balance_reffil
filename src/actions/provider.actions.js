export const GET_PROVIDER = 'GET_PROVIDER';

export function getProvider(payload) {
  return dispatch => {
    dispatch(({type: GET_PROVIDER, payload}));
  }
}
