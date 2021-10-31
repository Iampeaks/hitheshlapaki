import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                    title ={item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
                
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>

    )
}

export default Checkout
