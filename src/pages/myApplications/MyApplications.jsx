import React, { Suspense } from 'react';
import ApplicatonSttats from './ApplicatonSttats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';



const MyApplications = () => {
    
    const {user} = UseAuth();
    
    // for firebase token in the console
    console.log('my firebase token:', user.accessToken)
    // so we can send this access token to the server. So what we have to do for this. Send the firebase token to the myApplicationsPromise
    
    return (
        <div>
            <ApplicatonSttats></ApplicatonSttats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}>
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;