import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./components/ShopPage/ShopPage.jsx";
import App from "./App.jsx";
import SingleItemDisplayPage from "./components/SingleItemDisplayPage/SingleItemDisplayPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "shop/singleitemdisplay/:itemId",
    element: <SingleItemDisplayPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
