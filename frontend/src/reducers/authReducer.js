import  { GET_CON_ID, GET_ERROR, GET_MESSAGES, GET_USERS_FRIENDS, LOADING, LOGIN, SET_CURRENT_USER, SIGNUP, STOP_LOADING } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: { },
  loading:false,
  friends:[{
    createdAt: "2022-03-31T19:24:48.658Z",
      lastMessage: "",
          members: {
        
          createdAt: "2022-03-30T23:47:55.016Z",
          email: "222",
          number: 1,
          password: "$2b$13$U437j2mEBprbIGZvkmMod.OllWsx8Y8Ce6URP8LpdCFX9JeUmw62a",
          profileImage: "default.jpg",
          updatedAt: "2022-03-30T23:47:55.016Z",
          username: "boyx1xy",
          
          _id: "6244ec2bd861f5335a9bf29f",
          
          updatedAt: "2022-03-31T19:24:48.658Z",
          __v: 0,},
      _id: "624600004e4f846784768011",
        }],
  messages:[],
  conversation:{}

}

export default function app( state = initialState, action ){
  switch( action.type ){
    case SET_CURRENT_USER:
      return{
          ...state,
          isAuthenticated: !isEmpty( action.payload ),
          user: action.payload,
          loading:false
      }
    case LOGIN:
        return{
            ...state,
            user: action.payload,
            loading:false
        }
    case SIGNUP:
          return{
              ...state,
              user: action.payload,
              loading:false
          }
        
    case LOADING:
              return{
                  ...state,
                 loading:true
              }
    case STOP_LOADING:
                return{
                    ...state,
                   loading:false,
                  //functiom:()=>console.log("called to stop")
                }
    case GET_CON_ID:
                  return{
                      ...state,
                     loading:false,
                     conversation:action.payload,
                    //functiom:()=>console.log("called to stop")
                  }
                  case GET_MESSAGES:
                    return{
                        ...state,
                       loading:false,
                     messages:action.payload,

                      //functiom:()=>console.log("called to stop")
                    } 
                    case GET_USERS_FRIENDS:
                    return{
                        ...state,
                       loading:false,
                     friends:action.payload,

                      //functiom:()=>console.log("called to stop")
                    }
    case GET_ERROR:
                return{
                    ...state,
                   loading:false,
                  //functiom:()=>console.log("called to stop")
                }
    default:
      return state;
  }
}