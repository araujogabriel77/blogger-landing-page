import React, { useState } from 'react';
import './styles.css';
import upWhiteArrow from '../../assets/images/up-white-arrow.svg';
import downWhiteArrow from '../../assets/images/down-white-arrow.svg';


function AccordionButton({ title, contentList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
        <div>
          <button
            className="
              flex justify-center items-center gap-2 w-[200px] bg-primary  p-4 rounded-full
              lg:w-[240px] lg:-ml-12 lg:px-24
              "
            onClick={toggleList}
          >
            <span className="header-font text-white">{title}</span>
            <img src={isOpen ? upWhiteArrow : downWhiteArrow} />
          </button>
          {isOpen && (
            <ul className="accordion-list relative flex flex-col gap-4 my-4">
              {contentList.map((content, index) => (
                <li key={index}>
                  {content}
                </li>
              ))}
            </ul>
          )}
        </div>
  );
}

export default AccordionButton;