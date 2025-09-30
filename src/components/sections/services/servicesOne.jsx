'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import ServiceCardOne from './serviceCardOne';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { servicesDataOne } from '@/lib/fackdata/servicesDataOne';
import SectionDescription from '@/components/ui/sectionDescription';

const ServicesOne = () => {
  const pagination = {
    clickable: true,
    el: '.service-pagination',
  };
  return (
    <section className="pt-15 pb-15 relative bg-warm lg:bg-transparent services">
      <div className="container">
        <div className="relative after:absolute after:right-0 after:top-0 after:lg:bg-warm after:bg-transparent after:w-[calc(100%-279px)] after:h-[calc(100%-120px)] after:rounded-[10px] after:z-[-1]">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center">
            <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[30%]">
              <Title size={'3.5xl'}>
                The School Transport Services Difference
              </Title>
            </div>
            <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[50%] p-5">
              <SectionDescription className="font-normal lg:font-bold text-base lg:text-xl">
                Ensuring safe and dependable student transportation
                designed around each student’s unique needs.{' '}
              </SectionDescription>
            </div>
          </div>
          <div className="lg:flex justify-between">
            <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[15%]">
              <div className="relative lg:mt-7.5 mt-5">
                <div className="service-pagination"></div>
              </div>
            </div>
            <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[75%] mt-6 lg:mt-0">
              <div className="flex flex-col lg:flex-row gap-2 p-2">
                {servicesDataOne.map(
                  ({ id, service_details, service_name, src }) => (
                    <div key={id}>
                      <ServiceCardOne
                        service_details={service_details}
                        service_name={service_name}
                        src={src}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- shap start --> */}
      <div className="absolute left-4 bottom-3 animate-left-right sm:block hidden">
        <img
          src={'/images/shapes/man.png'}
          width={138}
          height={221}
          alt="img"
        />
      </div>
      {/* <!-- shap end --> */}
    </section>
  );
};

export default ServicesOne;
