import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { getProducts, fetchProducts, fetchProductsByCategory } from '../../../store/products';
import { useHistory, useParams } from 'react-router-dom';
import SideBar from '../../sidebar';
import Loading from '../../loading';
import './productindex.css'


const ProductIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const { category } = useParams();
  const [categoryFilter, setCategoryFilter] = useState();
  const [productTypeFilter, setProductTypeFilter] = useState();
  const [colorFilter, setColorFilter] = useState();
  const [loading, setLoading] = useState(true);

  const COLORS = {
    "yellow": ["Saturn Gold", "Opti Yellow", "Wheat Gold", "Citron Tint", "Moss", "Olive Flak"],
    "grey": ["Dark Grey", "Heather", "Dark Grey Heather", "Charcoal Heather", "Anthracite", "Matte Silver", "Light Smoke Grey", "Metallic Silver", "Iron Grey", "Cool Grey", "Photon Dust", "Light Silver", "Flat Pewter", "Football Grey"],
    "black": ["Black", "Anthracite"],
    "orange": ["Bright Mandarin", "Monarch", "Dark Russet"],
    "red": ["University Red", "Gym Red", "Rosewood", "Team Red", "Picante Red", "Light Crimson"],
    "green":["Alligator", "Medium Olive", "Mica Green", "Mineral Teal", "Oil Green", "Spring Green", "Green Abyss", "Fir", "Volt", "Neutral Olive", "Dusty Sage" ],
    "brown":["Khaki", "Rattan", "Earth", "Sail", "Oatmeal", "Light Orewood Brown", "Sanddrift", "Gum Light Brown", "Cargo Khaki"], 
    "white": ["Phantom", "White", "Light Cream", "Coconut Milk", "Summit White", "Light Bone", "Pure Platinum", "Pale Ivory"],
    "blue": ["Midnight Navy", "Diffused Blue", " Celestine Blue", "Worn Blue", "Ashen Slate", "Baltic Blue", "Cobalt Bliss", "Obsidian", "Noise Aqua", "Blue Lightning", "Ocean Bliss", "College Navy", "Deep Royal Blue", "Game Royal", "Racer Blue", "Armory Navy"],
    "pink": ["Pink Bloom",  "Pinksicle", "Pink Oxford", "Diffused Taupe", "Coral Chalk", "Citron Pulse", "Sea Coral", "Pearl Pink", "Pink Foam"],
    "purple": ["Violet Shock", "Rush Fuchsia", "Oxygen Purple", "Indigo Haze", "Light Thistle"],
    "multi-color": ["Multi-Color"]
}

  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      (!productTypeFilter || product.pType === productTypeFilter) 
      && (!categoryFilter || product.category === categoryFilter)
      && (!colorFilter || (product.color?.split('/').map( (color) => 
        COLORS[`${colorFilter}`].includes(color)
      ).includes(true)))
  )}, [categoryFilter, productTypeFilter, colorFilter, products])


  useEffect(() => {
    if(category){
      dispatch(fetchProductsByCategory(category))
        .finally(() => setLoading(false))
    } else {
      dispatch(fetchProducts())
      .finally(() => setLoading(false))
    }
  }, [dispatch, category])


  const handleClick = (id) => {
    history.push(`/products/${id}`)
  }
  
  const content = () => {
    return(
      <div className='products-index-page-container'>
      <h1 className="page-header">{category ? `${category}` : `All Products (${filteredProducts.length})`}</h1>
      <div className="products-index-container">
        <SideBar setCategoryFilter={setCategoryFilter} setProductTypeFilter={setProductTypeFilter} setColorFilter={setColorFilter} colorFilter={colorFilter}/>
        <div className="products-container">
          {filteredProducts?.map(product => {
            if(category && product.category !== category){
              return null
            }
            return (
                <div key={product.id} className='product-container' onClick={() => handleClick(product.sku)}>
                  <img src={product?.imageUrl?.[0]} alt=""/>
                  <h5 className="product-name">{product.name}</h5>
                  {product.title ? <p>{product.title}</p> : null}
                  {/* <p>{product.pType}</p> */}
                  <div className="price-container">
                    <p className={product.salePrice ? "onsaleproduct" : "notonsale"}>${product.price}</p>
                    { product.salePrice ? <p className="onsale">${product.salePrice}</p> : null}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      </div>
  
    )
  }

  return loading ? <Loading /> : content();
  }


export default ProductIndex;