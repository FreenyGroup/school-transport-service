import React from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import Link from 'next/link';
import Logo from '@/components/ui/logo';
import SocalIcons from '@/components/ui/socalIcons';
import CopyRight from './copyRight';
import ScrollUp from './scrollUp';
import SlideUp from '@/lib/animations/slideUp';

const FooterOne = () => {
  return (
    <footer className="pt-[70px] relative">
      <div className="container">
        <div className="grid lg:grid-cols-[300px_auto_300px] sm:grid-cols-2 grid-cols-1 justify-between gap-7.5">
          <SlideUp delay={2}>
            <Logo />
            <p className="pt-4">
              Empowering schools and communities with dependable rides
              that ensure no student gets left behind."
            </p>
            {/*
            <SocalIcons
              prentClass={'gap-5 pt-7.5'}
              className={
                'w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground hover:bg-green'
              }
            />
            */}
          </SlideUp>

          <SlideUp delay={3}>
            <h3 className="text-2xl font-semibold">Pages</h3>
            <ul className="flex flex-col gap-[15px] pt-5 min-w-[215px]">
              <li>
                <Link
                  href="/schools"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Schools
                </Link>
              </li>
              <li>
                <Link
                  href="/overview"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/supplemental-transportation"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Supplemential Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/apply-to-drive"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Apply To Drive
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <h3 className="text-2xl font-semibold">Contact</h3>
            <ul className="flex flex-col gap-[15px] pt-5">
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaLocationDot />
                  </span>{' '}
                  <span className="max-w-[168px]">
                    308 Hillwood Ave., Falls Church, VA 22046
                  </span>
                </p>
              </li>
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaEnvelope />
                  </span>{' '}
                  <a href="mailto:info@schooltransportservices.com">
                    info@schooltransportservices.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaPhone />
                  </span>{' '}
                  <a href="tel:5714531850">(571) 453-1850</a>
                </p>
              </li>
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaPhone />
                  </span>{' '}
                  <a href="tel:5712450806">(571) 245-0806</a>
                </p>
              </li>
            </ul>
          </SlideUp>
        </div>
        <CopyRight />
      </div>
      <ScrollUp />
    </footer>
  );
};

export default FooterOne;
