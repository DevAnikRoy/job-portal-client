import React, { Suspense } from 'react';
import HotJobs from '../shared/HotJobs';

const Home = () => {



    return (
        <div className='px-10'>
            <Suspense fallback={'Loading Data'}>
                <HotJobs></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;