import csrfFetch from './csrf'


//action constants
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS"
const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW"
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW"

//action creators
export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  payload: reviews
})

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  payload: review
})

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  payload: reviewId
})

// state selectors/updators

export const getReviews = (state) => {
  return state.reviews ? Object.values(state.reviews) : [];
}

export const getReview = reviewId => state => {
  return state.reviews ? state.favorites[reviewId] : null;
}

// thunk dispatchers
export const fetchReviews = () => async (dispatch, getState) => {
  const res = await fetch('/api/reviews')
  const { reviews } = await res.json()
  dispatch(receiveReviews(reviews))
}

export const fetchReview = (reviewId) => async (dispatch, getState) => {
  const res = await fetch(`/api/reviews/${reviewId}`)
  const review = await res.json();
  dispatch(receiveReview(review))
}

export const fetchReviewBySku = (productId) => async (dispatch, getState) => {
  let res = await csrfFetch(`/api/reviews?product_id=${productId}`)
  let { reviews } = await res.json()
  dispatch(receiveReviews(reviews))
}

export const createReview = (review) => async (dispatch, getState) => {
  const res = await csrfFetch('/api/reviews',{
    method: "POST",
    body: JSON.stringify(review)
  })
  const data = await res.json()
  dispatch(receiveReview(data))
}

export const updateReview = (review) => async (dispatch, getState) => {
  const res = await csrfFetch(`/api/reviews/${review.id}`,{
    method: "PATCH",
    body: JSON.stringify(review)
  })
  const data = await res.json()
  dispatch(receiveReview(data))
}

export const deleteReview = (reviewId) => async (dispatch, getState) => {
  await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  })
  dispatch(deleteReview(reviewId))
}

//review reducer

const reviewReducer = (state={},action) => {
  const nextState = {...state}
  switch(action.type){
    case RECEIVE_REVIEWS:
      return {...nextState, ...action.payload}
    case RECEIVE_REVIEW:
      return {...nextState, [action.payload.id]: action.payload}
    case REMOVE_REVIEW:
      delete nextState[action.payload]
      return nextState
    default:
      return state
  }
}

export default reviewReducer
