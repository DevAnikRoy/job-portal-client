import React, { Suspense } from 'react';
import ApplicatonSttats from './ApplicatonSttats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';



const MyApplications = () => {
    
    const {user} = UseAuth();
    
    return (
        <div>
            <ApplicatonSttats></ApplicatonSttats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}>
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;