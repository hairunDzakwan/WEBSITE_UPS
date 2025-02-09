"use client";

import { useState } from "react";
import Link from "next/link";
import logo from '@/app/public/telkom-school-logo-white 1.png'
import Image from "next/image";
export default function Cart() {
  // Data produk dalam keranjang
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jas Almamater SMK Telkom Makassar",
      price: 200000,
      quantity: 1,
      image: "/jas-almamater.jpg", // Ganti dengan path gambar asli
    },
  ]);

  // Fungsi untuk mengubah jumlah produk
  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Hitung total harga semua produk
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
       {/* HEADER */}
       <div className="z-20 border-b-2  border-black bg-red-900 flex items-center py-5 px-5 shadow-2xl">
        {/* Logo UPS */}
        <Link href="/daftar">
          <h1 className="text-2xl text-white font-bold">UPS</h1>
        </Link>

        {/* Separator */}
        <div className="mx-2 ml-5 bg-white h-14 w-0.5 opacity-50"></div>

        {/* Navbar Title */}
        <div className="ml-3">
          <h1 className="text-white text-2xl font-semibold">Pusat Penjual</h1>
        </div>

        {/* Telkom Logo */}
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>
      <div className=" m-5  bg-white p-6 rounded-md shadow-md">

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              {/* Checkbox */}
              <input type="checkbox" className="w-5 h-5 text-red-600 mr-4" />

              {/* Gambar produk */}
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover mr-4" />

              {/* Detail Produk */}
              <div className="flex-grow">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-500">Rp{item.price.toLocaleString()}</p>
              </div>

              {/* Kontrol Kuantitas */}
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-10 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Harga Total per Produk */}
              <p className="ml-6 font-semibold text-gray-800">
                Rp{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Keranjang belanja kosong.</p>
        )}

        {/* Total dan Tombol Pesanan */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-lg font-semibold">Total: Rp{totalPrice.toLocaleString()}</p>
          <button className="bg-red-8 00 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-950">
            Buat Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}