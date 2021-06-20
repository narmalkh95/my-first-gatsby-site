import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

const RendScoreStars = ({score, size = 20}) => {
  if(!score) return null;
  return (
    <div className={'score_div'}>
      {Array(Math.round(score)).fill(1).map((x, index) => (
        <StaticImage
          src={'../../images/star.svg'}
          alt={'star'}
          style={{width: size, height: size, ...(index ? {marginLeft: 5} : {})}}
        />
      ))}
    </div>
  )
};

export default RendScoreStars;
