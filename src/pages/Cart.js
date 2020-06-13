import React, {useState, useContext} from "react"
import CartItems from './CartItems'
import {Context} from '../Context'

function Cart() {
  const [buttonText, setButtonText] = useState('Place Order')
  const {cartItems, emptyCart} = useContext(Context)
  const COST_PER_PHOTO = 5.99
  const totalCost =  COST_PER_PHOTO * (cartItems.length)
  const displayTotalCost = totalCost
    .toLocaleString("en-US", {style: "currency", currency: "USD"})

  const cartItemEls = cartItems.map(item => (
    <CartItems key={item.id} item={item} />
  ))

  function submitOrder() {
    setButtonText('Ordering...')

    setTimeout(() => {
      setButtonText('Place Order')
      console.log('order placed!')
      emptyCart([])
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemEls}
      <p className="total-cost">Total: {displayTotalCost}</p>
      <div className="order-button">
        {cartItems.length
          ? <button onClick={submitOrder}>{buttonText}</button>
          : <p>Your cart is empty.</p>
        }
      </div>
    </main>
  )
}

export default Cart