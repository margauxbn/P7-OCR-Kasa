import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./components/navBar/NavBar.tsx"
import Footer from "./components/footer/Footer.tsx"
import App from './pages/App.tsx'
import About from "./pages/About.tsx";
import ErrorPage from './pages/ErrorPage.tsx'
import ApartmentPage from './pages/ApartmentPage.tsx';
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
    errorElement: <ErrorPage />, 
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
        path: "/appartement/:locationId",
        element: <ApartmentPage />      
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
