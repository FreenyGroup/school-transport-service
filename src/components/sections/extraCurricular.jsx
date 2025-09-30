import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { extraCurricularData } from '@/lib/fackdata/extraCurricularData';

import Schedule from '../../../public/icons/schedule';
import Community from '../../../public/icons/community';
import Earnings from '../../../public/icons/earnings';
import Training from '../../../public/icons/training';

import SectionName from '../ui/sectionName';
import Title from '../ui/title';
import SlideUp from '@/lib/animations/slideUp';

const ExtraCurricular = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Title
            size={'3.5xl'}
            className={'mt-2.5 text-center max-w-[514px]'}
          >
            Why Drive with School Transport Services?
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {extraCurricularData.map(({ desc, id, title, icon }) => (
              <Card
                key={id}
                id={id}
                desc={desc}
                title={title}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] 2xl:w-auto w-96 hidden xl:block">
        <Image
          src={'/images/shapes/class-j.png'}
          width={471}
          height={496}
          alt="img"
        />
      </div>
    </section>
  );
};

export default ExtraCurricular;

const Card = ({ title, desc, icon, id }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'schedule':
        return (
          <i className=" text-[#0A6375] opacity-50">
            <Schedule />
          </i>
        );
      case 'earnings':
        return (
          <i className=" text-primary-foreground opacity-50">
            <Earnings />
          </i>
        );
      case 'communtiy':
        return (
          <i className=" text-primary-foreground opacity-50">
            <Community />
          </i>
        );
      case 'training':
        return (
          <i className=" text-green-foreground opacity-50">
            <Training />
          </i>
        );

      default:
        break;
    }
  };

  return (
    <SlideUp delay={id}>
      <div className="border border-[#F2F2F2] bg-background rounded-[10px] p-7.5 group/card layer-card h-full">
        <div className="pt-7.5">
          <div className="lg:pb-7.5 pb-5 flex justify-between items-center">
            {renderIcon(icon)}
          </div>
          <h4>
            <Link
              href="/service-details"
              className="lg:text-2xl text-xl font-semibold lg:leading-[140%] group-hover/card:text-destructive-foreground transition-all duration-500"
            >
              {title}
            </Link>
          </h4>
          <p className="pt-2">{desc}</p>
        </div>
      </div>
    </SlideUp>
  );
};
