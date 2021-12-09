import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./PostJobOffer.css"

export default function PostJobOffer() {
    const [jobInput, setJobInput] = useState({
        title: "",
        type: "",
        description: "",
        experience: 1,
        contract: "",
        salary: 14000,
        company: "",
        company_description: "",
        perks: ""
    });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setJobInput((state) => ({ ...state, [name]: value }));
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const postJobOffer = async () => {
        try {
            const { title, type, description, experience, contract, salary, company, company_description, perks } = jobInput;
            const response = await fetch("/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    title: title,
                    type: type,
                    description: description,
                    experience: experience,
                    contract: contract,
                    salary: salary,
                    company: company,
                    company_description: company_description,
                    perks: perks
                }),
            });
            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    const submitJobOfferForm = (event) => {
        event.preventDefault()
        postJobOffer()
        for (let key in jobInput) {
            setJobInput((state) => ({ ...state, [key]: "" }))
        }
    }

    const experience = () => {
        let number = numberWithCommas(jobInput.experience)
        let sign = "";

        if (number <= 1) { sign = "<" }
        if (number >= 20) { sign = ">" }
        if (number === "") { sign = "" }
        return (" " + sign + " " + number)
    }

    return (
        <div className="container">
            <Link to="/user/admin" class="btn btn-outline-dark col add-offer-button px-1 link">Your job posts</Link>
            <h3>Job info</h3>
            <form onSubmit={(event) => submitJobOfferForm(event)}  >
                <div class="input-group mb-3">
                    <span class="input-group-text">Title</span>
                    <input type="text" name="title" value={jobInput.title} onChange={handleInputChange} class="form-control" />

                    <span class="input-group-text" >Type</span>
                    <select name="type" value={jobInput.type} onChange={handleInputChange} class="form-select">
                        <option>Open this select menu</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Backend">Backend</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="System Admin">System Admin</option>
                        <option value="Manager/PO">Manager/PO</option>
                        <option value="Chief Officer Level">Chief Officer Level</option>
                        <option value="Big Data">Big Data</option>
                        <option value="Database Admin">Database Admin</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Security">Security</option>
                        <option value="Business Intelligence">Business Intelligence</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Description:</span>
                    <textarea name="description" value={jobInput.description} onChange={handleInputChange} class="form-control" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text range">Experience:</span>
                    <div className="range">
                        <label class="form-label">
                            <input type="range" min="1" max="20" name="experience" value={jobInput.experience} onChange={handleInputChange} class="form-range input-range" />
                            <span>{experience()}</span>
                        </label>
                    </div>
                    {/* </div>
                <div> */}
                    <span class="input-group-text range">Salary:</span>
                    <div className="range">
                        <label class="form-label">
                            <input type="range" name="salary" min="14000" max="200000" step="1000" value={jobInput.salary} onChange={handleInputChange} class="form-range input-range" id="salary-range" />
                            <span>{numberWithCommas(jobInput.salary)}</span>
                        </label>
                    </div>
                    <span class="input-group-text">Contract:</span>
                    <select name="contract" value={jobInput.contract} onChange={handleInputChange} class="form-select">
                        <option >Open this select menu</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>
                <div>
                    <h3>Company info</h3>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Company:</span>
                        <input type="text" name="company" value={jobInput.company} onChange={handleInputChange} class="form-control" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Company description:</span>
                        <textarea name="company_description" value={jobInput.company_description} onChange={handleInputChange} class="form-control" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Perks:</span>
                        <input type="text" name="perks" value={jobInput.perks} onChange={handleInputChange} class="form-control" />
                    </div>
                </div>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}
