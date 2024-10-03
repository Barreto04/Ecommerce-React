import { useState, useContext, useEffect } from 'react';
import { CartContext, getAmountItems } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserButtons = () => {
    const [amoutOfItems, setAmoutOfItems] = useState(0);
    const {setIsCartOpen, cartItems} = useContext(CartContext);

    useEffect(() => {
        setAmoutOfItems(getAmountItems(cartItems));
    }, [cartItems])

    return (
        <div>
            <button className='px-2 relative' onClick={() => setIsCartOpen(true)}>
                <FontAwesomeIcon icon={faCartShopping} />
                {!!amoutOfItems && (
                    <div id='cart-amount' className='absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2'>
                        {amoutOfItems}
                    </div>
                )}
            </button>
            <Link to="/history">
                <FontAwesomeIcon className='px-2' icon={faUser} />
            </Link>
        </div>
    )
}

export default UserButtons;