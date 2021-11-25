import { createStore , compose , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const initialState = {};

const middleware = [thunk];
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(
    Reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // ReactReduxDevTools
    )
)

let currentState = Store.getState();

Store.subscribe( () => {
    let prevState = currentState;
    currentState = Store.getState();
    // if(){

    // }
});

export default Store;