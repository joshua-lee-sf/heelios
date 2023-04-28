import {getProduct, fetchProductsBySku, getProductBySku} from '../../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import './productshow.css'

const ProductShow = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const product = useSelector(getProduct(id));
  const products = useSelector(getProductBySku(id))

  useEffect(() => {
    if(id){
      dispatch(fetchProductsBySku(id))
    }
  },[dispatch, id])
  
  return (
    <div className="product-show-container">
      <div className="product-show-left">
        {product?.imageUrl.map((photo,idx) =>{
          return(
            <>
              <img key={idx} src={photo}/>
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
              <Link to={`/products/${product.sku}`} className="color-selector-link">
                  <img src={product?.imageUrl[0]}/>
                  <input type="radio" value={product.sku} id={product.sku} name="color"/>
                  <label className="color-selector-item" htmlFor={product.sku}></label>
              </Link>
            )
          })}
          </div>
          <h5>Sizes</h5>
        <div className="size-selector">
          {product?.size.map((size, idx) => {
            return (
              <>
                <input key={size} type="radio" name="size" id={size} value={size}></input>
                <label key={(idx+1)*100} htmlFor={size}>{size}</label>
              </>
            )
          })}
        </div>
        <div className="product-buttons">
          <button className="add-to-bag-button">Add to Bag</button>
          <button className="favorite-button">Favorite <AiOutlineHeart className="heart-icon"/></button>
        </div>
        <p className="product-description info">{product?.description}</p>
        <ul className="product-info-container">
          <li className="product-color info"><strong>Shown:</strong> {product?.color}</li>
          <li className="product-sku info"><strong>Style:</strong> {product?.sku.toUpperCase()}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductShow;