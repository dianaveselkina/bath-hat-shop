import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    };

    return (
      <div className="slider__conteiner">
        <Link to="/">
          <button className="button__main">На главную</button>
        </Link>
        <Slider {...settings}>
          <div>
            <img
              src="https://i.yapx.ru/WIEre.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-1"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErU.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-2"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErd.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-3"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErV.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-4"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErP.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-5"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErS.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-6"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErX.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-7"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErZ.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-8"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIEra.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-9"
            />
          </div>
          <div>
            <img
              src="https://i.yapx.ru/WIErO.jpg"
              width={'800px'}
              height={'800px'}
              alt="slide-10"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
