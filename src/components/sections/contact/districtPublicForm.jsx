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
import ActualForm from './actualForm';

export default function DistrictPublicForm() {
  return (
    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
      <h3 className="text-[28px] font-bold leading-[148%] font-nunito">
        Public School / School District
      </h3>
      <ActualForm />
    </div>
  );
}
