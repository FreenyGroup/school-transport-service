import React from 'react';
import Image from 'next/image';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/lib/fackdata/faqData';

const FaqComp = () => {
  return (
    <section className="lg:pb-15 pb-10 pt-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7.5">
          <div className="max-w-[528px] lg:max-w-full">
            <Title size={'3.5xl'}>School FAQs</Title>
            <p></p>
          </div>
          <div>
            <Accordion type="single" defaultValue="one" collapsible>
              {faqData.map(({ ans, id, question }) => {
                return (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0"
                  >
                    <AccordionTrigger className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground">
                      {ans}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComp;
