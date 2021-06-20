import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import './rendCommentsSlider.scss';
import {StaticImage} from "gatsby-plugin-image";
import Link from "gatsby-link";

const CustomBtn = ({className, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      <StaticImage alt="Logo" src={'../../../../images/slider/right-arrow.svg'} style={{width: 15, height: 15}}/>
    </div>
  )
}

const sliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  draggable: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  prevArrow: <CustomBtn/>,
  nextArrow: <CustomBtn/>,
}

const link = 'https://www.capterra.co.uk/reviews/198619/hexometer';

//Todo export data form graphQl
const RendCommentsSlider = () => {
  return (
    <div className={'comments_slider'}>
      <Slider {...sliderSettings}>
        {Array(9).fill(1).map((x, index) => {
          return (
            <Link to={link} target="_blank" className="item" key={index}>
              <StaticImage alt="Logo" src={'../../../../images/quote.svg'} className={'quote'}/>
              <div className={'comment_div'}>
                <p>
                  Lorem Ipsum ble content of a page when looking at its layout. The point of using Lorem Ipsum is that
                  it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                  it
                  look
                </p>
              </div>
              <div className={'user_div'}>
                <div>
                  <StaticImage alt="User" src={'../../../../images/user.jpg'}/>
                </div>
                <p>User Name</p>
              </div>

              <StaticImage className={'company_logo'} alt="User" src={'../../../../images/capterra.svg'}/>
            </Link>
          )
        })}
      </Slider>
    </div>

  )
}

export default RendCommentsSlider;
