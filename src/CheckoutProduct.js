import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            image:image,
        })
    }
    return (
        <div className = 'checkoutProduct'>
            <img className='checkoutProduct__image' src={image}/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}
                </p>
                <p className="checkout__price"> PRICE = {price}
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill().map((_,i) => (<p>🌟</p>))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct