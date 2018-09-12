import React, {Component} from 'react';
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
          <li><i className="fas fa-home"></i></li>
          <li><i className="fas fa-file"></i></li>
          <li><i className="fas fa-images"></i></li>
        </ul>
      )}
    </nav>
  );
}
}

export default ToggleMenu
