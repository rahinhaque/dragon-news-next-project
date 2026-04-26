import React from 'react';
import notFound from '../assets/404-not-found-t.jpg'
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Original Size Image */}
      <Image 
        src={notFound} 
        alt='Page not found' 
        priority
        className="max-w-full h-auto"
      />

      {/* Button below the pic */}
      <Link 
        href="/" 
        className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-all duration-300 shadow-lg"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;