import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-8' alt='menu'   src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'></img>
            <img className='h-8 mx-2' alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s'></img>
        </div>

        <div className='col-span-10 px-10 flex'>
            <input className='w-1/2 border border-black p-1 rounded-l-full'  type='text'></input>
            <img className='border border-black p-1 rounded-r-full h-14 bg-gray-100' alt='search' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png'></img>
            
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'></img>
        </div>
    </div>
  )
}

export default Head