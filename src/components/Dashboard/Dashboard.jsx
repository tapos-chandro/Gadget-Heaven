import { NavLink, Outlet, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/Context";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState("cart");

  const { addCart, wishList } = useContext(ContextProvider);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        {/* <link rel="canonical" href={favIcon} /> */}
      </Helmet>
      <Banner>
        <div className="text-center text-white py-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="pt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br></br>the coolest accessories,
            we have it all!
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center pt-8">
            <NavLink to={"/dashboard"}>
              <button
                onClick={() => setIsActive("cart")}
                className={` px-16 border disabled:bg-transparent disabled:text-gray-400 border-white rounded-full py-3 font-extrabold text-xl 
                  ${
                    pathname === "/dashboard/wishlist" &&
                    "bg-transparent text-white"
                  }
                  
                  ${
                    pathname === "/dashboard" &&
                    isActive === "cart" &&
                    "bg-white text-[#9538E2]"
                  }`}
                disabled={addCart.length === 0 ? "disabled" : null}
              >
                Cart
              </button>
            </NavLink>
            <NavLink to={"/dashboard/wishlist"}>
              <button
                disabled={wishList.length === 0 ? "disabled" : null}
                onClick={() => setIsActive("wishlist")}
                className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl  ${
                  pathname === "/dashboard/wishlist" || isActive === "wishlist"
                    ? "bg-white text-[#9538E2]"
                    : ""
                }`}
              >
                Wishlist
              </button>
            </NavLink>
          </div>
        </div>
      </Banner>

      <div className="max-w-7xl mx-auto px-5 md:px-5 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
