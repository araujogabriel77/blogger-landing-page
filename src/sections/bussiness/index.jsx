import React from 'react';
import doubleCircles from '../../assets/images/double-circles.svg';
import laces from '../../assets/images/laces.svg';
import downRightArrow from '../../assets/images/down-right-arrow.svg';
import InfoCard from '../../components/info-card';

function Bussiness() {

  return (
    <div className="px-4 py-8 rounded-3xl -mt-[40px] z-10 bg-white">
      <section className="relative flex flex-col">
        <img src={downRightArrow} className="absolute top-[40%] left-[10%]" />
        <h1 className="mb-8 text-3xl"><span className="dark-text text-bold header-font inline-block px-2 rounded-xl">IMPROVE</span> YOUR BUSINESS</h1>
        <p className="max-w-[60%] ml-auto"><span>Improve</span> the Quality of your Business and Feel the Benefits with Us</p>
      </section>

      <section className="relative mx-auto max-w-[90%] h-[1080px] mt-36 rounded-3xl border-2 border-solid border-[var(--primay-light-color)] border-r-0 border-t-0">
        <img src={doubleCircles} className="absolute -top-24 left-[4%] w-" />
        <img src={laces} className="absolute w-[40px] h-[40px] top-[50%] -left-5" />
        <button className="absolute left-8 -bottom-5 py-2 font-bold w-[200px] rounded-full border-solid border-2 border-[var(--default-darker-color)] text-white bg-primary">VIEW MORE</button>

        {/* cards */}
        <div className="relative flex flex-col top-32 ml-auto w-full max-w-[50%]">
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
      </section>
    </div>
  );
}

export default Bussiness;