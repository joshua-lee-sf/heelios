import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { createReview } from '../../../store/reviews'
import ProductRating from './productrating'
import './reviewform.css'

const NewReviewForm = ({product}) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(product?.review?.rating);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  
  const handleFormSubmit = (e, product) => {
    e.preventDefault()
  }

  const onChange = (number) => {
    setRating(parseInt(number))
  }

  return(
    <>
    <div className="review-form-header-container">
      <h1>Write a Review</h1>
      <p>Please share your experience</p>
    </div>
    <div className="review-form-content">
      <form onSubmit={(e) => handleFormSubmit(e)} className="new-review-form">
        <label>Review Title <span className="review-required-input">*</span>:
          <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </label>
        <div className="review-form-rating-container">
          <label>Overall Rating <span className="review-required-input">*</span>:</label>
          <ProductRating disabled={false} onChange={onChange} rating={rating} />
        </div>
        <label>Review <span className="review-required-input">*</span>: 
          <textarea value={review} cols="40" rows="10" onChange={(e) => setReview(e.target.value)} />
        </label>
        <button>Submit Review</button>
      </form>
    </div>
    </>
  )
}

export default NewReviewForm
