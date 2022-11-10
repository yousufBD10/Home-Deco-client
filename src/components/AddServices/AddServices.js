import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const AddServices = () => {
  useTitle('Add Services')
    const navigate = useNavigate();
      
    
    const handleAddServices = event =>{
        event.preventDefault();
        const form = event.target;
        const servicesName = form.servicesName.value;
      const prices = form.price.value;
        const image = form.image.value;
        const message = form.message.value;
    

        const services = {
          
            title:servicesName,
            service_price:prices,
            image_url:image,
            details:message,
            
        }

        // post api
         
        fetch('https://assignment-11-server-bice.vercel.app/services',{
            method:"POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.acknowledged){
                form.reset()
                navigate('/services')
                Swal.fire(
                  'Services added successful'
               
                )
            }
            console.log(data)
        })
        .catch(err=>console.error(err));


      }

    return (
       
<form onSubmit={handleAddServices} className=' flex justify-center'>
 <div className='lg:w-2/3 sm:w-full'>
 <div className="mb-6 ">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Services Name</label>
    <input type="text" name='servicesName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Services Name" required=""/>
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Services Image </label>
    <input type="text" name='image' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='photoURL' required=""/>
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Services Price </label>
    <input type="text" name='price' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Services Price' required=""/>
  </div>
  
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Services Details </label>
<textarea name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your description here..."></textarea>

  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Services</button>
 </div>
</form>

    );
};

export default AddServices;