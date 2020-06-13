import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'

function CartItems({item}) {
  const [hovered, setHovered] = useState(false)
  const {removeFromCart} = useContext(Context)

  const trashIconClass = hovered ? 'fill' : 'line'

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trashIconClass}`}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      </i>
      <img src={item.url} width="130px" alt="pic descrip"/>
      <p>$5.99</p>
    </div>
  )
}

CartItems.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItems