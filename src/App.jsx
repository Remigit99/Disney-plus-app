// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import { FaRegCircleUser } from "react-icons/fa"
import Logo from "./assets/disney-plus-logo.jpeg"

function App() {

  return (
    <div className="font-mulish px-[5rem] py-4">

      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-8 '>

          {/* <h1 className='text-white text-3xl'>Disney+</h1> */}
          <img className='w-[5rem]' src={Logo} alt="Disney Plus Logo" />
          <ul className='flex gap-6'>
            <Navbar />
          </ul>
        </div>

        <div>
          <h3 className='text-white'>Profile</h3>
          <FaRegCircleUser />
        </div>

      </nav>

    </div>
  )
}

export default App
