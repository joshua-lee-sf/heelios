import {getProduct, fetchProductsBySku, getProductBySku} from '../../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import Reviews from '../../reviews'
import * as CartItemFunctions from '../../../store/cartItem'
import * as FavoriteFunctions from '../../../store/favorite'
import './productshow.css'

const ProductShow = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const product = useSelector(getProduct(id));
  const products = useSelector(getProductBySku(id))
  const sessionUser = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(id){
      dispatch(fetchProductsBySku(id))
    }
  },[dispatch, id])

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    const newCartItem = {
      productId: product.id,
      userId: sessionUser.id,
      quantity: 1,
      size: selectedSize
    }
    return dispatch(CartItemFunctions.createCartItem(newCartItem))
      .catch(async (res) => {
        let data;
        try{
          data = await res.clone().json;
        } catch{
          data = await res.text()
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors(data)
        else setErrors([res.statusText])
      });
  }

  console.log(errors)

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    const newFavorite = {
      favoriterId: sessionUser.id,
      productId: product.id
    }
    dispatch(FavoriteFunctions.createFavorite(newFavorite))
  }
  
  return (
    <div className="product-show-container">
      <div className="product-show-left">
        {product?.imageUrl.map((photo,idx) =>{
          return(
            <>
              <img key={`${idx}-01`} src={photo} alt=""/>
            </>
          )
        })}
      </div>
      <div className="product-show-right">
        <h1 className="product-name">{product?.name}</h1>
        <p className="product-title info" >{product?.title}</p>
        <p className="product-type info">{product?.pType}</p>
        <p className="product-price info">${product?.price}.00</p>
        <div className="color-selector">
          {products.map((product) => {
            return(
              <Link to={`/products/${product.sku}`} className="color-selector-link" key={`${product.id}-00`}>
                  <img src={product?.imageUrl[0]} alt="" key={`${product.id}-01`}/>
                  <input type="radio" value={product.sku} id={product.sku} name="color" key={`${product.id}-02`}/>
                  <label className="color-selector-item" htmlFor={product.sku} key={`${product.id}-03`}></label>
              </Link>
            )
          })}
          </div>
          <h5>Sizes</h5>
        <div className="size-selector">
          {product?.size.map((size, idx) => {
            return (
              <>
                <input key={`${size}-00`} type="radio" name="size" id={size} value={size}></input>
                <label key={`${size}-01`} htmlFor={size} onClick={(e)=> setSelectedSize(size)}>{size}</label>
              </>
            )
          })}
        </div>
        <div className="product-buttons">
          <button className="add-to-bag-button"  onClick={(handleAddToCartClick)}>Add to Bag</button>
          <button className="favorite-button" onClick={handleFavoriteClick}>Favorite <AiOutlineHeart className="heart-icon"/></button>
        </div>
        <p className="product-description info">{product?.description}</p>
        <ul className="product-info-container">
          <li key="product-info-li-1" className="product-color info"><strong>Shown:</strong> {product?.color}</li>
          <li key="product-info-li-2" className="product-sku info"><strong>Style:</strong> {product?.sku.toUpperCase()}</li>
        </ul>
        <div className="review-container">
          <Reviews product={product}/>
        </div>
      </div>
    </div>
  )
}

export default ProductShow;