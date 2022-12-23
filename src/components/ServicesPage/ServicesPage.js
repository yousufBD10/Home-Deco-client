import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import ServicesCards from './ServicesCards';

const ServicesPage = () => {
    useTitle('Services')
    const services = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-9 gap-7">
            {
                services.map(service => <ServicesCards key={service._id} service={service}></ServicesCards>)
            }
        </div>
    );
};

export default ServicesPage;