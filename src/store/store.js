import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
