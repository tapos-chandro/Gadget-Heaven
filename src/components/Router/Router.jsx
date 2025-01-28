import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Home/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import CartDetails from "../Dashboard/CartDetails";
import WishList from "../Dashboard/WishList";




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
                element: <Dashboard/>,
                children:[
                  {
                    path: '/dashboard',
                    element:<CartDetails/>
                  },
                  {
                    path: '/dashboard/wishlist',
                    element:<WishList/>
                  }
                ]
            },
            {
                path: 'details/:productId',
                element: <ProductDetails/>
            },
          ]
        },
      ]);

    
export default router