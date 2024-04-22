import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Coffee from './component/Pages/Coffee.jsx';
import Updatecoffee from './component/Pages/Updatecoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/addCoffee",
    element:<Coffee></Coffee>
  },
  {
    path:"/updateCoffee",
    element:<Updatecoffee></Updatecoffee>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
