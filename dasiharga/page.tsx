"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Counter from "@/app/components/counter";
import styles from '@/app/lakipramuka/styles.module.css';
import Navbar from "@/app/public/telkom-school-logo-white 1.png";
import Cart from "@/app/public/mdi_cart-outline.png";
import User from "@/app/public/Group.png";
import back from "@/app/public/ep_back.png";
import home from "@/app/public/ic_baseline-home.png";
import garis from "@/app/public/Line 3.png";
import toppi from '@/app/public/topiharga.png'
import dsii from '@/app/public/dasihrga.png'

function Page() {
  const [selectedSize, setSelectedSize] = useState(null); // Menyimpan ukuran yang dipilih

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Mengatur ukuran yang dipilih
  };

  return (
    <>
      <div className="h-screen">

        {/* HEADER */}
        <div className="border-b-2 border-black bg-red-900 flex items-center py-3 px-5">
          {/* Home Icon */}
          <Link href="/daftar">
            <Image src={home} alt="home" width={40} quality={100} className="mr-2" />
          </Link>

          {/* Separator */}
          <div className="mx-2">
            <Image src={garis} alt="garis" width={1} height={40} quality={100} className="opacity-50" />
          </div>

          {/* Navbar Logo */}
          <div className="ml-3">
            <Image src={Navbar} alt="logo" width={180} quality={100} />
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:block hidden">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-full py-2 px-4 w-full"
              />
              <FaSearch className="absolute top-3 right-4 fill-red-800" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 mr-6">
            <Link href='/keranjang' className="flex items-center">
              <Image src={Cart} alt="Cart" width={40} height={40} quality={100} />
            </Link>
            <Link href='/profil' className="flex items-center">
              <Image src={User} alt="User" width={38} height={38} quality={100} />
            </Link>
          </div>
        </div>

        {/* Tombol Back */}
        <Link href="/choose_topi&dasi">
          <Image 
            src={back} 
            alt="Back" 
            width={35} 
            quality={100} 
            className={styles.back} 
          />
        </Link>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row lg:pr-10  gap-5">
          {/* IMAGE */}
          <div className="flex justify-center lg:ml-16">
            <Image src={dsii} alt="DASI" width={600} quality={100} />
          </div>

          {/* DETAILS */}
          <div className="lg:ml-10 self-center px-5">
            {/* Deskripsi Pesanan */}
            <p className="text-gray-600 text-2xl font-medium">Deskripsi Pesanan</p>
            <h1 className="text-5xl font-extrabold mb-7">Dasi</h1>

            {/* Harga Pesanan */}
            <p className="text-gray-600 text-2xl font-medium">Harga Pesanan</p>
            <h1 className="text-4xl font-bold mb-7 text-red-700">Rp 20.000</h1>

            {/* Ukuran */}
            <p className="text-gray-600 text-2xl font-medium">1 Ukuran</p>


            {/* Kuantitas */}
            <p className="text-gray-600 text-2xl font-medium">Kuantitas</p>
            <Counter />
            <p className="text-gray-600 mt-5 text-xl font-medium">Tersisa 111 produk</p>

            {/* Tombol Aksi */}
            <div className="flex flex-col md:flex-row md:space-x-6 mt-8 space-y-4 md:space-y-0">
            <Link href='/keranjang' className="bg-red-700 text-white px-5 py-4 rounded-full text-2xl font-bold w-full md:w-auto hover:bg-red-800 transition duration-300">
                Masukkan Keranjang
              </Link>
              <Link href='/buatpesanan' className="bg-gray-700 text-white px-5 py-4 rounded-full text-2xl font-bold w-full md:w-auto hover:bg-gray-800 transition duration-300">
                Beli Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
