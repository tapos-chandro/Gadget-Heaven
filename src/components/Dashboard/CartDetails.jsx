import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/Context";
import CartDetail from "./CartDetail";
import NotFound from "../NotFound/NotFound";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const [sortByPurchase, setSortByPurchase] = useState("");
  const { addCart, setAddCart } = useContext(ContextProvider);
  const navigate = useNavigate()

  const totalPrice = addCart.reduce(
    (product, current) => product + current.price,
    0
  );

  const handleSortByPrice = () => {
    const sortProduct = addCart.sort((a, b) => b.price - a.price);
    setAddCart(sortProduct);
  };

  const handlePurchase = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });

    navigate('/')

  };

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
                className={` px-5 p-3 rounded-full flex justify-center ${
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
                background: "linear-gradient(180deg, #9639e3, #d656a5)",
              }}
              onClick={() => handlePurchase("my_modal_2")}
            >
              <button
                onClick={() => setSortByPurchase("purchase")}
                className={` w-full  px-5 p-3 rounded-full flex justify-center text-center ${
                  sortByPurchase === "purchase"
                    ? "text-[#FFF] bg-transparent"
                    : "text-[#9538E2] bg-white"
                }`}
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
    </div>
  );
};

export default CartDetails;
