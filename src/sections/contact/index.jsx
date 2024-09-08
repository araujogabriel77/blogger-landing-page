import React from 'react';
import blueSpacer from '../../assets/images/blue-spacer.svg';
import rdlBlueArrow from '../../assets/images/rdl-blue-arrow.svg';
import ldlBlueArrow from '../../assets/images/ldl-blue-arrow.svg';

function Contact() {
  return (
    <section 
      className="
        py-16 mt-28 w-full max-w-[90%] md:max-w-[1200] mx-auto rounded-3xl bg-white
        lg:flex lg:flex-row lg:justify-between lg:max-w-[80%]
    ">
      <div 
        className="
        relative py-4 flex flex-col mb-10
        lg:max-w-[50%] lg:mb-0
      ">
        <h1 
          className="
            mb-8 text-3xl
            lg:text-5xl lg:leading-[1.3] lg:text-left lg:max-w-[500px]
          ">WE ARE PRIORITIZES MUTUAL DEVELOPMENT</h1>
        <p 
          className="
            lg:text-left lg:max-w-[200px] lg:text-[20px]
          ">Let's build and succeed together with the services we provide</p>
      </div>
      
      <div
        className="relative flex flex-col gap-8 justify-center items-center mt-10 py-10
        lg:py-0 lg:mt-0 lg:pr-10 lg:flex-row-reverse lg:items-end
      ">
        <img src={blueSpacer} className="absolute top-0 lg:hidden" />
        <img src={rdlBlueArrow} className="absolute right-8 top-40 lg:hidden" />
        <img src={ldlBlueArrow} className="absolute hidden lg:block lg:-left-32 lg:top-40 " />
        <div 
          className="
            circle flex justify-center items-center w-[255px] h-[255px] rounded-full bg-primary
            lg:w-[430px] lg:h-[430px] 
            ">
          <div className="oval h-[95%] w-[50%] rounded-full bg-[var(--grey-color)] border-4 border-solid border-white"></div>
        </div>

        <button
          className="
          font-bold w-[200px] py-2 rounded-full border-solid border-2 dark-border text-white bg-primary
          lg:mb-8 lg:py-4 lg:absolute lg:-left-[90%] lg:bottom-2
          "
          style={{color: '#FFF', borderColor: 'var(--default-darker-color)'}}
        >
          CONTACT US
        </button>
      </div>
      
    </section>
  );
}

export default Contact;