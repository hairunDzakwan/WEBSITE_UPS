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
import styles from '@/app/bajulk/styles.module.css'
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
      <Link href="/lambang">
    <Image src={lbgbsr} alt='logo' width={500} quality={100} className={styles.lk} />
    </Link>

    
    <div className={styles.container}>

      <Link href="/lbg_rpl">
      <Image src={lbgrpl} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_tkj">
      <Image src={lbgtkj} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_dbp">
      <Image src={lbgdbp} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_tel">
      <Image src={lbgtel} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_makassar">
      <Image src={lbgmakassar} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_telkomsch">
      <Image src={lbgtelkomsch} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_gudeplk">
      <Image src={lbggudeplk} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbggudeppr_">
      <Image src={lbggudeppr} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_telkomcoklat">
      <Image src={lbgsmktelkomcoklat} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      <Link href="/lbg_telkomputih">
      <Image src={lbgsmktelkomputih} alt='logo' width={400} quality={100} className={styles.lk} />
      </Link>

      </div>
    </div>
  </div>
  
    </>
  )
}

export default page