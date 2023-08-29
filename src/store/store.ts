import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {watchNewsSaga} from './sagas/news';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'main-root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(watchNewsSaga);
