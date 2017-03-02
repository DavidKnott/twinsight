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
    
    data.append( "author", this.props.profile_name );
    data.append( "content", this.state.value );
    
    fetch('/comments/', {
      method: 'post',
      body: data
    }).then(function(response) { return response.json(); })
      .then((json) => {
      this.setState({ value: ""});
      this.props.onSubmit();
    });
  }

  render() {
      return (
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="col-md-10">
              <textarea className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Comment Here" />
            </div>
            <input className="btn btn-info btn-lg" type="submit" value="Submit" />
          </form>
      );
    }
}

export default CommentForm;