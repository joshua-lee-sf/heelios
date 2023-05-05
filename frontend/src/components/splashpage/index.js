import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react" ;
import { useHistory } from "react-router-dom";
import { fetchProductsByLimitandOffset, getProducts } from "../../store/products";
import './splashpage.css'

const SplashPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(getProducts)
  
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0)

  let num1 = Math.floor(Math.random()*10)
  let num2 = Math.floor(Math.random()*10)
  
  while (num2 === num1){
    num2 = Math.floor(Math.random()*10)
  }

  const product1 = products[num1]
  const product2 = products[num2]

  useEffect(()=>{
    dispatch(fetchProductsByLimitandOffset(limit, offset))
  }, [dispatch, limit, offset])


  return(
    <div className="splash-container">
      <div className="first-item-container" onClick={()=> history.push('/products/category/women')}>
        <img src="../../../assets/nike.webp" alt=""/>
        <div className="image-text-box">
          <h1>GIFTS FOR HER</h1>
          <p>This Mother's Day, Members get free expedited shipping on orders $150+. ends 5.7 -- exlcusions Apply</p>
          <button classname="first-item-button" onClick={()=> history.push('/products')}>Shop</button>
        </div>
      </div>
      <div className="featured-footwear-container">
        <div className="featured-footwear-product-container">
          <img src={product1?.imageUrl[0]} alt=""/> {/* background image */}
          <div className="featured-product-info">
            <p>{product1?.pType}</p>
            <h5>{product1?.name}</h5>
            <button onClick={()=> history.push(`/search?query=${product1?.pType}`)}>See more {product1?.pType}</button>
          </div>
        </div>
        <div className="featured-footwear-product-container">
          <img src={product2?.imageUrl[0]} alt=""/> {/* background image */}
          <div className="featured-product-info">
            <p>{product2?.pType}</p>
            <h5>{product2?.name}</h5>
            <button onClick={()=> history.push(`/search?query=${product2?.pType}`)}>See more {product2?.pType}</button>
          </div>
        </div>
      </div>
      <div className="member-join-container">
        <img src="../../../assets/nikesplashpage.webp" alt=""/> {/* backgroung image ?*/}
        <div className="member-join-text">
          <h1>Become A Member</h1>
          <p>Sign up for free. Join the community</p>
          <button onClick={()=> history.push('/account/signup')}>Join Us</button>
          <button id="member-join-text-signin-button" onClick={()=> history.push('/account/signin')}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default SplashPage