import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./style.scss";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 error</div> // Joindre le fichier 404
  },
  {
    path: "/location",
    element: <div>Cozy loft</div> 
  },
  {
    path: "/about",
    element: <div>À propos</div>
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
