import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  people: {},
  isloading: true,
  error: {},
  page: 1,
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        isloading: true,
      }; 
    case actionTypes.FETCH_PEOPLE_SUCCESS:
      //console.log(action.payload.page);
      return {
        ...state,
        people: action.payload.data,
        page: action.payload.page,
        isloading: false,        
      };  
    case actionTypes.FETCH_PEOPLE_FAILED:
      return {
        ...state,
        error: action.payload,
        isloading: false,        
      };        
    default:
      return state;
  }
};

export default peopleReducer;
