import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar'
import EmployeeList from '../EmployeeList/EmployeeList'


const HomePage = () => {
  let arr = [
    {
        name: 'James',
        surname: 'King',
        position: 'President and CEO',
    },
    {
        name: 'Julie',
        surname: 'Taylor',
        position: 'VP of Marketing',
    },
    {
        name: 'Eugene',
        surname: 'Lee',
        position: 'CFO',
    },
    {
        name: 'John',
        surname: 'Williams',
        position: 'VP of Engineering',
    },
    {
        name: 'Ray',
        surname: 'Moore',
        position: 'VP of Sales'
    },
    {
        name: 'Paul',
        surname: 'Jones',
        position: 'QA Manager',
    }
  ]

  return (
    <div className='HomePage'>
      <Header text = {'HomePage'}/>
      <SearchBar/>
      <EmployeeList userData={arr}/>
    </div>
  );
}

export default HomePage