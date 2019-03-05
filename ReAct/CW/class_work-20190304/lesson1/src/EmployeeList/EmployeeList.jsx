import React from 'react';
import './EmployeeList.css';
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'

const EmployeeList = ({userData}) => (
    <ul className='EmployeeList'>
        {userData.map(el => <EmployeeListItem name={el.name} surname={el.surname} position={el.position} key={el.position}/>)}
    </ul>
);

export default EmployeeList;