import {createStore, applyMiddleware, compose} from "redux";
import foodReducer from './reducers/appReducer'
import {persistStore} from "redux-persist";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(foodReducer, composeEnhancer(applyMiddleware()))

const persistor = persistStore(store)

export { store, persistor }