import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import homeReducer from './homeReducer';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['home'],
};

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  home: homeReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
