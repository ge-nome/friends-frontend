import  { LOGIN, SET_CURRENT_USER, SIGNUP } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: { }
}

export default function app( state = initialState, action ){
  switch( action.type ){
    case SET_CURRENT_USER:
      return{
          ...state,
          isAuthenticated: !isEmpty( action.payload ),
          user: action.payload
      }
    case LOGIN:
        return{
            ...state,
            user: action.payload
        }
    case SIGNUP:
          return{
              ...state,
              user: action.payload
          }
    default:
      return state;
  }
}