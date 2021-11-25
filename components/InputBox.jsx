import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import firebase from 'firebase';

import { useSession } from 'next-auth/client';
import Image from 'next/image';

import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

export default function InputBox() {
  const [session] = useSession();

  const inputRef = useRef(null);

  const filePickerRef = useRef(null);
  const [postMedia, setPostMedia] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (postMedia) {
          const uploadTask = storage.ref(`posts/${doc.id}`).putString(postMedia, 'data_url');

          removePostMedia();

          uploadTask.on(
            'state_change',
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref(`posts`)
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection('posts').doc(doc.id).set(
                    {
                      postMedia: url,
                    },
                    { merge: true },
                  );
                });
            },
          );
        }
      });

    inputRef.current.value = '';
  };

  const addPostMedia = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      setPostMedia(readerEvent.target.result);
    };
  };

  const removePostMedia = () => {
    setPostMedia(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-600 font-medium mt-6">
      <div className="flex items-center space-x-4 p-4">
        <Image className="rounded-full" src={session.user.image} width={30} height={30} layout="fixed" />
        <form className="flex flex-1">
          <input // Change it to textarea
            type="text"
            ref={inputRef}
            placeholder={`What's up, ${session.user.name}?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none focus:bg-gray-200"
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {postMedia && (
          <div
            className="flex flex-col cursor-pointer filter hover:brightness-110 transition duration-150 transform hover:scale-105"
            onClick={removePostMedia}
          >
            <img
              src={postMedia}
              className="h-10 object-contain"
              alt={`Media file attached for a post from ${session.user.name}`}
            />
            <small className="text-sm text-red-600 text-center">Remove</small>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-600" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon" onClick={() => filePickerRef.current.click()}>
          <CameraIcon className="h-7 text-green-600" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input hidden type="file" ref={filePickerRef} onChange={addPostMedia} />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-600" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
