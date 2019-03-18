import React from 'react';
import {NavLink} from 'react-router-dom';
import './PageSelector.css'

const PageSelector = () => {
    return (
        <div className="PageSelector">
           <NavLink className="PageSelector_item" to='/BMI'>bmi</NavLink>
           <NavLink className="PageSelector_item" to='/WeightGraph'>weight</NavLink> 
        </div>
    );
};

export default PageSelector;