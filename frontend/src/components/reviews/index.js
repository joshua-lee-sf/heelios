import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import * as ReviewFunctions from '../../store/reviews'
import { AiFillStar } from 'react-icons/ai'
import NewReviewModal from "./newreviewmodal";
import './reviews.css'


const Reviews = ({product}) => {
  const dispatch = useDispatch()
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false)
  const reviews = useSelector(ReviewFunctions.getReviews(product))

  const averageRatings = (reviews) => {
    const total = reviews?.reduce((acc, review) => acc + review.rating, 0)
    const averageRating = reviews.length > 0 ? Math.round(total / reviews.length) : 0;
    return averageRating
  }

  const averageRating = averageRatings(reviews)

  return(
    <div className="reviews-container">
      <div className="review-header-container">
        <p id="reviews-header" ><strong>Reviews: ({reviews?.length})</strong>  </p>
        <p className="reviews-rating-header">
        <strong>Average Rating: </strong> 
        {Array.from(Array(averageRating).keys()).map(numStar => {
          return (
              <AiFillStar key={`${numStar}-01`}/>
          )
        })}
        </p>
      </div>
      <div>
        <p onClick={() => setShowWriteReviewModal(prev => !prev)} id="new-review-button" >Write a Review</p>
        {showWriteReviewModal && (
          <NewReviewModal product={product} closeModal={(e) => setShowWriteReviewModal(false)}/>
        )}
      </div>
        {reviews.map((review)=>{
          if(review.productId === product.id){
            return (
              <>
              <div className="review-container">
                <h5>{review.title}</h5>
                  {[...Array(review.rating)].map(num => {
                    return <AiFillStar key={num}/>
                  })}
                <p>{review.reviewDetails}</p>
                <p>{review.reviewerId}</p>
              </div>
              </>
            )
          }
        })}
    </div>
  )
}

export default Reviews