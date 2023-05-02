import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import * as ReviewFunctions from '../../store/reviews'
import { AiFillStar } from 'react-icons/ai'


const Reviews = ({product}) => {
  const dispatch = useDispatch()
  const reviews = useSelector(ReviewFunctions.getReviews)


  useEffect(()=>{
    if(product){
      dispatch(ReviewFunctions.fetchReviewBySku(product.id))
    }
  },[dispatch, product])

  const average_ratings = () => {
    let sum = 0;
    reviews.map((review) =>{
      sum += review.rating
    })
    return (sum / reviews.length)
  }

  return(
    <>
    <h5>Reviews: ({reviews.length}) </h5>
    {/* <h5>{average_ratings !== NaN ? average_ratings() : null}</h5> */}
    {reviews.map((review)=>{
      if(review.productId === product.id){
        return (
          <>
            <h5>{review.title}</h5>
            <p><AiFillStar /> * {review.rating}</p>
            <p>{review.review}</p>
          </>
        )
      }
    })}
    </>
  )
}

export default Reviews