import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import useAuth from "../hooks/useAuth";

function JobList(props) {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleClick = (id) => {
        if(!auth.isLoggedIn) {
        navigate("/login");
        } else {
          navigate(`/user/dashboard/${id}`)  
        }
    }

    
    return (
        <div className="JobList">
            <div className="container">
            <div className="row">
                {props.jobs.map((job) => (
                <div key={job.id} className="col-lg-4 col-md-6">
                    <div className="card-home shadow mb-3 rounded-border">
                    <div className="card-body">
                        <h5 className="card-title-home">{job.title}</h5>
                        <p className="card-text">{job.company}</p>
                        <p className="card-text">Salary: {job.salary}</p>
                        <div className="row">
                            <div className="col">
                                <a href="#" className="btn btn-primary">
                                Apply!
                                </a>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary" onClick={()=>handleClick(job.id)}>
                                More Details!
                                </button>
                            </div>
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