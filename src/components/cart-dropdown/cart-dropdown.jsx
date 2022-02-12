import React from 'react';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.scss'
import { connect } from 'react-redux';
import { selectorCartItems } from '../../redux/cart/cart-selector';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectorCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);