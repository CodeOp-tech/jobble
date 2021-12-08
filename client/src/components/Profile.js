import React, { useState, useEffect } from 'react'

import DispFavorites from './DispFavorites';

export default function Profile({ userInfo }) {
    let id = localStorage.getItem("userId");
    const [matchesInfo, setMatchesInfo] = useState();



    const getJobMatches = async () => {
        try {
            let id = 0
            if (userInfo) id = userInfo.id
            console.log(id)
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
                <div className="">
                    <div>
                        <h2>Personal Details</h2>
                        <p> First Name:
                            {userInfo && userInfo.firstname}
                        </p>
                        <p> Last Name:
                            {userInfo && userInfo.lastname}
                        </p>
                        <p> Username:
                            {userInfo && userInfo.Username}
                        </p>
                        <p> Email address:
                            {userInfo && userInfo.email}
                        </p>

                    </div>
                    <h4>Applied Jobs</h4>
                    <div>
                        <p>
                            {/* {matchesInfo && matchesInfo[0].title} */}
                        </p>
                    </div>
                    <div>
                        <h4>Job Favorites</h4>
                        <DispFavorites />
                    </div>
                </div>
            </div>


        </div>
    )
}
