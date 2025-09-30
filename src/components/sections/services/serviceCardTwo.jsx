import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import Gov from '../../../../public/icons/gov';
import Family from '../../../../public/icons/family';
import Driver from '../../../../public/icons/driver';
import Coverage from '../../../../public/icons/coverage';
import Student from '../../../../public/icons/student';
import Safety from '../../../../public/icons/safety';

import SlideUp from '@/lib/animations/slideUp';

const ServiceCardTwo = ({ icon, service_name, service_details }) => {
  const RenderComponent = ({ item }) => {
    switch (item) {
      case 'gov':
        return <Gov />;
      case 'family':
        return <Family />;
      case 'driver':
        return <Driver />;
      case 'coverage':
        return <Coverage height="60" width="60" />;
      case 'student':
        return <Student height="60" width="60" />;
      case 'safety':
        return <Safety height="60" width="60" />;
      default:
        break;
    }
  };

  return (
    <SlideUp delay={2}>
      <div className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card">
        <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
          <RenderComponent item={icon} />
        </div>
        <div className="lg:pl-11 mt-4 lg:mt-0">
          <h4>
            <Link
              href="/service-details"
              className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
            >
              {service_name}
            </Link>
          </h4>
          <p className="text-base md:text-lg font-semibold lg:mt-4 mt-3">
            {service_details}
          </p>
        </div>
      </div>
    </SlideUp>
  );
};

export default ServiceCardTwo;
