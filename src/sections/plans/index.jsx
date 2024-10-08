import React from 'react';
import ServiceCard from '../../components/services-card';
import CTAButton from '../../components/cta-button';

function Plans() {

  return (
    <section className="
      py-16 mt-12 w-full max-w-[1200] mx-auto rounded-3xl bg-white
      lg:w-[80%]
    ">
      <h1
        className="
          mb-8 text-3xl px-4
          lg:text-5xl lg:leading-[1.3] lg:max-w-[900px] lg:mx-auto lg:mb-32
        ">CHOOSE A PACKAGE ACCORDING TO YOUR NEEDS</h1>
      
      <div
        className="
          relative h-[1200px] mt-52 w-full bg-primary flex flex-col justify-center items-center gap-8 rounded-3xl border-2 border-solid dark-border
          lg:mt-60 lg:h-[340px]
        ">
        <div
          className="
            absolute flex flex-col justify-center items-center gap-16
            lg:flex-row lg:gap-0 lg:items-start lg:-top-40
        ">
          <div
            className="
              flex flex-col gap-4 items-center
              lg:w-[330px]
            ">
            <ServiceCard 
              title="Basic"
              services={["Single Post Package", "Story Package", "Collaboration Package"]}
              price={"$56"}
            />
            <CTAButton
              text="GET NOW"
              style={{backgroundColor: 'var(--background-color)', borderColor: 'var(--default-darker-color)'}}
            />
          </div>

          <div
            className="flex flex-col gap-4 items-center
            lg:w-[330px]
          ">
            <ServiceCard 
              title="Basic"
              services={["6 Post Package", "Story Package", "Collaboration Package", "Free Second Week"]}
              price={"$120"}
              dark={true}
            />
            <CTAButton
              text="GET NOW"
              style={{backgroundColor: 'var(--default-darker-color)', borderColor: 'var(--background-color)', color: 'var(--background-color)' }}
            />
          </div>

          <div
            className="flex flex-col gap-4 items-center
            lg:w-[330px]
          ">
            <ServiceCard 
              title="Basic"
              services={["12 Post Package", "12 Post Package", "Collaboration Package","Free Second Week"]}
              price={"$56"}
            />
            <CTAButton
              text="GET NOW"
              style={{backgroundColor: 'var(--background-color)', borderColor: 'var(--default-darker-color)'}}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Plans;