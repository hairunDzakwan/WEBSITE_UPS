'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import Navbar from '@/app/public/telkom-school-logo-white 1.png';
import Cart from '@/app/public/mdi_cart-outline.png';
import User from '@/app/public/Group.png';
import back from '@/app/public/ep_back.png';

import home from '@/app/public/ic_baseline-home.png';
import garis from '@/app/public/Line 3.png';

import bajulk from '@/app/public/Frame 190.png';
import almet from '@/app/public/almet.png';
import putih from '@/app/public/putih.png';
import batik from '@/app/public/batik.png';
import prakter from '@/app/public/praktek.png';
import pramuka from '@/app/public/pramuka.png';
import olahraga33 from '@/app/public/olahraga33.png';
import olahraga32 from '@/app/public/olahraga32.png';

import styles from '@/app/choose_bajulk/styles.module.css';

function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b-2 border-black bg-maroon flex items-center  px-5">
          {/* Home Icon */}
          <Link href="/daftar">
            <Image src={home} alt="home" width={40} quality={100} className="mr-2 mt-2" />
          </Link>

          {/* Separator */}
          <div className="mx-2">
            <Image src={garis} alt="garis" width={0.7} height={40} quality={100} className="opacity-50" />
          </div>

          {/* Navbar Logo */}
          <div className="ml-3 py-6">
            <Image src={Navbar} alt="logo" width={180} quality={100} />
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center items-center">
            
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
<div className='pt-[100px]'>

      {/* Back button */}
      <div className="px-5 py-5">
        <Link href="/choose_bajuCwoCwe">
          <Image src={back} alt="back" width={35} className="cursor-pointer" />
        </Link>
      </div>

      {/* Content */}
      <div className="px-4 pb-10">
        <div className="flex flex-col lg:flex-row justify-center  gap-8">
          <Link href="/choose_bajulk">
            <Image src={bajulk} alt="baju lk" width={500} />
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 lg:mt-0">
            <Link href="/produk/8">
              <Image src={almet} alt="almet" width={300} className="w-full " />
            </Link>
            <Link href="/produk/9">
              <Image src={putih} alt="putih" width={300} className="w-full" />
            </Link>
            <Link href="/produk/10">
              <Image src={batik} alt="batik" width={300} className="w-full" />
            </Link>
            <Link href="/produk/13">
              <Image src={prakter} alt="praktek" width={300} className="w-full" />
            </Link>
            <Link href="/produk/11">
              <Image src={pramuka} alt="pramuka" width={300} className="w-full" />
            </Link>
            <Link href="/produk/14">
              <Image src={olahraga33} alt="olahraga33" width={300} className="w-full" />
            </Link>
            <Link href="/produk/12">
              <Image src={olahraga32} alt="olahraga32" width={300} className="w-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default Page;
