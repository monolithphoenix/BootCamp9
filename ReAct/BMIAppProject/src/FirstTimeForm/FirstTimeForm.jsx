import React from 'react';
// import PropTypes from 'prop-types';
import './FirstTimeForm.css'

const FirstTimeForm = props => {
    return (
        <div className="FirstTimeForm">
            <h1 className="FirstTimeForm_title">Welcome to BMIapp</h1>
            <p className="FirstTimeForm_text">Let insert your body-data before start</p>
            <form action="" className="FirstTimeForm_form">
                <lable className="FirstTimeForm_form__lable">
                    Unit
                    <div>
                        <input type="radio" name="unit" id="kgcm"/>
                        <input type="radio" name="unit" id="lbft"/>
                    </div>
                </lable>
                <lable className="FirstTimeForm_form__lable">
                    Birtday
                    <input type="date" name="birthday" id="birthday"/>
                </lable>
                <lable className="FirstTimeForm_form__lable">
                    Gender
                    <div>
                        <input type="radio" name="gender" id="male"/>
                        <input type="radio" name="gender" id="female"/>
                    </div>
                </lable>
                <lable className="FirstTimeForm_form__lable">
                    Weight
                    <input type="number" name="" id="" placeholder="80.0" step="0.1" min="30" max="200"/>
                </lable>
                <lable className="FirstTimeForm_form__lable">
                    Desired weight
                    <input type="number" name="" id="" placeholder="70.0" step="0.1" min="30" max="200"/>
                </lable>
                <lable className="FirstTimeForm_form__lable">
                    Height
                    <input type="number" name="" id="" placeholder="170" step="1" min="100" max="272"/>
                </lable>
                <button type="submit">Save and continue</button>
            </form>  
        </div>
    );
};

// FirstTimeForm.propTypes = {
    
// };

export default FirstTimeForm;