import React from 'react';
import './EmployeeInfo.css';
import UserInfo from '../UserInfo/UserInfo';
import UserList from '../UserList/UserList';

const EmployeeInfo = () => {
    let arr = [
        {
            title: 'Call Office',
            text : '781-000-0002',
        },
        {
            title: 'Call Mobile',
            text : '617-000-0002',
        },
        {
            title: 'SMS',
            text : '617-000-0002',
        },
        {
            title: 'Email',
            text : 'jtaylor@fakemail.com'
        }
    ];
    return (
        <div className='EmployeeInfo'>
            <UserInfo/>
            <UserList userData={arr}/>
        </div>
    )
};

export default EmployeeInfo;