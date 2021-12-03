import React, { useState, useEffect } from 'react';
import Searchbar from "./Searchbar"
import "../App.css";

export default function Home() {
   
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
    fetch("/jobs")
        .then((res) => res.json())
        .then((json) => {
        console.log(json);
        setJobs(json);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    return (
    <div>
        <div className="mb-3 p-2"><Searchbar filtering={(job) => setJobs(job)} /></div>
        <div className="container">
        </div>
        <div className="container">
        <div className="row">
            {jobs.map((job) => (
            <div key={job.id} className="col-lg-4 col-md-6">
                <div className="card shadow mb-3 rounded-border">
                <div className="card-header">{job.title}
                <div className="card-body">
                    <h3 className="card-title">{job.title}</h3>
                    <h6 className="card-text">{job.company}</h6>
                    <p className="card-text">Salary: {job.salary}</p>
                    <a href="#" className="btn btn-primary">
                    Apply!
                    </a>
                </div>
                </div>
            </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    );
}
