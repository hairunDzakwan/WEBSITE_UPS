import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import telkomLogo from '@/app/public/telkom-school-logo-white 1.png';
import logo from '@/app/public/telkom-school-logo-white 1.png';

export default function PesananPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
       {/* HEADER */}
       <header className="z-20 border-b-2 border-black bg-red-900 flex items-center py-5 px-5 shadow-xl">
        {/* Logo UPS */}
        <Link href="/daftar">
          <h1 className="text-2xl text-white font-bold">UPS</h1>
        </Link>

        {/* Separator */}
        <div className="mx-2 ml-5 bg-white h-14 w-0.5 opacity-50"></div>

        {/* Navbar Title */}
        <div className="ml-3">
          <h1 className="text-white text-2xl font-semibold">Pusat Penjual</h1>
        </div>

        {/* Telkom Logo */}
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </header>

      <div className="flex flex-1">
       {/* SIDEBAR */}
<aside className="w-64 bg-white border-r border-gray-200 p-4 shadow-xl">
  <h2 className="text-lg font-semibold mb-2">Akun Saya</h2>
  <ul className="space-y-2">
    <li>
      <Link href="/profil" className="block p-2 rounded hover:bg-gray-100">Profil</Link>
    </li>
    <li>
      <Link href="#" className="block p-2 rounded hover:bg-gray-100">Pesanan Saya</Link>
    </li>
    <li>
      <Link href="#" className="block p-2 rounded hover:bg-gray-100">Keluar</Link>
    </li>
  </ul>
</aside>

<main className="flex-1 p-8 flex justify-center">
          <section className="bg-white p-8 rounded-md shadow-xl max-w-full w-full flex">
          <main className="flex-1 p-5">
          {/* Search Bar */}
          <div className="bg-gray-200 p-3 rounded-lg flex items-center mb-5">
            <input
              type="text"
              placeholder="Kamu bisa cari dengan nama pesanan/nama produk..."
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Tab Pesanan */}
          <div className="flex border-b mb-5">
            {["Semua", "Belum Bayar", "Selesai", "Dibatalkan"].map((tab, index) => (
              <button
                key={index}
                className={`py-3 px-5 font-semibold ${
                  index === 0 ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pesanan Kosong */}
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-24 h-24 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
              </svg>
            </div>
            <p className="text-gray-600 mt-3 text-lg">Belum ada pesanan</p>
          </div>
        </main>
          </section>
        </main>
        {/* MAIN CONTENT */}
       
      </div>

      
    </div>
  );
}