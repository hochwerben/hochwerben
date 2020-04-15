import React, { Component } from 'react';
import Slider from 'react-slick';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/courses.module.css';
import Title from '../Title';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../images/slider-three/webdesign1.jpg';
import img2 from '../../images/slider-three/webdesign2.jpg';
import img3 from '../../images/slider-three/webdesign3.jpg';
import img4 from '../../images/slider-three/webdesign4.jpg';
import img5 from '../../images/slider-three/webdesign5.jpg';
import img6 from '../../images/slider-three/webdesign6.jpg';
import img7 from '../../images/slider-three/webdesign7.jpg';
import img8 from '../../images/slider-three/webdesign8.jpg';

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <section className={styles.courses}>
        <Title title="Webdesign"></Title>
        <div className="slider-container">
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            autoplay={true}
            centerMode={true}
          >
            <div>
              <img src={img1} alt="image" width="500" />
            </div>
            <div>
              <img src={img2} alt="image" width="500" />
            </div>
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <img src={img3} alt="image" width="300" />
            </div>
            <div>
              <img src={img4} alt="image" width="300" />
            </div>
            <div>
              <img src={img5} alt="image" width="300" />
            </div>
            <div>
              <img src={img6} alt="image" width="300" />
            </div>
            <div>
              <img src={img7} alt="image" width="300" />
            </div>
            <div>
              <img src={img8} alt="image" width="300" />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
