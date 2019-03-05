import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeList.css';
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'

const EmployeeList = ({userData}) => (
    <ul className='EmployeeList'>
        {userData.map(el => <EmployeeListItem name={el.name} surname={el.surname} position={el.position} key={el.position}/>)}
    </ul>
);

EmployeeList.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ),
};

export default EmployeeList;