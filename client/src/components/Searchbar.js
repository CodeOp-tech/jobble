import React, { useState } from "react";

const Searchbar = ({ filtering }) => {
  const [userInput, setUserInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  //Call the jobs

  function filterPlates(event) {
    event.preventDefault();
    fetch(`/offers?name=${userInput}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        filtering(json);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  // user input
  const handleChange = (event) => {
    event.preventDefault();
    let newInput = event.target.value;
    setUserInput(newInput);
  };

  return (
    <div className="container">
      <form className="row">
        <div className="d-flex">
        <input
          className="col-5 mr-2"
          type="text"
          placeholder="Search Jobs"
          value={userInput}
          onChange={(event) => handleChange(event)}
        />
        <button className="col-2 btn btn-primary" type="button" onClick={(event) => filterPlates(event)}>
          Search
        </button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Searchbar;
