import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./component/App";
// import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Body from "./component/Body";
import Cart from "./component/Cart";
import RestroMenu from "./component/RestroMenu"; 
import Inputform from "./component/Inputform";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback = {<h1>Loading..........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback = {<h1>Loading..........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId", 
        element: <RestroMenu />,
      },
      {
        path: "/inputform",
        element: <Inputform />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
reportWebVitals();
