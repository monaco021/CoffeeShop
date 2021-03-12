import { fetch } from "./csrf.js"

const LOAD = "products/load"

const loadCoffeeProducts = (coffee) => ({
    type: LOAD,
    coffee
});

export const fetchCoffee = () => async dispatch =>{
    const res = await fetch("api/products/homepage");
    
    if(res.ok) {
        dispatch(loadCoffeeProducts(res.data));
    };
};


const CoffeeProductsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.coffee
        }
        default:
        return state;
    }
}

export default CoffeeProductsReducer;