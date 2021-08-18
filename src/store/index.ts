import { createStore, combineReducers } from 'redux';
import repositories from './reducers/repositories-reducer';

export const store = createStore(
  combineReducers({
    repositories,
  })
);
