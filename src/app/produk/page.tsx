import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/app/public/telkom-school-logo 1.png'
import almet from '@/app/public/Frame 12.png'

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Jas Almamater SMK Telkom Makassar",
      image: {almet},
      sales: 0,
      price: "Rp.200.000",
      stock: 100,
    },
  ];

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
        <div className="flex-1 p-6 bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Header Produk */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-700">Produk Saya</h2>
              <button className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700">
                + Tambah Produk Terbaru
              </button>
            </div>

            {/* Search & Reset */}
            <div className="mt-4 flex space-x-2">
              <input
                type="text"
                placeholder="Cari Nama Produk"
                className="border rounded-md p-2 w-60"
              />
              <button className="bg-gray-200 px-4 py-2 rounded-md ml-96">Atur Ulang</button>
            </div>
            

            {/* Produk Table */}
            <div className="mt-6 border rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Produk</th>
                    <th className="p-3 border">Penjualan</th>
                    <th className="p-3 border">Harga</th>
                    <th className="p-3 border">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t">
                      <td className="p-3 flex items-center space-x-3">
                        <input type="checkbox" className="mr-2" />
                        <Image src={almet} alt={product.name} width={120}  quality={100} />
                        <span>{product.name}</span>
                      </td>
                      <td className="p-3 text-center">{product.sales}</td>
                      <td className="p-3 text-center">{product.price}</td>
                      <td className="p-3 text-center">{product.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}