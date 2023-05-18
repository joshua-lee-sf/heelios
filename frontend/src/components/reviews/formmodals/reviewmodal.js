
import ReviewForm from '../formdata/reviewform'
import '../reviews.css'

const ReviewModal = ({closeModal, product, reviewToEdit}) => {

  return(
    <div className="review-modal-background" onClick={(closeModal)}>
      <div className="review-modal-foreground" onClick={(e) => e.stopPropagation()}>
        <div className="review-form-container">
          <ReviewForm product={product} reviewToEdit={reviewToEdit} closeModal={(closeModal)}/>
        </div>
      </div>
    </div>
  )
}

export default ReviewModal