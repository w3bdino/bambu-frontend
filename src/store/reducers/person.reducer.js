import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  info: {},
  isloading: true,
  error: {},
};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PERSON_REQUEST:
      return {
        ...state,
        isloading: true,
      }; 
    case actionTypes.FETCH_PERSON_SUCCESS:
      //console.log(action.payload.page);
      return {
        ...state,
        info: action.payload.data,
        isloading: false,        
      };  
    case actionTypes.FETCH_PERSON_FAILED:
      return {
        ...state,
        error: action.payload,
        isloading: false,        
      };        
    default:
      return state;
  }
};

export default personReducer;
