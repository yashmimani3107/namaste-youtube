import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer'; // Import the comment component

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Close the menu when this page is rendered
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='px-5'>
      {/* YouTube Video */}
      <iframe 
        width="1000" 
        height="500" 
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />

      {/* Comments Section */}
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
