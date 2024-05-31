import { useState } from "react";
import Switcher from "./Components/Switcher";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Layout from "./Layout/Layout";
import Price from "./pages/Price/Price";
import Help from "./pages/Help/Help";
import Bonus from "./pages/Bonus/Bonus";

const App = () => {
  const router = createBrowserRouter ([{

    path:"/",
    element:<Layout/>,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Price",
        element:<Price/>
      },
      {
        path:"/Help",
        element:<Help/>
      },
      {
        path:"/Bonus",
        element:<Bonus/>
      },
    ]

  }
])


  return (
   

      <div>
         <RouterProvider router={router}/>


      </div>
       
    
  );
};

export default App;