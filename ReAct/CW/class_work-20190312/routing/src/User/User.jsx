import React, {Fragment} from 'react';
import './User.css'

const User = ({userData}) => {
    console.log(userData);
    return (
        <Fragment>
        {Object.keys(userData).length ? <div className='User'>
            <img src={userData.picture.medium} alt="" className='User_image'/>
            <p className='User_paragraph'>{userData.name.first} {userData.name.last}</p>
            <p className='User_paragraph'>{userData.email}</p>
        </div> : <p>Loading...</p>}
        </Fragment>
    );
};

export default User;