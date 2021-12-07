import React, { useState, useEffect } from "react";

export default function DispFavorites() {
<<<<<<< HEAD
    
    const [myfavorites, setmyfavorites] = useState([]);

    const getFavorites = async () => {
      
        //Get data from DB table
          await fetch("/favorites/profile", {
            headers: { authorization: "Bearer " + localStorage.getItem("token") }
          })
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

        // Displaying LogInUser Favorites data
        return (
            <div>   
                        
              {myfavorites.length && myfavorites.map(jobs =>  {

                  return (
                  
                    <div>

                  <div> {jobs.title}  </div>  
                  <div>  {jobs.type} </div>
                  <div> {jobs.description} </div>
                  <div> {jobs.experience} </div>
                  <div> {jobs.contract} </div>
                  <div> {jobs.salary} </div>
                  <div> {jobs.company} </div>
                  <div> {jobs.company_description} </div>
                    
                  </div>

                  )
                 }  
                          
                 )} 
            </div>              
            
        )
=======
  const [myfavorites, setmyfavorites] = useState([]);

  const getFavorites = async () => {
    //Get data from DB table
    await fetch("/favorites/profile", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((response) => response.json())
      .then((jobs) =>
        // Set favorites
        setmyfavorites(jobs)
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  // Displaying LogInUser Favorites data
  return (
    <div>
      {myfavorites.length &&
        myfavorites.map((jobs) => {
          return (
            <div>
              <div> {jobs.title} </div>
              
            </div>
          );
        })}
    </div>
  );
>>>>>>> staging
}
