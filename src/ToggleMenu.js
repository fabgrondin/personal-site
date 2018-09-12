import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './ToggleMenu.css'

class ToggleMenu extends Component {
state = {
  visible: false
}
toggleMenu = () => {
  this.setState({visible: !this.state.visible})
}
render() {
  return (
    <nav>
      <span role="button" id="menu_display" onClick={this.toggleMenu}><i className="fas fa-bars"></i></span>
      {this.state.visible && (
        <ul>
          <li>
            <NavLink exact to="/" title="Accueil">
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/resume" title="Curriculum Vitae">
              <i className="fas fa-file"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" title="Portfolio">
              <i className="fas fa-images"></i>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
}

export default ToggleMenu
