import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/app/public/telkom-school-logo-white 1.png'
import Cart from '@/app/public/mdi_cart-outline.png'
import User from '@/app/public/Group.png'
import foto1 from '@/app/public/Frame 2.png'
import poster2 from '@/app/public/Group 83.png'

import logo from '@/app/public/Group 77.png'
import topi from '@/app/public/Group 74.png'
import dasi from '@/app/public/Group 75.png'
import baju from '@/app/public/OJI09440 4.png'
import celana from '@/app/public/OJI09440 3.png'
import { FaSearch } from 'react-icons/fa'
import styles from '@/app/choose_bajulk/styles.module.css'
import kategori from '@/app/public/Group 82 (1).png'
import home from '@/app/public/ic_baseline-home.png'
import garis from '@/app/public/Line 3.png'
import back from '@/app/public/ep_back.png'
import clnaabu from '@/app/public/clnaabucwo.png'
import clnaprmka from '@/app/public/clnaprmkcwo.png'
import clnaolga from '@/app/public/clnaolgacwo.png'
import clnaa from '@/app/public/iconclnacwo.png'



function page() {
  return (
    <>
    <div className='h-screen'>

        {/* HEADER */}
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
        {/* Tombol Back */}
        <Link href="/choose_celanaCwoCwe">
          <Image 
            src={back} 
            alt="Back" 
            width={35} 
            quality={100} 
            className={styles.back} 
          />
        </Link>

        {/* Isi */}
    <div className='flex flex-col lg:flex-row justify-center  gap-8 mt-6'>
      <Link href="/choose_celanalk">
    <Image src={clnaa} alt='logo' width={500} quality={100} className={styles.lk} />
    </Link>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 lg:mt-0'>

      <Link href="/produk/15">
      <Image src={clnaabu} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/17">
      <Image src={clnaprmka} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/16">
      <Image src={clnaolga} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

</div>
      </div>
    </div>
  </div>
  
    </>
  )
}

export default page