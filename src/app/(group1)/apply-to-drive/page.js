import React from 'react';
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo';
import PageTitle from '@/components/sections/pageTitle';
import ServicesTwo from '@/components/sections/services/servicesTwo';
import ApplyToDriveHero from '@/components/sections/sectionHeros/applyToDriveHero';
import Pricing from '@/components/sections/pricing';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';
import ExtraCurricular from '@/components/sections/extraCurricular';
import BlogsTwo from '@/components/sections/blogs/blogsTwo';
import FaqDrivers from '@/components/sections/faqDrivers';

export const metadata = {
  title:
    'Ascent - Chindcare & Kids School Next.js Template || Services',
  description:
    'Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template',
};

const ApplyToDrive = () => {
  return (
    <main>
      <PageTitle
        pageName={'Apply To Drive'}
        breadcrumbCurrent={'Apply To Drive'}
      />
      <ApplyToDriveHero />
      <ExtraCurricular />
      <BlogsTwo />
      <FaqDrivers />
    </main>
  );
};

export default ApplyToDrive;
