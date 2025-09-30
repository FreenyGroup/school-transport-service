import Input from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ActualForm() {
  return (
    <form action="#" className="mt-7">
      <div className="relative">
        <Input
          type={'email'}
          placeholder={'Your Email'}
          id="email"
          className={
            'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
          }
        />
      </div>
      <div className="relative mt-5">
        <Input
          type={'text'}
          placeholder={'First Name'}
          id="first_name"
          className={
            'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
          }
        />
      </div>
      <div className="relative mt-5">
        <Input
          type={'text'}
          placeholder={'Last Name'}
          id="last_name"
          className={
            'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
          }
        />
      </div>
      <div className="relative mt-5">
        <Input
          type={'phone'}
          placeholder={'Phone Number'}
          id="number"
          className={
            'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
          }
        />
      </div>
      <div className="relative mt-5">
        <Input
          type={'text'}
          placeholder={'Job Title'}
          id="job_title"
          className={
            'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
          }
        />
      </div>
      <div className="relative mt-5">
        <Input
          type={'text'}
          placeholder={'School/District or Organization Name'}
          id="school_distirct_organization_name"
          className={
            'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
          }
        />
      </div>

      <div className="relative mt-5">
        <textarea
          name="message"
          id="message"
          placeholder="Let us know how we can help"
          className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
        ></textarea>
      </div>
      <div className="relative mt-5">
        <textarea
          name="hear_about_us"
          id="hear_about_us"
          placeholder="Kindly take a moment to let us know how you found out about us"
          className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
        ></textarea>
      </div>
      <Button
        variant="pill"
        className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5"
      >
        Submit Request
      </Button>
    </form>
  );
}
