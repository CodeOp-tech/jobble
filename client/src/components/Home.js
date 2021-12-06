import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import JobList from "./JobList";
import "../App.css";

export default function Home(props) {
  return (
    <div>
      <div className="container">
        <div className="mb-3 p-2">
          <Searchbar filtering={props.Searchbar} />
        </div>
      </div>
      <div className="container">
        <JobList jobs={props.jobs} />
      </div>
    </div>
  );
}
