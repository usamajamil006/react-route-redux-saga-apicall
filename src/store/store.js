import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga)

// store.dispatch({type:'LOGOUT'})
store.dispatch({type:'LOGIN'})
store.dispatch({type:'LOGOUT'})

export default store;
