import React from 'react';
import './App.css';


const DisplayData = ({
    data:{fullName, userName, email, dateofBirth}
}) => {
    return(
        <div className="App">
            <h1>Account details:</h1>
            Fullname: {fullName} <br/><br/>
            Username: {userName} <br></br>
            Email: {email}<br/><br/>
            Date of Birth: {dob} <br/><br/>
        </div>
    );
};

export default DisplayData;