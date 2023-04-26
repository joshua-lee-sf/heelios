import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getProducts, fetchProducts } from '../../../store/products';
import {Redirect} from 'react-router-dom'
import './productindex.css'


const ProductIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const [salePercentage, setSalePercentage] = useState(0);

  const handleClick = () => {
    alert("going to shoe")
  }
  
  return(
    <>
    <h1>All Products</h1>
    <div className="products-container">
      {products.map(product => {
          return (
            <div key={product.id} className='product-container' onClick={(handleClick)}>
              <img src={product.photos} />
              <h5 className="product-name">{product.name}</h5>
              {product.title ? <p>{product.title}</p> : null}
              <p>{product.pType}</p>
              <div className="price-container">
                <p className={product.salePrice ? "onsaleproduct" : "notonsale"}>${product.price}</p>
                { product.salePrice ?  <p className="onsale">${product.salePrice}</p> : null}
              </div>
            </div>
          )
        })}
    </div>
    </>

  )
}

export default ProductIndex