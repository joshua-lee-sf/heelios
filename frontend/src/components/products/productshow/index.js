import {getProduct, fetchProduct} from '../../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import './productshow.css'

const ProductShow = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  let product = useSelector(getProduct(id));

  

  useEffect(() => {
    if(id){
      dispatch(fetchProduct(id))
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
        <img src={product?.imageUrl[0]} className="product-color-selector"/>
        <div className="size-selector">
          {product?.size.map((size, idx) => {
            return (
                <>
                  <input type="radio" name="size" id={size} value={size}></input>
                  <label for={size}>{size}</label>
                </>
            )
          })}
        </div>
        <button className="add-to-bag-button">Add to Bag</button>
        <button className="favorite-button">Favorite <AiOutlineHeart className="heart-icon"/></button>
        <p className="product-description info">{product?.description}</p>
        <ul className="product-info-container">
          <li className="product-color info"><strong>Shown:</strong> {product?.color}</li>
          <li className="product-sku info"><strong>Style:</strong> {product?.sku}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductShow;