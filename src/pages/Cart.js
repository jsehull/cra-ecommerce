import React, {useContext} from "react"
import CartItems from './CartItems'
import {Context} from '../Context'

function Cart() {
  const {cartItems} = useContext(Context)
  const cartItemEls = cartItems.map(item => (
    <CartItems key={item.id} item={item} />
  ))

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemEls}
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  )
}

export default Cart