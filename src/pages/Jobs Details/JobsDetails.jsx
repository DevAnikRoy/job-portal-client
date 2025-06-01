import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobsDetails = () => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_name, company_logo } = useLoaderData()
    // console.log(title)


    return (
        <div className='p-10'>
            <h2>Jobs Details of: {title}</h2>
            <h5>Details: {description}</h5>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobsDetails;