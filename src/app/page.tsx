import React from 'react';
import Image from 'next/image';
import Foto from '@/app/public/OJI09321 1.png';
import Foto1 from '@/app/public/images15.png';
import Link from 'next/link';
import Navbar from '@/app/public/logo-telkom-schools 1.png';

function Page() {
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <div className="border-b-2 border-black">
          <div className="py-6 px-4 sm:px-10">
            <Image src={Navbar} alt="logo" width={240} quality={100} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between relative mt-10 lg:mt-0 px-4 sm:px-10 space-y-16 lg:space-y-0">
          {/* Left Images */}
          <div className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-1/2">
          <div className="relative">
              <Image
                src={Foto1}
                alt="foto1"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-60"
                width={420}
                quality={100}
                style={{ marginTop: 50 }}
              />
              <Image
                src={Foto}
                alt="foto"
                className="relative z-10 mt-16 lg:mt- lg:ml-10"
                style={{ marginTop: 118 }}
                width={800}
                quality={100}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col items-center w-full lg:w-1/2 ">
            

              {/* Submit Button */}
              <div className="text-center ">
                <Link href="/login">
                  <button
                    type="submit"
                    className="py-6 px-16 bg-red-700 text-white font-bold text-5xl rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-700"
                  >
                    MASUK
                  </button>
                </Link>
              </div>

              {/* Footer Links */}
             
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Page;
