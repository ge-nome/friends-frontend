import axios from 'axios';
import isEmpty from '../validation/is-empty';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { GET_ERROR, LOADING, LOGIN, SET_CURRENT_USER, SIGNUP } from './types';

export const login =  (data) => dispatch => {
  console.log(data)
  dispatch({type:LOADING})
  axios.post('https://friendsapp-api.herokuapp.com/log/auth', data)
   .then(res => {
      dispatch({
        type: LOGIN,
        payload: res.data
      })
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      })
      dispatch(setAuth(res))
   } )
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};


export const signup =  () => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
  axios.get('https://friendsapp-api.herokuapp.com/create/user/auth')
   .then(res => {
      dispatch({
        type: SIGNUP,
        payload: res.data
      })
   } )
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};

export const cheackAut =  () => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
  const locId= localStorage.getItem("friendapp")
  console.log(locId);
  axios.get(`https://friendsapp-api.herokuapp.com/profile/${locId}`)
   .then(res => {
     console.log(res.data);
     return !isEmpty(res.data)
   })
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};



export const setAuth = (res) => dispatch => {
  const { _id } = res.data;
  console.log(_id);
      //Set token to localStorage
      localStorage.setItem('friendapp', _id );
     
     
}
export const clearAuth = () => dispatch => {
 
      localStorage.removeItem('friendapp' );
     
     
}