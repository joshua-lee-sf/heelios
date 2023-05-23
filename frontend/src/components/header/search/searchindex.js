import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByQuery, getProducts } from "../../../store/products";
import Loading from "../../loading";
import './search.css';

const SearchIndex = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const [loading, setLoading] = useState(true);

    
    const areThereProducts = products.length > 0

    useEffect(()=>{
      dispatch(fetchProductsByQuery(location.search))
        .finally(() => setLoading(false))
    },[dispatch, location.search])

    const content = () => {
      return(
        <>
        <h1 className="page-header">Search Results</h1>
        {areThereProducts ? null : <p id="no-search-results">"Sorry, we couldn't find what you were looking for :("</p>}
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
                    <p className={product?.salePrice ? "onsaleproduct" : "notonsale"}>${(product?.price)?.toFixed(2)}</p>
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

    return loading ? <Loading /> : content();
}

export default SearchIndex