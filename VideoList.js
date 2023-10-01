import React from 'react';

const videoData = [
  {
    id: 1,
    title: 'Video 1',
    channelName: 'Channel A',
    channelLogo: 'channelA-logo.png',
    thumbnail: 'video1-thumbnail.jpg',
    likes: 1000,
    views: 50000,
  },
  {
    id: 2,
    title: 'Video 2',
    channelName: 'Channel B',
    channelLogo: 'channelB-logo.png',
    thumbnail: 'video2-thumbnail.jpg',
    likes: 1500,
    views: 60000,
  },
  {
    id: 3,
    title: 'Video 3',
    channelName: 'Channel C',
    channelLogo: 'channelC-logo.png',
    thumbnail: 'video3-thumbnail.jpg',
    likes: 800,
    views: 45000,
  },
];

const VideoList = () => {
  return (
    <div className="video-list">
      {videoData.map((video) => (
        <div key={video.id} className="video-card">
          <img src={video.channelLogo} alt={video.channelName} className="channel-logo" />
          <h3 className="channel-name">{video.channelName}</h3>
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
          <h4 className="video-title">{video.title}</h4>
          <div className="video-stats">
            <p className="likes">{video.likes} Likes</p>
            <p className="views">{video.views} Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
