import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ToggleMenu from './ToggleMenu'
import Resume from './Resume'
import Welcome from './Welcome'
import Portfolio from './Portfolio'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <div className="App">
          <ToggleMenu />
          <div className="main">
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                  <Switch location={location}>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              </div>
            </div>
        )}/>
      </Router>
    );
  }
}

export default App;
