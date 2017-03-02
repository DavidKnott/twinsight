import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
import ListComments from '../../../components/listcomments'
import styles from './styles.module.css'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div className="col-md-8 col-md-offset-2 {styles.root}">
        <div className="text-center login-sign">
          <p className="col-md-8">Login to comment</p>
            <Button className="btn-primary btn-lg" onClick={auth.login.bind(this)}>Login</Button>
        </div>
        <ListComments auth={this.props.auth}/>
      </div>
    )
  }
}

export default Login;
