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
import Login from './component/Pages/Login.jsx';
import SignIn from './component/Pages/SignIn.jsx';
import AuthProvider from './component/AuthProvider.jsx';
import User from './component/Pages/User.jsx';
import Root from './component/Pages/Root.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element:<Root></Root>,

    
    children:[
      {
        path:"/",
        element: <App></App>,
        loader:() => fetch('http://localhost:5175/coffee'),
      },
      {
        path:"/addCoffee",
        element:<Coffee></Coffee>
      },
      {
        path:"updateCoffee/:id",
        element:<Updatecoffee></Updatecoffee>,
        loader:({params}) => fetch(`http://localhost:5175/coffee/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signIn",
        element:<SignIn></SignIn>
      },
      {
        path:"/users",
        element:<User></User>,
        loader:() => fetch('http://localhost:5175/user')
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
