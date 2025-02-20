import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/app/public/telkom-school-logo 1.png'

export default function TambahProduk() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <div className="z-20 border-b-2  border-black bg-white flex items-center py-5 px-5 shadow-xl">
        {/* Logo UPS */}
        <Link href="/.">
          <h1 className="text-2xl text-red-900 font-bold">UPS</h1>
        </Link>

        {/* Separator */}
        <div className="mx-2 ml-5 bg-black h-14 w-0.5 opacity-50"></div>

        {/* Navbar Title */}
        <div className="ml-3">
          <h1 className="text-black text-2xl font-semibold">Pusat Penjual</h1>
        </div>

        {/* Telkom Logo */}
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>

      {/* Container */}
      <div className="flex flex-1">
       {/* Sidebar */}
       <div className="w-64 bg-white border-r p-5 z-20 shadow-xl">
          <h3 className="text-2xl font-medium text-gray-600">Produk</h3>
          <ul className="mt-2 space-y-2">
            <Link href="/produk" className="text-gray-700 hover:text-red-900 cursor-pointer font-medium">
              Produk Saya
            </Link> 
          </ul>
          <ul className="mt-2 space-y-2">
          <Link href="/tambahproduk" className="text-gray-700 hover:text-red-900 cursor-pointer font-medium">
              Tambahkan Produk Baru
            </Link>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 ">
          <div className="bg-white p-6 rounded-lg shadow-md z-20">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tambah Produk Baru</h2>

            {/* Tabs */}
            <div className="border-b flex space-x-6">
              <button className="py-2 border-b-2 border-red-800 font-semibold text-red-800">
                Informasi Produk
              </button>
            </div>

            {/* Form */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">Informasi Produk</h3>

              {/* Foto Produk */}
              <div className="mt-4">
                <label className="block text-gray-600 font-medium">Foto Produk</label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="foto" className="mr-1" /> Foto 3:4
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="foto" className="mr-1" /> Foto 3:5
                  </label>
                </div>
                <div className="mt-3 w-32 h-32 border flex items-center justify-center text-gray-400 cursor-pointer">
                  Upload
                </div>
              </div>

              {/* Nama Produk */}
              <div className="mt-4">
                <label className="block text-gray-600 font-medium">Nama Produk</label>
                <input
                  type="text"
                  placeholder="Nama Merek + Tipe Produk (Ukuran, Variasi)"
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>

              {/* Kategori */}
              <div className="mt-4">
                <label className="block text-gray-600 font-medium">Kategori</label>
                <select className="w-full border rounded-md p-2 mt-1">
                  <option>Pilih Kategori</option>
                </select>
              </div>

              {/* Deskripsi Produk */}
              <div className="mt-4">
                <label className="block text-gray-600 font-medium">Deskripsi Produk</label>
                <textarea
                  placeholder="Tambahkan deskripsi"
                  className="w-full border rounded-md p-2 mt-1 h-32"
                />
              </div>

              {/* Button Simpan */}
              <div className="mt-6">
                <button className="bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-700">
                  Simpan Produk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}