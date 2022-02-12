import {createSelector} from 'reselect'

const selectCart = state => state.cart;

export const selectorCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCart],
    cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
        0
    )
)