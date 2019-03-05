import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';
import UserListItem from '../UserListItem/UserListItem'

const UserList = ({userData}) => {
    return (
        <ul className='UserList'>
            {userData.map(el => <UserListItem title={el.title} text={el.text} key={el.title}/>)}
        </ul>
    )
};

UserList.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ),
};

export default UserList;