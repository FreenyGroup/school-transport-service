'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from 'react-icons/fa6';

import Input from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

import { useState } from 'react';
import FormSelector from '@/components/sections/contact/formSelector';
import DistrictPublicForm from '@/components/sections/contact/districtPublicForm';
import CharterForm from '@/components/sections/contact/charterForm';
import PrivateForm from '@/components/sections/contact/privateForm';
import OtherForm from '@/components/sections/contact/otherForm';

const ContactForm = () => {
  const [selectedForm, setSelectedForm] = useState('');

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
  };
  return (
    <section className="lg:pt-15 lg;pb-15 pb-10 pt-10">
      <div className="container">
        <div className="max-w-[639px] mx-auto text-center">
          <SectionName>Get A Free Quote</SectionName>
          <Title size={'3.5xl'}>
            Work at a school, district or organization with unique
            transportation needs?
          </Title>
        </div>
        <div className="mt-15">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7.5">
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 h-full flex flex-col justify-between">
                <div className="mt-[68px] sm:w-full w-40 animate-up-down">
                  <Image
                    src={'/images/contact/contact-2.png'}
                    width={241}
                    height={241}
                    alt="two-girls-img"
                  />
                </div>
                <div className="bg-primary px-5 py-[18px] rounded-[10px] flex items-center gap-5 mb-7.5 animate-left-right">
                  <div>
                    <Image
                      src={'/images/contact/winner.svg'}
                      width={65}
                      height={65}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4 className="text-[28px] font-bold text-cream-foreground leading-[148%] font-nunito">
                      2k+
                    </h4>
                    <h6 className="text-xl font-bold text-cream-foreground mt-[5px] leading-[130%]">
                      Students Safely Transported
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-end justify-center">
                <Image
                  src={'/images/contact/contact-1.png'}
                  width={539}
                  height={464}
                  alt="img"
                />
              </div>
            </div>
            <div>
              <FormSelector onSelectForm={handleFormSelection} />

              {selectedForm === 'district-public' && (
                <DistrictPublicForm />
              )}
              {selectedForm === 'charter' && <CharterForm />}
              {selectedForm === 'private' && <PrivateForm />}
              {selectedForm === 'other' && <OtherForm />}
              {selectedForm === '' && (
                <p className="text-gray-600 mt-4">
                  Please select a form type from the dropdown.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
