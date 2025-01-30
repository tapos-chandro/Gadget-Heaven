
import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from 'react';


export const ContextProvider = createContext()

const Context = ({children}) => {

    const [products, setProducts] = useState([])
    const [categoryName, setCategoryName] = useState('All')
    const [addCart, setAddCart] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [wishList, setWishList] = useState([])
    const [addWishList, setAddWishList] = useState(false)


    
    let allProducts

    let productCategory = categoryName ? categoryName : 'All'

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            if(productCategory === "All"){
            
                console.log('productCategory ache')
                  setProducts(data)
            }else{
                console.log(products)
                // setProducts(data)
                console.log(allProducts)
                console.log(productCategory)

                const categorySearchProduct = allProducts.filter(product =>product.category.includes((productCategory).toLowerCase()))
                setProducts(categorySearchProduct)

            }
            

        })
    }, [productCategory,2])







    const contextInfo = {
        products,
        categoryName,
         setCategoryName,
         productCategory,
         addCart,
         setAddCart,
         isLoading, setIsLoading,
         wishList, setWishList,
         addWishList, setAddWishList
    }



    return (
        <ContextProvider.Provider value={contextInfo}>
            {children}
        </ContextProvider.Provider>
    );
};




Context.propTypes = {
    children:PropTypes.any
}

export default Context;