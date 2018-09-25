import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  componentDidMount() {
    var scriptElmt = document.createElement("script")
    scriptElmt.innerHTML = "GitHubActivity.feed({username: 'fabgrondin', selector: '#github_activity'})";

    this.instance.appendChild(scriptElmt);
  }
  render() {
    return (
      <article id="welcome">
      <section id="welcome_text">
        <h1>
          Fabien Grondin
          <br/>
          <span className="subtitle">
            Développeur Web Junior
            <br/>
            Autonome, rigoureux et curieux
          </span>
        </h1>
        <p>
        Ce site a pour but de présenter mes compétences et mon travail.
        <br/>
        Il a été réalisé sous React.js.
        <br/>
        Cliquez sur le menu en haut à gauche pour accéder à mon CV en ligne et à mon portfolio.
        </p>
      </section>
      <section id="github_activity" ref={el => (this.instance = el)}>
      </section>
      </article>
    )
  }
}

export default Welcome
