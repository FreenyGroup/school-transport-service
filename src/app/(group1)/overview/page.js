import React from 'react';
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo';
import PageTitle from '@/components/sections/pageTitle';
import ServicesTwo from '@/components/sections/services/servicesTwo';
import HeroTwo from '@/components/sections/heros/heroTwo';
import Pricing from '@/components/sections/pricing';

export const metadata = {
  title:
    'Ascent - Chindcare & Kids School Next.js Template || Services',
  description:
    'Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template',
};

const Overview = () => {
  return (
    <main>
      <PageTitle
        pageName={'Overview'}
        breadcrumbCurrent={'Overview'}
      />
      <HeroTwo />
      <ServicesTwo />
      <Pricing />
    </main>
  );
};

export default Overview;
