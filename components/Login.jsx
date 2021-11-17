import { signIn } from 'next-auth/client';

import Image from 'next/image';
import Logo from '../assets/images/letter-f.png';

export default function Login() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex items-center mb-10">
        <Image src={Logo} width={40} height={40} layout="fixed" />
        <h1 className="font-bold text-3xl ml-4 text-purple-600">FAKEBOOK</h1>
      </div>
      <button onClick={signIn} className="py-4 px-5 bg-blue-500 rounded-full">
        <h3 className="font-semibold text-md text-white">Login with Facebook</h3>
      </button>
    </div>
  );
}
