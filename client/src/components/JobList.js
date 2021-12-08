import React from 'react';


function JobList(props) {
    return (
        <div className="JobList">
            <div className="container">
                <div className="row">
                    {props.jobs && props.jobs.map((job) => (
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

export default JobList;