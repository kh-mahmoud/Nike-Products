import ReviewCard from "../components/ReviewCard"



const CustomerReviews = () => {
  return (
    <section>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-origin'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex justify-center items-center'>
        {<ReviewCard/>}
      </div>

    </section>
  )
}

export default CustomerReviews
