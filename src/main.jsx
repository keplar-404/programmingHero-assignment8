import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Donation from "./components/Donation";
import Donation_details from "./components/Donation_details";
import Statistic from "./components/Statistic";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <div className="w-full h-screen flex justify-center items-center">
      <p className="text-[3rem] font-medium"><span className="text-red-700">404</span> page not found</p>
    </div>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/details/:id",
        element: <Donation_details />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
