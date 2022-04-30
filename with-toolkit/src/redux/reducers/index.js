import { combineReducers } from 'redux';
import timeMachineReducer from './timeMachineReducer';

const rootReducer = combineReducers({
  timeMachineReducer,
});

export default rootReducer;
