import React from "react";

const Results = props =>{
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    return(
        <div>
            <h2>Results</h2>
            <p>First Name: {lastName}</p>
            <p>Last Name: {firstName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );

};

export default Results;
