import React, { useEffect, useState } from 'react';
import Service from './Service'

const Services = () => {

    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid justify-items-center'>
            <br/>
            <h1 className="text-5xl font-bold">Our Services</h1>
            
            <div className='flex flex-wrap justify-items-center items-center m-auto gap-4 mt-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
