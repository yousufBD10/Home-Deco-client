import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCards = ({service}) => {
    const {title,service_price,details,image_url,_id} = service;
    const detail= details.slice(0,100);
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {title}
    
    </h2>
    <p>{detail}...</p>
    <div className="card-actions items-center mt-3 justify-between">
      <small><p className='font-bold '>Service Price :BDT {service_price}</p></small>
      <Link to={`/services/${_id}`}>  <button className=" bg-primary text-white p-2 rounded-md hover:bg-blue-800">See more details</button></Link>
    </div>
  </div>
</div>
          
    );
};

export default ServicesCards;