import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import * as ReviewFunctions from '../../store/reviews'
import { AiFillStar } from 'react-icons/ai'
import ReviewModal from "./formmodals/reviewmodal";
import { BsTrash3 } from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import './reviews.css'


const Reviews = ({product}) => {
  const dispatch = useDispatch()
  const [showNewReviewModal, setShowNewReviewModal] = useState(false)
  const [showEditReviewModal, setShowEditReviewModal] = useState(false)
  const reviews = useSelector(ReviewFunctions.getReviews(product))
  const sessionUser = useSelector(state => state.session.user)



  const averageRatings = (reviews) => {
    const total = reviews?.reduce((acc, review) => acc + review.rating, 0)
    const averageRating = reviews.length > 0 ? Math.round(total / reviews.length) : 0;
    return averageRating
  }

  const averageRating = averageRatings(reviews)

  const handleReviewTrashClick = (e, review) => {
    e.preventDefault();
    dispatch(ReviewFunctions.deleteReview(review.id))
  }

  return(
    <div className="reviews-container">
      <div className="review-header-container">
        <p id="reviews-header" ><strong>Reviews: ({reviews?.length})</strong>  </p>
        <p className="reviews-rating-header">
        <strong>Average Rating: </strong> 
        {Array.from(Array(averageRating).keys()).map(numStar => {
          return (
              <AiFillStar key={`rating-${numStar}`}/>
          )
        })}
        </p>
      </div>
      <div>
        <p onClick={() => setShowNewReviewModal(prev => !prev)} id="new-review-button" >Write a Review</p>
        {showNewReviewModal && (
          <ReviewModal product={product} reviewToEdit closeModal={(e) => setShowNewReviewModal(false)}/>
        )}
      </div>
        {reviews.map((review, i)=>{
          if(review.productId === product.id){
            return (
              <div className="review-container" key={`container-${i}`}>
                <h5>{review?.title}</h5>
                  {[...Array(review.rating)].map((num, i) => {
                    return <AiFillStar key={`review-${i}`}/>
                  })}
                <p>{review?.reviewDetails}</p>
                {sessionUser?.id === review?.reviewerId ? <BsTrash3 onClick={(e) => handleReviewTrashClick(e, review)} className="review-delete"/> : null}
                {sessionUser?.id === review?.reviewerId ? <AiOutlineEdit onClick={() => setShowEditReviewModal(prev => !prev)} className="review-edit"/> : null}
                {showEditReviewModal && (
                  <ReviewModal product={product} reviewToEdit={review} closeModal={(e) => setShowEditReviewModal(false)}/>
                )}
              </div>
            )
          }
        })}
    </div>
  )
}

export default Reviews