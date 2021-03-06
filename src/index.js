import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import App from './App';
import './index.css';

// Reducers
import authReducer from './Controllers/Redux/authSlice';
import bugsReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

// Redux Configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugsReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
