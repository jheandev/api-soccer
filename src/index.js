import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";



//styles
import './index.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);


