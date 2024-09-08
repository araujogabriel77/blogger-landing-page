import React from 'react';
import ServiceCard from '../../components/services-card';
import CTAButton from '../../components/cta-button';

function Plans() {

  return (
    <div className="py-16 mt-12 w-full max-w-[1200] mx-auto rounded-3xl bg-white">
      <h1 className="mb-8 text-3xl px-4">CHOOSE A PACKAGE ACCORDING TO YOUR NEEDS</h1>
      
      <section className="relative h-[1200px] md:h-[343px] mt-52 w-full bg-primary flex flex-col justify-center items-center gap-8 rounded-3xl border-2 border-solid dark-border">
        <div className="absolute flex flex-col justify-center items-center gap-16">
          <div className="flex flex-col gap-4 items-center">
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

          <div className="flex flex-col gap-4 items-center">
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

          <div className="flex flex-col gap-4 items-center">
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
      </section>
      
    </div>
  );
}

export default Plans;