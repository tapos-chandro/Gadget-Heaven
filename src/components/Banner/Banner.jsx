import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";


const Banner = ({children}) => {

    const {pathname} = useLocation()
    console.log(pathname,'home router')

    return (
        <div className="border-l-2 border-r-2 border-b-2 border-[#F6F6F6] p-[7px] rounded-4xl -mt-24 ">
            <div className={`bg-[#9538E2] box-border    ${pathname == '/' && 'rounded-4xl lg:h-[694px] text-white '}`}>
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