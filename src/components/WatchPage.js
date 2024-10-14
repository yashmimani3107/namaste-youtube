import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch closeMenu action when the component is mounted
    dispatch(closeMenu());
  }, [dispatch]);


  return (
    <div className='px-5'>
        <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v") }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default WatchPage