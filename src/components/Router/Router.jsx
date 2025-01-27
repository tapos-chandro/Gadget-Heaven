import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Home/Products";
import ProductDetails from "../ProductDetails/ProductDetails";




const router = createBrowserRouter([
        
        {
          path: "/",
          element: <Root/>,
          children: [
            {
                path: "/",
                element:<Home/>,
                children:[
                  {
                    path: 'product/:category',
                    element:<Products/>
                  }
                ]

            },
            {
                path: 'statistics',
                element: <Statistics/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'details/:productId',
                element: <ProductDetails/>
            }
          ]
        },
      ]);

    
export default router