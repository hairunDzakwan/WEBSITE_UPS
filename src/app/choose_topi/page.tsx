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

        {/* Header */}
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

        {/* Isi */}
    <div className='flex ml-60 '>
      <Link href="/bajulk">
    <Image src={topii} alt='logo' width={500} quality={100} className={styles.lk} />
    </Link>

    
    <div className={styles.container}>

      <Link href="/topi">
      <Image src={infoTopi} alt='topi' width={400} quality={100} className={styles.lk} />
      </Link>


      </div>
    </div>
  </div>
  
    </>
  )
}

export default page