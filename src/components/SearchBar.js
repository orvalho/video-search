import './SearchBar.css';
import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({term: e.target.value});
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (<form className="search-bar ui form" onSubmit={this.onFormSubmit}>
      <div className="field">
        <input type="text" onChange={this.onInputChange} value={this.state.term} placeholder="video search"/>
      </div>
    </form>);
  }
}
