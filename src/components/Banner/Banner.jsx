import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";


const Banner = ({children}) => {

    const {pathname} = useLocation()
    console.log(pathname,'home router')
    const {category} = useParams()
    console.log(category)

    return (
        <div className={`${pathname === '/' || pathname === `/product/${category}` ?"border-l-2 border-r-2 border-b-2 border-[#F6F6F6] p-[7px] rounded-4xl -mt-24":''}`}>
            <div className={`bg-[#9538E2]     ${pathname === '/' || pathname === `/product/${category}` ?'rounded-4xl lg:h-[694px] text-white ': ''}`}>
            <div className="px-5 lg:px-16 flex items-center flex-col justify-center h-full">
            {children}
            </div>
        </div>
        </div>
    );
};

Banner.propTypes = {
    children : PropTypes.element
}

export default Banner;