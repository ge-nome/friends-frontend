import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = { };

const middleware = [ thunk ];
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_  || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware( ...middleware ),
   
 )
);
/*const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware( ...middleware ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
);*/

export default store;