export const INIT_PROVIDERS = 'INIT_PROVIDERS';

export function initProviders(payload) {
  return dispatch => {
    dispatch(({type: INIT_PROVIDERS, payload}));
  }
}
