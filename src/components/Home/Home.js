import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import img1 from "../../components/assets/images/home1.jpg";
import img2 from "../../components/assets/images/home2.jpg";
import img3 from "../../components/assets/images/home3.jpg";
import ServicesCard from "./ServicesCard/ServicesCard";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { PhotoProvider } from "react-photo-view";
import useTitle from "../Hooks/useTitle";
const Home = () => {
  useTitle('Home')
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="mt-9">
      <div className="lg:flex ">
        <div className="w-3/5 flex items-center">
          <div>
            <h1 className="lg:text-7xl  font-bold">
              We are <br /> provide of <br /> best services{" "}
            </h1>
            <p className="font-bold mt-5 text-xl">
              We offer builders a comprehensive range of energy-efficiency
              services, including pre-construction plan reviews, various
              inspection services, .
            </p>
            <p className="font-bold mt-5 text-xl">
              Are you in need of a top-notch home builder? . Here, you can find
              all kinds of services that will help you build your dream home!
            </p>
          </div>
        </div>

        <div className="carousel w-1/2">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} alt="#" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} alt="#" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} alt="#" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

    
     <div className="grid grid-cols-3 mt-9 gap-7">
        {
          services.map(service =><ServicesCard key={service._id } service={service}></ServicesCard>)
        }
      </div>
    
      <div className="flex justify-center">

    <Link to='/services'>  <button className="btn btn-primary mt-5 ">See all   <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight></button></Link>
      </div>

      <div className="p-4 mt-5 bg-gray-300">
        <h1 className="lg:text-5xl sm:text-xl font-bold text-center my-3">Our work</h1>
        <div className="grid lg:grid-cols-5 gap-6">
          <img src="https://content3.jdmagicbox.com/comp/def_content/refrigerator_repair_and_services/default-refrigerator-repair-and-services-6.jpg" alt="" />
          <img src="https://www.daherconstructiononline.com/wp-content/uploads/2020/08/remodeling-contractors-e1597086045322.jpeg " alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFCa3mUAGYBpsKQz0Yk0_wkMhxhLjlPpl4_rWn1DncYsXIGIIxDeMK9I464-3TeB7h3o&usqp=CAU" alt="" />
          <img src="https://tafensw.edu.au/api/assets/img?path=Course-Areas/Building-Construction-and-Trades/flooring.jpg" alt="" />
          <img src="https://www.charlestownlandscaping.com/wp-content/uploads/2020/06/Landscape-Maintenance-vs.-Landscape-Management--1030x688.jpg" alt="" />
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    
      <form  action="https://formspree.io/f/mdojqbdr"
  method="POST"  className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input name="subject" type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium btn btn-primary  text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  );
};

export default Home;
