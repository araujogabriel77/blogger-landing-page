import React from 'react';
import blueCheck from '../../assets/images/blue-check.svg';
import whiteCheck from '../../assets/images/white-check.svg';
import './styles.css';

function ServiceCard({title, services, price, dark}) {

  return (
    <section 
      className="
        w-[240px] flex flex-col justify-between rounded-3xl border-2 border-solid dark-border
        lg:w-[320px] lg:h-[450px] lg:rounded-[42px]
        "
      style={{backgroundColor: dark ? 'var(--default-darker-color)' : 'var(--background-color)'}}  
    >
     <p
      className="pt-8 pb-4 px-2 text-center border-solid border-b dark-border border-r-0 border-l-0 border-t-0"
      style={{color: dark ? '#FFF' : 'var(--default-darker-color)'}}
     >
       {title}
     </p>
     <ul className="flex flex-col gap-2 pl-6 mt-8 justify-center items-center">
       {services.map((service, index) => (
         <li key={index} className="flex gap-2 w-full items-start py-2">
         <img src={dark ? whiteCheck : blueCheck}/>
         <p 
          className="text-center"
          style={{color: dark ? '#FFF' : 'var(--default-darker-color)'}}
         >
           {service}
         </p>
       </li>
       ))}
     </ul>

     <div className="relative py-8 mt-8">
       <h1 
          className={`text-3xl white-price ${dark ? 'white-price' : 'default-price'}`}
          style={{color: dark ? '#FFF' : 'var(--default-darker-color)'}}
        >
          {price}
        </h1>
     </div>
    </section>
  );
}

export default ServiceCard;