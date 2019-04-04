import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
        console.log('fetch');
    }, []);

    return data;
}

export default useFetch;