import React, { useState, useEffect } from "react";

export default function DispFavorites() {


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
}
