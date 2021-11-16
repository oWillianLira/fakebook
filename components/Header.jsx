import Image from 'next/image';

import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  return (
    <div className="flex items-center p-2 lg:px-5 shadow-md sticky top-0 z-50 bg-white">
      {/* Left */}
      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
        <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex bg-transparent flex-shrink items-center ml-2 outline-none placeholder-gray-500"
            type="text"
            placeholder="Search on Fakebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active={true} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <p className="font-semibold pr-3 whitespace-nowrap text-gray-600">Zack Muckenberg</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}
