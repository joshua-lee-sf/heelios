import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react" ;
import { useHistory } from "react-router-dom";
import { fetchProductsByCategory, fetchProductsByLimitandOffset, getProducts, fetchProducts } from "../../store/products";
import './splashpage.css'

const SplashPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const products = useSelector(getProducts);
  
  let num1 = Math.floor(Math.random()*10)
  let num2 = Math.floor(Math.random()*10)

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(num2);
  
  while (num2 === num1){
    num2 = Math.floor(Math.random()*10);
  }

  const product1 = products[num1];
  const product2 = products[num2];

  useEffect(()=>{
    dispatch(fetchProductsByLimitandOffset(limit, offset));
  }, [dispatch, limit, offset])

  useEffect(() => {
    if(category){
      dispatch(fetchProductsByCategory(category))
    }
  }, [dispatch, category])

  const shopWomensClick = () => {
    history.push('/products/category/women')
  }

  const shopMensClick = () => {
    history.push('/products/category/men')
  }

  const shopKidsClick = () => {
    history.push('/products/category/kids')
  }

  // onClick={()=> history.push('/products')


  return(
    <div className="splash-container">
      <div className="first-item-container">
        <img src="../../../assets/nike3.webp" alt="mother's day" id="splash-picture"/>
        <div className="image-text-box">
          <h1>NEW ARRIVALS</h1>
          <p>The most coveted sumemr styles from Jordan & Nike</p>
          <div className="shop-buttons-container">
            <button className="first-item-button" onClick={()=> history.push('/products')}>Shop</button>
          </div>
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
      {!sessionUser &&(
            <div className="member-join-container">
              <img src="../../../assets/nikesplashpage.webp" alt=""/> {/* backgroung image ?*/}
              <div className="member-join-text">
                <h1>Become A Member</h1>
                <p>Sign up for free. Join the community</p>
                <button onClick={()=> history.push('/account/signup')}>Join Us</button>
                <button id="member-join-text-signin-button" onClick={()=> history.push('/account/signin')}>Sign In</button>
              </div>
            </div>
      )}

    </div>
  )
}

export default SplashPage