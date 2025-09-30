'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SectionName from '../ui/sectionName';
import Title from '../ui/title';
import Rating from '../ui/rating';
import { testimonialData } from '@/lib/fackdata/testimonialData';
import user_1 from '../../../public/images/testimonial/user-1.png';

const HowWeHelpSchools = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 testimonial">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:pb-15 pb-10">
          <div className="lg:max-w-[410px]">
            <Title size={'3.5xl'}>How We Help</Title>
          </div>
          <p className="lg:max-w-[410px]">
            Solving the toughest student transportation challenges
            with an unwavering commitment to safety, equity, and care.
          </p>
        </div>
        <div className="relative w-full h-full after:absolute after:left-0 after:top-0 after:lg:max-w-[calc(100%-410px)] after:md:max-w-[calc(100%-310px)] after:max-w-[calc(100%-100px)] after:w-full after:h-full after:bg-howWeHelpSchools-banner after:bg-cover after:bg-no-repeat after:z-[-1]">
          <div className="py-10">
            <div className="lg:p-10 sm:p-8 py-8 sm:py-0 sm:-mr-10">
              <div className="bg-background border border-[#F2F2F2] lg:p-15 md:p-5 p-3 max-w-[630px] w-full rounded-[10px] ml-auto shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center relative z-10 lg:pb-7.5 pb-5">
                  <div className="flex items-center gap-5">
                    <div>
                      <h5 className="md:text-3xl text-2xl font-semibold md:leading-[140%]">
                        Supportive Student Transportation
                      </h5>
                    </div>
                  </div>
                </div>
                <p className="md:text-lg text-base font-semibold">
                  We help close the gaps in school transportation.
                  With a trusted team of vetted drivers and smaller
                  vehicles, we back up existing yellow bus services to
                  provide timely support wherever and whenever it’s
                  needed.{' '}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="testimonial-pagination"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSchools;
