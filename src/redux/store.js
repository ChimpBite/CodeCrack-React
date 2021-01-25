import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import GameEngine from './gameengine/GameEngine';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['LvL'],
};

const persistedReducer = persistReducer(persistConfig, GameEngine);

const middlewares = [logger];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
