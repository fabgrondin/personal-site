import React from 'react';
import './Resume.css';

const Resume = () => (
  <section id="resume">
  <aside>
    <img id="profil" src="/images/profil.JPG" alt="Fabien Grondin"/>

    <h1>Fabien Grondin</h1>
    <h2>Développeur web junior</h2>

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
  </aside>
  </section>
)

export default Resume
