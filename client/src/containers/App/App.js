import React, { Component, PropTypes } from 'react';
import './App.css';
import Navbar from '../../components/navbar'
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
        
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default App;
