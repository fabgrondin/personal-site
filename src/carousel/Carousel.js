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
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div className="slide">
          <img src="/images/slide1.png" alt=""/>
          <div className="legend">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut tempora quo, quisquam voluptas corrupti a minus, nihil fugit repellat quam recusandae expedita repellendus nam non saepe. Officia, ab, natus.
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide2.png" alt=""/>
          <div className="legend">Nulla iusto tempora minima cumque magnam provident, dicta facilis quod veritatis impedit distinctio eius illum similique, recusandae aperiam dolorem necessitatibus culpa optio debitis! Sunt iure quas, possimus. Accusantium, sint nihil.
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide3.png" alt=""/>
          <div className="legend">Dolorem consequatur itaque unde ut magni! Alias velit hic, culpa reprehenderit maiores eaque! Blanditiis quam consectetur at. Incidunt optio, praesentium nulla, ipsum, a totam, veritatis inventore cupiditate tempore repellendus est.
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide4.png" alt=""/>
          <div className="legend">Dolore vitae sapiente sed necessitatibus pariatur veniam distinctio error minus! Accusantium hic praesentium eum, voluptatem, aut excepturi repellendus asperiores. Assumenda expedita rem architecto provident ipsam, consequuntur deserunt magni officia quaerat.
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide5.png" alt=""/>
          <div className="legend">Numquam placeat eaque voluptates, corrupti cupiditate, non velit temporibus doloremque dolor quidem officiis pariatur porro minus quo adipisci accusamus rerum iste eveniet quia? Impedit quis ab, sed aliquam expedita sint.
          </div>
        </div>
      </Slider>
    )
  }
}
export default Carousel
