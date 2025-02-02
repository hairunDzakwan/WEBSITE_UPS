import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/app/public/telkom-school-logo-white 1.png'
import Cart from '@/app/public/mdi_cart-outline.png'
import User from '@/app/public/Group.png'

import { FaSearch } from 'react-icons/fa'
import styles from '@/app/choose_topi/styles.module.css'
import home from '@/app/public/ic_baseline-home.png'
import garis from '@/app/public/Line 3.png'
import back from '@/app/public/ep_back.png'
import topii from '@/app/public/icon topi.png'
import infoTopi from '@/app/public/topii.png'



function page() {
  return (
    <>
    <div className='h-screen'>

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
          <div className="flex space-x-4">
            <Image src={Cart} alt="cart" width={40} quality={100} />
            <Image src={User} alt="user" width={38} quality={100} />
          </div>
        </div>

        {/* Tombol Back */}
        <Link href="/daftar">
          <Image 
            src={back} 
            alt="Back" 
            width={35} 
            quality={100} 
            className={styles.back} 
          />
        </Link>

        {/* Isi */}
    <div className='flex ml-60 '>
      <Link href="/">
    <Image src={topii} alt='logo' width={500} quality={100} className={styles.lk} />
    </Link>

  
    <div className={styles.container}>

      <Link href="/topiharga">
      <Image src={infoTopi} alt='topi' width={400} quality={100} className={styles.lk} />
      </Link>


      </div>
    </div>
  </div>
  
    </>
  )
}

export default page