import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage.jsx';
import Error from './LayOut/Error/Error.jsx';
import View_Details from './Components/View_Details/View_Details.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Success from './Payment/Success/Success.jsx';
import Fail from './Payment/Fail/Fail.jsx';
import Cancel from './Payment/Cancel/Cancel.jsx';
import DashBoard from './DashBoard/DashBoard/DashBoard.jsx';
import DashBoardHome from './DashBoard/DashBoardHome/DashBoardHome.jsx';
import LogIn from './LayOut/LogIn/LogIn.jsx';
import SignUp from './LayOut/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AddBestProduct from './DashBoard/AddBestProduct/AddBestProduct.jsx';
import AddStoreProduct from './DashBoard/AddStoreProduct/AddStoreProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/details/:_id",
        element: <PrivateRoute><View_Details /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://rokomari-server.vercel.app/products/${params._id}`)
      },
      {
        path: "/addCart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/fail",
    element: <Fail />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
  {
    path: "/signIn",
    element: <LogIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardHome />,
      },
      {
        path: "addBestProduct",
        element: <AddBestProduct />,
      },
      {
        path: "addStoreProduct",
        element: <AddStoreProduct />,
      },

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
