import React from 'react';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {

    const { title, location, _id, jobType, category, description, company, company_logo } = job


    return (
        <div className='flex items-center justify-center'>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure>
                    <img className='w-40'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{location}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{company}</div>
                        <div className="badge badge-outline">{jobType}</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
                <Link to={`/jobs/${_id}`}>
                    <div className='flex justify-end items-center m-5 '>
                        <button className='btn bg-amber-500 rounded-xl hover:bg-amber-600 hover:text-white'>Apply Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default JobsCard;