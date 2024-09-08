import React from 'react';
import logo from '../../assets/images/logo.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import footerSpacer from '../../assets/images/footer-spacer.svg';
import AccordionButton from '../../components/accordion-button';

function Footer() {
  const currentYear = new Date().getFullYear();
  return(
    <footer className="relative flex flex-col pt-20 justify-center items-center">
      <img src={footerSpacer} className="absolute top-0 w-[90%]" />
      <div className="flex flex-col gap-8 justify-center items-center">
        <img src={logo} className="w-[160px]" />
        <div className="flex gap-8">
          <img src={twitter}/>
          <img src={instagram} />
          <img src={linkedin} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 my-16">
        <AccordionButton 
          title={"Influencers"}
          contentList={["Content", "About Influencers", "Performance", "Work"]}
        />

        <AccordionButton 
          title={"Service"}
          contentList={["Upgrade Rate", "Copy Writing", "Vlogging", "Publishing"]}
        />

        <AccordionButton 
          title={"Community"}
          contentList={["Influencers Form", "Sharing Session", "Meet & Greet"]}
        />

        <AccordionButton 
          title={"About"}
          contentList={["Work on", "Profile", "Performance", "Privacy"]}
        />
      </div>

      <div className="flex justify-center items-center py-8 w-[90%] mx-auto border-3 border-b-0 border-x-0 border-solid border-[var(--primay-light-color)]">
        <p className="dark-text">Resource by Blogger LandingPage <span className="text-[#3180FF] font-bold">@{currentYear}</span></p>
      </div>
    </footer>
  );
}

export default Footer;