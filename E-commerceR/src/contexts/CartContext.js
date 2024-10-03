import { createContext } from "react"

export const CartContext = createContext(null);

export const getAmountItems = (obj) => {
    let amount = 0;
    for( const productId in obj) {
        amount += obj[productId];
    }
    return amount;
}