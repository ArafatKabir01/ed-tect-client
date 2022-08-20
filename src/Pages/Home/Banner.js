import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: "url(https://public.carlcare.com/public/5e5c899db263d713b24720a6cc1a71fa.jpg)"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="text-5xl font-bold">Welcome To Our Services</h1>
                    <p className="py-6">We will provide any computer services.Ed Tech is large computer Service provider in Usa.</p>
                    <button className="btn btn-primary">Our Services </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;