import { combineReducers } from 'redux';
import peopleReducer from './people.reducer';
import personReducer from './person.reducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  person: personReducer,  
});

export default rootReducer;
