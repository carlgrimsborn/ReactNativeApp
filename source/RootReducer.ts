import * as types from './Types';
import { IApplicationState } from './Types';
import { combineReducers } from 'redux';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import LoginReducer from './components/Login/reducers';

const PersistLoginReducer = persistReducer({ key: 'login', storage }, LoginReducer);
// const PersistNavReducer = persistReducer({ key: 'routes', storage }, NavReducer);

export default combineReducers<types.IApplicationState>({
    // reducerName: reducers here

    login: PersistLoginReducer,

    });
