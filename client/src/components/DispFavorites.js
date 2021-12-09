import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const deleteFavorite = async (JobId) => {
    try {
      const { data } = await axios.delete(`/favorites/${JobId}`, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      setmyfavorites(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (JobId) => {
    deleteFavorite(JobId);
  };
  //  useEffect(()=>{
  //   deleteFavorite();
  //  }, []);
  // Displaying LogInUser Favorites data
  return (
    <div>
      {myfavorites.length &&
        myfavorites.map((jobs) => {
          return (
            <div>
              <div>
                {" "}
                <ul>
                  <li>
                    {jobs.title} ({jobs.company})
                  </li>
                </ul>{" "}
              </div>
              <button
                type="button"
                onClick={(e) => handleClick(jobs.id)}
                className="btn btn-dark mb-3"
              >
                {" "}
                Delete
              </button>
              {/* <button type="button" onClick={e => handleDeleteClick(job.id)}>Delete</button> */}
            </div>
          );
        })}
    </div>
  );
}
