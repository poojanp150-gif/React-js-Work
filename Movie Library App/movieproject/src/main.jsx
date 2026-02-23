import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import mystore from "./redux/store.js"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Provider store={mystore} >
    <App />
    </Provider>
  </BrowserRouter>,
)
