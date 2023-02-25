import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={60}
      outerSize={20}
      color='#fff'
      outerAlpha={0.2}
      innerScale={0.2}
      outerScale={3}
      hasBlendMode={true}
      innerStyle={{
    background: 'radial-gradient( transparent 30%, blue 50%, red 10%)'
  }}
  outerStyle={{
    background: 'radial-gradient(white 20%, blue 50%, green 20%)'
  }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'AiOutlineMenu'
      ]}
     />
  )
}

export default Cursor;
