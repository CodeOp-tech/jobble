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
           
                <div className="card">
                <h3>
                    Title: {jobOffer && jobOffer.title}
                </h3>
                <div>Company:{jobOffer && jobOffer.company}</div>
                <div>Company Description:{jobOffer && jobOffer.company_description}</div>
                <div>Type:{jobOffer && jobOffer.type}</div>
                <div>Description:{jobOffer && jobOffer.description}</div>
                <div>Experience: {jobOffer && jobOffer.experience}</div>
                <div>Contract: {jobOffer && jobOffer.contract}</div>
                <div>Salary:{jobOffer && jobOffer.salary}</div>
                <div>Perks:{jobOffer && jobOffer.perks}</div>
                </div>
        </div>
    )
}
