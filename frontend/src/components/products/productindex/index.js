import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getProducts, fetchProducts } from '../../../store/products';
import './productindex.css'


const ProductIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  
  return(
    <>
    <h1>All Products</h1>
    <div className="products-container">
      {products.map(product => {
          return (
            <div key={product.id} className='product-container'>
              <img src={product.photos.url} />
              <h5 className="product-name">{product.name}</h5>
              <p>{product.title}</p>
              <p>{product.pType}</p>
              {/* <p>{product.category}</p> */}
              <p>${product.price}</p>
            </div>
          )
        })}
    </div>
    </>

  )
}

export default ProductIndex