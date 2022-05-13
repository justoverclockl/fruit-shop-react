import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import productsReducer from "./states/storeSlice";
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    products: productsReducer
})

const store = configureStore({ reducer })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
