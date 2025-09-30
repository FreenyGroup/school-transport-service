'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import SlideDown from '@/lib/animations/slideDown';

const categoryList = [
  {
    id: 1,
    label: 'McKinney-Vento',
    data_target: '1',
    text: 'Students eligible under the McKinney-Vento Homeless Assistance Act often face frequent moves, making traditional school bus transportation difficult to coordinate. School Transport Services offers quick-response rides—available with as little as six hours’ notice—ensuring these students stay connected to school without interruption.',
  },
  {
    id: 2,
    label: 'Foster Care',
    data_target: '2',
    text: 'Frequent placement changes can make stable school transportation difficult for youth in foster care. In line with the Every Student Succeeds Act (ESSA), School Transport Services offers dependable, care-focused rides that help these students maintain access to school, resources, and community—no matter where they are.',
  },
  {
    id: 3,
    label: 'Special Needs & IEPS',
    data_target: '3',
    text: 'Students with special needs may require specific accommodations outlined in their Individualized Education Programs (IEPs), such as consistent drivers, rider assistants, or wheelchair-accessible vehicles. School Transport Services delivers dependable, customized transportation to ensure every student gets to school, therapy, and appointments safely and comfortably.',
  },
  {
    id: 4,
    label: 'Charter Schools',
    data_target: '4',
    text: 'Charter schools often operate across wide geographic areas and may lack access to traditional bus routes. School Transport Services offers flexible, dependable transportation that helps charter schools ensure all students can attend school consistently—regardless of location.',
  },
  {
    id: 5,
    label: 'General Education',
    data_target: '5',
    text: 'Reliable transportation isn’t just for special circumstances. School Transport Services provides safe and consistent rides for general education students—whether it’s commuting to school, after-school programs, or appointments—helping students stay on track and giving families peace of mind.',
  },
  {
    id: 6,
    label: 'After Schools',
    data_target: '6',
    text: 'After-school programs are vital to student development, but coordinating transportation can be a challenge. School Transport Services takes the stress out of scheduling by providing safe, dependable rides to sports, clubs, tutoring, and enrichment activities.',
  },
  {
    id: 7,
    label: 'Career and Technical Edcuation',
    data_target: '7',
    text: 'Transporting students to off-site Career and Technical Education programs can be complex. School Transport Services simplifies the process with a reliable network of vetted drivers, helping schools manage varied schedules and ensuring students can access essential hands-on learning opportunities.',
  },
];
const AgeTwo = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 education">
      <div className="bg-warm lg:py-[120px] py-20 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5 items-start">
            <div className="max-w-[400px] md:max-w-full mx-auto md:order-0 order-1">
              <SlideDown delay={2}>
                <Image
                  src={'/images/age/magnifying-glass-student.png'}
                  width={600}
                  height={600}
                  sizes="100vw"
                  alt="magnifying-glass-student"
                  className="w-full h-full"
                />
              </SlideDown>
            </div>
            <div className="order-0 md:order-1">
              <Title
                size={'3.5xl'}
                className={'mt-2.5 max-w-[494px]'}
              >
                Education is the key to success Knowledge is power
              </Title>
              <ul className="py-7.5 flex items-center flex-wrap gap-5 ">
                {categoryList.map(({ data_target, id, label }) => {
                  return (
                    <li
                      key={id}
                      onClick={() => setActiveTab(data_target)}
                      className={`rounded-full py-2.5 px-5 border border-destructive active-tab cursor-pointer ${
                        activeTab === data_target
                          ? 'bg-destructive text-cream-foreground'
                          : ''
                      }`}
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
              <div className="overflow-hidden relative">
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '1'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[0].text} />
                </div>
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '2'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[1].text} />
                </div>
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '3'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[2].text} />
                </div>
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '4'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[3].text} />
                </div>
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '5'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[4].text} />
                </div>
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '6'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[5].text} />
                </div>
                <div
                  className={`transition-all duration-500 ${
                    activeTab === '7'
                      ? 'translate-y-0 visible opacity-100 relative'
                      : 'translate-y-10 invisible opacity-0 absolute'
                  }`}
                >
                  <Card text={categoryList[6].text} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeTwo;

const Card = ({ text }) => {
  return (
    <>
      <p className="text-base md:text-lg font-semibold 2xl:text-2xl 2xl:font-bold">
        {text}
      </p>
    </>
  );
};
