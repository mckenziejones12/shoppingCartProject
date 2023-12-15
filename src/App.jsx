import { useState, React } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { ItemsCountContext } from "./ItemsCountContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./components/ShopPage.jsx";
import SingleItemDisplayPage from "./components/SingleItemDisplayPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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

function App() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <ItemsCountContext.Provider value={{ itemCount, setItemCount }}>
      <RouterProvider router={router}>
        <Homepage />
      </RouterProvider>
    </ItemsCountContext.Provider>
  );
}
export default App;
