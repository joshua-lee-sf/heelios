import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByQuery, getProducts } from "../../../store/products";
import './search.css'

const SearchIndex = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(getProducts)

    
    const areThereProducts = products.length > 0

    useEffect(()=>{
      dispatch(fetchProductsByQuery(location.search))
    },[dispatch, location.search])


    return(
      <>
      <h1 className="page-header">Search Results</h1>
      <p id="no-search-results">{areThereProducts ? null : "Sorry, we couldn't find what you were looking for :("}</p>
        <div className="search-products-container">
        {products?.map((product, idx) => {
          return(
            <>
            <div key={idx} className="product-item" onClick={() => (history.push(`/products/${product?.sku}`))}>
              <div className="product-left">
                <img src={product?.imageUrl?.[0]} alt="" />
              </div>
              <div className="product-right">
                <h5>{product?.name}</h5>
                {product?.title ? <p>{product?.title}</p> : null}
                <p>{product?.pType}</p>
                <div className="price-container">
                  <p className={product?.salePrice ? "onsaleproduct" : "notonsale"}>${(product?.price).toFixed(2)}</p>
                  { product?.salePrice ? <p className="onsale">${product?.salePrice}</p> : null}
                </div>
              </div>
            </div>
            </>
          )
        })}
      </div>
      </>

    )
}

export default SearchIndex