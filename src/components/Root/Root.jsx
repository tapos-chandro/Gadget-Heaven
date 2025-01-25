import NavBar from "../NavBar/NavBar";
import { useLocation } from 'react-router-dom';

const Root = () => {


    const {pathname} = useLocation()


  return (
    <div>
      <div className={`${pathname === '/' ? 'bg-transparent' : 'bg-yellow-200'}`}>
        <div className="max-w-7xl mx-auto">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Root;
