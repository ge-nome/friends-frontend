import axios from 'axios';
import isEmpty from '../validation/is-empty';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { GET_ERROR, LOADING, GET_CON_ID, STOP_LOADING, GET_MESSAGES, GET_USERS_FRIENDS } from './types';


export const conversation =  (body) => dispatch => {
    
    dispatch({type:LOADING})
    
     axios.post(` https://friendsapp-api.herokuapp.com/conversation`, body)
      .then(res => {
     //     console.log(body)
         dispatch({
             type:GET_CON_ID,
             payload:res.data
         })
         dispatch(getMessages(res.data._id))
         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };

   //list of contact
   export const getConversations =  () => dispatch => {

    const id = localStorage.getItem('friendapp');
    dispatch({type:LOADING})
    
     axios.get(`https://friendsapp-api.herokuapp.com/conversation/${id}`,)
      .then(res => {
        //console.log(id)
         dispatch({
             type:GET_USERS_FRIENDS,
             payload:res.data
         })
         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };

   //one on one
   export const getMessages =  (id) => dispatch => {
    
    dispatch({type:LOADING})
    
     axios.get(`https://friendsapp-api.herokuapp.com/message/${id}`,)
      .then(res => {
      //  console.log(id)
         dispatch({
             type:GET_MESSAGES,
             payload:res.data
         })
         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };
   
//send msg
   export const sendMessages =  (body, id) => dispatch => {
    
    dispatch({type:LOADING})
    
     axios.post(`https://friendsapp-api.herokuapp.com/log/message/`, body)
      .then(res => {
       // console.log(id)
        
         dispatch(getMessages(id))

         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };
   