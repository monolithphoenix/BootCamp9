import React from 'react';
// import PropTypes from 'prop-types';
import './ContainerBMI.css'
import Frame from '../Frame/Frame'

const ContainerBMI = props => {
    return (
        <div className="ContainerBMI">
            <Frame />
            <Frame />
        </div>
    );
};

ContainerBMI.propTypes = {
    
};

export default ContainerBMI;