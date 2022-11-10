import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServicesPageDetails = () => {
    const service = useLoaderData();
    const {title,service_price,details,image_url,_id,rating} = service;
  
    return (

         <div>
            <div className="card w-full bg-base-100 shadow-sm">
  <figure><img src={image_url}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {title}
    
    </h2>
    <p>{details}...</p>
    <div className="card-actions items-center mt-3 justify-between">
    <small><p className='font-bold '>Service Price :BDT {service_price}</p></small>
  
    </div>
  </div>
            </div>
            
          
              <Reviews></Reviews>
              <ReviewSection></ReviewSection>
           
                   

          </div>
        
    );
};

export default ServicesPageDetails;