import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffee } from "../../store/homepage"
//using NavLink so users can click on product and go to its page 
import { NavLink } from "react-router-dom";
import plant from "./plant2 (2).jpg"
import "./homePage.css"



const ProductListings = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchCoffee())
    }, [dispatch])

    return(
        <div>
            <h1>Revival Coffee</h1>
            <div className="plantImage__div_container">
                <img className="plant__image_container" src={plant} alt="plantPic" />
            </div>
            <div>
                {products.map((product) => {
                    return (
                        <div className="homepage_inner__div_container">
                            <div key="outerDiv">
                                <img key={product.imageLink} className="products__image_container" src={product.imageLink} />
                            </div>
                            <div key={product.name}>
                                {product.name}
                            </div>
                            <div key={product.price} >
                                {`$${product.price}`}
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default ProductListings;