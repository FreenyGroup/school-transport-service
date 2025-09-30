import React from 'react';
import Image from 'next/image';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';

import ServiceCardTwo from './services/serviceCardTwo';
import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo';

const Programs = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 relative">
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <Title size={'3.5xl'} className={'lg:max-w-[630px]'}>
            Who We Support!
          </Title>
        </div>
        <div className="lg:pl-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
            {servicesDataTwo
              .slice(0, 2)
              .map(({ icon, id, service_details, service_name }) => (
                <ServiceCardTwo
                  key={id}
                  icon={icon}
                  service_name={service_name}
                  service_details={service_details}
                />
              ))}
            <div className="md:col-span-2">
              <ServiceCardTwo
                key={servicesDataTwo[2].id}
                icon={servicesDataTwo[2].icon}
                service_name={servicesDataTwo[2].service_name}
                service_details={servicesDataTwo[2].service_details}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right">
        <Image
          src={'/images/shapes/pencil-rocket.png'}
          width={341}
          height={247}
          alt="pencil"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Programs;
