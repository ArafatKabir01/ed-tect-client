import React from 'react';
import Banner from './Banner';
import ContractUs from './ContractUs';
import Services from './Services';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services/>
            <Stat/>
            <ContractUs/>
            
        </div>
    );
};

export default Home;