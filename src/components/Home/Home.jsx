import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Banner from '../Banner/Banner';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <Banner></Banner>

        </div>
    );
};

export default Home;