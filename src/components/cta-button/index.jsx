import React from 'react';

function CTAButton({ text, style }) {
  return (
    <button
      className="font-bold w-[200px] py-2 rounded-full border-solid border-2 dark-border text-white bg-primary"
      style={style}  
    >
      {text}
    </button>
  );
}

export default CTAButton;