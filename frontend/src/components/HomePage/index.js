import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffee } from "../../store/homepage"
import { NavLink } from "react-router-dom";



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