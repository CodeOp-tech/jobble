import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function JobOffer(props) {
    // let {id} = useParams();

    // const [jobOffer, setJobOffer] = useState(null);
 
    // useEffect(() => {
    //     fetch(`/jobs/${id}`)
    //         .then((res) => res.json())
    //         .then((json) => {
    //         console.log(json);
    //         setJobOffer(json);
    //         })
    //         .catch((error) => {
    //         console.log(error);
    //         });
    //     }, []);

        if (!props.jobOffer) {
            return <h2>Loading...</h2>
        }
        let jobOffer = props.jobOffer;

    return ( 
        <div>
           
                <div className="card-jobOffer">
                <h3 className="mb-2">
                     {jobOffer && jobOffer.title}
                </h3>
                <div><h5>Company:</h5> {jobOffer && jobOffer.company}</div>
                <div><h5>Company Description:</h5> {jobOffer && jobOffer.company_description}</div>
                <div><h5>Type:</h5> {jobOffer && jobOffer.type}</div>
                <div><h5>Description:</h5> {jobOffer && jobOffer.description}</div>
                <div><h5>Experience:</h5> {jobOffer && jobOffer.experience}</div>
                <div><h5>Contract:</h5> {jobOffer && jobOffer.contract}</div>
                <div><h5>Salary:</h5> {jobOffer && jobOffer.salary} € gross per annum</div>
                <div><h5>Perks:</h5> {jobOffer && jobOffer.perks} </div>
                </div>
        </div>
    )
}
