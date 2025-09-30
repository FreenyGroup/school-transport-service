import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Title from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import SectionName from '@/components/ui/sectionName';
import SlideUp from '@/lib/animations/slideUp';
import SectionDescription from '@/components/ui/sectionDescription';
import { cn } from '@/lib/utils';

const AboutThree = ({ gridClass, isAboutpage }) => {
  // 'gridClass' and 'isAboutpage' props come frome about-us and home-1 page
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div
          className={cn(
            'grid lg:grid-cols-[60%_40%] grid-cols-1 items-center',
            gridClass
          )}
        >
          <div className="relative">
            <div className="flex sm:flex-row flex-col sm:items-end gap-6">
              <SlideUp>
                <div className="relative">
                  <div>
                    <Image
                      src={'/images/about/shap-1.png'}
                      width={61}
                      height={47}
                      alt="shap"
                    />
                  </div>
                  <div className="ml-9">
                    <Image
                      src={'/images/about/about-1.png'}
                      width={320}
                      height={417}
                      alt="about-bg"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute -bottom-12.5 left-0 bg-primary rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                    <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                      <Image
                        src={'/images/about/customer.png'}
                        width={37}
                        height={24}
                        alt="customer"
                      />
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
          {/* <!-- right side start --> */}
          <div
            className={`${
              isAboutpage ? '' : 'lg:max-w-[439px]'
            } pt-7.5`}
          >
            <Title size={'3.5xl'} className={'pb-5'}>
              Trusted Care Drivers
            </Title>
            <SectionDescription
              className={('font-semibold', 'md:text-xl')}
            >
              School Transport Services connects schools with the
              largest and safest community of mobile caregivers. Our
              drivers undergo thorough background checks, possess a
              minimum of five years’ caregiving experience, and
              receive specialized training in best practices for
              supporting diverse populations.
            </SectionDescription>
            <div className="lg:mt-10 mt-7">
              <Button asChild variant="outline">
                <Link href="/contact-us">Get In Touch</Link>
              </Button>
            </div>
          </div>
          {/* <!-- right side end --> */}
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
