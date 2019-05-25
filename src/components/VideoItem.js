import './VideoItem.css';
import React from 'react';
import {truncateText} from '../helper';

export default({video, onVideoSelect}) => {
  return (<div className="video-item item" onClick={() => onVideoSelect(video)}>
    <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
    <div className="content">
      <div className="header">{truncateText(video.snippet.title)}</div>
      <div className="meta channel-title">{video.snippet.channelTitle}</div>
      <div className="meta published-at">{new Date(video.snippet.publishedAt).toLocaleDateString("en-US")}</div>
    </div>
  </div>);
};
