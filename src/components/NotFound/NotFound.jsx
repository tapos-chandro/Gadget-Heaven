import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import notFound from '../../assets/404 error with a tired person.gif'
const NotFound = ({title = '', subTitle = ''}) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <img src={notFound} alt="" />
            <h1 className="text-4xl text-black text-center">{title}</h1>
            <h3 className="text-2xl text-gray-800 text-center">{subTitle}</h3>
            <Link className="btn bg-[#9538E2] hover:text-black rounded-full mt-5 text-white" to={'/'}>Go Home</Link>
        </div>
    );
};

NotFound.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default NotFound;