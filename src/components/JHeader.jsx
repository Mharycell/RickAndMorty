import React from 'react';
import { useState } from 'react';

const JHeader = ({index}) => {
    const [text, setText] = useState('')

    const requestData = ()=>{
        index(text)
    }
    console.log( text );
    return (
        <header>
            <input type="text" onChange={evt=>setText(evt.target.value)} />
            <button>
                <span onClick={requestData} class="material-symbols-outlined">search</span>
            </button>
        </header>
    );
};

export default JHeader;