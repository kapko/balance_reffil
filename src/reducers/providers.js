import {INIT_PROVIDERS} from '../actions/providers.action';

const initialState = {
  items: [],
  fetched: false,
  pending: true,
};

export default function providers(state = initialState, action) {
  switch (action.type) {
    case INIT_PROVIDERS:
      return {
        ...state, ...{
          items: action.payload,
          fetched: true,
          pending: false,
        }
      }

    default:
      return state;
  }
}
