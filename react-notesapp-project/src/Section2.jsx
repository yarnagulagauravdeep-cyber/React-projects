import React from 'react'

const Section2 = (app) => {
  return (
      <div className='w-screen bg-gray-400'>
        <div className="flex items-center justify-center">
          <div className="note text-center font-bold text-red-400 bg-black rounded-2xl text-2xl w-3/5 py-4">Your Notes</div>
        </div>
        <div className="main grid grid-cols-4 pr-8 pl-4 py-7 gap-x-6 gap-y-8">
          {
            app.Task.map((task,idx)=>{
              return (
              <div key={idx} className="card rounded-2xl bg-amber-300">
                <div className=" break-all title border-b-2 text-gray-900  border-gray-200 text-center  p-6  font-semibold text-2xl text">{task.title}</div>
                <div className=" break-all details text-black text-lg p-6">{task.details}</div>
              </div>
              );
            })
          }
        </div>
        
      </div>
  )
}

export default Section2
