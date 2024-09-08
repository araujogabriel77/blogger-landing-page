import React from 'react';
import './styles.css'
import leftText from '../../assets/distorted-left-text.svg';
import check from '../../assets/check.svg';
import laces from '../../assets/laces.svg';
import blueArrowDown from '../../assets/blue-arrow-down.svg';

function Hero() {
  

  return (
    <main className="flex flex-col gap-8"> 
      <section className="relative p-6 pb-14 mt-4 w-[900px] max-w-[90%] mx-auto rounded-3xl border-solid border-2 border-[var(--primay-light-color)]">
        <h1 className="mb-4">LET'S TURN YOUR VLOGGING PASSION</h1>
        <p className="text-xs">Join Us on Our Blog and Enjoy <span className='hightlight'>High-Quality Content</span> that Inspires  and Provides Solutions</p>
        <img src={laces} className="absolute -right-5 top-[40%] w-[46px]" />
        <button className="absolute left-[23%] sm:left-6 -bottom-5 py-2 font-bold w-[200px] rounded-full border-solid border-2 border-[var(--default-darker-color)] text-white bg-[var(--primary-color)]">JOIN BE A PARTNER</button>
      </section>

      <section className="flex mx-auto justify-between w-[90%]">
        <div>
          <h1 className="relative text-lg">35.2<span className="absolute top-0 -right-[12px] font-light text-lg text-[var(--primary-color)]">+</span></h1>
          <span className="block text-center text-[9px] font-bold">REVIEWS</span>
        </div>
        <div>
          <h1 className="relative text-lg">20K<span className="absolute top-0 -right-[12px] font-light text-lg text-[var(--primary-color)]">+</span></h1>
          <span className="block text-center text-[9px] font-bold">CUSTOMERS</span>
        </div>
        <div>
          <h1 className="relative text-lg">89<span className="absolute top-1 -right-0 font-light text-sm text-[var(--primary-color)]">%</span></h1>
          <span className="block text-center text-[9px] font-bold">AGENCY RATE</span>
        </div>
        <div>
          <h1 className="text-lg">2016</h1>
          <span className="block text-center text-[9px] font-bold">BEGIN ON</span>
        </div>
      </section>

      <section className="flex justify-center items-center p-10 pb-14 mt-4 w-[900px] max-w-[90%] mx-auto rounded-3xl border-solid border-2 border-[var(--primay-light-color)]">
        <div className="relative  w-[160px] md:w-[334px] h-[209px] md:h-[434px] bg-[var(--grey-color)] rounded-full border-solid border-4 border-[var(--default-darker-color)]">
        <img src={leftText} alt="Our Advantages" className="absolute -left-12 -top-10" />
        <img src={blueArrowDown} className="absolute -right-[70px] top-0" />
            <ul className="absolute pt-[110px] pb-4 -z-10 -left-[50%] -bottom-[85%] w-[300px] md:w-[453px] flex flex-col justify-center items-center gap-4 rounded-3xl bg-[var(--primary-color)]">
              <li className="flex gap-2"><img src={check} /><span className="font-rammeto text-white">TRUSTED</span></li>
              <li className="flex gap-2"><img src={check} /><span className="font-rammeto text-white">ACTUAL</span></li>
              <li className="flex gap-2"><img src={check} /><span className="font-rammeto text-white">PROFESSIONAL</span></li>
              <li className="flex gap-2"><img src={check} /><span className="font-rammeto text-white">ACTUAL</span></li>
            </ul>
        </div>
      </section>
    </main>
  );
}

export default Hero
