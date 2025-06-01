import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplicatons = () => {

    const { job_id } = useParams()

    const applications = useLoaderData()

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id)
        // for sending to the DB
        axios.patch(`http://localhost:3000/applications/${app_id}`, {status: e.target.value})
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount){
                    alert('Status Updated')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='px-25'>
            <h2>{applications.length} Applications for : {job_id}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Github</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => <tr key={application._id}>
                                {console.log(application)}
                                <th>{index + 1}</th>
                                <td>{application.applicant}</td>
                                <td>{application.github}</td>
                                <td>
                                    <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select select-accent">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplicatons;