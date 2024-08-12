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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/details/:_id",
        element: <View_Details/>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params._id}`)
      },
      {
        path: "/addCart",
        element: <Cart/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
