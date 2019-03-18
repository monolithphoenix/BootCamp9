import React from 'react';
// import PropTypes from 'prop-types';
import './Registration.css'

// const RegistrationFormElement = [
//     { id: 1, name: "unit", type: "radio", required: true, defaultChecked: true},
//     { id: 2, name: "birthday", type: "date", required: true}
// ]

const Registration = ({getRegistrationData, active_window}) => {
    return (
        <div className={active_window === "Registration" ? "Registration" : "Registration  Hide" }>
            <h1 className="Registration_title">Welcome to BMIapp</h1>
            <p className="Registration_text">Let insert your body-data before start</p>
            <form action="" className="Registration_form" onSubmit={getRegistrationData}>
                <label className="Registration_form__label">
                    Unit
                    <div>
                        <input type="radio" name="unit" id="kgcm" required defaultChecked/>
                        <label className="Label_radio" htmlFor="kgcm">kg/cm</label>
                        <input type="radio" name="unit" id="lbft" />
                        <label className="Label_radio" htmlFor="lbft">lb/ft</label>
                    </div>
                </label>
                <label className="Registration_form__label">
                    Birthday
                    <input type="date" name="birthday" id="birthday" placeholder="choose" required/>
                </label>
                <label className="Registration_form__label">
                    Gender
                    <div>
                        <input type="radio" name="gender" id="male" required/>
                        <label className="Label_radio" htmlFor="male">M</label>
                        <input type="radio" name="gender" id="female" />
                        <label className="Label_radio" htmlFor="female">F</label>
                    </div>
                </label>
                <label className="Registration_form__label">
                    Weight
                    <input type="number" name="weight" id="weight" placeholder="80.0" step="0.1" min="30" max="199" required/>
                </label>
                <label className="Registration_form__label">
                    Desired weight
                    <input type="number" name="desered_weight" id="desered_weight" placeholder="70.0" step="0.1" min="30" max="199" required/>
                </label>
                <label className="Registration_form__label">
                    Height
                    <input type="number" name="height" id="height" placeholder="170" step="1" min="100" max="272" required/>
                </label>
                <button type="submit" className="Registration_submitButton">Save and continue</button>
            </form>  
        </div>
    );
};

// Registration.propTypes = {
    
// };

export default Registration;