import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FileUpload.css";

export default function FileUpload() {

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
        const formData = new FormData();

		formData.append('File', selectedFile);
        axios.post('upload_file', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(function () {
            console.log('Your file has been uploaded successfully!');
          })
          .catch(function () {
            console.log("Your file couldn't be uploaded!");
          });
	};
    
    return (
        <div className="container">
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div className="card m-2">
                    <div className="card-body m-2">
					<div className="card-text"><p>Filename: {selectedFile.name}</p></div>
					<div className="card-text"><p>Filetype: {selectedFile.type}</p></div>
					<div className="card-text"><p>Size in bytes: {selectedFile.size}</p></div>
					<div><p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p></div>
                    </div>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission} className="btn btn-dark sm shadow">Submit</button>
			</div>
		</div>
    )
}
