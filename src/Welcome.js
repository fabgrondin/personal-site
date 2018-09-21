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
          <span className="subtitle">Développeur Web Junior</span>
        </h1>
        <p>
          Jeune diplômé dans le développement web, je suis passionné, curieux et très motivé pour me perfectionner. J&rsquo;ai un esprit rigoureux et analytique et je sais faire preuve d&rsquo;autonomie dans l&rsquo;apprentissage comme dans le travail.
        </p>
      </section>
      <section id="github_activity" ref={el => (this.instance = el)}>
      </section>
      </article>
    )
  }
}

export default Welcome
