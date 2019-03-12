import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { sagaMiddleware, mainSaga } from './sagas';
import reducer from './reducer';

const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default createStore(reducer, middleware);

sagaMiddleware.run(mainSaga);
