import React from 'react';
import './UserInfo.css';
import avatar from './images.png';


const UserInfo = () => {
    return (
    <div className='UserInfo'>
        <img src={avatar} alt="VP of M" className='UserInfo-img'/>
        <div>
            <h2 className='UserInfo-title'>Julie Taylor</h2>
            <p className='UserInfo-text'>VP of Marketing</p>
        </div>
    </div>)
};

export default UserInfo;