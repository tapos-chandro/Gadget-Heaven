import Banner from "../Banner/Banner";
import SubBanner from "../Banner/SubBanner";
import Products from "./Products";
import Menus from "./Menus";
import { Helmet } from "react-helmet";
import favIcon from "../../assets/favicon-16x16.png"
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href={favIcon}/>
      </Helmet>
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
              <a href='#product'>
              <button className="  rounded-full bg-white text-[#9538E2] py-1.5 px-3">
                Shop Now
              </button>
              </a>
            </div>
          </div>
        </Banner>
        <div className=" px-10 md:px-14 -mt-24 md:-mt-36 lg:-mt-72 lg:px-0 ">
          <SubBanner />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center px-5 md:px-5 lg:px-0">
        <h1 className="text-[2.5rem] font-bold text-black py-12">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex flex-col gap-6 items-center md:items-start pb-24 lg:items-start lg:flex-row md:flex-row md:justify-between lg:justify-between  ">
          <div className="w-[14rem] md:max-w-[15rem] lg:max-w-[15rem]">
            <Menus></Menus>
          </div>
          <div className="w-full md:max-w-[68rem] lg:w-[68rem]" id="product">
            <Products></Products>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
