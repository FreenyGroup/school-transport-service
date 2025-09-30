import React from 'react';
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo';
import PageTitle from '@/components/sections/pageTitle';
import ServicesTwo from '@/components/sections/services/servicesTwo';
import SupplementalTransportationHero from '@/components/sections/sectionHeros/supplementalTransportationHero';
import Pricing from '@/components/sections/pricing';
import AboutThree from '@/components/sections/abouts/aboutThree';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';
import AgeTwo from '@/components/sections/studentsAge/ageTwo';

export const metadata = {
  title:
    'Ascent - Chindcare & Kids School Next.js Template || Services',
  description:
    'Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template',
};

const SupplementalTransportation = () => {
  return (
    <main>
      <PageTitle
        pageName={'Supportive Student Transportation'}
        breadcrumbCurrent={'Supportive Student Transportation'}
      />
      <SupplementalTransportationHero />
      <AboutThree gridClass={'lg:grid-cols-2'} isAboutpage={true} />
      <SuccessProjectOne />
      <AgeTwo />
    </main>
  );
};

export default SupplementalTransportation;
