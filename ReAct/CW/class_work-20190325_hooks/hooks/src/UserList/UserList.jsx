import React from 'react';
// import {useState, useEffect} from 'react';
import useFetch from '../useFetch';

const UserList = () => {
    // const [data,setData] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => setData(data));
    //     console.log('fetch');
    // }, [])

    const data = useFetch('https://jsonplaceholder.typicode.com/users');
    
    return (
        <ul>
            {data.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
    );
};

export default UserList;