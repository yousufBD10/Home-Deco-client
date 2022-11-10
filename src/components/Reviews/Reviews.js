import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Reviews = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const [reviews,setReviews] = useState({});
  const {title,service_price,details,image_url,_id,rating} = service;
  const date = new Date();

  const handleReviews = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const serviceName = form.title.value;
    const country = form.country.value;
    const message = form.message.value;
    const photo = user?.photoURL;
    console.log(email,name,serviceName,country,message,photo,date);

    const review = {
      name,
      email,
      serviceName,
       country,
      message,
      photo,
      date
    }

    
    fetch('https://assignment-11-server-bice.vercel.app/review',{
      method:"POST",
      headers:{
          'content-type': "application/json"
      },
      body: JSON.stringify(review)
  })
  .then(res => res.json())
  .then(data=>{
      if(data.acknowledged){
          form.reset()
          alert('Review successful')
      }
      console.log(data)
  })
  .catch(err=>console.error(err));

  }

  const handleInputBlur = event =>{
    const field = event.target.name;
    const value = event.target.value;
    const newReviews = {...reviews}
    newReviews[field] = value;
    setReviews(newReviews);
}
    return (
       
<form onSubmit={handleReviews} className='flex justify-center mt-16 shadow-md'>
 <div className="lg:w-1/2 sm:w-full">
    <h1 className='text-2xl font-bold text-center'>Write a Review</h1>
  <div>
      <h2 className='text-xl font-bold mb-6 text-center'>Rate us</h2>
     
  </div>
 <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
    <input onBlur={handleInputBlur} type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required=""/>
  </div>
 <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Services Name</label>
    <input onBlur={handleInputBlur} type="text" name='title' defaultValue={title} readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required=""/>
  </div>
  <div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
    <input onBlur={handleInputBlur} type="email" name='email' defaultValue={user?.email} readOnly id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
  </div>
  
  
  
<label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
<select onBlur={handleInputBlur} id="countries" name='country' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option>United States</option>
  <option>Bangladesh</option>
  <option>United Kingdom</option>
  <option>Canada</option>
  <option>France</option>
  <option>Germany</option>
</select>

<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea onBlur={handleInputBlur} name='message' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write review..."></textarea>
<button type="submit" className="text-white bg-black mt-6 hover:bg-black focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-black">
   Post Review
    <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
    </div> 
</form>

    );
};

export default Reviews;