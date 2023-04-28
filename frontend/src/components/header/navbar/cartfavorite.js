import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GrFavorite } from 'react-icons/gr'
import { useHistory } from 'react-router-dom'

const CartFavorite = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart')
  }

  return(
    <>
      <AiOutlineShoppingCart onClick={(handleClick)}/>
      <GrFavorite />
    </>
  )
}

export default CartFavorite