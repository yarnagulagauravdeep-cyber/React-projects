import React from 'react'
import {Search} from 'lucide-react'
import { ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const navItems=['Store','Mac','iPhone','Support']

  return (
    <nav className='flex h-15 cursor-pointer border-b border-gray-600/20 overflow-x-hidden'>
        <img src="assets/apple.svg" alt="apple-logo" className="h-1/2 ml-6 mt-3"/>
        <div className="flex gap-10 text-md max-md:ml-10 md:ml-10 lg:ml-120 items-center justify-center">
          {
            navItems.map((elem,id)=>{
              return (
                <div key={id} className='text-gray-500 transition-all duration-300 hover:text-gray-400 '>
                  {elem}
                </div>
              )
            })
          }
        </div>
        <div className='flex items-center justify-center h-full lg:ml-96 max-md:ml-10 md:ml-10'>
          <Search size={18} />

        </div>
        <div className="h-full flex items-center justify-center ml-4">
          <ShoppingBag size={16} />
        </div>
    </nav>
  )
}

export default Navbar
