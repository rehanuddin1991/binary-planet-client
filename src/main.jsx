import { StrictMode } from 'react'
import helmet from "helmet";
import { HelmetProvider } from 'react-helmet-async';

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'
import router from './Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HelmetProvider>
   <AuthProvider>
      <RouterProvider router={router} />
      <Toaster   position="top-right" ></Toaster>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
