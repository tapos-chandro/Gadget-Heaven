import { useContext } from "react";
import { ContextProvider } from "../../Context/Context";
import Wish from "./Wish";
import NotFound from "../NotFound/NotFound";


const WishList = () => {

    const {wishList} = useContext(ContextProvider)
    return (
        <div className="">
            <h1 className="py-5 pt-10 text-2xl font-bold text-black">Wishlist</h1>
          {
            wishList.map(wish => <Wish wish={wish} key={wish.id}></Wish>)
          }  
          {wishList.length === 0 && <NotFound title="Wishlist not available"/>}


        </div>
    );
};

export default WishList;