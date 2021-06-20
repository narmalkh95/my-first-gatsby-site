import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './rendTrustedSlider.scss';
import {trustedSliderImageDiv} from '../../homePage.module.scss';
import {graphql, useStaticQuery} from "gatsby";

const trustedSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};

const RendTrustedSlider = () => {

  const sliderImages = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {}, relativeDirectory: {eq: "slider/homePage/trusted"}}) 
      {
      edges {
        node {
          name
          publicURL
          }
        }
      }
    }
  `)

  return (
    <Slider {...trustedSliderSettings} className={'trusted_slider'}>
      {sliderImages?.allFile?.edges?.map((file, index) => {
        return (
          <div className={trustedSliderImageDiv} key={file.node.name}>
            <img src={file.node.publicURL} alt={`slideN-${index + 1}`}/>
          </div>
        )
      })}
    </Slider>
  )
};

export default RendTrustedSlider;
