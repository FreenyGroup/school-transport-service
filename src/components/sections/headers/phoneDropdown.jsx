import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

const PhoneDropdown = () => {
  return (
    <Menu
      as="div"
      className="relative lg:hidden text-cream-foreground items-center gap-4"
    >
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
        <FaPhone />
      </MenuButton>

      <MenuItems
        transition
        className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="tel:571453185"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              (571) 453-1850
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="tel:5712450806"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              (571) 245-0806
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default PhoneDropdown;
