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
      lazyLoad: "ondemand"
    };

    return (
      <div id="slider_wrapper">
        <Slider {...settings}>
          <div className="slide">
            <img src="/images/slide1.png" alt="Projet intégration de maquette"/>
            <div className="legend">
            <h2>Intégration de maquette</h2>
            <p>
              Intégration d&rsquo;une maquette uniquement en HTML et CSS avec un design responsive.
            </p>
            <a href="http://ocrwebagency.000webhostapp.com" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide2.png" alt="Projet Wordpress"/>
            <div className="legend">
            <h2>Créer un site wordpress</h2>
            <p>
              Création de thème enfant | SEO | Respect des normes d&rsquo;accessibilité WCAG 2.0
            </p>
            <a href="http://ocrstrasbourg.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide3.png" alt="Projet de carte interactive JavaScript"/>
            <div className="legend">
            <h2>Carte interactive de location de vélos</h2>
            <p>
              POO JavaScript | API Google Map | API JCDecaux | API Web Storage
            </p>
            <a href="http://ocrveloloc.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide4.png" alt="Projet de blog en PHP"/>
            <div className="legend">
            <h2>Un blog pour un écrivain</h2>
            <p>
              Application PHP et MySQL | POO | MVC | Bootstrap
            </p>
            <a href="http://jeanforteroche.000webhostapp.com/" className="eye_link"><i className="fas fa-eye fa-2x"></i></a>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide5.png" alt="Projet Laravel"/>
            <div className="legend">
            <h2>Portail d&rsquo;activités pour enfants dans sa ville</h2>
            <p>
              Application PHP et MySQL utilisant les frameworks Laravel et Bootstrap
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
