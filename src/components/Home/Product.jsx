
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextProvider } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const {id,title,image,price} = product
  // const {} = useContext(ContextProvider)

const navigate = useNavigate()

const handleDetails = (id) => {

  navigate(`/details/${id}`)


}

  return (
  
      <div className="card card-compact bg-white w-full p-5 rounded-2xl">
        <figure className="bg-[#D9D9D9] rounded-xl p-2">
          <img
            src={image}
            alt="Shoes"
            className="h-32 rounded-xl p-5 "
          />
        </figure>
        <div className="flex flex-col gap-2 pt-3 justify-start ">
          <h2 className="card-title">{title}</h2>
          <p className="text-left font-medium text-xl text-gray-500">Price: {price}k</p>
          <div className="bg-[#9538E2] flex justify-start max-w-40 p-[2px] rounded-full text-center ">
            <button onClick={() => handleDetails(id) }  className="text-center p-[10px] w-full bg-white rounded-full text-[#9538E2] font-semibold text-xl">View Details</button>
          </div>
        </div>
      </div>

  );
};



Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
};

export default Product;
