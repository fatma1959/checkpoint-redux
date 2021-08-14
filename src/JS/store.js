import rootReducer from"./reducer/index";
import{createStore}from"redux";
const devTools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer,devTools)
export default store;