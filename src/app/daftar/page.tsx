import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/app/public/telkom-school-logo-white 1.png'
import Cart from '@/app/public/mdi_cart-outline.png'
import User from '@/app/public/Group.png'
import foto1 from '@/app/public/Frame 2.png'
import foto2 from '@/app/public/Frame 187.png'
import foto3 from '@/app/public/Frame 188.png'
function page() {
  return (
    <>
     <div className=' border-b-2 border-black bg-red-900 relative flex '>
    <div className='py-4 ml-5 '> {/* Menambahkan border-bottom hitam */}
        <Image src={Navbar} alt='logo' width={180} quality={100} />
    </div>
    <div className='mt-8 '>
    <Image src={Cart} alt='logo' width={35} quality={100} />
    </div>
    <div className='mt-8 '>
    <Image src={User} alt='logo' width={35} quality={100} />
    </div>
    </div>

    <div className='flex gap-10 ' >
      <div className='ml-10 mt-14 '>
          <Image src={foto1} alt='poster1' width={945} quality={100} />
      </div>
      <div className='flex flex-col'>
      <div className='mt-14 '>
          <Image src={foto2} alt='poster2' width={337} quality={100} />
      </div>
      <div className='mt-9 '>
          <Image src={foto3} alt='poster3' width={337} quality={100} />
      </div>

      </div>
    </div>
    </>
  )
}

export default page