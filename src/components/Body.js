import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


const Body = () => {
  return (
    <div className='flex w-48'> 
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body