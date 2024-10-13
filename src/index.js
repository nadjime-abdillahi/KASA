import * as React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Propos from './pages/About/Propos';
import Error from './components/Error';
import Logements from './pages/Logements/Logements';
import Caroussel from './components/Caroussel/Caroussel';
import Card from './components/Card/Card';

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />
  },

  {
    path:"/about",
    element:<Propos />
  },

  {
    path:"/Card",
    element:<Card />
  },

  {
    path:"/Caroussel",
    element: <Caroussel />
  },

  {
    path: "/Logements",
    element:<Logements />
  },

  {
    path:"*",
    element:<Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
