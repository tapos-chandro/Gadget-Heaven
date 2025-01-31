import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Context/Context";
import CartDetail from "./CartDetail";
import NotFound from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";
import modalIcon from '../../assets/Group.png'

const CartDetails = () => {
  const [sortByPurchase, setSortByPurchase] = useState("");
  const { addCart, setAddCart ,totalPrice, setTotalPrice} = useContext(ContextProvider);


  
  const navigate = useNavigate();

  

  useEffect(() => {
    const total = addCart.reduce(
      (product, current) => product + current.price,
      0
    );
    setTotalPrice(parseFloat(total))

  },[])

  

  const handleSortByPrice = () => {
    const sortProduct = addCart.sort((a, b) => b.price - a.price);
    setAddCart(sortProduct);
  };

  const handlePurchase = () => {

    // navigate('/')


    document.getElementById('my_modal_1').showModal()

    setAddCart([])


  };


  const handleClose = () => {
    navigate('/')
    setTotalPrice(0)
  }

  return (
    <div className="pb-20">
      <div className="flex justify-between py-10 items-start md:items-center lg:items-center  ">
        <h3 className="text-2xl font-bold text-black">Cart</h3>
        <div className="flex flex-col md:flex-col lg:flex-row gap-5 lg: items-center">
          <h2 className="text-2xl font-bold text-black">
            Total cost:{totalPrice}
          </h2>
          <div className=" flex flex-col text-center md:flex-row lg:flex-row gap-3">
            <span
              className=" font-bold p-0.5
              rounded-full justify-center flex items-center  "
              style={{
                background: "linear-gradient(180deg, #9639e3, #d656a5)",
              }}
              onClick={() => handleSortByPrice()}
            >
              <button
                onClick={() => setSortByPurchase("sort")}
                disabled= {addCart.length === 0 ? 'disabled': null}
                className={` disabled:text-gray-300 px-5 p-3 rounded-full flex justify-center ${
                  sortByPurchase === "sort"
                    ? "text-[#FFF] bg-transparent"
                    : "text-[#9538E2] bg-white"
                }`}
              >
                Sort by Price
                <span className=" ml-2 font-extrabold rotate-180">
                  <FontAwesomeIcon className="rotate-45" icon={faSliders} />
                </span>
              </button>
            </span>
            <span
              className=" font-bold p-0.5 
              rounded-full justify-center flex items-center  "
              style={{
                background: "linear-gradient(180deg, #9639e3, #d656a5) ",
              }}
              onClick={()=> handlePurchase()}
              
              
            >
              <button
                onClick={() => setSortByPurchase("purchase")}
                className={` w-full  px-5 p-3 disabled:text-gray-300 rounded-full flex justify-center text-center ${
                  sortByPurchase === "purchase"
                    ? "text-[#FFF] bg-transparent"
                    : "text-[#9538E2] bg-white"
                }`}
                disabled= {addCart.length === 0 ? 'disabled': null}
              >
                Purchase
              </button>
            </span>
          </div>
        </div>
      </div>
      {addCart.map((product) => (
        <CartDetail product={product} key={product.id}></CartDetail>
      ))}
      {addCart.length === 0 && <NotFound title=" Add To Cart Not Available" />}

      {/* modal start  */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col justify-center">
          <div className="flex justify-center"><img src={modalIcon} alt="" /></div>
          <h3 className="font-bold text-lg text-center text-black">Payment Successfully</h3>
          <div className="border-b-2 py-2"></div>
          <p className="py-4 text-center">Thanks for purchasing.</p>
          <p className="py-4 text-center">Total:{totalPrice}</p>
          <div className="modal-action">
       
              {/* if there is a button in form, it will close the modal */}
              <div className=" w-full flex justify-center">
              <button onClick={() => handleClose()} className="btn flex justify-center w-full rounded-full text-black">Close</button>
              </div>
            
          </div>
        </div>
      </dialog>
      {/* modal end  */}




    </div>
  );
};

export default CartDetails;
