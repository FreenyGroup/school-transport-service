import React from 'react';
import Link from 'next/link';
import { pricingData } from '@/lib/fackdata/pricingData';
import { FaAnglesRight, FaXmark } from 'react-icons/fa6';
import { Button } from '../ui/button';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';
import SlideUp from '@/lib/animations/slideUp';

const Pricing = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Title
            size={'3.5xl'}
            className={'mt-2.5 text-center max-w-[516px]'}
          >
            Safety Is Everything
          </Title>
          <p className="mt-2.5 text-center font-semibold md:text-xl text-base">
            School Transport Services continually innovates on safety,
            proactively and strategically implementing new technology
            and processes. We believe safety is about looking to the
            future and being proactive, innovative, and relentless.
          </p>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-7.5 gap-x-7.5 lg:gap-x-0">
            {pricingData.map(({ text, id, paln_name, is_center }) => (
              <Card
                key={id}
                id={id}
                text={text}
                plan_name={paln_name}
                is_center={is_center}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const Card = ({ plan_name, text, is_center, id }) => {
  return (
    <SlideUp delay={id}>
      <div className="rounded-[10px] shadow-[-20px_4.8px_24.4px_-6px_rgba(19,16,34,0.10)] bg-background h-full">
        <div
          className={`py-[15px] rounded-tr-[10px] rounded-tl-[10px] ${
            is_center ? 'bg-primary' : 'bg-warm'
          }`}
        >
          <p
            className={`lg:text-[28px] text-2xl font-bold text-center ${
              is_center
                ? 'text-cream-foreground'
                : 'text-muted-foreground'
            }`}
          >
            {plan_name}
          </p>
        </div>
        <div className="lg:pt-7.5 pt-6 lg:pb-10 pb-7 lg:px-10 px-5">
          <p className="font-semibold">{text}</p>
        </div>
      </div>
    </SlideUp>
  );
};
