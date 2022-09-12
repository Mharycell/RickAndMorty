import React from 'react';
import './css/JLocationComp.css'

const JLocationComp = ({data}) => {

    return (
        <div className='location'>
            <h2>{data?.name}</h2>
            <ul>
                <li>
                    {data?.type}
                </li>
                <li>
                    {data?.dimension}
                </li>
                <li>
                    {data?.residents.length}
                </li>
            </ul>
            
        </div>
    );
};

export default JLocationComp;