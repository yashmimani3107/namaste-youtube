import React from 'react';

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return null; // Return null if the data isn't ready
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 w-72 shadow-lg p-2 bg-white rounded-lg">
      <img className="w-full h-40 object-cover rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg truncate">{title}</div>
        <p className="text-gray-600 text-sm mt-1 truncate">{channelTitle}</p>
        <p className="text-gray-600 text-sm mt-1">{statistics.viewCount.toLocaleString()} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
