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
              <a className="navbar-brand" href="#">Twinsight</a>
            </div>
            <ul className="nav navbar-nav">
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;