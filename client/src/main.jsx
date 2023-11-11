import React from 'react'
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Tech from './pages/Tech.jsx';
import Hr from './pages/Hr.jsx';
import Sales from './pages/Sales.jsx';
import Accounting from './pages/Accounting.jsx';
import Landing from './pages/Landing.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Chat from './pages/Chat.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/tech",
          element: <Tech />
        },
        {
          path: "/hr",
          element: <Hr />
        },
        {
          path: "/sales",
          element: <Sales />
        },
        {
          path: "/accounting",
          element: <Accounting />
        },
        {
          path: '/chat',
          element: <Chat />
        }

     ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)