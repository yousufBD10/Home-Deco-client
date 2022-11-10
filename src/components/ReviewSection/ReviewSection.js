import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewSection = () => {
    
    const [review,setReview] = useState([]);
    

    useEffect(()=>{
        fetch('https://assignment-11-server-bice.vercel.app/review')
        .then(res=>res.json())
        .then(data=>  setReview(data)
          //  {
            // if(data.acknowledged){
            //     // const newAdd = review.filter(rev => rev._id === data.insertedId);
           
            //     // const newRev = [newAdd,...review];
            //     // setReview(newRev);
            // }
       // }
        )
    },[])




    return (
     <div>
        {
            review.map(rev => <ReviewCard key={rev._id} rev={rev}></ReviewCard>)
        }
     </div>
    );
};

export default ReviewSection;