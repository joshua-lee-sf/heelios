
import NewReviewForm from './formdata/newreviewform'
import './reviews.css'

const NewReviewModal = ({closeModal, product}) => {


  return(
    <div className="review-modal-background" onClick={(closeModal)}>
      <div className="review-modal-foreground" onClick={(e) => e.stopPropagation()}>
        <div className="review-form-container">
          <NewReviewForm product={product}/>
        </div>
      </div>
    </div>
  )
}

export default NewReviewModal