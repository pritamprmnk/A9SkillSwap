import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Banner from '../Banner/Banner';
import HowItWorks from '../../HowItWorks/HowItWorks';
import TopRatedProviders from '../../TopRatedProviders/TopRatedProviders';
import PopularSkill from '../PopularSkill/PopularSkill';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <Banner></Banner>
            <PopularSkill></PopularSkill>
            <TopRatedProviders></TopRatedProviders>
            <HowItWorks></HowItWorks>

        </div>
    );
};

export default Home;