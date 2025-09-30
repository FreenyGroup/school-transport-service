import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaArrowRight } from 'react-icons/fa6';
import SlideUp from '@/lib/animations/slideUp';

const CardTwo = ({ id, title, blog_desc }) => {
  return (
    <SlideUp delay={id}>
      <div className="h-full rounded-[10px] group/card layer-card bg-secondary border border-blue-500 p-5">
        <div className="pt-7.5">
          <Link
            href={'/blog-details'}
            className="inline-flex items-center gap-2.5 lg:mb-7.5 mb-4 group/btn"
          >
            <span className="group-hover/btn:ml-1 group-hover/btn:text-primary-foreground text-primary-foreground transition-all duration-500">
              <FaArrowRight />{' '}
            </span>
          </Link>
          <h2 className="max-w-[377px]">
            <Link
              href={'/blog-details'}
              className="lg:text-2xl text-xl font-semibold leading-[140%] text-warm group-hover/card:text-primary-foreground transition-all duration-500"
            >
              {title}
            </Link>
          </h2>
          <p className="mt-[15px] text-cream-foreground">
            {blog_desc}
          </p>
        </div>
      </div>
    </SlideUp>
  );
};

export default CardTwo;
