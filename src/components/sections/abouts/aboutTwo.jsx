import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import SectionDescription from '@/components/ui/sectionDescription';
import Kindergarden from '../../../../public/icons/kindergarden';
import SlideUp from '@/lib/animations/slideUp';
import SlideDown from '@/lib/animations/slideDown';

const AboutTwo = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
      <div className="container">
        <div className="grid xl:grid-cols-[45%_52%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
          <div className="">
            <SectionName>Who We’re Here For</SectionName>
            <Title
              size={'3.5xl'}
              className={'lg:max-w-[410px] mt-2.5'}
            >
              SCHOOLS!
            </Title>
            <SectionDescription
              className={
                'mt-5 font-normal lg:font-bold text-base lg:text-xl'
              }
            >
              School Transport Services helps schools tackle driver
              shortages and effectively address each student’s unique
              transportation needs through a flexible network of
              drivers and time-saving solutions that complement
              traditional yellow bus services.
            </SectionDescription>
            <SlideUp delay={3}>
              <div className="flex gap-8 mt-10">
                <Button
                  asChild
                  size="lg"
                  variant="pill"
                  className="bg-primary border-primary hover:text-primary-foreground"
                >
                  <Link href={'/schools'}>Read More</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="pill"
                  className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary"
                >
                  <Link href={'/contact-us'}>Contact Us</Link>
                </Button>
              </div>
            </SlideUp>
          </div>
          <div className="flex items-center lg:gap-7.5 gap-5">
            <div className="flex flex-col lg:gap-7.5 gap-5 w-full sm:w-auto">
              <div
                className="bg-warm border-b-4 border-green rounded-tr-[64px] rounded-tl-[64px] md:px-12.5 px-7.5 sm:py-15 py-10 flex items-center justify-center gap-10 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <Kindergarden height="60" width="60" />
                <div>
                  <h3 className="text-[32px] font-bold leading-[130%]">
                    100+
                  </h3>
                  <p>School Districts</p>
                </div>
              </div>
              <SlideUp>
                <Image
                  src={'/images/about/about-2.png'}
                  width={300}
                  height={287}
                  alt="img-1"
                />
              </SlideUp>
            </div>
            <SlideDown>
              <div className="hidden md:block">
                <Image
                  src={'/images/about/about-3.png'}
                  width={300}
                  height={496}
                  alt="img-2"
                />
              </div>
            </SlideDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
