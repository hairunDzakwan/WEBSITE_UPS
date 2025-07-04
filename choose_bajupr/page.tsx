'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import Navbar from '@/app/public/telkom-school-logo-white 1.png'
import Cart from '@/app/public/mdi_cart-outline.png'
import User from '@/app/public/Group.png'
import back from '@/app/public/ep_back.png'
import bajupr from '@/app/public/iconbjupr.png'
import almet from '@/app/public/displayalmacwe.png'
import putih from '@/app/public/displayputihcwe.png'
import batik from '@/app/public/displaybatikcwe.png'
import praktek from '@/app/public/displaypraktekcwe.png'
import pramuka from '@/app/public/displaypramukacwe.png'
import olahraga33 from '@/app/public/displayolgacwe.png'
import olahraga32 from '@/app/public/displayskjcwe.png'

import home from '@/app/public/ic_baseline-home.png'
import garis from '@/app/public/Line 3.png'
import { FaSearch } from 'react-icons/fa'
import styles from '@/app/choose_bajulk/styles.module.css'

function Page() {
  const params = useParams()
  const produkId = params.id // ini akan ambil dari URL /ceweAlmet/:id

  return (
    <>
      <div className="h-screen">
        {/* HEADER */}
        <div className=" fixed top-0 left-0 right-0 z-20 border-b-2 border-black bg-maroon flex items-center  px-5">
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
        <Link href="/choose_bajuCwoCwe">
          <Image src={back} alt="Back" width={35} quality={100} className={styles.back} />
        </Link>

        {/* Isi */}
        <div className="">
        <div className="flex flex-col lg:flex-row justify-center  gap-8 mt-6">
          <Link href="/choose_bajupr">
            <Image src={bajupr} alt="logo" width={500} quality={100} className={styles.lk} />
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 lg:mt-0">
            {/* ini contohnya memakai id dari url */}
            <Link href={`/produk/1`}>
              <Image src={almet} alt="almet" width={400} quality={100} className={styles.lk} />
            </Link>

            <Link href="/produk/2">
              <Image src={putih} alt="putih" width={400} quality={100} className={styles.lk} />
            </Link>

            <Link href="/produk/3">
              <Image src={batik} alt="batik" width={400} quality={100} className={styles.lk} />
            </Link>

            <Link href="/produk/5">
              <Image src={praktek} alt="praktek" width={400} quality={100} className={styles.lk} />
            </Link>

            <Link href="/produk/6">
              <Image src={pramuka} alt="pramuka" width={400} quality={100} className={styles.lk} />
            </Link>

            <Link href="/produk/7">
              <Image src={olahraga33} alt="skj" width={400} quality={100} className={styles.lk} />
            </Link>

            <Link href="/produk/4">
              <Image src={olahraga32} alt="olga" width={400} quality={100} className={styles.lk} />
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Page;
