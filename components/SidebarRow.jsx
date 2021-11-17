import Image from 'next/image';

export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && <Image className="rounded-full" src={src} width={24} height={24} layout="fixed" />}
      {Icon && <Icon className="h-6 w-6 text-purple-500" />}
      <p className="hidden sm:inline-flex font-medium text-gray-600">{title}</p>
    </div>
  );
}
