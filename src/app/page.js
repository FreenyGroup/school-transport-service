import React from 'react';
import AboutOne from '@/components/sections/abouts/aboutOne';
import HeaderOne from '@/components/sections/headers/headerOne';
import HeroOne from '@/components/sections/heros/heroOne';
import ServicesOne from '@/components/sections/services/servicesOne';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';
import Gallery from '@/components/sections/gallery/gallery';
import AgeOne from '@/components/sections/studentsAge/ageOne';
import Teams from '@/components/sections/teams/teams';
import Programs from '@/components/sections/programs';
import Testimonial from '@/components/sections/testimonial';
import BlogsOne from '@/components/sections/blogs/blogsOne';
import NewsletterOne from '@/components/sections/newsletters/newsletterOne';
import FooterOne from '@/components/sections/footers/footerOne';
import AboutTwo from '@/components/sections/abouts/aboutTwo';
import AgeTwo from '@/components/sections/studentsAge/ageTwo';
import HowWeHelpSchools from '@/components/sections/howWeHelpSchools';

export const metadata = {
  title: 'School Transport Services LLC',
  description: 'School Transport Services LLC',
};

const Home = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroOne />
        <HowWeHelpSchools />
        <ServicesOne />
        <AboutTwo />
        <Programs />
        <SuccessProjectOne />
        <AgeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default Home;
