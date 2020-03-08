import { GET_PROVIDER } from "../actions/provider.actions";

const initialState = {};

export default function provider(state = initialState, action) {
  switch (action.type) {
    case GET_PROVIDER:
      return {...state, ...action.payload}      

    default:
      return state;
  }
  
}
