import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import logo from '@/app/public/telkom-school-logo 1.png'

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="z-20 border-b-2  border-black bg-white flex items-center py-5 px-5 shadow-xl">
        {/* Logo UPS */}
        <Link href="/.">
          <h1 className="text-2xl text-red-900 font-bold">UPS</h1>
        </Link>

        {/* Separator */}
        <div className="mx-2 ml-5 bg-black h-14 w-0.5 opacity-50"></div>

        {/* Navbar Title */}
        <div className="ml-3">
          <h1 className="text-black text-2xl font-semibold">Pusat Penjual</h1>
        </div>

        {/* Telkom Logo */}
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>

      {/* SIDEBAR & MAIN CONTENT */}
      <div className="flex flex-1 ">
        {/* SIDEBAR */}
        <div className="w-64 bg-white border-r p-5 z-20 shadow-xl">
          <h3 className="text-2xl font-medium text-gray-600">Produk</h3>
          <ul className="mt-2 space-y-2">
            <Link href="/produk" className="text-gray-700 hover:text-red-900 cursor-pointer font-medium">
              Produk Saya
            </Link> 
          </ul>
          <ul className="mt-2 space-y-2">
          <Link href="/tambahproduk" className="text-gray-700 hover:text-red-900 cursor-pointer font-medium">
              Tambahkan Produk Baru
            </Link>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1  bg-gray-100 p-6 z-0">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-600">Yang perlu dilakukan</h3>
            <p className="text-gray-500">Hal-hal yang perlu kamu tangani</p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-gray-200 text-center rounded-md">
                <p className="text-xl font-bold">0</p>
                <p className="text-gray-600">Belum Bayar</p>
              </div>
              <div className="p-4 bg-gray-200 text-center rounded-md">
                <p className="text-xl font-bold">0</p>
                <p className="text-gray-600">Menunggu Respon Pembatalan</p>
              </div>
              <div className="p-4 bg-gray-200 text-center rounded-md">
                <p className="text-xl font-bold">0</p>
                <p className="text-gray-600">Produk Habis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;