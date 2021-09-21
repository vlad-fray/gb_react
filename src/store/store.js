import { createStore } from 'redux';
import dialogsReducer from './dialogsReducer';

export const store = createStore(dialogsReducer);
