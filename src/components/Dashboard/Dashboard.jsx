import { NavLink, Outlet, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState } from "react";


const Dashboard = () => {
  const {pathname} = useLocation()
  const [isActive, setIsActive] = useState("cart");


  console.log(pathname, isActive)


  return (
    <div>
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
                className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl 
                  ${pathname === "/dashboard/wishlist" && 'bg-transparent text-white'}
                  
                  ${  pathname === "/dashboard" && isActive === 'cart'  && "bg-white text-[#9538E2]"}`} 
              >
                Cart 
              </button>
            </NavLink>
            <NavLink to={"/dashboard/wishlist"}>
              <button
                onClick={() => setIsActive("wishlist")}
                className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl ${
                  pathname === "/dashboard/wishlist" || isActive ===  'wishlist' ? "bg-white text-[#9538E2]" : ''
                }`}
              >
                Wishlist
              </button>
            </NavLink>
          </div>
        </div>
      </Banner>

      {/* bg-[#9538E2] */}

      <div className="max-w-7xl mx-auto px-5 md:px-5 lg:px-0">
        

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
