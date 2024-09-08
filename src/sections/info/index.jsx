import React from 'react';
import blackCheck from '../../assets/images/black-check.svg';

function Info() {

  return (
    <section 
      className="
      wrapper pt-10 pb-24 bg-primary rounded-3xl
      lg:flex lg:flex-col lg:p-24
    ">
      <div className="relative mb-20 lg:mb-24">
        <h1 className="lg:text-5xl lg:text-left">THE GREAT WORK</h1>

        <p 
          className="
            mt-4 text-left pl-4 text-white lg:absolute
            lg:right-0 lg:w-[200px] lg:-bottom-[280px]
          ">Collaborating with our agency is an effective marketing strategy to achieve goals.</p>
      </div>

      <div className="
        list flex -z-10 h-[42px] overflow-hidden -ml-[25%]
        lg:z-0 lg:ml-0
      ">
        <div className="flex justify-center items-center whitespace-nowrap rounded-3xl py-4 px-10 -z-15 border-solid border-3 border-white bg-primary">
          <span className="text-white font-bold">Influence & Followers</span>
        </div>
        <div 
        className="
          flex justify-center items-center whitespace-nowrap -ml-[35px] rounded-3xl py-4 px-8 -z-14 font-bold border-solid border-3 border-white bg-white
          lg:bg-[var(--primary-color)] lg
        ">
          <span className="font-black dark-text">Wedding Party</span>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap -ml-[35px] rounded-3xl py-4 px-8 -z-13 border-solid border-3 border-white bg-primary">
          <span className="text-white font-bold">Business Expansion</span>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap -ml-[35px] rounded-3xl py-4 px-8 -z-12 border-solid border-3 border-white bg-primary">
          <span className="text-white font-bold">Publish Business</span>
        </div>
      </div>

      <div 
        className="
          w-[900px] max-w-[90%] px-8 py-10 flex flex-col gap-4 mx-auto bg-white rounded-3xl mt-8
          lg:mx-0 lg:flex-row lg:p-12 lg:gap-8
        ">
        <div className="flex gap-2 item-start justify-start">
          <img src={blackCheck} className="w-[30px] h-[30px]" />
          <p className="dark-text text-left">Our experienced team will be present to ensure every aspect of the event runs smoothly From welcoming guests</p>
        </div>

        <div className="flex gap-2 item-start justify-start">
          <img src={blackCheck} className="w-[30px] h-[30px]" />
          <p className="dark-text text-left">Every precious moment will be captured by our professional photographers and videographers.</p>
        </div>
      </div>
    </section>
  );
}

export default Info;