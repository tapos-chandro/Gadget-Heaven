import { NavLink, Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const [isActive, setIsActive] = useState("cart");
  const [sortByPurchase, setSortByPurchase] = useState("sort")


  return (
    <div>
      <Banner>
        <div className="text-center text-white py-8">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="pt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br></br>the coolest accessories,
            we have it all!
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center pt-8">
            <NavLink to={"/dashboard/"}>
              <button
                onClick={() => setIsActive("cart")}
                className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl ${
                  isActive === "cart" && "bg-white text-[#9538E2]"
                }`}
              >
                Cart 
              </button>
            </NavLink>
            <NavLink to={"/dashboard/wishlist"}>
              <button
                onClick={() => setIsActive("wishlist")}
                className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl ${
                  isActive === "wishlist" && "bg-white text-[#9538E2]"
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
        <div className="flex justify-between py-10 items-start md:items-center lg:items-center  ">
          <h3 className="text-2xl font-bold text-black">Cart</h3>
          <div className="flex flex-col md:flex-col lg:flex-row gap-5 lg: items-center">
            <h2 className="text-2xl font-bold text-black">Total cost:999.99</h2>
            <div className=" flex flex-col text-center md:flex-row lg:flex-row gap-3">
            <span
                className=" font-bold p-0.5
              rounded-full justify-center flex items-center  "
                style={{
                  background: "linear-gradient(180deg, #9639e3, #d656a5)",
                }}
              >
                <button onClick={() => setSortByPurchase('sort')} className={` text-[#9538E2] bg-white px-5 p-3 rounded-full flex justify-center ${ sortByPurchase === 'sort' && 'text-[#FFF] bg-transparent'}`}>
                  Sort by Price
                  <span className=" ml-2 font-extrabold rotate-180"><FontAwesomeIcon className="rotate-45" icon={faSliders} /></span>
                </button>
              </span>
              <span
                className=" font-bold p-0.5
              rounded-full justify-center flex items-center  "
                style={{
                  background: "linear-gradient(180deg, #9639e3, #d656a5)",
                }}
              >
                <button onClick={() => setSortByPurchase('purchase')} className={`'text-[#9538E2] w-full bg-white px-5 p-3 rounded-full flex justify-center text-center' ${ sortByPurchase === 'purchase' && 'text-[#FFF] bg-transparent'}`}>
                Purchase
                </button>
              </span>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
