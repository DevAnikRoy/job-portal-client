import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';
import swal from 'sweetalert'

const JobApply = () => {
    const { id: jobId } = useParams()
    const { user } = UseAuth()

    console.log(jobId, user)

    const handleApplyFormSUbmit = e => {
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value
        const github = form.gitHub.value
        const resume = form.resume.value

        // console.log('LinkedIn:', linkedIn, 'Git:', github, "Resume:", resume)

        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Your Data Added!",
                        icon: "success",
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <div className='items-center flex flex-col gap-10 mb-10'>
            <h3 className="text-4xl mt-4">Applying For This Job: <Link to={`/jobs/${jobId}`}><span className='btn'>See Details</span></Link></h3>
            <form onSubmit={handleApplyFormSUbmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <legend className="fieldset-legend">Page details</legend>

                <label className="label">Linkedin</label>
                <input name='linkedIn' type="url" className="input" placeholder="Linkedin Url" />

                <label className="label">Git-Hub</label>
                <input name='gitHub' type="url" className="input" placeholder="GitHub Url" />

                <label className="label">Resume Link</label>
                <input name='resume' type="url" className="input" placeholder="Resume link" />

                <input type="submit" className='btn' value='Apply' />


            </form>
        </div>
    );
};

export default JobApply;