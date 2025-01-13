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


function page() {
  return (
    <>
    <div className='h-screen'>
     <div className=' border-b-2 border-black bg-red-900 relative flex '>
    <div className='py-6 ml-8 '> {/* Menambahkan border-bottom hitam */}
        <Image src={Navbar} alt='logo' width={180} quality={100} />
    </div>
    <div className='mt-7 ml-96 '>
      <input

        type="text"
        placeholder="Search..."
       className='rounded-full py-3 px-4 w-96'
        style={{width:630, marginLeft:300, marginRight:220 }}
        
      />
      <FaSearch className={styles.icon} />
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

    <div className='flex  ml-1' >
      <div className='ml-14 mt-10 '>
          <Image src={foto1} alt='poster1' width={1000} quality={100} />
      </div>
      <div className='mt-28  ml-14 '>
        <Image src={poster2} alt='poster2' width={650}/>
      </div>
      

      
    </div>
    
    <div 
    className="flex relative" style={{marginLeft:56}}>

{/* <div className='absolute flex z-10 gap-9' > */}
    <Link href="/dasi" className={styles.con}>
    <Image src={dasi} width={200} alt='logo'className={styles.kategori }style={{marginLeft:90,}} />
    <Image src={kategori} width={330} alt='logo'  className={styles.latar}  style={{marginLeft:5, paddingTop:0}}/>
    </Link>
    <Link href="/celana" className={styles.con}>
    <Image src={celana} width={200} alt='topi'  className={styles.kategori} style={{marginLeft:110, paddingTop:0}}/>
    <Image src={kategori} width={330} alt='topi'  className={styles.latar} style={{marginLeft:34, paddingTop:0}}/>
    </Link>
    <Link href="/baju" className={styles.con}>
    <Image src={baju} width={200} alt='celana' className={styles.kategori} style={{marginLeft:110,paddingTop:5}}/>
    <Image src={kategori} width={330} alt='celana' className={styles.latar} style={{marginLeft:34, paddingTop:0}}/>
    </Link>
    <Link href="/topi" className={styles.con}>
    <Image src={topi} width={290} alt='dasi' className={styles.kategori} style={{marginLeft:50 ,top:-40}}/>
    <Image src={kategori} width={330} alt='dasi' className={styles.latar} style={{marginLeft:34, paddingTop:0}}/>
    </Link>
    <Link href="/lambang" className={styles.con}>
    <Image src={logo} width={240} alt='baju' className={styles.kategori} style={{marginLeft:90, top:15, zIndex:2}}/>
    <Image src={kategori} width={330} alt='baju' className={styles.latar} style={{marginLeft:34, paddingTop:0}}/>
    </Link>
    
    
    {/* <div className='flex absolute  z-20'>
   
    <Image src={dasi} width={200} alt='logo'
    className={styles.kategori }
    style={{marginLeft:85,}} />
   
    <Image src={baju} width={200} alt='topi'  className={styles.kategori} style={{marginLeft:160, paddingTop:5}}/>
   
    <Image src={celana} width={200} alt='celana' className={styles.kategori} style={{marginLeft:160,}}/>
    
     
    <Image src={topi} width={270} alt='dasi' className={styles.kategori} style={{marginLeft:120,marginBottom:0}}/>
  
    
    <Image src={logo} width={240} alt='baju' className={styles.kategori} style={{marginLeft:128, paddingTop:15}}/>
    
    </div> */}
    </div>
    </div>
  
    </>
  )
}

export default page