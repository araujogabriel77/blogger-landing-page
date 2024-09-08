import React from 'react';
import doubleCircles from '../../assets/images/double-circles.svg';
import laces from '../../assets/images/laces.svg';
import downRightArrow from '../../assets/images/down-right-arrow.svg';
import InfoCard from '../../components/info-card';
import CTAButton from '../../components/cta-button';

function Bussiness() {

  return (
    <section 
      className="
        px-4 py-8 rounded-3xl -mt-[40px] z-10 bg-white
        lg:p-24 lg:rounded-[40px]
      ">
      <div 
        className="
        relative flex flex-col
        lg:items-start
      ">
        <img src={downRightArrow} 
          className="
          absolute top-[40%] left-[10%]
          lg:left-[25%] lg:top-[40%]
        "/>
        <h1 className="mb-8 text-3xl lg:text-5xl lg:mb-16">IMPROVE YOUR BUSINESS</h1>
        <p 
          className="
          max-w-[60%] ml-auto
          lg:w-[340px] lg:ml-[40%] lg:text-md
        ">Improve the Quality of your Business and Feel the Benefits with Us</p>
      </div>

      <div 
        className="
          relative mx-auto max-w-[90%] h-[1080px] mt-36 rounded-3xl border-2 border-solid border-[var(--primay-light-color)] border-r-0 border-t-0
          lg:h-[300px] lg:border-r-2 lg:mt-32
        ">
        <img src={doubleCircles} 
          className="
            absolute -top-24 left-[4%]
            lg:top-0 lg:-left-20 lg:w-[400px]
          "/>
        <img src={laces} className="absolute w-[40px] h-[40px] top-[50%] -left-5 lg:top-0 lg:-left-4" />
        <button
          className="
          absolute left-[25%] -bottom-[20px] font-bold w-[200px] py-2 rounded-full border-solid border-2 dark-border text-white bg-primary
          lg:left-[calc(50%-100px)]
        ">
          VIEW MORE
        </button>

        {/* cards */}
        <div
          className="
            relative flex flex-col top-32 ml-auto w-full max-w-[50%]
            lg:flex-row lg:-top-20 lg:-right-16
          ">
          <InfoCard 
            title={"Achieve goals"}
            content={"Setting goals is like creating a roadmap to our dreams. They give us direction and purpose"}
          />
          <InfoCard 
            title={"Campaign Manage"}
            content={"Set clear and measurable objectives for your campaign. Know what you want to achieve."}
            cardColor={"#344455"}
            fontColor={"#FFF"}
          />
          <InfoCard 
            title={"Brand Development"}
            content={"We build a strong personal brand identity with consistent writing style, visual appearance, and values."}
          />
        </div>
      </div>
    </section>
  );
}

export default Bussiness;