import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import PhoneDropdown from './phoneDropdown';

const TopHeader = () => {
  return (
    <div id="top-header" className="bg-destructive">
      <div className="container hidden lg:block">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
          <div>
            <ul className="flex gap-7.5">
              <li className="text-cream-foreground flex items-center gap-4">
                <FaPhone />{' '}
                <a href="tel:5714531850">(571) 453-1850</a>
              </li>
              <li className="text-cream-foreground flex items-center gap-4">
                <FaPhone />{' '}
                <a href="tel:5712450806">(571) 245-0806</a>
              </li>
              <li className="text-cream-foreground flex items-center gap-4">
                <FaEnvelope />{' '}
                <a href="mailto:info@schooltransportservices.com">
                  info@schooltransportservices.com
                </a>
              </li>
              <li className="text-cream-foreground flex items-center gap-4">
                <FaLocationDot />{' '}
                <span>308 Hillwood Ave., Falls Church, VA 22046</span>
              </li>
            </ul>
          </div>
          {/*
          <div>
            <SocalIcons className={'text-xs'} />
          </div>
          */}
        </div>
      </div>
      <div className="container lg:hidden">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
          <div>
            <ul className="flex gap-7.5">
              <li className="hidden lg:flex text-cream-foreground items-center gap-4">
                <FaPhone />{' '}
                <a href="tel:5714531850">(571) 453-1850</a>
              </li>
              <li className="hidden lg:flex text-cream-foreground items-center gap-4">
                <FaPhone />{' '}
                <a href="tel:5712450806">(571) 245-0806</a>
              </li>
              <li>
                <PhoneDropdown />
              </li>
              <li className="text-cream-foreground flex items-center gap-4">
                <FaLocationDot />{' '}
                <span>308 Hillwood Ave., Falls Church, VA 22046</span>
              </li>
            </ul>
          </div>
          {/*
          <div>
            <SocalIcons className={'text-xs'} />
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
