import React from 'react';
import Login from '../views/Main/Login/Login'
import {Button} from 'react-bootstrap'



class CommentForm extends React.Component {
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
    var data = new FormData();
    data.append( "author", "David" );
    data.append( "content", this.state.value );
    
    fetch('/comments/', {
      method: 'post',
      body: data
    }).then(function(response) { return response.json(); })
      .then((json) => {
        // add in a comment thank you
        this.props.onSubmit();
        this.setState({ value: ""});
    });
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea value={this.state.value} onChange={this.handleChange} placeholder="Comment Here" />
            </label>
            <input type="submit" value="Submit" />
          </form>
      );
    }
}

export default CommentForm;