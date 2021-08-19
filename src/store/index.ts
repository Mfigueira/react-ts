import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import repositories from './reducers/repositories-reducer';

const reducers = combineReducers({
  repositories,
});

export type RootState = ReturnType<typeof reducers>;

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;

export * as actionCreators from './action-creators';
