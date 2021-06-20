import React, {useEffect, useState} from "react";
import {typewriter} from './customeTypewriter.module.scss';

const CustomTypewriter = ({textArr, speed = 150, className = '', borderWidth = 3}) => {
  const [text, setText] = useState('');
  let textToPreview = textArr[0];
  let isGoingBack = false;
  let textIndex = 0;
  let arrIndex = 0;

  useEffect(() => rendText(), [])

  const rendText = () => {
    if (isGoingBack) {
      setText(txt => txt.slice(0, -1));

      if (!--textIndex) {
        isGoingBack = false

        if (textArr[++arrIndex]) {
          textToPreview = textArr[arrIndex];
        } else {
          textToPreview = textArr[0];
          arrIndex = 0;
        }
      }

      setTimeout(rendText, speed / 2);
    } else if (textIndex < textToPreview.length) {
      setText(txt => txt + textToPreview.charAt(textIndex));
      if (++textIndex === textToPreview.length) {
        isGoingBack = true;
      }
      setTimeout(rendText, isGoingBack ? speed * 20 : speed);
    }
  }

  return <p className={`${typewriter} ${className}`} style={{borderWidth}}>{text}</p>
};

export default CustomTypewriter;
