import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './context/Authcontext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <AuthContextProvider>
  <SocketContextProvider>
    <App />
    </SocketContextProvider>
    </AuthContextProvider>
    <Toaster/>

  </BrowserRouter>
)