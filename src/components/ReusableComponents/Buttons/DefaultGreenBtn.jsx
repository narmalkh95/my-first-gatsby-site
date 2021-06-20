import React from 'react';
import {defaultGreenBtn} from './buttons.module.scss';

const DefaultGreenBtn = ({text, style = null}) => {
  return <button className={`${defaultGreenBtn} defaultGreenBtn`} style={style}>{text}</button>
};

export default DefaultGreenBtn;
