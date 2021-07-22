import { GET_POST_DATA } from "../actions/types";
import axios from 'axios'
import {baseURL} from '../../common/constant';

export const getData = () => dispatch =>{
      // Initial action dispatched
    
      // Return promise with success and failure actions
      return axios.get(`${baseURL}posts`).then(  
        user => dispatch({ type: GET_POST_DATA,  payload: user.data }),
        // err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
      );
  };