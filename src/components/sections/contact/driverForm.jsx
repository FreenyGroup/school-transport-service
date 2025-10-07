'use client';
// components/FormA.jsx
import { useState, useRef } from 'react';

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

export default function DriverForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus('ok');
        formRef.current?.reset();
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };
  return (
    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
      <h3 className="text-[28px] font-bold leading-[148%] font-nunito">
        Send A message
      </h3>
      {status === 'ok' && (
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">Our privacy policy has changed</p>
              <p class="text-sm">
                Make sure you know how these changes affect you.
              </p>
            </div>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Holy smokes!</strong>
          <span class="block sm:inline">
            Something seriously bad happened.
          </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <form
        name="contact2"
        ref={formRef}
        onSubmit={handleFormSubmit}
        className="mt-7"
      >
        <input type="hidden" name="form-name" value="contact2" />
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
          <div className="relative">
            <Input
              type={'text'}
              placeholder={'First Name'}
              name={'first_name'}
              id={'first_name'}
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor="first_name"
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              {' '}
            </label>
          </div>
          <div className="relative">
            <Input
              type={'text'}
              placeholder={'Last Name'}
              name={'last_name'}
              id={'last_name'}
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor="last_name"
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              {' '}
            </label>
          </div>
        </div>
        <div className="relative mt-5">
          <Input
            type={'email'}
            placeholder={'Email'}
            name={'email'}
            id={'email'}
            className={
              'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
            }
          />
          <label
            htmlFor="email"
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            <FaEnvelope />
          </label>
        </div>
        <div className="relative mt-5">
          <Input
            type={'tel'}
            placeholder={'Phone Number'}
            name={'phone_number'}
            id={'phone_number'}
            className={
              'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
            }
          />
          <label
            htmlFor="phone_number"
            className="absolute right-5 top-[15px] -translate-y-1/2"
          >
            {' '}
            <FaPhone />
          </label>
        </div>
        <Button
          variant="pill"
          className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5"
          type="submit"
        >
          Send Now
        </Button>
      </form>
    </div>
  );
}
