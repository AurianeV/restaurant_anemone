import React from 'react';
import './TransitionImg.css'

function TransitionImg({ imageTransition, titleTransition }) {
  return (
    <div className="transition">
      <img className="transition_image" alt="imgTransition" src={imageTransition} />
      <h3 className= "transition_title" >{titleTransition}</h3>
    </div>
  );
}

export default TransitionImg;