import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as CartItemFunctions from '../../store/cartItem.js'
import { GrFavorite } from 'react-icons/gr'
import { BsTrash3 } from 'react-icons/bs'
import * as FavoriteFunctions from '../../store/favorite'
import './cartitemindex.css'

const CartItemIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(CartItemFunctions.getCartItems)
  const [errors, setErrors] = useState([])
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(CartItemFunctions.fetchCartItems());
  }, [dispatch])


  const handleSizeChange = (e, cartItem) => {
    const newCartItem = {
      id: cartItem.id,
      productId: cartItem.productId,
      userId: cartItem.userId,
      quantity: cartItem.quantity,
      size: e.target.value,
    }
    dispatch(CartItemFunctions.updateCartItem(newCartItem))
  }

  const handleQuantityChange = (e, cartItem) => {
    const newCartItem = {
      id: cartItem.id,
      productId: cartItem.productId,
      userId: cartItem.userId,
      quantity: e.target.value,
      size: cartItem.size,
      product: cartItem.product
    }
    dispatch(CartItemFunctions.updateCartItem(newCartItem))
  }

  const handleTrashClick = (e, cartItem) => {
    e.preventDefault();
    dispatch(CartItemFunctions.deleteCartItem(cartItem.id))
  }

  function totalCartCost(cartItems){
    let totalCost = 0;
    cartItems.forEach((cartItem) => {
      totalCost += (cartItem.product?.price * cartItem.quantity)
    })
    return totalCost
  }

  const handleFavoriteClick = (e,cartItem) => {
    e.preventDefault();
    const newFavorite = {
      favoriterId: sessionUser.id,
      productId: cartItem.product.id
    }
    dispatch(FavoriteFunctions.createFavorite(newFavorite))
  }

  return(
    <>
      <div className="cart-container">
        <div className="cart-item-container">
          <h1>Bag</h1>
          {cartItems.map((cartItem)  => {
            return(
              <div className="cart-item">
                  <div className="cart-item-left-image">
                    <img key={`${cartItem.productId}+00`} src={cartItem.product?.imageUrl[0]}/>
                  </div>
                  <div key={`${cartItem.productId}+06`} className="cart-item-left">
                    <div className="cart-item-left-info">
                    <h5 key={`${cartItem.productId}+01`}>{cartItem.product?.name}</h5>
                    <p key={`${cartItem.productId}+02`}>{cartItem.product?.title}</p>
                    <p key={`${cartItem.productId}+03`}>{cartItem.product?.color}</p>
                    <div className="changeables">
                      <label>Quantity:
                        <select className="quantity-selector" defaultValue={cartItem?.quantity} onChange={(e) => handleQuantityChange(e, cartItem)}>
                          {[1,2,3,4,5,6,7,8,9,10].map(num => {
                            return <option value={num} >{num}</option>
                          })}
                        </select>
                      </label>
                      <label>Size:
                        <select className="sizes-selector" onChange={((e) => {handleSizeChange(e, cartItem)})} 
                          defaultValue={cartItem?.size}  >
                          {cartItem.product?.size.map((sizei) => {
                            return(
                              <option key={sizei} value={sizei}>{sizei}</option>
                            )
                          })}
                        </select>
                      </label>
                    </div>
                    <div className="cart-buttons">
                      <GrFavorite id="cart-item-favorite-button" onClick={(e) => handleFavoriteClick(e, cartItem)}/>
                      <BsTrash3 onClick={(e) => handleTrashClick(e, cartItem)} id="cart-item-delete-button"/>
                    </div>
                    </div>
                {/* </div> */}
              </div>
                <div className="cart-item-right">
                  <p>${(cartItem?.product?.price)?.toFixed(2)}</p>
                </div>
            </div>
            )
          })}
        </div>
        <div className="payment-right">
          <h1>Summary</h1>
          <p>Total Cost: ${totalCartCost(cartItems).toFixed(2)}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>

    </>


  )
}

export default CartItemIndex