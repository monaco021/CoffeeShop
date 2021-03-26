import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchCoffeeDetails } from "../../store/productPage";

const CoffeeDetailsPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const details = useSelector((state) => state.productDetails);

    useEffect(() => {
        dispatch(fetchCoffeeDetails(productId));
    }, [dispatch]);

    return(
        <div>
            <h1>{details.name}</h1>
            <div>
                <img src={details.imageLink} alt="CoffeeImage"/>
            </div>
            <h3>{details.description}</h3>
            <h4>{details.price}</h4>
            {/* <button onClick={() => dispatch()} ></button> */}
        </div>
    )
};

export default CoffeeDetailsPage
