import React, { Component } from "react";
import Slider from "react-slick";
import photo1 from '../../../img/photo1.jpg';
import photo2 from '../../../img/photo2.jpg';
import photo3 from '../../../img/photo3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={photo2} width="500" height="300"/>
          </div>
          <div>
            <img src={photo3} width="500" height="300"/>
          </div>
          <div>
            <img src={photo1} width="500" height="300"/>
          </div>
        </Slider>
      </div>
    );
  }
}