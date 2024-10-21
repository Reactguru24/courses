

import React from 'react';
import './Provision.css'; 

const Provision = ({ title, description, icon }) => {
    return (
        <div className="provision-card">
            <div className="provision-icon">{icon}</div> 
            <h3 className="provision-title">{title}</h3>
            <p className="provision-description">{description}</p>
        </div>
    );
};

export default Provision;
