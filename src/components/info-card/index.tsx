import React from 'react';

function InfoCard({ title, content, cardColor, fontColor }) {
  return (
    <div 
      className="w-[200px] md:w-[240px] flex flex-col rounded-3xl border-2 border-solid border-[var(--primay-light-color)]"
      style={{ backgroundColor: cardColor ? cardColor : '#FFF' }}
    >
      <p
        className="pt-8 pb-4 px-2 text-center border-solid border-b border-[var(--primay-light-color)] border-r-0 border-l-0 border-t-0"
        style={{ color: fontColor ? fontColor : 'var(--default-darker-color)' }}  
      >
        {title}
      </p>
      <p 
        className="p-8 text-center"
        style={{ color: fontColor ? fontColor : 'var(--default-darker-color)' }} 
      >
        {content}
      </p>
    </div>
  );
}

export default InfoCard;