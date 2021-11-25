import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  {
    name: 'Zack Muckenberg',
    src: 'https://links.papareact.com/snf',
  },
  {
    name: 'Nolan Must',
    src: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Josef Kisses',
    src: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Will Doors',
    src: 'https://links.papareact.com/zvy',
  },
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/l4v',
  },
  {
    name: 'Old Lady',
    src: 'https://links.papareact.com/6gg',
  },
];

export default function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-lg">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}
