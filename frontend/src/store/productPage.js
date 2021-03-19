import { fetch } from "./csrf.js"

const LOAD = "product/load"

const loadCoffeeProduct = (coffee) => ({
    type: LOAD,
    coffee
});

export const fetchCoffeeDetails = () => async dispatch =>{
    const res = await fetch("api/products/:id");
    
    if(res.ok) {
        dispatch(loadCoffeeProduct(res.data));
    };
};


const CoffeeProductDetailReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.coffee
        }
        default:
        return state;
    }
}

export default CoffeeProductDetailReducer;