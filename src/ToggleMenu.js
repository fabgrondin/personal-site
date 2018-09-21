import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import Transition from 'react-transition-group/Transition'
import './ToggleMenu.css'

const transitionStyles = {
  entering: { opacity: 0, display: "block"},
  entered:  { opacity: 1, display: "block" },
  exiting: { opacity: 1, display: "block"},
  exited:  { opacity: 0, display: "block" },
};

const transitionDelay = {
  entering: {
    1: {"transitionDelay": "100ms"},
    2: {"transitionDelay": "200ms"},
    3: {"transitionDelay": "300ms"},
  },
  entered: {
    1: {"transitionDelay": "100ms"},
    2: {"transitionDelay": "200ms"},
    3: {"transitionDelay": "300ms"},
  },
  exiting: {
    1: {"transitionDelay": "300ms"},
    2: {"transitionDelay": "200ms"},
    3: {"transitionDelay": "100ms"},
  },
  exited: {
    1: {"transitionDelay": "300ms"},
    2: {"transitionDelay": "200ms"},
    3: {"transitionDelay": "100ms"},
  },

}

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
        <ul>
          <li style={{...transitionStyles[state],...transitionDelay[state][1]}}>
            <NavLink exact to="/" title="Accueil">
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li style={{...transitionStyles[state],...transitionDelay[state][2]}}>
            <NavLink exact to="/resume" title="Curriculum Vitae">
              <i className="fas fa-file"></i>
            </NavLink>
          </li>
          <li style={{...transitionStyles[state],...transitionDelay[state][3]}}>
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
