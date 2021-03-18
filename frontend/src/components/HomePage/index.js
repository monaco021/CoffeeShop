import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffee } from "../../store/homepage"
//using NavLink so users can click on product and go to its page 
import { NavLink } from "react-router-dom";
import "homePage.css"



const ProductListings = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state);
    useEffect(() => {
        dispatch(fetchCoffee())
    }, [dispatch])

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default ProductListings;