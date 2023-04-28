import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as CartItemFunctions from '../../../store/cartItem.js'
import * as ProductFunctions from '../../../store/products.js'
import CartFavoriteTrash from "../cartfavoritetrash/index.js"
import './cartitemindex.css'

const CartItemIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(CartItemFunctions.getCartItems)
  const products = useSelector(ProductFunctions.getProducts)
  console.log(cartItems?.first?.product?.name)

  useEffect(() => {
    dispatch(CartItemFunctions.fetchCartItems());
  }, [dispatch])

  useEffect(()=> {
    dispatch(ProductFunctions.fetchProducts());
  }, [dispatch])

  return(
    <>
      <h1>Bag</h1>
      <div className="cart-container">
        <div className="cart-item-container">
          {cartItems.map((cartItem, idx)  => {
            return(
              <div className="cart-item">
                <img key={`${cartItem.productId}+'00`} src={products[cartItem.productId]?.imageUrl[0]}/>
                <div>
                  <p key={`${cartItem.productId}+'01`}>{products[cartItem.productId]?.name}</p>
                  <p key={`${cartItem.productId}+'02`}>{products[cartItem.productId]?.title}</p>
                  <p key={`${cartItem.productId}+'03`}>{products[cartItem.productId]?.color}</p>
                  <p key={`${cartItem.productId}+04`}>{cartItem.quantity}</p>
                  <CartFavoriteTrash />
                </div>
              </div>
            )
          })}
        </div>
        <div className="payment-right">
          <h1>Total Cost</h1>
        </div>
      </div>

    </>


  )
}

export default CartItemIndex