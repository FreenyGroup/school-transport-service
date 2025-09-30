import React from 'react';
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo';
import PageTitle from '@/components/sections/pageTitle';
import ServicesTwo from '@/components/sections/services/servicesTwo';
import SafetyHero from '@/components/sections/sectionHeros/safetyHero';
import Pricing from '@/components/sections/pricing';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';

export const metadata = {
  title:
    'Ascent - Chindcare & Kids School Next.js Template || Services',
  description:
    'Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template',
};

const Safety = () => {
  return (
    <main>
      <PageTitle pageName={'Safety'} breadcrumbCurrent={'Safety'} />
      <SafetyHero />
      <SuccessProjectOne />
      <Pricing />
    </main>
  );
};

export default Safety;
