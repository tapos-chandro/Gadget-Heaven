import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { IoCart } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./../../Context/Context";
import { Bounce, toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addCart, setAddCart, wishList, setWishList, setIsLoading } = useContext(ContextProvider);
  const [findProduct, setFindProduct] = useState([]);


  const handleAddToCart = () => {
    setAddCart([...addCart, findProduct]);
    toast.success("Successfully Add To Cart", {
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
  };

  const handleWishList = () => {
    setWishList([...wishList, findProduct]);

    toast.success("Successfully Added", {
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
  };


  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        if (data.length) {
          setIsLoading(true);
          const product = data.find((pd) => pd.id === Number(productId));
          setFindProduct(product);
          setIsLoading(false);
        } else {
          return;
        }
      });
  }, []);

  return (
    <div>
      <Banner>
        <div className="text-center text-white py-8 h-[23.438rem]">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="pt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br></br>the coolest accessories,
            we have it all!
          </p>
        </div>
      </Banner>
      <div className=" px-5 md:px-5 lg:px-3 pb-20 ">
        <div className="max-w-7xl mx-auto bg-white rounded-xl lg:rounded-3xl md:rounded-2xl  p-3 lg:p-8 md:p-5 -mt-40 ">
          <div className=" grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-3 lg:col-span-1 ">
              <div className="w-full bg-[#ECECEC] rounded-xl lg:rounded-3xl h-full flex items-center ">
                <img
                  src={findProduct?.image}
                  className="rounded-xl lg:rounded-3xl md:rounded-2xl h-fit w-full flex "
                />
              </div>
            </div>
            <div className="col-span-3 md:col-end-2 lg:col-span-2 gap-5">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold text-black">
                  {findProduct?.title}
                </h1>
                <p className="text-xl text-gray-600">
                  Price: {findProduct?.price}tk
                </p>
                <div>
                  <button className=" ring-2 rounded-full px-2 text-base text-green-400 ring-green-400">
                    In Stock
                  </button>
                </div>
                <p className="text-xl text-gray-500">
                  {findProduct?.description}
                </p>
                <div>
                  <h4 className="text-black font-bold text-xl">
                    Specification:
                  </h4>

                  {findProduct?.specification?.map((sf, index) => (
                    <li
                      key={index}
                      className="list-none text-base text-gray-500"
                    >
                      {sf}
                    </li>
                  ))}
                </div>
                <p className=" text-xl font-bold ">Rating ⭐ </p>
                <div className="rating flex items-center">
                  {findProduct.length === 0 ? (
                    ""
                  ) : (
                    <ReactStars
                      size={30}
                      value={parseFloat(findProduct.rating)}
                      edit={false}
                    />
                  )}

                  <span className="ml-3 bg-gray-300 px-3 rounded-full">
                    {findProduct?.rating}
                  </span>
                </div>
                <div className="my-3 flex gap-3 ">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-2 text-xl text-white px-5 bg-[#9538E2] p-2 rounded-full"
                  >
                    Add To Cart <IoCart />
                  </button>
                  <button
                    className="rounded-full ring-1 text-xl ring-gray-300 px-2.5 disabled:text-gray-200"
                    onClick={() => handleWishList(findProduct?.id)}
                    type="button"
                    disabled={wishList.some(
                      (item) => item.id === findProduct?.id
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
