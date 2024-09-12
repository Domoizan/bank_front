import "../src/css/main.css"

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { userSlice } from "./pages/User/userSlice";
import { userApi } from "./services/userApi";

const store = configureStore({
  reducer : rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
  devTools:true,
})

store.dispatch(userSlice.actions.getUser())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
