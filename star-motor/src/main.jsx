import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <Provider store={store}>
    <App />
     <ToastContainer />
    </Provider> 
       </BrowserRouter>
  </StrictMode>
)
