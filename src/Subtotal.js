import React from 'react'
import { useStateValue } from './StateProvider';
import "./Subtotal.css"

function Subtotal() {
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <p>
                Subtotal of ({basket?.length} items) : <strong>0</strong>
            </p>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
