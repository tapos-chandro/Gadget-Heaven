


const Product = ({product}) => {
  const {id,title,image,category,price,description,specification,availability,rating} = product



  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl p-5 rounded-2xl">
        <figure className="bg-[#D9D9D9] rounded-xl p-2">
          <img
            src={image}
            alt="Shoes"
            className="h-32 rounded-xl p-5 "
          />
        </figure>
        <div className="flex flex-col gap-2 pt-3 justify-start">
          <h2 className="card-title">{title}</h2>
          <p className="text-left">If a dog chews shoes whose shoes does he choose?</p>
          <div className="bg-[#9538E2] flex justify-start max-w-40 p-[2px] rounded-full text-center ">
            <button  className="text-center p-[10px] w-full bg-white rounded-full text-[#9538E2] font-semibold text-xl ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
