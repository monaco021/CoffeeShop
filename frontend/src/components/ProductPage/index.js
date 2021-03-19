import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffeeDetails } from "../../store/productPage";

const CoffeeDetailsPage = () => {
    const dispatch = useDispatch();
    const details = useSelector(state = state.productDetails);

    useEffect(() => {
        dispatch(fetchCoffeeDetails());
    }, [dispatch]);

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
};

export default CoffeeDetailsPage
