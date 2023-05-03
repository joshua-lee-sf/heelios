import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { createReview, getReview, updateReview } from '../../../store/reviews'
import ProductRating from './productrating'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './reviewform.css'

const ReviewForm = ({product, reviewToEdit }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [rating, setRating] = useState(product?.review?.rating);
  const [title, setTitle] = useState('');
  const [reviewDetails, setReviewDetails] = useState('');
  

  const reviewToEditKeys = Object.keys(reviewToEdit).length !== 0

  useEffect(()=>{
    if(reviewToEditKeys){
      setRating(reviewToEdit?.rating)
      setTitle(reviewToEdit?.title)
      setReviewDetails(reviewToEdit?.reviewDetails)
    }
  }, [reviewToEdit])

  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(!reviewToEditKeys){
      const newReview = {
        title: title,
        rating: rating,
        reviewDetails: reviewDetails,
        reviewerId: sessionUser?.id,
        productId: product?.id
      }
      dispatch(createReview(newReview))
    } else {
      const newReview = {
        id: reviewToEdit.id,
        title: title,
        rating: rating,
        reviewDetails: reviewDetails,
        reviewerId: sessionUser?.id,
        productId: product?.id
      }
      dispatch(updateReview(newReview))
    }

  }

  const onChange = (number) => {
    setRating(parseInt(number))
  }

  return(
    <div className="review-form-container">
      <div className="review-form-header-container">
        <h1>{reviewToEditKeys ? "Edit Review" : "Write a Review"}</h1>
        <p>Please share your experience</p>
      </div>
      <div className="review-form-content">
        <form onSubmit={(e) => handleFormSubmit(e)} className="new-review-form">
          <label>Review Title :<span className="review-required-input">*</span>
            <input className="review-title-input" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Title'/>
          </label>
          <div className="review-form-rating-container">
            <label>Overall Rating : <span className="review-required-input">*</span></label>
            <ProductRating disabled={false} onChange={onChange} rating={rating} />
          </div>
          <label className="review-detail-container">Review :<span className="review-required-input">*</span>
            <textarea value={reviewDetails} cols="40" rows="10" onChange={(e) => setReviewDetails(e.target.value)} placeholder='Review'/>
          </label>
          <button className="submit-review-button">{reviewToEditKeys ? "Save Review" : "Submit Review"}</button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm
