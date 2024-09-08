import React from 'react';
import leftText from '../../assets/images/distorted-left-text.svg';
import check from '../../assets/images/check.svg';
import laces from '../../assets/images/laces.svg';
import blueArrowDown from '../../assets/images/blue-arrow-down.svg';
import CTAButton from '../../components/cta-button';

function Hero() {

  return (
    <main className="
      flex flex-col gap-8 pt-4 pb-48
      lg:flex-row lg:relative lg:w-[90%] lg:mx-auto lg:overflow-hidden lg:pb-32 lg:mb-12
    "> 
      <section 
        className="
        relative p-6 pb-14 mt-4 max-w-[90%] mx-auto rounded-3xl bg-white border-solid border-2 border-[var(--primay-light-color)]
        lg:w-[50%] lg:mx-0 lg:p-16 lg:z-20
        "
      >
        <h1 className="mb-4">LET'S TURN YOUR VLOGGING PASSION</h1>
        <p className="text-xs">Join Us on Our Blog and Enjoy <span className='hightlight'>High-Quality Content</span> that Inspires  and Provides Solutions</p>
        <img src={laces} 
        className="
          absolute -right-5 top-[40%] w-[46px] 
          lg:z-999 lg:top-4
        "
        />
        <button className="absolute left-[23%] sm:left-6 -bottom-5 py-2 font-bold w-[200px] rounded-full border-solid border-2 dark-border text-white bg-primary">JOIN BE A PARTNER</button>
      </section>

      <section className="
        flex mx-auto justify-between w-[90%]
        lg:absolute lg:bottom-12 lg:w-[40%]
      ">
        <div>
          <h1 className="relative text-lg">35.2<span className="absolute top-0 -right-[12px] font-light text-lg primary-text">+</span></h1>
          <span className="block text-center text-[9px] font-bold">REVIEWS</span>
        </div>
        <div>
          <h1 className="relative text-lg">20K<span className="absolute top-0 -right-[12px] font-light text-lg primary-text">+</span></h1>
          <span className="block text-center text-[9px] font-bold">CUSTOMERS</span>
        </div>
        <div>
          <h1 className="relative text-lg">89<span className="absolute top-1 -right-0 font-light text-sm primary-text">%</span></h1>
          <span className="block text-center text-[9px] font-bold">AGENCY RATE</span>
        </div>
        <div>
          <h1 className="text-lg">2016</h1>
          <span className="block text-center text-[9px] font-bold">BEGIN ON</span>
        </div>
      </section>

      <section 
        className="
          flex -z-20 justify-center items-center p-10 pb-14 mt-4 w-[900px] max-w-[90%] mx-auto rounded-3xl border-solid border-2 border-[var(--primay-light-color)]
          lg:p-0 lg:pb-0 lg:mt-0 lg:mx-0 lg:justify-start
          lg:absolute lg:top-[15%] lg:-right-[35%] lg:pt-12 lg:w-full lg:z-20 lg:h-[250px] lg:border-l-0
      ">
        <div 
        className="
          relative w-[160px] h-[210px] bg-[var(--grey-color)] rounded-full border-solid border-4 dark-border
          lg:z-999 lg:absolute lg:left-4 lg:-bottom-20
        ">
        <img src={leftText} alt="Our Advantages" 
          className="
            absolute -left-12 -top-10
            lg:rotate-[65deg] lg:left-14 lg:-top-20 lg:w-[160px]
          "
        />
        <img src={blueArrowDown}
          className="
            absolute -right-[70px] top-0
            lg:w-[40px] lg:-right-40 lg:-top-12
          "
        />
        <ul 
          className="
            absolute pt-[110px] pb-4 -z-10 -left-[50%] -bottom-[85%] w-[300px] flex flex-col justify-center items-center gap-4 rounded-3xl bg-primary
            lg:p-4 lg:mt-0 lg:mx-0 lg:left-24 lg:bottom-8 lg:gap-2 lg:rounded-[50px] lg:items-start lg:pl-28
          ">
          <li className="flex gap-2"><img src={check} /><span className="header-font text-white lg:text-sm">TRUSTED</span></li>
          <li className="flex gap-2"><img src={check} /><span className="header-font text-white lg:text-sm">ACTUAL</span></li>
          <li className="flex gap-2"><img src={check} /><span className="header-font text-white lg:text-sm">PROFESSIONAL</span></li>
          <li className="flex gap-2"><img src={check} /><span className="header-font text-white lg:text-sm">ACTUAL</span></li>
        </ul>
        </div>
      </section>
    </main>
  );
}

export default Hero
