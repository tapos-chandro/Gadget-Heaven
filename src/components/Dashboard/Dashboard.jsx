import { NavLink, Outlet, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import CartDetails from "./CartDetails";
import CartToWish from "./CartToWish";
import { useState } from "react";

const Dashboard = () => {

    const {pathname} = useLocation()


    const [isActive, setIsActive] = useState('cart')

    const buttonActiveStyle = ({ isActive }) => ({
        color: isActive ?  '#fff': '#9538E2',
        background: isActive ? 'white' : 'transparent',
        textDecoration: isActive? 'underline': '',
        fontWeight: isActive ? '700' : 'normal',
        borderRadius:isActive ? 'rounded-full': 'rounded-full' 
        
      })

      const activeStyle = '#fff rounded-full'



  return (
    <div>
      <Banner>
        <div className="text-center text-white py-8 h-[23.438rem]">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="pt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br></br>the coolest accessories,
            we have it all!
          </p>
          <div className="flex gap-5 justify-center pt-8">
            {/* <NavLink to={'/dashboard/'} style={buttonActiveStyle} ><button className={`px-16 text-[#9538E2] rounded-full py-3 font-extrabold text-xl ${pathname === '/dashboard/wishlist' && "active:''"}`}>Cart</button></NavLink>
            <NavLink to={'/dashboard/wishlist'} style={buttonActiveStyle}><button className="px-16 text-[#9538E2] rounded-full py-3 font-extrabold text-xl">Wishlist</button></NavLink> */}


            <NavLink  to={'/dashboard/'} ><button onClick={() => setIsActive('cart')}  className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl ${isActive === 'cart' && 'bg-white text-[#9538E2]'}`} >Cart</button></NavLink>
            <NavLink to={'/dashboard/wishlist'}   ><button onClick={() => setIsActive('wishlist')} className={`px-16 border border-white rounded-full py-3 font-extrabold text-xl ${isActive === 'wishlist' && 'bg-white text-[#9538E2]'}`}>Wishlist</button></NavLink>
          </div>
        </div>
      </Banner>

      <div>
      <CartToWish/>
      </div>
    </div>
  );
};

export default Dashboard;
