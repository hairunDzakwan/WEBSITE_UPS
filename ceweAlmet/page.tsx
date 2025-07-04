"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Counter from "@/app/components/counter";
import Navbar from "@/app/public/telkom-school-logo-white 1.png";
import Cart from "@/app/public/mdi_cart-outline.png";
import User from "@/app/public/Group.png";
import home from "@/app/public/ic_baseline-home.png";
import garis from "@/app/public/Line 3.png";

export default function Page() {
  const [produk, setProduk] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [jumlah, setJumlah] = useState(1);
  const produkId = 1; // Ubah dengan produkId yang dinamis jika perlu

  useEffect(() => {
    const fetchProduk = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token tidak ditemukan! Harap login dulu.");
        return;
      }

      try {
        const res = await fetch(`http://localhost:8000/api/produks/${produkId}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (!res.ok) throw new Error("Gagal mengambil data produk!");

        const data = await res.json();
        console.log("Data produk:", data);
        setProduk(data);

        if (data?.ukuran?.length > 0) {
          setSelectedSize(data.ukuran[0].ukuran);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduk();
  }, [produkId]);

  if (!produk) return <p>Loading...</p>;

  return (
    <div className="h-screen">
      {/* HEADER */}
      <div className="border-b-2 border-black bg-red-900 flex items-center py-3 px-5">
        <Link href="/daftar">
          <Image src={home} alt="home" width={40} quality={100} className="mr-2" />
        </Link>
        <div className="mx-2">
          <Image src={garis} alt="garis" width={1} height={40} quality={100} className="opacity-50" />
        </div>
        <div className="ml-3">
          <Image src={Navbar} alt="logo" width={180} quality={100} />
        </div>
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
        <div className="flex items-center space-x-5 mr-6">
          <Link href="/keranjang">
            <Image src={Cart} alt="Cart" width={40} height={40} quality={100} />
          </Link>
          <Link href="/profil">
            <Image src={User} alt="User" width={38} height={38} quality={100} />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row lg:pr-10 gap-5">
        {/* IMAGE */}
        <div className="flex justify-center lg:ml-16">
          <Image
            src={`http://localhost:8000/storage/${produk.gambar}`}
            alt={produk.nama}
            width={600}
            height={600}
            quality={100}
            unoptimized
          />
        </div>

        {/* DETAILS */}
        <div className="lg:ml-10 self-center px-5">
          <p className="text-gray-600 text-2xl font-medium">Deskripsi Pesanan</p>
          <h1 className="text-5xl font-extrabold mb-7">{produk.nama}</h1>
          <p className="text-gray-600 text-2xl font-medium">Harga Pesanan</p>
          <h1 className="text-4xl font-bold mb-7 text-red-700">
            Rp {produk?.harga ? produk.harga.toLocaleString() : "0"}
          </h1>

          {/* Ukuran */}
          <p className="text-gray-600 text-2xl font-medium">Ukuran</p>
          <div className="flex flex-wrap gap-4 mb-7">
            {produk?.ukurans?.length > 0 ? (
              produk.ukurans.map((item) => (
                <button
                  key={item.ukuran}
                  onClick={() => setSelectedSize(item.ukuran)}
                  className={`border rounded-3xl px-8 py-1 text-xl font-semibold shadow-custom 
                    ${selectedSize === item.ukuran ? "bg-red-700 text-white" : "hover:bg-gray-200 text-red-800"}`}
                >
                  {item.ukuran}
                </button>
              ))
            ) : (
              <p className="text-gray-500">Ukuran tidak tersedia</p>
            )}
          </div>

          {/* Kuantitas */}
          <p className="text-gray-600 text-2xl font-medium">Kuantitas</p>
          <Counter value={jumlah} setValue={setJumlah} />
          <p className="text-gray-600 mt-5 text-xl font-medium">
            Tersisa {produk?.ukurans?.find((u) => u.ukuran === selectedSize)?.stok || 0} produk
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col md:flex-row md:space-x-6 mt-8 space-y-4 md:space-y-0">
            <button
              onClick={() => tambahKeKeranjang(produk.id, selectedSize, jumlah)}
              className="bg-red-700 text-white px-5 py-4 rounded-full text-2xl font-bold w-full md:w-auto hover:bg-red-800 transition duration-300"
            >
              Masukkan Keranjang
            </button>
            <Link href="/buatpesanan">
              <button className="bg-gray-700 text-white px-5 py-4 rounded-full text-2xl font-bold w-full md:w-auto hover:bg-gray-800 transition duration-300">
                Beli Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fungsi untuk menambahkan produk ke keranjang
async function tambahKeKeranjang(produkId, ukuran, jumlah) {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Anda harus login terlebih dahulu!");
    return;
  }

  if (!ukuran) {
    alert("Pilih ukuran terlebih dahulu!");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/api/keranjangs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        produks_id: produkId,
        ukuran: ukuran,
        jumlah: jumlah,
      }),
    });

    const result = await response.json();
    console.log("Response API:", result);

    if (response.ok) {
      alert("Produk berhasil ditambahkan ke keranjang!");
    } else {
      alert(`Gagal menambahkan produk ke keranjang: ${result.message}`);
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    alert("Terjadi kesalahan. Coba lagi nanti.");
  }
}
