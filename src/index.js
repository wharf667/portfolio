import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landng from './components/landing/Landng';
import Nav from './components/nav/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landng />,
  },
  {
    path: "/skills",
    element: <h1>Skills</h1>,
  },
  {
    path: "/projects",
    element: <h1>Projects</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);

const AppNavigation = () => (
  <>
    <Nav />
    <RouterProvider router={router} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppNavigation />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
