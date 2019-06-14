import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];
//https://github.com/zalmoxisus/redux-devtools-extension

//createStore(reducer, [preloadedState], [enhancer])

const store = createStore(//that holds the complete state tree of your app
  //(Store): An object that holds the complete state of your app. The only way to change its state is by dispatching actions
  rootReducer,//that returns the next state tree
  initialState,//If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
