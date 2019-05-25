import './VideoDetail.css';
import React from 'react';

export default({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (<div className="video-detail">
    <div className="ui embed">
      <iframe src={videoSrc} title="video player"/>
    </div>
    <div className="ui segment">
      <h4 className="ui header">{video.snippet.title}</h4>
      <div className="meta channel-title">{video.snippet.channelTitle}</div>
      <div className="meta published-at">{new Date(video.snippet.publishedAt).toLocaleDateString("en-US")}</div>
      <p>{video.snippet.description}</p>
    </div>
  </div>);
};
