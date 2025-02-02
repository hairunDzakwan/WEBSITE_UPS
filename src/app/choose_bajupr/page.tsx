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
import bajupr from '@/app/public/iconbjupr.png'
import almet from '@/app/public/displayalmacwe.png'
import putih from '@/app/public/displayputihcwe.png'
import batik from '@/app/public/displaybatikcwe.png'
import praktek from '@/app/public/displaypraktekcwe.png'
import pramuka from '@/app/public/displaypramukacwe.png'
import olahraga33 from '@/app/public/displayolgacwe.png'
import olahraga32 from '@/app/public/displayskjcwe.png'



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
        <Link href="/choose_bajuCwoCwe">
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
      <Link href="/choose_bajupr">
    <Image src={bajupr} alt='logo' width={500} quality={100} className={styles.lk} />
    </Link>

    
    <div className={styles.container}>

      <Link href="/ceweAlmet">
      <Image src={almet} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/ceweBajuputih">
      <Image src={putih} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/ceweBatik">
      <Image src={batik} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/cewePraktek">
      <Image src={praktek} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/cewePramuka">
      <Image src={pramuka} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/ceweSkj">
      <Image src={olahraga33} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/ceweOlahraga">
      <Image src={olahraga32} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      </div>
    </div>
  </div>
  
    </>
  )
}

export default page