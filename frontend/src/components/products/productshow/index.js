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
        <h1>{product?.name}</h1>
        <p>{product?.title}</p>
        <p>{product?.pType}</p>
        <p>${product?.price}.00</p>
        <img src={product?.imageUrl[0]} className="product-color-selector"/>
          <ul className="size-selector">
            <li>M 6/W 7.5</li>
            <li>M 6.5/W 8</li>
            <li>M 7/W 8.5</li>
            <li>M 7.5/W 9</li>
            <li>M 8/W 9.5</li>
            <li>M 8.5/W 10</li>
            <li>M 9/W 10.5</li>
            <li>M 9.5/W 11</li>
            <li>M 10/W 11.5</li>
            <li>M 10.5/W 12</li>
            <li>M 11/W 12.5</li>
            <li>M 11.5/W 13</li>
            <li>M 12/W 13.5</li>
            <li>M 12.5/W 14</li>
            <li>M 13/W 14.5</li>
            <li>M 13.5/W 15</li>
            <li>M 14/W 15.5</li>
            <li>M 14.5/W 16</li>
            <li>M 15/W 16.5</li>
          </ul>
          <button className="add-to-bag-button">Add to Bag</button>
          <button className="favorite-button">Favorite <AiOutlineHeart className="heart-icon"/></button>
          <p>{product?.description}</p>
          <ul className="product-info">
            <li><strong>Shown:</strong> {product?.color}</li>
            <li><strong>Style:</strong> {product?.sku}</li>
          </ul>
        </div>
    </div>
  )
}

export default ProductShow;