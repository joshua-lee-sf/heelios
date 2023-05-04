import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCartItem } from '../../../store/cartItem';

import './sizemodal.css'

const SizeModal = ({closeModal, product}) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user)
  const [dispatchCartSuccess, setDispatchCartSuccess] = useState(false)
  

  const handleAddToBagClick = (e) => {
    e.preventDefault();
    setErrors([]);
    const newCartItem = {
      productId: product.id,
      userId: sessionUser.id,
      quantity: 1,
      size: selectedSize
    }
    dispatch(createCartItem(newCartItem))
      .then(()=> setDispatchCartSuccess(true))
      .catch(async (res) => {
        let data;
        try{
          data = await res.clone().json();
        } catch{
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors(data)
        else setErrors([res.statusText])
      });
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
          </div>
            <div>
              <p>Select Size: </p>
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
          <button className="add-to-bag-button" onClick={(e) => handleAddToBagClick(e)}>{dispatchCartSuccess ? "Added to Bag" : "Add To Bag"}</button>
          {errors?.map((error, idx) => {
            return <p className="error" key={idx}>{error}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default SizeModal