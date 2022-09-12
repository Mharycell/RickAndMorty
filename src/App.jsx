import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() 
{

    const [rick, setRick] = useState({});
    const [typeLocation, setTypeLocation] =useState("");
  
    useEffect(() => {
      const randomId = Math.floor(Math.random() * 126) +1
      axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setRick(res.data));
    }, []);
  
    const searchLocation = () => {
      axios.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
        .then(res => setRick(res.data));
    }
  
    console.log(rick);
  
    return (
        
            <div className="App">
              <h1>{rick.name}</h1>
              <input 
                type="text"
                value={typeLocation}
                onChange={e => setTypeLocation(e.target.value)}  />
        
               <button onClick={searchLocation}>Search</button>
        
               {
                    rick.residents?.map(resident => (    <li>{resident.url}</li>   ) )
               }               
            </div>
          
    )

}


export default App
