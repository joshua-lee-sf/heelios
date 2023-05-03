import {useEffect, useState} from 'react';
import "./reviewform.css"

const ProductRating = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating)

  useEffect(()=>{
    setActiveRating(rating)
  }, [rating])

  return(
    <div className="rating-input">
      <div
        className={activeRating >= 1 ? "filled" : 'empty'}
        onMouseEnter={() => {if(!disabled) setActiveRating(1)}}
        onMouseLeave={()=> {if(!disabled) setActiveRating(rating)}}
        onClick={()=>{ if(!disabled) onChange(1)}}
      >
        <i class="fa-solid fa-star"></i>
      </div>
      <div
        className={activeRating >= 2 ? "filled" : 'empty'}
        onMouseEnter={() => {if(!disabled) setActiveRating(2)}}
        onMouseLeave={()=> {if(!disabled) setActiveRating(rating)}}
        onClick={()=>{ if(!disabled) onChange(2)}}
      >
        <i class="fa-solid fa-star"></i>
      </div>
      <div
        className={activeRating >= 3 ? "filled" : 'empty'}
        onMouseEnter={() => {if(!disabled) setActiveRating(3)}}
        onMouseLeave={()=> {if(!disabled) setActiveRating(rating)}}
        onClick={()=>{ if(!disabled) onChange(3)}}
      >
        <i class="fa-solid fa-star"></i>
      </div>
      <div
        className={activeRating >= 4 ? "filled" : 'empty'}
        onMouseEnter={() => {if(!disabled) setActiveRating(4)}}
        onMouseLeave={()=> {if(!disabled) setActiveRating(rating)}}
        onClick={()=>{ if(!disabled) onChange(4)}}
      >
        <i class="fa-solid fa-star"></i>
      </div>
      <div
        className={activeRating >= 5 ? "filled" : 'empty'}
        onMouseEnter={() => {if(!disabled) setActiveRating(5)}}
        onMouseLeave={()=> {if(!disabled) setActiveRating(rating)}}
        onClick={()=>{ if(!disabled) onChange(5)}}
      >
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  );
};

export default ProductRating
