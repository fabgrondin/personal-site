import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
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
      <span role="button" id="menu_toggle" onClick={this.toggleMenu}><i className="fas fa-bars"></i></span>
        <CSSTransition in={this.state.visible} classNames="spread" timeout={500}>
            <ul>
              <li>
                <NavLink exact to="/" title="Accueil" onClick={this.toggleMenu}>
                  <i className="fas fa-home"></i>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/resume" title="Curriculum Vitae" onClick={this.toggleMenu}>
                  <i className="fas fa-file"></i>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/portfolio" title="Portfolio" onClick={this.toggleMenu}>
                  <i className="fas fa-images"></i>
                </NavLink>
              </li>
            </ul>
          </CSSTransition>
    </nav>
  );
}
}

export default ToggleMenu
