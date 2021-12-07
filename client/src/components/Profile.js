import React, {useState, useEffect} from 'react'

import DispFavorites from './DispFavorites';

export default function Profile() {
    let id= localStorage.getItem("userId");
    const [userInfo, setUserInfo] =  useState();

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

    useEffect(()=>{
        getUserInfo()
    }, []);


    if(!userInfo){
        return <h2>Loading....</h2>
    }
   
    return (
        <div>
        <h4>Job Favorites</h4> 
        <div className="container">
            <div className="">
                <div>
                    <p>
                        {userInfo && userInfo.firstname}
                    </p>
                    <p>
                        {userInfo && userInfo.lastname}
                    </p>
                    <p>
                        {userInfo && userInfo.username}
                    </p>
                    <p>
                        {userInfo && userInfo.email}
                    </p>

                </div>

            </div>
        </div>
         <DispFavorites/> 

         </div>
            )
}
