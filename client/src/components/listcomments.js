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
        this.setState({comments: json.slice(0,15)});
      });
  }


  render() {
    const comments = this.state.comments.map((comment) => {
      return(
        <div>
          <div className="panel-body">
            <p>{comment.content}</p>
          </div>
          <div className="panel-footer">
            <h5>Created at {comment.created_date}, &nbsp;&nbsp;&nbsp;&nbsp; by {comment.author}</h5>
          </div>
        </div>
      );
    });
    const comment_form = function(context){
        if (context.props.login_status) {
          return(
            <div id="layout-content" className="layout-content-wrapper">
              <CommentForm onSubmit={() => context.CommentList()} profile_name={context.props.profile_name} />
            </div>
          )
        }
      }
      return (
        <div>
          {comment_form(this)}
          <div className="panel-group">{ comments }</div>
        </div>
    )
  }
}

export default ListComments;