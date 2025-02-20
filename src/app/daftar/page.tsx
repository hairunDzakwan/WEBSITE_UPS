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
import styles from '@/app/daftar/styles.module.css'
import kategori from '@/app/public/Group 82 (1).png'
import garis from '@/app/public/Line 3.png'

function page() {
  return (
    <>
      <div className="h-screen">

        {/* Header */}
        {/* Navbar */}
        <div className="border-b-2 border-black bg-red-900 flex justify-between items-center px-4 ">
          {/* Logo */}
          <div className="py-6 ml-5">
            <Image src={Navbar} alt="logo" width={180} quality={100} />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-xl mx-5 relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full py-3 px-4 w-full border-2 border-gray-300 focus:outline-none"
            />
            <FaSearch className={`${styles.icon} absolute right-4 top-3`} />
          </div>

          {/* Cart and User Icons */}
          <div className="flex items-center space-x-5 mr-6">
            <Link href='/keranjang' className="flex items-center">
              <Image src={Cart} alt="Cart" width={40} height={40} quality={100} />
            </Link>
            <Link href='/profil' className="flex items-center">
              <Image src={User} alt="User" width={38} height={38} quality={100} />
            </Link>
          </div>
        </div>

        {/* Main Content (Image & Posters) */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-10 mt-10 px-4">
          <div className="ml-0 sm:ml-0">
            <Image src={foto1} alt="poster1" width={1000} quality={100} />
          </div>
          <div className="mt-8 ml-10 sm:mt-0 sm:ml-10">
            <Image src={poster2} alt="poster2" width={650} />
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-7 px-4">
          
          {/* Category Links */}
          <Link href="/choose_dasi" className={styles.con}>
            <div className="">
              <Image src={dasi} width={200} alt="dasi" className={styles.kategori} />
              <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
            </div>
          </Link>

          <Link href="/choose_celanaCwoCwe" className={styles.con}>
            <div className="">
              <Image src={celana} width={200} alt="celana" className={styles.kategori} />
              <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
            </div>
          </Link>

          <Link href="/choose_bajuCwoCwe" className={styles.con}>
            <div className="">
              <Image src={baju} width={200} alt="baju" className={styles.kategori} />
              <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
            </div>
          </Link>

          <Link href="/choose_topi" className={styles.con}>
            <div className="">
              <Image src={topi} width={290} alt="topi" className={styles.kategori} style={{marginLeft:15, marginTop:-40}}/>
              <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
            </div>
          </Link>

          <Link href="/choose_lambang" className={styles.con}>
            <div className="">
              <Image src={logo} width={240} alt="logo" className={styles.kategori} style={{marginLeft:50, marginTop:10}} />
              <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default page;
