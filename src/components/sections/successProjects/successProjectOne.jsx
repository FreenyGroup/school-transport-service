import React from 'react';
import Link from 'next/link';
import SectionDescription from '@/components/ui/sectionDescription';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import { Button } from '@/components/ui/button';

import Kindergarden from '../../../../public/icons/kindergarden';
import Car from '../../../../public/icons/car';
import Road from '../../../../public/icons/road';
import CardOne from './cardOne';

const SuccessProjectOne = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">
          <div className="lg:max-w-[600px]">
            <Title size={'3.5xl'} className={'lg:max-w-[410px] pb-5'}>
              The Premier Provider of Supplemental School
              Transportation Services
            </Title>
            <SectionDescription>
              {' '}
              School districts nationwide trust us to tackle their
              toughest challenges, with safety, equity, and care at
              the heart of everything we do.
            </SectionDescription>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 flex-grow gap-7.5">
              <CardOne
                icon={<Kindergarden />}
                color={'bg-green'}
                number={'10k'}
                title={'Shools Helped'}
              />
              <CardOne
                icon={<Car />}
                color={'bg-destructive'}
                number={'5M+'}
                title={'Rides Completed'}
              />
            </div>
            <div className="pt-4">
              <CardOne
                icon={<Road />}
                color={'bg-primary'}
                number={'95M+'}
                title={'Safe Miles Driven'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessProjectOne;
