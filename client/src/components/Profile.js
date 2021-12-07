import React, {useState, useEffect} from 'react'

import DispFavorites from './DispFavorites';

export default function Profile() {
    let id= localStorage.getItem("userId");
    const [userInfo, setUserInfo] =  useState();
    const [matchesInfo, setMatchesInfo] = useState();

    const getUserInfo = async () => {
        try {
            const response = await fetch(`/users/${id}`, {
                headers: { authorization: "Bearer " + localStorage.getItem("token")}
            })
            const user = await response.json()
            setUserInfo(user)
        }
        catch (error) {
        console.log(error)
        }
    }

    const getJobMatches = async () => {
        try {
            const response = await fetch(`/matches/users/${id}`, {
                headers: { authorization: "Bearer " + localStorage.getItem("token")}
            })
            const job = await response.json()
            setMatchesInfo(job)
        }
        catch (error) {
        console.log(error)
        }
    }

    useEffect(()=>{
        getUserInfo()
        getJobMatches()
    }, []);


    if(!userInfo){
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
                        {userInfo && userInfo.username}
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
            <DispFavorites/> 
                </div>
            </div>
        </div>
        

         </div>
            )
}
