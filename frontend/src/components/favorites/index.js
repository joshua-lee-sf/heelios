import { getFavorites, fetchFavorites, deleteFavorite } from "../../store/favorite"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { BsTrash3 } from 'react-icons/bs'
import './favorites.css' 

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchFavorites())
  }, [dispatch])

  const handleFavoriteDeleteButton = (e, favorite) => {
    e.preventDefault();
    dispatch(deleteFavorite(favorite.id))
  }

  return(
    <>
    <h2 id="favorites-head">Favorites</h2>
    <div className="favorite-item-container"> 
      {favorites.map(favorite => {
        return (
          <div className="favorite-item">
            <div className="favorite-item-image">
              <img src={favorite.product.imageUrl[0]} />
            </div>
              <div className="favorite-item-info">
                <div className="favorite-item-info-left">
                  <h6>{favorite.product?.name}</h6>
                  <p>{favorite.product?.title}</p>
                </div>
                <div className="favorite-item-info-right">
                  <p>${(favorite.product?.price).toFixed(2)}</p>
                </div>
            </div>
            <div className="favorite-options">
              <button id="favorite-select-size-button">Select Size</button>
              <BsTrash3 id="favorite-delete-button" onClick={(e) => handleFavoriteDeleteButton(e, favorite)}/>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Favorites