import React, { useState, useEffect } from 'react'

export default function DispFavorites() {
    
    const [myfavorites, setmyfavorites] = useState([]);

    const getFavorites = async () => {
      
        //Get data from DB table
          await fetch("/favourites")
             .then(response => response.json())
             .then(jobs =>
               // Set favorites
               setmyfavorites(jobs)
              )
             .catch(error => {
               console.log(error);
              });
         };

         useEffect(() => {
            getFavorites()
            }, [])

        //Displaying LogInUser Favorites data
        return (
            <div>
                {myfavorites.map((jobs) =>

                <div>                       
                    {jobs.title}
                    {jobs.type}
                    {jobs.description}
                    {jobs.experience}
                    {jobs.contract}
                    {jobs.salary}
                    {jobs.company}
                    {jobs.company_description}
                </div>

                )}    
            </div>
        )
}
