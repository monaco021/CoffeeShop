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
            <h1>Hello</h1>
        </div>
    )
};

export default CoffeeDetailsPage
