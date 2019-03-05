import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeListItem.css';

const EmployeeListItem = ({name, surname, position}) => {
    return (
        <li className='UserListItem'>
            <h3>{name} {surname}</h3>
            <p>{position}</p>
        </li>
    );
};

export default EmployeeListItem;