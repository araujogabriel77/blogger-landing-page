import React from "react";
import threeBalls from "../../assets/images/three-balls.svg";
import blueLightCheck from "../../assets/images/blue-light-check.svg";
import laces from "../../assets/images/laces.svg";
import CTAButton from "../../components/cta-button";

function GetStarted() {
  return (
    <div className="relative px-4 py-16 mt-12 max-w-[90%] mx-auto rounded-3xl z-10 bg-white border-2 border-solid border-[var(--primay-light-color)]">
      <img src={laces} className="absolute top-32 -right-6 w-[40px] h-[40px]" />
      <section className="relative flex flex-col">
        <h1 className="mb-8 text-3xl">Let’s Begin the Journey with Us</h1>
        <p className="">Make Your Choice, our partners are very experienced in their field and have the potential to increase your business</p>
      </section>

      <section className="flex flex-col justify-center items-center">
        <img src={threeBalls} className="w-full max-w-[90%] my-12" />
        
        <form className="flex flex-col justify-center items-center gap-4 w-[400px] max-w-[95%]">
          <div className="input-section flex">
            <img src={blueLightCheck} className="" style={{color: 'var(--primay-light-color)'}} />
            <input type="text" name="name" placeholder="Name" className="text-left px-8 py-2 rounded-2xl border-2 border-solid border-[var(--primay-light-color)]" />
          </div>
          <div className="input-section flex">
            <img src={blueLightCheck} className="" style={{color: 'var(--primay-light-color)'}} />
            <input type="email" name="email" placeholder="Email" className="text-left px-8 py-2 rounded-2xl border-2 border-solid border-[var(--primay-light-color)]" />
          </div>
          <CTAButton 
            text="GET STARTED"
            style={{width: '320px', maxWidth: '80%', marginLeft: '2rem', marginTop: '1rem'}}
          />
        </form>
      </section>

    </div>
  );
}

export default GetStarted;