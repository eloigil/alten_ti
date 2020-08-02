import React, {Component} from 'react'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <img className="header__logo" src={window.location.origin + "/images/ABB-logo.png"} alt=""/>
      </div>
    ) 
  }
}

export default Header