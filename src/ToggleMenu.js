import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import Transition from 'react-transition-group/Transition'
import './ToggleMenu.css'

const transitionStyles = {
  entering: { opacity: 0, display: "block"},
  entered:  { opacity: 1, display: "block" },
};

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
      <span role="button" id="menu_toggle" onClick={this.toggleMenu}><i className="fas fa-bars"></i></span>
      <Transition in={this.state.visible} timeout={300}>
      { (state) => (
        <ul style={{...transitionStyles[state]}}>
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
      </Transition>
    </nav>
  );
}
}

export default ToggleMenu
