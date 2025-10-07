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
  const closeAlert = () => {
    const alertElement = document.getElementById('alert');
    alertElement.style.display = 'none';
  };
  return (
    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
      <h3 className="text-[28px] font-bold leading-[148%] font-nunito">
        Send A message
      </h3>
      {status === 'ok' && (
        <div
          id="alert"
          class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <svg
            class="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div class="ms-3 text-sm font-medium">
            Thank you for your interest in driving with us! Your
            message was succefully submitted, we will get back to you
            withing 48-72 hours.{' '}
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            onClick={closeAlert}
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      {status === 'error' && (
        <div
          id="alert-2"
          class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            class="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div class="ms-3 text-sm font-medium">
            Unfortunately there was an error with your submission,
            please try again later, or contact us at{' '}
            <a
              href="mailto:info@schooltransportservices.com"
              class="font-semibold underline hover:no-underline"
            >
              info@schooltransportservices.com
            </a>
            .
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
            onClick={closeAlert}
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
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
