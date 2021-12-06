import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import DispFavorites from './DispFavorites';
export default function Profile() {
    let {id} = useParams();

    const [userInfo, setUserInfo] =  useState({
        firstname: "",
        lastname: "",
        username: "",
        email: ""
    });

    const getUserInfo = async () => {
        try {
            const response = await fetch(`/users/${id}`)
            const user = await response.json()
            setUserInfo(user)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
        <h4>Job Favorites</h4> 
        <div className="container">
            <div className="">
                <div>
                    <p>
                        {userInfo.length>0 && userInfo[0].firstname}
                    </p>
                    <p>
                        {userInfo.length>0 && userInfo[0].lastname}
                    </p>
                    <p>
                        {userInfo.length>0 && userInfo[0].username}
                    </p>
                    <p>
                        {userInfo.length>0 && userInfo[0].email}
                    </p>

                </div>

            </div>
        </div>
         <DispFavorites/> 

         </div>
            )
}
