import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Banner from '../Banner/Banner';
import HowItWorks from '../../HowItWorks/HowItWorks';
import TopRatedProviders from '../../TopRatedProviders/TopRatedProviders';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <TopRatedProviders></TopRatedProviders>

        </div>
    );
};

export default Home;