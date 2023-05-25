import {getProduct, fetchProductsBySku, getProductBySku} from '../../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai';
import Reviews from '../../reviews';
import * as CartItemFunctions from '../../../store/cartItem';
import * as FavoriteFunctions from '../../../store/favorite';
import Loading from '../../loading';
import './productshow.css';

const ProductShow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const product = useSelector(getProduct(id));
  const products = useSelector(getProductBySku(id));
  const sessionUser = useSelector(state => state.session.user);
  const [dispatchCartSuccess, setDispatchCartSuccess] = useState(false);
  const [dispatchFavoriteSuccess, setDispatchFavoriteSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(id){
      dispatch(fetchProductsBySku(id))
        .finally(() => setLoading(false))
    }
  },[dispatch, id])

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    setErrors([]);
    const newCartItem = {
      productId: product?.id,
      userId: sessionUser?.id,
      quantity: 1,
      size: selectedSize
    }
    dispatch(CartItemFunctions.createCartItem(newCartItem))
      .then(()=> {
        setDispatchCartSuccess(true);
        setTimeout(() => setDispatchCartSuccess(false), 3000);
      })
      .catch(async (res) => {
        let data;
        try{
          data = await res.clone().json();
        } catch{
          data = await res.text()
        }
        if (data?.errors) setErrors(data.errors, data?.message);
        else if (data?.message) history.push('/account/signin');
        else if (data) setErrors(data)
        else setErrors([res.statusText])
      });
    }

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setErrors([]);
    const newFavorite = {
      favoriterId: sessionUser?.id,
      productId: product?.id
    };
    dispatch(FavoriteFunctions.createFavorite(newFavorite))
      .then(()=> {
        setDispatchFavoriteSuccess(true);
        setTimeout(() => setDispatchFavoriteSuccess(false), 3000);
      })
      .catch(async (res) => {
        let data;
        try{
          data = await res.clone().json();
        } catch{
          data = await res.text()
        }
        if (data?.errors) setErrors(data.errors);
        else if (data?.message) history.push('/account/signin');
        else if (data) setErrors(data);
        else setErrors([res.statusText])
      });
  }

  const handleBackClick = () => {
    history.goBack();
  }
  
  const content = () => {
    return (
      <div className="product-show-container">
        <div onClick={handleBackClick} className='back-button-container'>
          <i class="fa-solid fa-chevron-left back-button"></i>
        </div>
        <div className="product-show-left">
          {product?.imageUrl.map((photo,idx) =>{
            return(
              <img key={`${idx}-01`} src={photo} alt={`${product?.name}`}/>
            )
          })}
        </div>
        <div className="product-show-right">
          <h1 className="product-name">{product?.name}</h1>
          <p className="product-title info" >{product?.title}</p>
          <p className="product-type info">{product?.pType}</p>
          <p className="product-price info">${(product?.price)?.toFixed(2)}</p>
          <div className="color-selector">
            {products.map((product) => {
              return(
                <Link to={`/products/${product.sku}`} className="color-selector-link" key={`${product.id}-00`}>
                    <img src={product?.imageUrl[0]} alt="" key={`${product.id}-01`} className={id === product?.sku ? "active" : null}/>
                    <input type="radio" value={product.sku} id={product.sku} name="color" key={`${product.id}-02`} className="product-show-input"/>
                    <label className="color-selector-item" htmlFor={product.sku} key={`${product.id}-03`}></label>
                </Link>
              )
            })}
            </div>
            <h5>Sizes</h5>
          <div className="size-selector">
            {product?.size.map((size, idx) => {
              return (
                <div key={`${size}-00`} className="product-size">
                  <input  type="radio" name="size" id={size} value={size}></input>
                  <label key={`${size}-01`} htmlFor={size} onClick={(e)=> setSelectedSize(size)}>{size}</label>
                </div>
              )
            })}
          </div>
          <div className="product-buttons">
            <button className="add-to-bag-button"  onClick={(handleAddToCartClick)}>{dispatchCartSuccess ? "Added To Bag" : "Add To Bag"}</button>
            <button className="favorite-button" onClick={handleFavoriteClick}>{dispatchFavoriteSuccess ? "Added To Favorites" : "Favorite"} <AiOutlineHeart className="heart-icon"/></button>
          </div>
          {errors?.map((error,idx) => {
              return <p className="error" key={idx}>{error}</p>
            })}
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

  return loading ? <Loading/> : content();
}

export default ProductShow;