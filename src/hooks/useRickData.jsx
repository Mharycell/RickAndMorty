import React, {useState, useEffect} from 'react';
import axios from 'axios'

const useRickData = () => {
    const [data, setData] = useState()
    const [index, setIndex] = useState(1)

    const requestData = (url, callback) => {
        axios.get(url)
        .then(res => callback(res))
        .catch(err => console.log(err))
    }
    const randomIndex = ()=> {
        return Math.round((Math.random()*125)+1)
    }

    useEffect(()=>{
        requestData(
            `https://rickandmortyapi.com/api/location/${randomIndex()}`,
            res => setData(res.data))
    }, [])
    useEffect(()=>{
        requestData(
            `https://rickandmortyapi.com/api/location/${index}`,
            res => setData(res.data))
    },[index])

    return {data, setIndex}
};

export default useRickData;