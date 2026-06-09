import React from 'react'
import Section1 from './Section1'
import {useState} from 'react'
import Section2 from './Section2';

const App = () => {
  const [arr,setArr]=useState([]);
  return (
    <div className="h-screen bg-gray-400 w-screen overflow-x-hidden ">
      <Section1 Task={arr} setTask={setArr}/>
      <Section2 Task={arr} setTask={setArr}/>
    </div>
  )
}

export default App
