import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';

const AddJobs = () => {

    const { user } = UseAuth()

    const handleAddAJob = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // Process requirements
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim())

        // Process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

        // Making Status in DB
        newJob.status = 'active';

        console.log(newJob);

        // save job to the DB
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {

                console.log(res)
                if (res.data.insertedId) {
                    alert("Job Posted Successfully")
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='flex justify-center items-center my-10'>
            <div>
                <h2>This section is for the added the Job section</h2>
                <form onSubmit={handleAddAJob}>

                    {/* Jobs Details */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Details</legend>

                        <label className="label">Job Title</label>
                        <input name='title' type="text" className="input" placeholder="Job Title" />

                        <label className="label">Company</label>
                        <input name='company' type="text" className="input" placeholder="Company Name" />

                        <label className="label">Location</label>
                        <input name='location' type="text" className="input" placeholder="Company Location" />

                        <label className="label">Company Logo</label>
                        <input name='company_logo' type="text" className="input" placeholder="Company Logo Url" />


                    </fieldset>

                    {/* Jobs Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Type</legend>

                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-Site" />
                            <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                        </div>
                    </fieldset>

                    {/* Jobs Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Category</legend>

                        <select name='category' defaultValue="Job Category" className="select">
                            <option disabled={true}>Pick a Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>

                    </fieldset>



                    {/* Application Deadline */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Application Deadline</legend>

                        <input type="date" name='deadline' className='input' />

                    </fieldset>

                    {/* Salary Range */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                        <div className='flex justify-center items-center gap-3'>
                            <legend className="fieldset-legend">Salary Range</legend>

                            <div className='space-y-2'>
                                <label className="label ">Minimum Salary</label>
                                <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                            </div>

                            <div className='space-y-2'>
                                <label className="label">Maximum Salary</label>
                                <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                            </div>

                            <div className='space-y-2'>
                                <label className="label">Currency</label>
                                <select defaultValue="Select a Currency" name='currency' className="select">
                                    <option disabled={true}>Select a Currency</option>
                                    <option>BDT</option>
                                    <option>USA</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>

                    </fieldset>

                    {/* Jobs Description */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Jobs Description</legend>

                        <textarea name='description' className="textarea" placeholder="Jobs Description"></textarea>

                    </fieldset>

                    {/* Job Requirements */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Requirements</legend>

                        <textarea name='requirements' className="textarea" placeholder="Jobs Requirements (Separate by Comma)"></textarea>

                    </fieldset>

                    {/* Job Responsibilities */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Responsibilities</legend>

                        <textarea name='responsibilities' className="textarea" placeholder="Jobs Responsibilities (Separate by Comma)"></textarea>

                    </fieldset>

                    {/* HR Information */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">HR information</legend>

                        <label className="label">HR Name</label>
                        <input name='hr_name' type="text" className="input" placeholder="Company Name" />

                        <label className="label">HR email</label>
                        <input name='hr_email' type="email" className="input" defaultValue={user.email} readOnly={"defaultValue"} placeholder=" HR Email " />

                    </fieldset>

                    <input type="submit" value='add Job' className='mt-6 btn' />

                </form>
            </div>
        </div>
    );
};

export default AddJobs;