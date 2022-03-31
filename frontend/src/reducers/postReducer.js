import  { DELETE_POST, GET_POST, MY_POST } from '../actions/types';
//import isEmpty from '../validation/is-empty';

const initialState = {
// isAuthenticated: false,
  post: [],
  mypost:[]
}

export default function app( state = initialState, action ){
  switch( action.type ){
    case GET_POST:
      return{
          ...state,
        // isAuthenticated: !isEmpty( action.payload ),
          post: action.payload
      }
      case MY_POST:
        return{
          //  ...state,
            mypost: action.payload
        }
    case DELETE_POST:
        return{
          //  ...state,
            post: action.payload
        }
    default:
      return state;
  }
}