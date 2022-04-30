import { configureStore } from '@reduxjs/toolkit';
import timeMachineReducer from '../reducers/timeMachineReducer';

const store = configureStore({
  reducer: {
    timeMachine: timeMachineReducer
  }
});

export default store;
