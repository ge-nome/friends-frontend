import axios from 'axios';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { GET_ERROR, LOADING, LOGIN, SIGNUP } from './types';

export const login =  (data) => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
  axios.get('https://friendsapp-api.herokuapp.com/log/auth', data)
   .then(res => {
     console.log(res);
      dispatch({
        type: LOGIN,
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


