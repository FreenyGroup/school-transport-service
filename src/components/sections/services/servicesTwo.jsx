import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo';
import React from 'react';
import ServiceCardTwo from './serviceCardTwo';
import Title from '@/components/ui/title';

const ServicesTwo = () => {
  return (
    <div className="lg:pb-15 pb-10 pt-5">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:pb-15 pb-10">
          <div className="lg:max-w-[410px]">
            <Title size={'3.5xl'}>
              Why Schools Choose School Transport Services
            </Title>
          </div>
          <p className="lg:max-w-[410px]">
            School Transport Services supports over 10,000 schools,
            providing transportation solutions that are designed to
            meet the needs of staff and students.
          </p>
        </div>
        <div className="lg:pl-11">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
            {servicesDataTwo.map(
              ({ icon, id, service_details, service_name }) => (
                <ServiceCardTwo
                  key={id}
                  icon={icon}
                  service_name={service_name}
                  service_details={service_details}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;
