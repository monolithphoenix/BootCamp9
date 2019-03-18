import React from 'react';
import './Preload.css'
import Registration from '../Registration/Registration';

const Preload = ({user, active_window, getRegistrationData}) => {
    console.log(active_window);
    
    return (
        <div className="Preload">
            <div className={active_window === "Registration" ? "Preload_up Hide" : "Preload_up" }></div>
            {/* <div className="Preload_up"></div> */}
            {!user.id && <Registration active_window={active_window} getRegistrationData={getRegistrationData}/>}
            <div className="Preload_down"></div>
            {/* <div className={active_window === "Registration" ? "Preload_down Hide" : "Preload_down" }></div> */}
        </div>
    );
};

export default Preload;