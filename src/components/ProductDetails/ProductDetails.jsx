import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { IoCart } from "react-icons/io5";

const ProductDetails = () => {
  const { productId } = useParams();


  return (
    <div className="">
      <Banner>
        <div className="text-center text-white py-8 h-[23.438rem]">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="pt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br></br>the coolest accessories, we have
            it all!
          </p>
        </div>

      </Banner>
    <div className=" px-5 md:px-5 lg:px-3 pb-20 ">
    <div className="max-w-7xl mx-auto bg-white rounded-xl lg:rounded-3xl md:rounded-2xl  p-3 lg:p-8 md:p-5 -mt-40 ">
            <div className=" grid grid-cols-3 gap-8">
                <div className="col-span-3 md:col-span-3 lg:col-span-1 ">
                   
                    <div className="w-full bg-[#ECECEC] rounded-xl lg:rounded-3xl h-full flex items-center ">
                    <img src="https://i.ibb.co.com/ssQZty8/LOGITECHMXADV-processed.png"
                            className="rounded-xl lg:rounded-3xl md:rounded-2xl h-fit w-full flex " />
                    </div>
                </div>
                <div className="col-span-3 md:col-end-2 lg:col-span-2 gap-5">
                    <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold text-black">Samsung Galaxy S23 Ultra</h1>
                    <p className="text-xl text-gray-600">Price: 999.99</p>
                    <div>
                    <button className=" ring-2 rounded-full px-2 text-base text-green-400 ring-green-400">In Stock</button>
                    </div>
                    <p className="text-xl text-gray-500">Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                    <div>
                        <h4 className="text-black font-bold text-xl">Specification:</h4>
                        <li className="list-none text-base text-gray-500">Intel i7 11th Gen</li>
                        <li className="list-none text-base text-gray-500">16GB RAM</li>
                        <li className="list-none text-base text-gray-500">512GB SSD</li>
                        <li className="list-none text-base text-gray-500">Touchscreen</li>
                    </div>
                    <p className=" text-xl font-bold ">Rating ⭐ </p>
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />

                        <span className="ml-3 bg-gray-300 px-3 rounded-full">4.5</span>
                    </div>
                    <div className="my-3">
                    <button className="flex items-center gap-2 text-xl text-white px-5 bg-[#9538E2] p-2 rounded-full">Add To Cart <IoCart /></button>
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
