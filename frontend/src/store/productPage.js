import { fetch } from "./csrf.js"

const LOAD = "product/load"

const loadCoffeeProduct = (product) => ({
    type: LOAD,
    product
});

export const fetchCoffeeDetails = (id) => async dispatch =>{
    const res = await fetch(`api/products/${id}`);
    
    if(res.ok) {
        dispatch(loadCoffeeProduct(res.data));
    };
};


const CoffeeProductDetailReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.product
        }
        default:
        return state;
    }
}

export default CoffeeProductDetailReducer;