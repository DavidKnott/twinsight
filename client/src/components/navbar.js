import React from 'react';

class Navbar extends React.Component {
  render (){
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Sophia</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:8000/complete/google-oauth2/&response_type=token&client_id=977800476735-0a4mslc7asasl5sbcdmfsmtbps7meske.apps.googleusercontent.com">Login with Google</a></li> 
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;