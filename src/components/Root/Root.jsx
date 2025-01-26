import NavBar from "../NavBar/NavBar";
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {


    const {pathname} = useLocation()


  return (
    <div>
      <div className={`${pathname === '/' ? 'bg-transparent pt-1 ' : 'bg-yellow-200'}`}>
        <div className={` max-w-7xl mx-auto px-5 lg:px-0 md:px-5 `}>
          <div className="">
            <NavBar />
          </div>
          
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Root;
