import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css';
import { useEffect } from 'react';
import { reviews } from '../constants';
import { star } from '../assets/icons';

const ReviewCard = () => {

    useEffect(() => {
        // Initialize the Carousel component
        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {
          // Options (e.g., indicators: true)
        });
      }, []);


  return (
    <div className={"carousel"}>
       {reviews.map((review,index)=>(
           <div className='carousel-item cursor-pointer bg-white rounded-md shadow-3xl flex flex-col items-center p-5 ' key={index}>
                    <img src={review.imgURL} alt="avatar" className='carousel-image' />
                    <p className='mt-6 max-w-sm text-center info-text'>{review.feedback}</p>
                    <div className='flex gap-2 mt-2'>
                        <img src={star} alt="star" />
                        <p className='text-xl font-montserrat text-slate-gray'>({review.rating})</p>
                    </div>
                    <p className='mt-1 font-bold text-3xl'>{review.customerName}</p>
           </div>
       ))}
  </div>
  )
}

export default ReviewCard
