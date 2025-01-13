import React from 'react'
import Image from 'next/image'
import Foto from '../public/OJI09321 1.png'
import Foto1 from '../public/images15.png'
import Link from 'next/link';
import Login from '@/app/Login/page'
import page from '../page';
import Navbar from '@/app/public/logo-telkom-schools 1.png'


function login() {
  return (
    <>
    <div className='h-screen'>
       <div className=' border-b-2 border-black '>
    <div className='py-6 ml-28 '> {/* Menambahkan border-bottom hitam */}
        <Image src={Navbar} alt='logo' width={240} quality={100} />
    </div>
    </div>
    <div className='   relative '> 

      <div className='flex items-center  mt-10  '>
  
        <Image 
          src={Foto1} 
          alt='foto1' 
          className='absolute  top-9 left-96 ml-36 transform -translate-x-1/2' 
          width={420} 
          quality={100}
        />
     
      
        <Image 
          src={Foto} 
          alt='foto' 
          className='relative z-10 ml-10 mt-20 left-20' 
          width={800}
          quality={100} 
        />

      
        <div className='ml-64 -mt-48' >
          <div className='pb-16'>
            <h1 className='text-6xl -mt-10 font-bold text-black text-center'>Masuk</h1>
          </div>
          <div className=" flex ">
      <form className="  rounded-lg   max-w-lg">
        {/* Form 1 */}
        <div className="relative -mt-3">
          <input
            type="number"
            id="floatingName"
            name="floatingName"
            placeholder=" "
            className="peer  px-40 py-7  border  shadow-custom border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            
          />
          <label
            htmlFor="floatingName"
            className="absolute text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 top-5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            No. Handphone
          </label>
        </div>
        {/* Form 2 */}
        <div className="relative mt-4">
          <input
            type="text"
            id="floatingName"
            name="floatingName"
            placeholder=" "
            className="peer px-40 py-7 border  shadow-custom border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <label
            htmlFor="floatingName"
            className="absolute text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 top-5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Kata Sandi
          </label>
        </div>

       

        {/* Submit Button */}
       
        <div className="ml-36 mt-6">
          <Link href="/daftar">
          <button 
          
            type="submit"
            className=" py-4 px-20  bg-red-700 font-bold  shadow-custom text-white  rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            MASUK
          </button>
          </Link>
          </div>
          
        
        <div className='flex text-sm gap-9 ml-40 mt-2'>
        <div className='-ml-3 font-normal relative '>
          Sudah Punya Akun?
        </div>
        <Link href='/'>
        <div className=' font-normal ml-4 relative text-blue-500 w-16 '>
          Masuk
        </div>
        </Link>
        </div>
        
      </form>
    </div>
          {/* <form>
        
            <div className=''>
              <label className=''>No. Handphone</label>
              <input 
                type='text' 
                className=' bg-gray-100 text-dark p-3 rounded-md focus:outline-none w-full shadow-custom' 
              />
            </div>
    
    
            <div className=''>
              <label className=''>Username</label>
              <input 
                type='text' 
                className=' bg-gray-100 text-dark p-3 rounded-md focus:outline-none w-full shadow-custom' 
              />
            </div>

         
            <div className=''>
              <label className=''>Kata Sandi</label>
              <input 
                type='password' 
                className=' bg-gray-100 text-dark p-3 rounded-md focus:outline-none  shadow-custom' 
              />
            </div>

            
            <div className=''>
              <label className=''>Konfirmasi Kata Sandi</label>
              <input 
                type='password' 
                className=' bg-gray-100 text-dark p-3 rounded-lg focus:outline-none  shadow-custom' 
              />
            </div>

            <div className=''>
              <button className=' mt-14 shadow-custom text-white bg-red-700 px-8 py-4 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>
                Daftar
              </button>
            </div>
          </form>
        </div>
        <div className="min-h-screen flex items-center justify-center ">
      <form className=" p-6 rounded-lg shadow-md">
        <div className="relative">
          <input
            type="text"
            id="floatingName"
            name="floatingName"
            placeholder=" "
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <label
            htmlFor="floatingName"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Nama Lengkap
          </label>
        </div>
      </form> */}
    </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default login
