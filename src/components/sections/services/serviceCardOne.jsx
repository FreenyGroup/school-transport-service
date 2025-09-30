import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import Mat from '../../../../public/icons/mat';
import BabyBody from '../../../../public/icons/baby-body';
import TeddyBear from '../../../../public/icons/teddy-bear';
import Hotline from '../../../../public/icons/hotline';
import Protocols from '../../../../public/icons/protocols';
import Safety from '../../../../public/icons/safety';

// import Mat from '@/public/icons/mat';
// import BabyBody from '@/public/icons/baby-body';
// import TeddyBear from '@/public/icons/teddy-bear';

const ServiceCardOne = ({ service_name, service_details, src }) => {
  const renderIcon = (src) => {
    switch (src) {
      case 'protocols':
        return <Protocols />;
      case 'safety':
        return <Safety />;
      case 'hotline':
        return <Hotline />;

      default:
        break;
    }
  };

  return (
    <div className="border-2 border-gray-300 opacity-100 visible service-card rounded-[10px] px-7.5 py-9 bg-background transition-all duration-500 hover:shadow-3xl m-2.5 group/card text-center h-full">
      <i className="text-green-foreground">{renderIcon(src)}</i>
      <h4 className="lg:max-w-[176px] mt-5">
        <Link
          href={'/service-details'}
          className="text-xl font-semibold leading-[141%] group-hover/card:text-green-foreground transition-all duration-500"
        >
          {service_name}
        </Link>
      </h4>
      <div className="card-footer transition-all duration-500 opacity-100 visible">
        <p className="mt-[15px] lg:max-w-[223px]">
          {service_details}
        </p>
      </div>
    </div>
  );
};

export default ServiceCardOne;
