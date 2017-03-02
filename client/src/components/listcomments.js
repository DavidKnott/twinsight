import React from 'react';
import CommentForm from './commentform';
import AuthService from '../utils/AuthService'
import Login from '../views/Main/Login/Login'
import {Button} from 'react-bootstrap'


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
      return(
        <div>
          <p>{comment.content}</p>
          <h3>Created at {comment.created_date}, by {comment.author}</h3>
        </div>
      );
    });
    const comment_form = function(login_status){
        if (login_status) {
          return(
            <div id="layout-content" className="layout-content-wrapper">
              <CommentForm onSubmit={() => this.CommentList()} />
            </div>
          )
        }
      }
      return (
      <div>
        {comment_form(this.props.login_status) }
        <div className="panel-list">{ comments }</div>
      </div>
    )
  }
}

export default ListComments;