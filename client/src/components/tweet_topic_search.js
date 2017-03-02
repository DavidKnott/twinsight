import React from 'react';
import styles from './styles/tweet_top_search.css';

class TweetSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: ""});
  }

  render() {
    return (
      <div>
        <h3>Current Topic: {this.props.current_topic}</h3>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="col-md-10">
            <textarea className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Pick a trending topic" />
          </div>
            <input className="btn btn-info btn-lg" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TweetSearch;