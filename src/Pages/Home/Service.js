import React from 'react';

import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { img, name, text, price } = service;
    const navigate = useNavigate()
    const handleBooking = () => {
        navigate('/booking')
    }
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{text}</p>
          <p>{price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    );
};

export default Service;