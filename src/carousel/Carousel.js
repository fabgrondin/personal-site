import React, { Component } from 'react';
import Slider from 'react-slick';

import './Carousel.css'

class Carousel extends Component {
  componentDidMount() {
    document.getElementsByClassName("slick-active")[0].focus()
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "progressive"
    };

    return (
      <div id="slider_wrapper">
        <Slider {...settings}>
          <div className="slide">
            <img src="/images/slide1.png" alt="Projet intégration de maquette"/>
            <div className="legend">
            <h2>Intégration de maquette en HTML et CSS</h2>
            <p>
              Projet d&rsquo;intégration de maquette pour une agence web fictive
              <ul>
                <li>Les balises HTML sont définies avec la sémantique HTML5 pertinente</li>
                <li>Utilisation d&rsquo;icones font-awesome</li>
                <li>La responsivité est gérée par des Media Queries</li>
                <li>Le code HTML et CSS passe la validation w3c</li>
              </ul>
            </p>
            <a href="http://ocrwebagency.000webhostapp.com" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide2.png" alt="Projet Wordpress"/>
            <div className="legend">
            <h2>Créer un site Wordpress</h2>
            <p>
              Projet de site Wordpress pour l&rsquo;office de tourisme de Strasbourg
              <ul>
                <li>Personnalisation d&rsquo;un thème Wordpress</li>
                <li>Site en responsive design</li>
                <li>Gestionnaire d&rsquo;événements</li>
                <li>Respect des normes d&rsquo;accessibilité WCAG 2.0</li>
                <li>Application des principes SEO pour le référencement</li>
              </ul>
            </p>
            <a href="http://ocrstrasbourg.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide3.png" alt="Projet de carte interactive JavaScript"/>
            <div className="legend">
            <h2>Carte interactive de location de vélos</h2>
            <p>
              Projet "Single page Application" simulant la réservation de vélos dans la ville de Lyon.
              <ul>
                <li>JavaScript développé en Orienté Objet</li>
                <li>La carte est récupérée dynamiquement depuis l&rsquo;API Google Maps</li>
                <li>Les informations des stations utilisent l&rsquo;API Live de JC Decaux</li>
                <li>Les informations de réservations utilisent l’API SessionStorage</li>
              </ul>
            </p>
            <a href="http://ocrveloloc.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide4.png" alt="Projet de blog en PHP"/>
            <div className="legend">
            <h2>Un blog pour un écrivain</h2>
            <p>
              Création d&rsquo;une application de blog en PHP avec une base de données MySQL comportant tous les éléments d&rsquo;un CRUD
              <ul>
                <li>Architecture Modèle-Vue-Controlleur</li>
                <li>Programmation orientée objet en PHP</li>
                <li>Utilisation du framework Bootstrap</li>
                <li>Espace administration protégé par mot de passe</li>
                <li>Ajout et modération des commentaires</li>
              </ul>
            </p>
            <a href="http://jeanforteroche.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide5.png" alt="Projet Laravel"/>
            <div className="legend">
            <h2>Portail d&rsquo;activités pour enfants dans sa ville</h2>
            <p>
              Application pour voir ou mettre en ligne des activités pour enfants dans sa ville développée en PHP avec une base de données MySQL
              <ul>
                <li>Application utilisant le framework Laravel</li>
                <li>Utilisation du framework Bootstrap</li>
                <li>Inscription et connexion à l&rsquo;espace membre</li>
                <li>Recherche par ville ou mot-clé</li>
              </ul>
            </p>
            <a href="http://funforkids.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
export default Carousel
