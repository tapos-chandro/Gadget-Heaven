

import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ContextProvider } from "../../Context/Context";
import { Bounce, toast } from "react-toastify";
import PropTypes from "prop-types";

const CartDetail = ({product}) => {

    const {addCart, setAddCart} = useContext(ContextProvider)

    const handleCartRemove = (productId) => {
        const products = addCart.filter(pd => pd.id !== productId)
        setAddCart(products)
        toast.success('Removed Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

    

    return (
        <div>
            <div className="flex flex-col md:flex-row lg:flex-row p-8 bg-white rounded-2xl gap-8 h-auto items-stretch relative my-5">
                  <div className="w-full md:w-1/5 lg:w-1/5 bg-gray-200 h-auto flex justify-center  items-center rounded-xl">
                    <img
                      className="  h-[7.5rem] flex items-center justify-center py-3"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col gap-4 self-stretch">
                    <h3 className="text-2xl font-semibold text-black">
                      {product.title}
                    </h3>
                    <p className="text-lg text-gray-400">
                      {product.description}
                    </p>
                    <h4 className="text-xl font-semibold text-neutral-600">
                      Price: ${product.price}
                    </h4>
                  </div>
                  <div className="w-1/5 flex justify-end self-stretch absolute top-3 right-3 md:top-8 md:right-8 lg:top-8 lg:right-8 lg:inline-flex md:inline-flex ">
                    <button onClick={() => handleCartRemove(product.id)}>
                      <RxCross2 className="border border-red-600  rounded-full text-xl md:text-3xl lg:text-4xl text-red-600 p-1" />
                    </button>
                  </div>
                </div>
        </div>
    );
};


CartDetail.propTypes = {
    product: PropTypes.object
}

export default CartDetail;