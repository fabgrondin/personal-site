import React from 'react';
import './Resume.css';

const Resume = () => (
  <article id="resume">
    <div id="presentation">
      <img src="/images/profil.JPG" alt="Fabien Grondin"/>

      <h1>Fabien Grondin</h1>
      <h2>Développeur web junior</h2>

      <div id="presentation_wrapper">
        <section id="contact">
          <h3>Contact</h3>
          <p>
          07 83 64 97 22
          <br/>
          grondinfbn@gmail.com
          <br/>
          www.siteperso.com
          </p>
        </section>

        <section>
          <h3>Compétences</h3>
          <div id="skills_wrapper">
            <div>
              <p class="skill">
                HTML
                <br/>
                <span>●●●●○</span>
              </p>
              <p class="skill">
                JavaScript
                <br/>
                <span>●●●○○</span>
              </p>
              <p class="skill">
                MySQL
                <br/>
                <span>●●○○○</span>
              </p>
              <p class="skill">
                WordPress
                <br/>
                <span>●●●○○</span>
              </p>
              <p class="skill">
                Laravel
                <br/>
                <span>●●●○○</span>
              </p>
            </div>
            <div>
              <p class="skill">
                CSS
                <br/>
                <span>●●●●○</span>
              </p>
              <p class="skill">
                PHP
                <br/>
                <span>●●●○○</span>
              </p>
              <p class="skill">
                React
                <br/>
                <span>●●○○○</span>
              </p>
              <p class="skill">
                Bootstrap
                <br/>
                <span>●●●●○</span>
              </p>
              <p class="skill">
                Anglais
                <br/>
                <span>●●●○○</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="profil_wrapper">
      <section id="profil">
        <h3>Profil</h3>
        <p>
          Jeune diplômé dans le développement web, je suis passionné, curieux et très motivé pour me perfectionner. J&rsquo;ai un esprit rigoureux et analytique et je sais faire preuve d&rsquo;autonomie dans l&rsquo;apprentissage comme dans le travail.
        </p>
      </section>
      <section id="education">
        <h3>Formation</h3>
        <div>
          <h4>Diplôme développeur intégrateur en réalisation d&rsquo;applications web</h4>
          <p className="upper_text">Niveau Bac+2 | 3W Academy | 2018</p>
          <h4>Master 1 Sciences Cognitives</h4>
          <p className="upper_text">Université Bordeaux 2 | 2008</p>
          <h4>Master 1 Mathématiques</h4>
          <p className="upper_text">Université de la Réunion | 2006</p>
        </div>
      </section>
      <section id="professional">
        <h3>Expériences Professionnelles</h3>
        <div>
          <h4>Assistant d&rsquo;éducation</h4>
          <p className="upper_text">2009 - 2013 | 2015 - 2017</p>
          <h4>Professeur contractuel de Mathématiques</h4>
          <p className="upper_text">2013 - 2014</p>
        </div>
      </section>
      <section id="production">
        <h3>Projets Réalisés</h3>
        <div>
          <h4>Intégrer la maquette du site d&rsquo;une agence web</h4>
          <p>Intégration de maquette uniquement en HTML et CSS en responsive design</p>
          <h4>Créer un site wordpress</h4>
          <p>Création de thème enfant | SEO | Respect des normes d&rsquo;accessibilité WCAG 2.0</p>
          <h4>Carte interactive de location de vélos</h4>
          <p>POO JavaScript | API Google Map | API JCDecaux | API Web Storage</p>
          <h4>Un blog pour un écrivain</h4>
          <p>Application PHP et MySQL | POO | MVC | Bootstrap
          <br/>
          Interfaces frontend (lecture de billets et commentaires) et backend (administration de billets)</p>
          <h4>Portail d&rsquo;activités pour enfants dans sa ville</h4>
          <p>Application PHP et MySQL utilisant les frameworks Laravel et Bootstrap</p>
        </div>
      </section>
      <section id="hobbies">
        <h3>Loisirs</h3>
        <p>
          Passer du temps sur Coding Game, suivre l&rsquo;actualité politique, regarder des séries et m&rsquo;occuper de mes deux petits garçons
        </p>
      </section>
    </div>
  </article>
)

export default Resume
