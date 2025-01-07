import React from 'react'
import Image from 'next/image'
import logo from '../public/logo-telkom-schools 1.png'

function Navbar() {
  return (
    <div className=' border-b-2 border-black  '>
    <div className='py-4 ml-20 '> {/* Menambahkan border-bottom hitam */}
        <Image src={logo} alt='logo' width={180} quality={100} />
    </div>
    </div>
  )
}

export default Navbar
