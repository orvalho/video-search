import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onFormSubmit('cats'); // default
  }

  onFormSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (<div className="app ui container">
      <SearchBar onFormSubmit={this.onFormSubmit}/>
      <div className="ui grid container">
        <div className="ui row">
          <div className="sixteen wide tablet ten wide computer column">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="list sixteen wide tablet six wide computer column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>
        </div>
      </div>
    </div>);
  }
}
