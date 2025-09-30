import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import SectionDescription from '@/components/ui/sectionDescription';
import SlideLeft from '@/lib/animations/slideLeft';

const SafetyHero = () => {
  return (
    <section className="lg:pb-15 pb-10">
      <div className="min-[1800px]:pt-[291px] pt-48 min-[1800px]:pb-[179px] lg:pb-32 pb-20 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_100%)] after:w-full after:h-full after:max-h-[257px]">
        <div className="container">
          <div className="max-w-[633px] w-full h-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_50%_rgba(255,255,255,0.00)_100%)]">
            <Title size={'3.5xl'}>
              Raising the Bar for Safety and Transparency in Student
              Transportation
            </Title>
            <SectionDescription
              className={
                'mt-5 xl:text-inherit text-muted-foreground font-semibold text-lg'
              }
            >
              With our unwavering Safe Ride commitment and thorough
              multi-factor verification process, we use data-driven
              insights not just to meet industry standards—but to set
              new ones.
            </SectionDescription>

            <div className=" mt-10 flex items-start gap-9">
              <Button
                asChild
                size="lg"
                variant="pill"
                className="bg-primary border-primary hover:text-primary-foreground"
              >
                <Link href={'/contact-us'}>Get In Touch</Link>
              </Button>

              <Image
                src={'/images/shapes/arrow.png'}
                width={70}
                height={47}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary w-[284px] h-[284px] rounded-full opacity-30 blur-[200px]"></div>
        <div className="hidden md:block absolute right-0 bottom-0 z-[-1] opacity-50 2xl:opacity-100 max-w-[580px] lg:max-w-[650px] xl:max-w-[750px] min-[1800px]:max-w-full">
          <SlideLeft>
            <Image
              src={'/images/banner/banner-v4-thumb.png'}
              width={1005}
              height={777}
              sizes="100vw"
              alt="banner background"
            />
          </SlideLeft>
        </div>
      </div>
    </section>
  );
};

export default SafetyHero;
