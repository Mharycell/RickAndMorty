import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import JHeader from './components/JHeader';
import JMain from './components/JMain';
import useRickData from './hooks/useRickData';

function App() {
  const {
    data,
    setIndex } = useRickData()
  const [rick, setRick] = useState({});
  const [typeLocation, setTypeLocation] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setRick(res.data));
  }, []);

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
      .then(res => setRick(res.data));
  }

  console.log(data);

  return (

    <div className="App">
      <JHeader index={setIndex} />
      <JMain data={data} />
    </div>

  )

}


export default App
