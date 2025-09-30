import React from 'react';
import CardTwo from './cardTwo';
import Solution from '../../../../public/icons/solution';
import Safety from '../../../../public/icons/safety';
import Equity from '../../../../public/icons/equity';
import Kindergarden from '../../../../public/icons/kindergarden';
import Smart from '../../../../public/icons/smart';
import Hotline from '../../../../public/icons/hotline';
import Title from '../../ui/title';

const SuccessProjectTwo = () => {
  return (
    <div className="lg:pt-15 lg:pb-15 pt-10 pb-10">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:pb-15 pb-10">
          <div className="lg:max-w-[410px]">
            <Title size={'3.5xl'}>
              Why Choose School Transport Services
            </Title>
          </div>
          <p className="lg:max-w-[410px]">
            Trusted by over 10,000 schools, we provide transportation
            solutions that adapt to the needs of every student and
            staff member.
          </p>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-7.5">
          <CardTwo
            icon={<Solution width="60" height="60" />}
            text={
              "Whether you're facing driver shortages, route disruptions, or unique student needs, we offer flexible, on-demand transportation that supplements your existing fleet and keeps students moving."
            }
            title={'Flexible Solutions That Fill the Gaps'}
          />
          <CardTwo
            icon={<Safety width="60" height="60" />}
            color={'text-secondary-foreground'}
            text={
              'From comprehensive driver vetting to real-time ride tracking and strict safety protocols, every part of our service is built with student safety in mind — because nothing matters more.'
            }
            title={'Safety is Our Top Priority'}
          />
          <CardTwo
            icon={<Equity width="60" height="60" />}
            color={'text-primary-foreground'}
            text={
              'We specialize in transporting students who need extra support, including those experiencing homelessness, in foster care, with IEPs, or attending charter and alternative schools.'
            }
            title={'Equity-Driven Transportation for All Students'}
          />
          <CardTwo
            icon={<Kindergarden width="60" height="60" />}
            color={'text-green-foreground'}
            text={
              'Our team works hand-in-hand with school staff to coordinate transportation logistics, reduce administrative load, and ensure every student gets where they need to be — reliably and on time.'
            }
            title={'Seamless Coordination with Schools & Districts'}
          />
          <CardTwo
            icon={<Smart width="60" height="60" />}
            text={
              'Our services grow with your needs. Whether it’s a single student or an entire program, we adapt quickly and use efficient routing strategies to optimize resources and reduce costs.'
            }
            title={'Smart, Scalable Operations'}
          />
          <CardTwo
            icon={<Hotline width="60" height="60" />}
            color={'text-secondary-foreground'}
            text={
              'Transportation doesn’t stop after school hours. Our 24/7 emergency hotline and responsive support team ensure that students, families, and school partners always have someone to call.'
            }
            title={'24/7 Support When You Need It Most'}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessProjectTwo;
