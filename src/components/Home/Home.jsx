import Banner from "../Banner/Banner";
import SubBanner from "../Banner/SubBanner";

const Home = () => {
  return (
    <div>
      <div className="lg:max-w-[96.25rem] mx-auto ">
        <Banner>
          <div className="w-full pt-10 lg:pt-96 pb-10 flex justify-center flex-col gap-4 lg:gap-8">
            <h1 className="font-bold text-2xl   md:text-5xl lg:pt-10 mt-10 lg:text-6xl  text-center lg:leading-[72px] ">
              Upgrade Your Tech Accessorize with <br/> Gadget Heaven
              Accessories
            </h1>
            <p className="text-center text-[10px]  lg:text-base ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br/> the coolest accessories, we have
              it all!
            </p>
            <div className="flex justify-center">
            <button className="  rounded-full bg-white text-[#9538E2] py-1.5 px-3">Shop Now</button>
            </div>
            <SubBanner/>
          </div>
        </Banner>
      </div>
      <div className="max-w-7xl mx-auto"></div>
    </div>
  );
};

export default Home;
