import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/sliderTwo.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderOne = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider-two" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    arrows: false,
  };

  return (
    <section className={styles.sectionBackground}>
      <div className={styles.centerSliderOne}>
        <Title title="Werbeträger"></Title>
        <div>
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className={styles.sliderContainer}>
              <div className={styles.img}>
                <Image
                  fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                  alt="Image1"
                />
              </div>
              <div className={styles.sliderText}>
                <span className={styles.name}>Schilder</span>
                <Link to="/leistungen">mehr erfahren</Link>
              </div>
              <div className={styles.price}>
                <span>ab</span>
                <span className={styles.priceText}>€ 699</span>
              </div>
            </div>

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>
                    Wechsel-
                    <br />
                    rahmen
                  </span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 199</span>
                </div>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>
                    LED
                    <br /> Displays
                  </span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 299</span>
                </div>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[3].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>Fahnen</span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 199</span>
                </div>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[4].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>
                    Fräs-
                    <br />
                    buchstaben
                  </span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 399</span>
                </div>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[5].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>
                    Messe-
                    <br />
                    displays
                  </span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 99</span>
                </div>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[6].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>Fahnen und Megaposter</span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 349</span>
                </div>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div>
              <div className={styles.sliderContainer}>
                <div className={styles.img}>
                  <Image
                    fluid={data.allFile.edges[7].node.childImageSharp.fluid}
                    alt="Image2"
                  />
                </div>
                <div className={styles.sliderText}>
                  <span className={styles.name}>
                    Werbe-
                    <br />
                    pylonen
                  </span>
                  <Link to="/leistungen">mehr erfahren</Link>
                </div>
                <div className={styles.price}>
                  <span>ab</span>
                  <span className={styles.priceText}>€ 599</span>
                </div>
              </div>
            </div>
            {/* End Slide */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
