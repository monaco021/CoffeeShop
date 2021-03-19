import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchCoffeeDetails } from "../../store/productPage";

const CoffeeDetailsPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const details = useSelector((state) => state.productDetails);

    useEffect(() => {
        dispatch(fetchCoffeeDetails(id));
    }, [dispatch]);

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
};

export default CoffeeDetailsPage
