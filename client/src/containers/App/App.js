import React, { Component, PropTypes } from 'react';
import './App.css';
import ListComments from '../../components/listcomments';
import Navbar from '../../components/navbar';
import Map from '../../components/map';
import { Router } from 'react-router'

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Map />
        <div style={{ height: '100%' }}>
          {this.content}
        </div>
      </div>
    );
  }
}

export default App;