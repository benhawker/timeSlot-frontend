import axios from 'axios';
import * as types from './actionTypes';

function loadProperties() {
  const url = 'http://localhost:3004/api/properties';
  const axiosGet = axios.get(url);

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(loadPropertiesSuccess(success)),
        error => dispatch(loadPropertiesFailure(error))
      );
  };
}

function loadPropertiesFailure(payload){
  return {
    type: types.LOAD_PROPERTIES_FAILURE,
    payload,
  }
}


function loadPropertiesSuccess(payload){
  return {
    type: types.LOAD_PROPERTIES_SUCCESS,
    payload,
  }
}

function loadPropertiesRequest(){
  return {
    type: types.LOAD_PROPERTIES,
    payload: types.LOAD_PROPERTIES
  }
}


export { 
         loadProperties,
         loadPropertiesFailure,
         loadPropertiesSuccess,
         loadPropertiesRequest,
       }

