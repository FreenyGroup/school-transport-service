import React from 'react';
import AboutOne from '@/components/sections/abouts/aboutOne';
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo';
import PageTitle from '@/components/sections/pageTitle';
import Pricing from '@/components/sections/pricing';
import Testimonial from '@/components/sections/testimonial';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';
import SuccessProjectTwo from '@/components/sections/successProjects/successProjectTwo';
import HowWeHelpSchools from '@/components/sections/howWeHelpSchools';
import AgeTwo from '@/components/sections/studentsAge/ageTwo';

export const metadata = {
  title:
    'Ascent - Chindcare & Kids School Next.js Template || About Us',
  description:
    'Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template',
};

const AboutUs = () => {
  return (
    <main>
      <PageTitle pageName={'Schools'} breadcrumbCurrent={'Schools'} />
      <AboutOne gridClass={'lg:grid-cols-2'} isAboutpage={true} />
      <SuccessProjectTwo />
      <SuccessProjectOne />
      <HowWeHelpSchools />
      <AgeTwo />
      <Pricing />
      <Testimonial />
      <NewsletterTwo />
    </main>
  );
};

export default AboutUs;
