import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { CartReducer, userReducer } from './Reduicer/Reduicer';
import {ProductReducer} from "./Reduicerproduct"
const rootreducer=combineReducers({userReducer,CartReducer,ProductReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
  ));
  export default store