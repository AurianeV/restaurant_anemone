import React from 'react';
import './TransitionImg.scss'

function TransitionImg({ imageTransition, titleTransition }) {
  return (
    <section className="transition">
      <img className="transition_image" alt="image de transition" src={imageTransition} />
      <h3 className= "transition_title" >{titleTransition}</h3>
    </section>
  );
}

export default TransitionImg;