import React from 'react';

function About(props) {
    return (
        <div>
            <h1>About App</h1>
            <p className="my-1">
                React app for keeping contacts
            </p>
            <p className="bg-dark p">
                <strong>Version: </strong> 1.0.0
            </p>
        </div>
    );
}

export default About;