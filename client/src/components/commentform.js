import React from 'react';

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
    var data = new FormData();
    data.append( "author", "David" );
    data.append( "content", this.state.value );
    
    fetch('/comments/', {
      method: 'post',
      body: data
    }).then(function(response) { return response.json(); })
      .then((json) => {
        console.log(json);
      });
    event.preventDefault();
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