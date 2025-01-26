import { Outlet, useLocation, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import SubBanner from "../Banner/SubBanner";
import Products from "./Products";
import Menus from "./Menus";

const Home = () => {

  const {category} = useParams()

  const {pathname} = useLocation()





  return (
    <div>
      <div className="lg:max-w-[96.25rem] mx-auto -pt-3">
        <Banner>
          <div className="w-full pt-10 lg:pt-0 pb-32 md:pb-40 lg:pb-48  flex justify-center flex-col gap-4 lg:gap-5">
            <h1 className="font-bold text-2xl   md:text-5xl  mt-10 lg:mt-0 lg:text-6xl  text-center lg:leading-[72px] ">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="text-center text-[10px]  lg:text-base ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <div className="flex justify-center">
              <button className="  rounded-full bg-white text-[#9538E2] py-1.5 px-3">
                Shop Now
              </button>
            </div>
          </div>
        </Banner>
        <div className=" px-10 md:px-14 -mt-24 md:-mt-36 lg:-mt-72 lg:px-0 ">
          <SubBanner />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[2.5rem] font-bold text-black py-12">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex justify-between ">
        <div className="max-w-[15rem]">
          <Menus></Menus>
        </div>
        <div className="max-w-[63.5rem]">

        {
            pathname === `/product/${category} ` ?
            <Outlet></Outlet>:  <Products></Products>
          }

        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
