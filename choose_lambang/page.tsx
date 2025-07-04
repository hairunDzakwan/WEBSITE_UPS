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
import styles from '@/app/choose_lambang/styles.module.css'
import kategori from '@/app/public/Group 82 (1).png'
import home from '@/app/public/ic_baseline-home.png'
import garis from '@/app/public/Line 3.png'
import back from '@/app/public/ep_back.png'
import bajulk from '@/app/public/Frame 190.png'
import almet from '@/app/public/almet.png'
import putih from '@/app/public/putih.png'
import batik from '@/app/public/batik.png'
import prakter from '@/app/public/praktek.png'
import pramuka from '@/app/public/pramuka.png'
import olahraga33 from '@/app/public/olahraga33.png'
import lbgmakassar from '@/app/public/makassar.png'
import lbgtelkomsch from '@/app/public/telkomsch.png'
import lbgdbp from '@/app/public/dbp.png'
import lbgrpl from '@/app/public/rpl.png'
import lbgtkj from '@/app/public/tkj.png'
import lbgtel from '@/app/public/tel.png'
import lbggudeppr from '@/app/public/gudeppr.png'
import lbggudeplk from '@/app/public/gudeplk.png'
import lbgsmktelkomputih from '@/app/public/smktelkom.png'
import lbgsmktelkomcoklat from '@/app/public/smktelkomcklt.png'
import lbgbsr from '@/app/public/lmbg bsr.png'



function page() {
  return (
    <>
      {/* HEADER */}
      <div className="h-screen">
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
    <div className='flex flex-col lg:flex-row justify-center  gap-8 mt-6'>
      <Link href="/lambang">
    <Image src={lbgbsr} alt='logo' width={500} quality={100} className={styles.lk} />
    </Link>

    
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 lg:mt-0'>

      <Link href="/produk/22">
      <Image src={lbgrpl} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/23">
      <Image src={lbgtkj} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/21">
      <Image src={lbgdbp} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/32">
      <Image src={lbgtel} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/27">
      <Image src={lbgmakassar} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/24">
      <Image src={lbgtelkomsch} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/26">
      <Image src={lbggudeplk} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/25">
      <Image src={lbggudeppr} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/28">
      <Image src={lbgsmktelkomcoklat} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/produk/29">
      <Image src={lbgsmktelkomputih} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default page