import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './index.css'

import storeReducer, { initialStore } from './store'

import { router } from './routes'

export const Context = createContext(null);

const Main = () => {

  const [store, dispatch] = useReducer(
    storeReducer,
    initialStore()
  );

  return (
    <Context.Provider value={{ store, dispatch }}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)