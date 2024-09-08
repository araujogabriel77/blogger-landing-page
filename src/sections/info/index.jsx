import React from 'react';
import blackCheck from '../../assets/images/black-check.svg';

function Info() {

  return (
    <div className="wrapper pt-10 pb-24 bg-primary rounded-3xl">
      <section className="relative mb-20">
        <h1>THE GREAT WORK</h1>
        <p className="mt-4 text-left pl-4 text-white">Collaborating with our agency is an effective marketing strategy to achieve goals.</p>
      </section>

      <section className="list flex -z-10 h-[42px] overflow-hidden -ml-[25%]">
        <div className="flex justify-center items-center whitespace-nowrap rounded-3xl py-4 px-10 -z-15 border-solid border-3 border-white bg-primary">
          <span className="text-white text-bold">Influence & Followers</span>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap -ml-[35px] rounded-3xl py-4 px-8 -z-14 text-bold border-solid border-3 border-white bg-white">
          <span className="text-bolder dark-text">Wedding Party</span>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap -ml-[35px] rounded-3xl py-4 px-8 -z-13 border-solid border-3 border-white bg-primary">
          <span className="text-white text-bold">Business Expansion</span>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap -ml-[35px] rounded-3xl py-4 px-8 -z-12 border-solid border-3 border-white bg-primary">
          <span className="text-white text-bold">Publish Business</span>
        </div>
      </section>

      <section className="w-[900px] max-w-[90%] px-8 py-10 flex flex-col gap-4 mx-auto bg-white rounded-3xl mt-8">
        <div className="flex gap-2 item-start justify-start">
          <img src={blackCheck} className="w-[30px] h-[30px]" />
          <p className="dark-text text-left">Our experienced team will be present to ensure every aspect of the event runs smoothly From welcoming guests</p>
        </div>

        <div className="flex gap-2 item-start justify-start">
          <img src={blackCheck} className="w-[30px] h-[30px]" />
          <p className="dark-text text-left">Every precious moment will be captured by our professional photographers and videographers.</p>
        </div>
      </section>
    </div>
  );
}

export default Info;