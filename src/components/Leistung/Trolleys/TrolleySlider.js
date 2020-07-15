import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import buerotrolley from '../../../images/trolleys/Bürotrolley.jpg';
import folientrolley from '../../../images/trolleys/Folientrolley.jpg';
import weintrolley from '../../../images/trolleys/weintrolley.jpg';

const TrolleySlider = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     buerotrolley: file(relativePath: { eq: "trolleys/Bürotrolley.jpg" }) {
  //       childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //         id
  //       }
  //     }
  //     folientrolley: file(relativePath: { eq: "trolleys/Folientrolley.jpg" }) {
  //       childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //         id
  //       }
  //     }
  //     weintrolley: file(relativePath: { eq: "trolleys/Weintrolley.jpg" }) {
  //       childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //         id
  //       }
  //     }
  //   }
  // `);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trolley-images">
      <Slider {...settings}>
        <div>
          <img src={buerotrolley} alt="Bürotrolley" />
        </div>
        <div>
          <img src={folientrolley} alt="Folientrolley" />
        </div>
        <div>
          <img src={weintrolley} alt="Weintrolley" />
        </div>
        <div>
          <img src={buerotrolley} alt="Bürotrolley" />
        </div>
        <div>
          <img src={folientrolley} alt="Folientrolley" />
        </div>
        <div>
          <img src={weintrolley} alt="Weintrolley" />
        </div>
      </Slider>
    </div>
  );
};

export default TrolleySlider;
