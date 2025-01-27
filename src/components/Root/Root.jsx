import Banner from "../Banner/Banner";
import SubBanner from "../Banner/SubBanner";
import NavBar from "../NavBar/NavBar";
import { Outlet, useLocation, useParams } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();
  const { category } = useParams();
  const isTransparent = pathname === "/" || pathname === `/product/${category}`;
  const navbarClass = isTransparent ? "bg-transparent pt-1" : "bg-yellow-200";

  return (
    <div className="bg-[#f7f7f7]">
      <div className={navbarClass}>
        <div className={` max-w-7xl mx-auto px-5 lg:px-0 md:px-5 `}>
          <NavBar />
        </div>
      </div>
        <Outlet />
    </div>
  );
};

export default Root;
