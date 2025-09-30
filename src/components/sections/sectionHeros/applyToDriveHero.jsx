import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import SectionDescription from '@/components/ui/sectionDescription';
import SlideLeft from '@/lib/animations/slideLeft';
import DriverForm from '@/components/sections/contact/driverForm';

const ApplyToDriveHero = () => {
  return (
    <section className="lg:pb-15 pb-10">
      <div className="pt-25 min-[1800px]:pb-[179px] lg:pb-32 pb-20 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_100%)] after:w-full after:h-full after:max-h-[257px]">
        <div className="container">
          <div className="max-w-[633px] w-full h-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_50%_rgba(255,255,255,0.00)_100%)]">
            <Title size={'3.5xl'}>
              Earn Money While Making a Difference — Get Rewarded for
              Every Ride You Provide
            </Title>
            <SectionDescription
              className={
                'mt-5 xl:text-inherit text-muted-foreground font-semibold text-lg'
              }
            >
              Make a difference on your time by supporting students’
              success in your community.
            </SectionDescription>

            <div className=" mt-10 md:flex items-start gap-9">
              <DriverForm />
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 bottom-20 z-[-1] opacity-50 2xl:opacity-100 max-w-[580px] lg:max-w-[650px] xl:max-w-[750px] min-[1800px]:max-w-full">
          <SlideLeft>
            <Image
              src={'/images/banner/banner-v5-thumb.png'}
              width={1005}
              height={777}
              sizes="100vw"
              alt="banner background"
            />
          </SlideLeft>
        </div>
        <div className="absolute left-10 bottom-25 z-[-1] xl:block hidden">
          <Image
            src={'/images/shapes/kite.png'}
            width={341}
            height={195}
            alt="kite"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplyToDriveHero;
