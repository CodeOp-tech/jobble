import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function JobOffer({  }) {
    let {id} = useParams();

    const [jobOffer, setJobOffer] = useState(null);
 
    useEffect(() => {
        fetch(`/jobs/${id}`)
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            setJobOffer(json);
            })
            .catch((error) => {
            console.log(error);
            });
        }, []);



    return (
        <div>
            <h3>
                Title: {jobOffer && jobOffer.title}
            </h3>
            <div>Type:{jobOffer && jobOffer.type}</div>
            <div>Description{jobOffer && jobOffer.description}</div>
            <div>Experience: {jobOffer && jobOffer.experience}</div>
            <div>Contract: {jobOffer && jobOffer.contract}</div>
            <div>Salary:{jobOffer && jobOffer.salary}</div>
        </div>
    )
}
