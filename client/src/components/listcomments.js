import React from 'react';

class ListComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comments: []};
  }

  componentDidMount() {
    this.CommentList();
  }

  CommentList() {
    return fetch("/comments")
      .then(function(response) { return response.json(); })
      .then((json) => {
        this.setState({comments: json});
      });
  }

  render() {
    const comments = this.state.comments.map((comment) => {
      return <div>
        <p>{comment.content}</p>
        <h3>Created at {comment.created_date}, by {comment.author}</h3>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{ comments }</div>
    </div>

  }
}

export default ListComments;