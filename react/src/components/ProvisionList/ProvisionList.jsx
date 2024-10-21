

import React from 'react';
import './ProvisionList.css'
import Provision from '../../components/Provision/Provision'
import data from '../../data/data'; 

const ProvisionList = () => {
    return (
       <>
        <div className="provision-list">
            {data.map((item) => (
                <Provision
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    icon={item.icon} 
                />
            ))}
        </div>
        <hr className="provision-divider" />
       </>
    );
};

export default ProvisionList;
