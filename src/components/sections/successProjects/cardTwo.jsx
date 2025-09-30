'use client';
import React from 'react';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

const CardTwo = ({ icon, title, text, color }) => {
  return (
    <div className="bg-background shadow-3xl rounded-[10px] lg:pl-[70px] pr-3 pl-7.5 lg:pt-[38px] pt-5 lg:pb-12 pb-5 flex justify-center md:justify-normal items-center gap-10 ">
      <i className={cn('text-destructive-foreground', color)}>
        {icon}
      </i>
      <div>
        <h2 className="lg:text-[30px] text-3xl font-bold leading-[117%] counter">
          {title}
        </h2>
        <h6 className="mt-4 leading-[130%]">{text}</h6>
      </div>
    </div>
  );
};

export default CardTwo;
