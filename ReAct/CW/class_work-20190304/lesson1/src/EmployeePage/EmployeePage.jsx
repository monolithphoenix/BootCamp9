import React from 'react';
import Header from '../Header/Header';
import './EmployeePage.css';
import EmployerInfo from '../EmployeeInfo/EmployeeInfo'

const EmployeePage = () => (
  <div className='EmployeePage'>
    <Header text = 'EmployeePage'/>
    <EmployerInfo/>
  </div>
)

export default EmployeePage;