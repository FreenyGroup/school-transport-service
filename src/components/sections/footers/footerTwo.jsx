import React from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from 'react-icons/fa6';
import Logo from '@/components/ui/logo';
import SocalIcons from '@/components/ui/socalIcons';
import CopyRight from './copyRight';
import ScrollUp from './scrollUp';
import Input from '@/components/ui/input';
import SlideUp from '@/lib/animations/slideUp';
import Image from 'next/image';

const FooterTwo = () => {
  return (
    <footer className="pt-20 bg-[#0f2c38] relative">
      <div className="container">
        <div className="grid lg:grid-cols-[300px_auto_300px] sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10 justify-between">
          <SlideUp delay={2}>
            <Logo className="text-cream-foreground" />
            <div className="mt-10">
              <p className=" text-cream-foreground opacity-80">
                Empowering schools and communities with dependable
                rides that ensure no student gets left behind."
              </p>
              {/*
              <SocalIcons
                prentClass={'gap-5 lg:pt-7.5 pt-5'}
                className={
                  'w-9 h-9 bg-[#FFFFFF1A] border-none hover:bg-green'
                }
              />
              */}
            </div>
          </SlideUp>

          <SlideUp delay={3}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-cream-foreground inline-block">
                Pages
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 min-w-[215px]">
              <li>
                <Link
                  href="/schools"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Schools
                </Link>
              </li>
              <li>
                <Link
                  href="/overview"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/supplemental-transportation"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Supportive Student Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/apply-to-drive"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Apply To Drive
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-cream-foreground">
                Contact
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>

            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5">
              <li className="text-cream-foreground flex gap-4">
                <FaLocationDot className="mt-1.5" />{' '}
                <span className="max-w-[168px]">
                  308 Hillwood Ave., Falls Church, VA 22046
                </span>
              </li>
              <li className="text-cream-foreground flex gap-4">
                <FaEnvelope className="mt-1.5" />{' '}
                <a href="mailto:info@schooltransportservices.com">
                  info@schooltransportservices.com
                </a>
              </li>
              <li className="text-cream-foreground flex gap-4">
                <FaPhone className="mt-1.5" />{' '}
                <a href="tel:5714531850">(571) 453-1850</a>
              </li>
              <li className="text-cream-foreground flex gap-4">
                <FaPhone className="mt-1.5" />{' '}
                <a href="tel:5712450806">(571) 245-0806</a>
              </li>
            </ul>
          </SlideUp>
        </div>
        <CopyRight color={'text-cream-foreground opacity-80'} />
      </div>
      <ScrollUp />
      <div>
        <div className="absolute right-[68px] top-[40%] animate-up-down">
          <Image
            src={'/images/shapes/apple.svg'}
            width={99}
            height={99}
            alt="img"
          />
        </div>
        <div className="absolute left-[45%] lg:top-1/2 top-[40%]">
          <Image
            src={'/images/shapes/scissors.svg'}
            width={77}
            height={77}
            alt="img"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
