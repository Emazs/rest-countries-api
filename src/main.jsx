import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Country } from './components/Country.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

localStorage.setItem("Theme", "ligth")

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:country',
    element: <Country />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
