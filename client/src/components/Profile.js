import React, { useState, useEffect } from 'react'

import DispFavorites from './DispFavorites';

export default function Profile(props) {
    let id = localStorage.getItem("userId");
   
    const [matchesInfo, setMatchesInfo] = useState([]);


   


    const getJobMatches = async () => {
        try {
            
            const response = await fetch(`/users/${id}/matches`, {
                headers: { authorization: "Bearer " + localStorage.getItem("token") }
            })
            const job = await response.json()
            setMatchesInfo(job)
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(async () => {
        //await getUserInfo()
        await getJobMatches()
    }, []);


    if (!props.userInfo) {
        return <h2>Loading....</h2>
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="card-profile col shadow">
                        <h3 className="mt-2 p-2">Personal Details</h3>
                        <h6>First Name:</h6>
                        <p> 
                            {props.userInfo && props.userInfo.firstname}
                        </p>
                        <h6>Last Name:</h6>
                        <p> 
                            {props.userInfo && props.userInfo.lastname}
                        </p>
                        <h6>User name:</h6>
                        <p> 
                            {props.userInfo && props.userInfo.Username}
                        </p>
                        <h6>Email address:</h6>
                        <p> 
                            {props.userInfo && props.userInfo.email}
                        </p>

                    </div>
                    <div className="card-profile col shadow">
                    <h3 className="m-2">Applied Jobs</h3>
                        <ul>
                            { matchesInfo.length && (
                                matchesInfo.filter(j => j.UsersJobs.state === 'accepted').map(j =>
                                    <li key={j.id}>{j.title} ({j.company})</li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="card-profile col shadow">
                        <h3 className="m-2">Job Favorites</h3>
                        <DispFavorites />
                    </div>
                </div>
            </div>


        </div>
    )
}
