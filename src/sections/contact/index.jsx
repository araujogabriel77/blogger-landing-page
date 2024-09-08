import React from 'react';
import blueSpacer from '../../assets/images/blue-spacer.svg';
import rdlBlueArrow from '../../assets/images/rdl-blue-arrow.svg';
import CTAButton from '../../components/cta-button';

function Contact() {
  return (
    <section className="py-16 mt-28 w-full max-w-[90%] md:max-w-[1200] mx-auto rounded-3xl bg-white">
      <div className="relative py-4 flex flex-col mb-10">
        <h1 className="mb-8 text-3xl">WE ARE PRIORITIZES MUTUAL DEVELOPMENT</h1>
        <p>Let's build and succeed together with the services we provide</p>
      </div>
      
      <div className="relative flex flex-col gap-8 justify-center items-center mt-10 py-10">
        <img src={blueSpacer} className="absolute top-0" />
        <img src={rdlBlueArrow} className="absolute right-8 top-40" />
        <div className="circle flex justify-center items-center w-[255px] h-[255px] rounded-full bg-primary">
          <div className="oval h-[95%] w-[50%] rounded-full bg-[var(--grey-color)] border-4 border-solid border-white"></div>
        </div>

        <CTAButton 
          text={"CONTACT US"}
          style={{color: 'var(--background-color)', borderColor: 'var(--default-darker-color)'}}
        />
      </div>
      
    </section>
  );
}

export default Contact;