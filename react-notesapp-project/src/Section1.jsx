import React from 'react'
import { useState } from 'react'
import Section2 from './Section2';

const Section1 = (app) => {
  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const submitHandler=(event)=>{
    event.preventDefault();
    const newtask=[...app.Task,{title:title,details:details}];
    app.setTask(newtask);
    console.log(newtask);
    setTitle('');
    setDetails('');
  }
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <form className="w-1/2 items-center flex flex-col gap-7 text-white" onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input className="w-full px-3 py-3 outline-none border-2 border-amber-50 rounded-2xl text-xl font-semibold placeholder:text-gray-700" type="text" onChange={(e)=>{
          setTitle(e.target.value)
        }} placeholder="Enter yout Title..." value={title} />
        <textarea   className="text-xl font-semibold h-40 w-full px-3 py-3 outline-none border-2 border-amber-50 rounded-2xl placeholder:text-gray-700" type="text" value={details} placeholder="Drop your notes here..." onChange={
          (e)=>{
            setDetails(e.target.value);
          }
        }/>
        <button className="w-full transition-all duration-200 active:scale-95 bg-amber-50 text-gray-950 text-xl font-semibold rounded-2xl py-3">
          Add Note
        </button>

      </form>
    </div>
  )
}

export default Section1
