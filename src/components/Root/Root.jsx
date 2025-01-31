import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Outlet, useLocation, useParams } from "react-router-dom";


const Root = () => {
  const { pathname } = useLocation();
  const { category } = useParams();
  const isTransparent = pathname === "/" || pathname === `/product/${category}`;
  const navbarClass = isTransparent ? "bg-transparent pt-1" : "bg-gray-50";

  return (
    <div className="bg-[#f7f7f7]">
      <div className={navbarClass}>
        <div className={` max-w-7xl mx-auto px-5 lg:px-0 md:px-5 ${pathname === '/login' || pathname === '/signUp' ? 'hidden': ''}`}>
          <NavBar />
        </div>
      </div>
        <Outlet />
        <div className="bg-white ">
        <div className={`max-w-7xl mx-auto px-5 lg:px-0 md:px-5 ${pathname === '/login' || pathname === '/signUp' ? 'hidden': ''}`}>
        <Footer/>
        </div>
        </div>
    </div>
  );
};

export default Root;
