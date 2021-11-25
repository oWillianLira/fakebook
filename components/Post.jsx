import Image from 'next/image';

import { ChatAltIcon, ChatIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

export default function Post({ name, message, email, image, postMedia, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <section className="flex items-center space-x-2">
          <img className="rounded-full" src={image} alt={`${name}'s profile picture`} width={40} height={40} />
          <address>
            <p className="font-medium not-italic">{name}</p>
            <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
          </address>
        </section>

        <p className="pt-4">{message}</p>
      </div>

      {postMedia ? (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postMedia} objectFit="contain" layout="fill" />
        </div>
      ) : null}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <span className="text-xs sm:text-base">Like</span>
        </div>
        <div className="inputIcon rounded-none">
          <ChatIcon className="h-4" />
          <span className="text-xs sm:text-base">Comment</span>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <span className="text-xs sm:text-base">Share</span>
        </div>
      </div>
    </div>
  );
}
