import React, { Component } from 'react';
import Slider from 'react-slick';

import './Carousel.css'

class Carousel extends Component {
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
            <img src="/images/slide1.png" alt=""/>
            <div className="legend">
            <h2>Projet Web Agency</h2>
            <p>
              Intégration d&rsquo;une maquette en HTML et CSS avec un design responsive.
            </p>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide2.png" alt=""/>
            <div className="legend">
            <h2>Créer un site wordpress</h2>
            <p>
              Création de thème enfant | SEO | Respect des normes d&rsquo;accessibilité WCAG 2.0
            </p>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide3.png" alt=""/>
            <div className="legend">
            <h2>Carte interactive de location de vélos</h2>
            <p>
              POO JavaScript | API Google Map | API JCDecaux | API Web Storage
            </p>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide4.png" alt=""/>
            <div className="legend">
            <h2>Un blog pour un écrivain</h2>
            <p>
              Application PHP et MySQL | POO | MVC | Bootstrap
            </p>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide5.png" alt=""/>
            <div className="legend">
            <h2>Portail d&rsquo;activités pour enfants dans sa ville</h2>
            <p>
              Application PHP et MySQL utilisant les frameworks Laravel et Bootstrap
            </p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
export default Carousel
