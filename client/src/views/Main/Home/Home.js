import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
import styles from './styles.module.css'
import ListComments from '../../../components/listcomments'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
    const { profile } = this.state
    return (
      <div className="col-md-8 col-md-offset-2 {styles.root}" >
        <div className="text-center welcome-sign">
          <p className="col-md-8">Welcome {profile.name}!</p>
          <Button className="btn-lg" onClick={this.logout.bind(this)}>Logout</Button>
        </div>
        <ListComments login_status={true} profile_name={profile.name}/>
      </div>
    )
  }
}

export default Home;
