export default function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-purple-500 group">
      <Icon
        className={`h-5 text-gray-600 text-centersm:h-7 mx-auto group-hover:text-purple-500 ${
          active && 'text-purple-500'
        }`}
      />
    </div>
  );
}
