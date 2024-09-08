import React from "react";
import threeBalls from "../../assets/images/three-balls.svg";
import blueLightCheck from "../../assets/images/blue-light-check.svg";
import laces from "../../assets/images/laces.svg";
import CTAButton from "../../components/cta-button";

function GetStarted() {
  return (
    <section
      className="
        relative px-4 py-16 mt-12 max-w-[90%] mx-auto rounded-3xl z-10 bg-white border-2 border-solid border-[var(--primay-light-color)]
        lg:p-20 lg:pb-8 lg:px-12
      ">
      <img src={laces}
        className="
          absolute top-32 -right-6 w-[40px] h-[40px]
          lg:w-[80px] lg:h-[80px] lg:right-12 lg:top-16
        "/>
      <div 
        className="
          relative flex flex-col
          lg:flex-row lg:text-left lg:items-end
        ">
        <h1 
          className="
            mb-8 text-3xl
            lg:text-4xl lg:w-[50%] lg:leading-[1.3] lg:mb-0
        ">Let’s Begin the Journey with Us</h1>
        
        <p className="lg:w-[300px] lg:pb-4">Make Your Choice, our partners are very experienced in their field and have the potential to increase your business</p>
      </div>

      <div 
        className="
          flex flex-col justify-center items-center
          lg:flex-row-reverse lg:w-full lg:justify-between
        ">
        <img src={threeBalls}
          className="
            w-full max-w-[90%] my-12
            lg:w-[50%] lg:max-w-[560px]
          "/>
        
        <form className="flex flex-col justify-center items-center gap-4 w-[400px] max-w-[95%]">
          <div className="input-section flex">
            <img src={blueLightCheck}  style={{color: 'var(--primay-light-color)'}} />
            <input type="text" name="name" placeholder="Name" className="text-left px-8 py-2 rounded-2xl border-2 border-solid border-[var(--primay-light-color)]" />
          </div>
          <div className="input-section flex">
            <img src={blueLightCheck}  style={{color: 'var(--primay-light-color)'}} />
            <input type="email" name="email" placeholder="Email" className="text-left px-8 py-2 rounded-2xl border-2 border-solid border-[var(--primay-light-color)]" />
          </div>
          {/* <CTAButton 
            text=""
            style={{width: '320px', maxWidth: '80%', marginLeft: '2rem', marginTop: '1rem'}}
          /> */}

          <button
            className="
              font-bold w-[320px] max-w-[80%] ml-8 mt-4 py-2 rounded-full border-solid border-2 dark-border text-white bg-primary
              lg:w-[280px]
            "
            style={{color: '#FFF', borderColor: 'var(--default-darker-color)'}}
          >
           GET STARTED
          </button>
        {/* <button
          className="
          absolute left-[25%] -bottom-[20px] font-bold w-[200px] py-2 rounded-full border-solid border-2 dark-border bg-primary
          lg:left-[calc(50%-100px)]
        "
          style={{color: '#FFF', borderColor: 'var(--default-darker-color)'}}
        >
          VIEW MORE
        </button> */}
        </form>
      </div>

    </section>
  );
}

export default GetStarted;