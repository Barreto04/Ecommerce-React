import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProducts from "./CartProducts";


const CartOverlay = () => {
    const cartInfo = useContext(CartContext);

    return (
        <div className={`h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out duration-200 ${cartInfo.isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
            <section id="outside-off-cart" onClick={() => cartInfo.setIsCartOpen(false)} className="w-3/4 bg-slate-950 opacity-50"></section>
            <section className="w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white">
            <CartProducts />
            </section>
        </div>
    );
};

export default CartOverlay;