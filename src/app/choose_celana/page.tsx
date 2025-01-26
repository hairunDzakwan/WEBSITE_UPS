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
import styles from '@/app/choose_celana/styles.module.css'
import kategori from '@/app/public/Group 82 (1).png'
import home from '@/app/public/ic_baseline-home.png'
import garis from '@/app/public/Line 3.png'
import back from '@/app/public/ep_back.png'
import bajulk from '@/app/public/Group 84 (1).png'
import bajupr from '@/app/public/Group 85 (1).png'



function page() {
  return (
    <>
    <div className='h-screen'>
     <div className=' border-b-2 border-black bg-red-900 relative flex '>
        <Link href="/daftar">
            <Image src={home} alt='home' width={40} quality={100} style={{marginTop:35,marginLeft:20}}/>
        </Link>
        <div>
            <Image src={garis} alt='home' width={0.7} quality={100}  style={{marginTop:20, marginLeft:20, opacity:0.5}}/>
        </div>
    <div className='py-6 ml-5 '> {/* Menambahkan border-bottom hitam */}
        <Image src={Navbar} alt='logo' width={180} quality={100} />
    </div>
    <div className='mt-7 ml-96 '>
      <input

        type="text"
        placeholder="Search..."
       className='rounded-full py-3 px-4 w-96 ju'
        style={{width:630, marginLeft:231, marginRight:220, }}
        
      />
      <FaSearch className="fill-red-800" style={{ marginLeft:826,
    marginTop: -33,
    fontSize: 18,
    }} />
      {/* <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
    <div className='mt-8 mr-5 '>
    <Image src={Cart} alt='logo' width={40} quality={100} />
    </div>
    <div className='mt-8 '>
    <Image src={User} alt='logo' width={38} quality={100} />
    </div>
    </div>
    <Link href="/daftar">
    <Image src={back} alt='logo' width={35} quality={100} className={styles.back}/>
    </Link>
    <div className={styles.baju}>
    <Image src={bajulk} alt='logo' width={500} quality={100} className={styles.lk} />
    <Image src={bajupr} alt='logo' width={500} quality={100} className={styles.pr}/>
    </div>
    </div>
  
    </>
  )
}

export default page