'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/public/telkom-school-logo-white 1.png';
import Cart from '@/app/public/mdi_cart-outline.png';
import User from '@/app/public/Group.png';
import foto1 from '@/app/public/Frame 2.png';
import poster2 from '@/app/public/Group 83.png';
import logo from '@/app/public/Group 77.png';
import topi from '@/app/public/Group 74.png';
import baju from '@/app/public/OJI09440 4.png';
import celana from '@/app/public/OJI09440 3.png';
import { FaSearch } from 'react-icons/fa';
import styles from '@/app/daftar/styles.module.css';
import kategori from '@/app/public/Group 82 (1).png';
import bundle from '@/app/public/Vector.png';
import AutoImageSlider from '@/app/components/Navbar';
import logo1 from '@/app/public/telkom-school-logo 1.png';
function Page() {
  return (
    <div className="h-screen ">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-20 shadow-md bg-maroon flex justify-between items-center px-5  ">
        <div className="py-6 ml-5">
          <Image src={Navbar} alt="logo" width={180} quality={100} />
        </div>

        <div className="flex-grow max-w-xl mx-5 relative">
         
        </div>

        <div className="flex items-center space-x-5 mr-6">
          <Link href="/keranjang" className="flex items-center">
            <Image src={Cart} alt="Cart" width={40} height={40} quality={100} />
          </Link>
          <Link href="/profil" className="flex items-center">
            <Image src={User} alt="User" width={38} height={38} quality={100} />
          </Link>
        </div>
      </div>
<div className='  pt-[100px] bg-slate-100 mx-auto ' >
      {/* Poster */}
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-10 mt-8 px-4 ">
        
        <AutoImageSlider/>
        
        {/* <div className="mt-8 sm:mt-0 sm:ml-10">
          <Image src={poster2} alt="poster2" width={650} />
          </div> */}
      </div>

      {/* Kategori */}
      <div className="flex flex-wrap justify-center content-center gap-6 sm:gap-11 mt-7  ">
        <Link href="/print" className={styles.con}>
          <div>
            <Image src={bundle} width={200} alt="bundle" className={styles.kategori} style={{ marginLeft: 65, marginTop: 45 }} />
            <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
          </div>
        </Link>

        <Link href="/choose_celanaCwoCwe" className={styles.con}>
          <div>
            <Image src={celana} width={200} alt="celana" className={styles.kategori} />
            <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
          </div>
        </Link>

        <Link href="/choose_bajuCwoCwe" className={styles.con}>
          <div>
            <Image src={baju} width={200} alt="baju" className={styles.kategori} />
            <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
          </div>
        </Link>

        <Link href="/choose_topi&dasi" className={styles.con}>
          <div className="">
            <Image src={topi} width={230} alt="topi" className={styles.kategori} style={{ marginLeft: 45, marginTop: -10 }} />
            <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
          </div>
        </Link>

        <Link href="/choose_lambang" className={styles.con}>
          <div>
            <Image src={logo} width={240} alt="logo" className={styles.kategori} style={{ marginLeft: 50, marginTop: 10 }} />
            <Image src={kategori} width={330} alt="kategori" className={styles.latar} />
          </div>
        </Link>
      </div>
          
          </div>
    </div>
  );
}

export default Page;
