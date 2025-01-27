import { useContext, useEffect} from "react";
import Product from "./product";

import { ContextProvider } from "../../Context/Context";
import { useParams } from "react-router-dom";

const Products = () => {

    const {category} = useParams()
    const {products,setCategoryName} = useContext(ContextProvider)

    useEffect(() => {
        setCategoryName(category)

    },[category])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;