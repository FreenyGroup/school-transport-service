// components/FormA.jsx
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
  return (
    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
      <h3 className="text-[28px] font-bold leading-[148%] font-nunito">
        Send A message
      </h3>
      <form name="contact" method="post" className="mt-7">
        <input
          type="hidden"
          name="form-name"
          value="interested_driver"
        />
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
          <div className="relative">
            <Input
              type={'text'}
              placeholder={'First Name'}
              name="first-name"
              id="first_name"
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor="first_Name"
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              {' '}
            </label>
          </div>
          <div className="relative">
            <Input
              type={'text'}
              placeholder={'Last Name'}
              name="last-name"
              id="last_name"
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor="last_Name"
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
            name="email"
            id="email"
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
            name="phone"
            id="phone"
            className={
              'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
            }
          />
          <label
            htmlFor="phone"
            className="absolute right-5 top-[15px]"
          >
            {' '}
            <FaPhone />
          </label>
        </div>
        <Button
          variant="pill"
          className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5"
        >
          Send Now
        </Button>
      </form>
    </div>
  );
}
