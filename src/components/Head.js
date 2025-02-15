import React, { useEffect, useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]); // Assuming json[1] is the list of suggestions
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg items-center relative'>
      {/* Left: Menu icon and logo */}
      <div className='flex col-span-1 items-center'>
        <img
          onClick={toggleMenuHandler}
          className='h-8 cursor-pointer transition-transform transform hover:scale-110'
          alt='menu'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'
        />
        <a href='/'>
          <img
            className='h-8 mx-2'
            alt='youtube-logo'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s'
          />
        </a>
      </div>

      {/* Middle: Search bar */}
      <div className='col-span-10 flex justify-center relative'>
        <input
          className='w-1/2 border border-black p-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <button className='border border-black p-2 rounded-r-full bg-gray-100 hover:bg-gray-200 transition-colors'>
          <img className='h-6 w-6' alt='search' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' />
        </button>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className='absolute bg-white border border-gray-200 shadow-lg w-1/2 top-full mt-2 rounded-lg z-10'>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User icon */}
      <div className='col-span-1 flex justify-end'>
        <img
          className='h-8 cursor-pointer hover:opacity-80 transition-opacity'
          alt='user-icon'
          src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
        />
      </div>
    </div>
  );
};

export default Head;
