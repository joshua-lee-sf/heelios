import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getProducts, fetchProducts } from '../../../store/products';
import { useHistory } from 'react-router-dom';
import './productindex.css'


const ProductIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const [salePercentage, setSalePercentage] = useState(0);

  const handleClick = (id) => {
    history.push(`/products/${id}`)
  }
  
  return(
    <>
    <h1>All Products</h1>
    <div className="products-container">
      {products.map(product => {
        return (
            <div key={product.id} className='product-container' onClick={() => handleClick(product.id)}>
              <img src={product.imageUrl[0]} />
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