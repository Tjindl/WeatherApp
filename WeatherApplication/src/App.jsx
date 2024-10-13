import { useEffect, useState } from 'react'
import './App.css'

import React from 'react'




// URL for the weather API WITH KEY, removed for security reasons

function App() {

  const [temp, setTemp] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
      result.json().then((json) => {
        setTemp(json.current.temp_c)
      })
    }
    fetchData();
  }, [])



  return (
    <>
      <div className='app-container'>
        <h1>Vancouver Temperature: {temp} °C </h1>
      </div>
    </>
  );
}

export default App
