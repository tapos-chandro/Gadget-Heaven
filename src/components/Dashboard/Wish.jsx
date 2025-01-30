import PropTypes from "prop-types";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ContextProvider } from "../../Context/Context";
import { Bounce, toast } from "react-toastify";

const Wish = ({ wish }) => {

    const {wishList,setWishList} = useContext(ContextProvider)



const handleWishRemove = (wishId) => {
    const findWish = wishList.filter(pd => pd.id !== wishId)
    setWishList(findWish)

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
    <div className="flex flex-col md:flex-row lg:flex-row p-8 bg-white rounded-2xl gap-8 h-auto items-stretch relative my-5">
      <div className="w-full md:w-1/5 lg:w-1/5 bg-gray-200 h-auto flex justify-center  items-center rounded-xl">
        <img
          className="  h-[7.5rem] flex items-center justify-center"
          src={wish.image}
          alt=""
        />
      </div>
      <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col gap-4 self-stretch">
        <h3 className="text-2xl font-semibold text-black">
          {wish?.title}
        </h3>
        <p className="text-lg text-gray-400">
          {wish.description}
        </p>
        <h4 className="text-xl font-semibold text-neutral-600">
          Price: ${wish.price}
        </h4>
      </div>
      <div className="w-1/5 flex justify-end self-stretch absolute top-3 right-3 md:top-8 md:right-8 lg:top-8 lg:right-8 lg:inline-flex md:inline-flex ">
        <button onClick={() => handleWishRemove(wish.id)}>
          <RxCross2 className="border border-red-600  rounded-full text-xl md:text-3xl lg:text-4xl text-red-600 p-1" />
        </button>
      </div>
    </div>
  );
};


Wish.propTypes = {
    wish:PropTypes.object
}

export default Wish;
