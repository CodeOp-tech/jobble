import React from 'react'
import "./EmployerJob.css";

export default function EmployerJob({ jobMatch }) {
    return (
        <div>
            <button type="button" class="btn btn-primary job-title" data-bs-toggle="collapse" href={`#collapse${jobMatch.id}`} role="button" aria-expanded="false" aria-controls="collapseExample">{jobMatch.title}</button>
            <div class="collapse" id={`collapse${jobMatch.id}`}>
                <div class="card card-body">
                    <div class="card-subtitle mb-2 text-muted">{jobMatch.type}</div>
                    {jobMatch.Match.map((match) => {
                        return <div class="card card-body" key={match.id}>
                            {match.firstname + " "} {match.firstname}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
