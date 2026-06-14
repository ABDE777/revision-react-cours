import { legacy_createStore } from 'redux';
import { reducer } from './reducer';
export const store1 = legacy_createStore(reducer);
