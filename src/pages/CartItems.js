import React, {useContext} from 'react'
import PropTypes from 'prop-types'

import useHover from '../hooks/useHover'
import {Context} from '../Context'

function CartItems({item}) {
  const {hovered, ref} = useHover()

  const {removeFromCart} = useContext(Context)
  const trashIconClass = hovered ? 'fill' : 'line'

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trashIconClass}`}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
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