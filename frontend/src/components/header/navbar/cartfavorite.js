import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GrFavorite } from 'react-icons/gr'
import { useHistory } from 'react-router-dom'

const CartFavorite = () => {
  const history = useHistory();

  const handleShoppingCartClick = () => {
    history.push('/cart')
  }

  const handleFavoriteClick = () => {
    history.push('/favorites')
  }

  return(
    <>
      <AiOutlineShoppingCart onClick={(handleShoppingCartClick)}/>
      <GrFavorite onClick={handleFavoriteClick} />
    </>
  )
}

export default CartFavorite