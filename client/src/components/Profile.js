import React, { useState, useEffect } from 'react'

import DispFavorites from './DispFavorites';

export default function Profile() {
    let id = localStorage.getItem("userId");

    const [userInfo, setUserInfo] = useState();
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

    useEffect(() => {
        getJobMatches()
    }, []);


    if (!userInfo) {
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
                            {userInfo && userInfo.firstname}
                        </p>
                        <h6>Last Name:</h6>
                        <p> 
                            {userInfo && userInfo.lastname}
                        </p>
                        <h6>Username:</h6>
                        <p> 
                            {userInfo && userInfo.Username}
                        </p>
                        <h6>Email address:</h6>
                        <p> 
                            {userInfo && userInfo.email}
                        </p>

                    </div>
                    <div className="card-profile col shadow">
                    <h3 className="m-2">Applied Jobs</h3>
                        <ul>
                            { matchesInfo.length && (
                                matchesInfo.filter(j => j.UsersJobs.state === 'accepted').map(j =>
                                    <li key={j.id}>{j.company}, {j.title} </li>
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
