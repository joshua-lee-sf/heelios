import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts, fetchProducts, fetchProductsByCategory } from '../../../store/products';
import { useHistory, useParams } from 'react-router-dom';
import './productindex.css'


const ProductIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const { category } = useParams();

  useEffect(() => {
    if(category){
      dispatch(fetchProductsByCategory(category))
    } else {
    }
    dispatch(fetchProducts())
  }, [dispatch, category])


  const handleClick = (id) => {
    history.push(`/products/${id}`)
  }
  
  return(
    <>
    <h1 className="page-header">{category ? `${category}` : "All Products"}</h1>
    <div className="products-container">
      {products.map(product => {
        if(category && product.category !== category){
          return null
        }
        return (
            <div key={product.id} className='product-container' onClick={() => handleClick(product.sku)}>
              <img src={product?.imageUrl?.[0]} alt=""/>
              <h5 className="product-name">{product.name}</h5>
              {product.title ? <p>{product.title}</p> : null}
              <p>{product.pType}</p>
              <div className="price-container">
                <p className={product.salePrice ? "onsaleproduct" : "notonsale"}>${product.price}</p>
                { product.salePrice ? <p className="onsale">${product.salePrice}</p> : null}
              </div>
            </div>
          )
        })}
    </div>
    </>

  )
}

export default ProductIndex