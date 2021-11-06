import React from 'react';

class Home extends React.Component {
  render () {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <img className="home-me" src={window.icon} />
        </div>
      </div>
    )
  }
}

export default Home;