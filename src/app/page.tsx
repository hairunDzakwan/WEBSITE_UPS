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
                className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-64"
                width={520}
                quality={100}
              />
              <Image
                src={Foto}
                alt="foto"
                className="relative z-10 mt-16 lg:mt-0 lg:ml-10"
                width={1200}
                quality={100}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col items-center w-full lg:w-1/2 px-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black text-center mb-10">
              Daftar
            </h1>
            <form className="w-full max-w-xl space-y-8">
              {/* No. Handphone */}
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  className="peer w-full px-6 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-lg"
                />
                <label
                  htmlFor="phone"
                  className="absolute text-gray-500 text-base duration-300 transform -translate-y-6 scale-75 top-5 left-5 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  No. Handphone
                </label>
              </div>

              {/* Username */}
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder=" "
                  className="peer w-full px-6 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-lg"
                />
                <label
                  htmlFor="username"
                  className="absolute text-gray-500 text-base duration-300 transform -translate-y-6 scale-75 top-5 left-5 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>

              {/* Kata Sandi */}
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  className="peer w-full px-6 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-lg"
                />
                <label
                  htmlFor="password"
                  className="absolute text-gray-500 text-base duration-300 transform -translate-y-6 scale-75 top-5 left-5 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Kata Sandi
                </label>
              </div>

              {/* Konfirmasi Kata Sandi */}
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder=" "
                  className="peer w-full px-6 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-lg"
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-gray-500 text-base duration-300 transform -translate-y-6 scale-75 top-5 left-5 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Konfirmasi Kata Sandi
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Link href="/daftar">
                  <button
                    type="submit"
                    className="py-4 px-14 bg-red-700 text-white font-bold text-lg rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-700"
                  >
                    DAFTAR
                  </button>
                </Link>
              </div>

              {/* Footer Links */}
              <div className="text-center text-base mt-6">
                <span>Sudah Punya Akun? </span>
                <Link href="/Login" className="text-blue-500">
                  Masuk
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
