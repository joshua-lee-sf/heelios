import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCartItem } from '../../../store/cartItem';

import './sizemodal.css'

const SizeModal = ({closeModal, product}) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const sessionUser = useSelector(state => state.session.user)
  

  const handleAddToBagClick = (e) => {
    e.preventDefault();
    const newCartItem = {
      productId: product.id,
      userId: sessionUser.id,
      quantity: 1,
      size: selectedSize
    }
    dispatch(createCartItem(newCartItem))
  }


  return(
    <div className="size-modal-background" onClick={(closeModal)}>
      <div className="size-modal-foreground" onClick={(e)=> e.stopPropagation()}>
        <div className="product-image-size-modal-container">
          <img src={product?.imageUrl?.[0]}/>
        </div>
        <div className="product-info-size-modal-container">
          <div className="product-info-size-modal-header-container">
            <div className="product-info-size-modal-header-top-line-container">
              <p>{product?.pType}</p>
              <p>${product?.price.toFixed(2)}</p>
            </div>
            <h1>{product?.name}</h1>
            <div>
              <p>Select Size: </p>
            </div>
          </div>
          <div className="product-size-modal-size-selector">
            {product?.size.map((productSize)=>{
              return(
                <>
                  <input key={`${productSize}-00`} type="radio" name="size" id={productSize} value={productSize} onClick={(e)=> setSelectedSize(e.target.value)}></input>
                  <label key={`${productSize}-01`} htmlFor={productSize} >{productSize}</label>
                </> 
              )
            })}
          </div>
          <button className="add-to-bag-button" onClick={(e) => handleAddToBagClick(e)}>Add To Bag</button>
        </div>
      </div>
    </div>
  )
}

export default SizeModal