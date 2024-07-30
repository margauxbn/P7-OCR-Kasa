import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./compenents/navBar/NavBar.tsx"
import Footer from "./compenents/footer/Footer.tsx"
import App from './pages/App.tsx'
import About from "./pages/About.tsx";
import "./style.scss";
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";


const HeaderAndFooter = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeaderAndFooter;


const router = createBrowserRouter([
  {
    element: <HeaderAndFooter />,
    errorElement: <div>404 error</div>, // Joindre le fichier 404          
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />      
      },
      {
        path: "/location",
        element: <div>Location</div>         
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
