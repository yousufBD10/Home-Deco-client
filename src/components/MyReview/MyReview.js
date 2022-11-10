import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../Hooks/useTitle';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReview = () => {
    useTitle('My Review')
    const {user,logOut} = useContext(AuthContext);
      const [reviews ,setReviews] = useState([]);
      console.log(reviews);
   
    

    useEffect(()=>{
    fetch(`https://assignment-11-server-bice.vercel.app/review?email=${user?.email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('homeDeco-token')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
    
        
        
        .then(data => setReviews(data))
    },[user?.email,logOut]);

    
    const handleDelete = id =>{
        const proceed = window.confirm("are sure delete this item");
        if(proceed){
            fetch(`https://assignment-11-server-bice.vercel.app/myreview/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount){
                  const remaining = reviews.filter(rev => rev._id !== id);
                  setReviews(remaining);
                }
            })
        }
     }

     
       
    return (
     <div>
        {
            reviews.map(review => <MyReviewCard key={review._id} review={review} handleDelete={handleDelete}
             
            ></MyReviewCard>)
        }
     </div>

    );
};

export default MyReview;