"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Counter from "@/app/components/counter";
import styles from '@/app/bundleCwo/styles.module.css';
import Navbar from "@/app/public/telkom-school-logo-white 1.png";
import Cart from "@/app/public/mdi_cart-outline.png";
import User from "@/app/public/Group.png";
import back from "@/app/public/ep_back.png";
import home from "@/app/public/ic_baseline-home.png";
import garis from "@/app/public/Line 3.png";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [produk, setProduk] = useState(null);
  const [ukuranAlmet, setUkuranAlmet] = useState(null);
  const [ukuranBaju, setUkuranBaju] = useState(null);
  const [ukuranCelana, setUkuranCelana] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState(null);
  const [jumlah, setJumlah] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const produkId = 35; // ID produk Paket Laki-Laki

  useEffect(() => {
    const fetchProduk = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch(`http://localhost:8000/api/produks/${produkId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Gagal mengambil data produk");
        const data = await res.json();
        setProduk(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduk();
  }, []);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    if (!ukuranAlmet || !ukuranBaju || !ukuranCelana) {
      alert("Harap pilih semua ukuran terlebih dahulu.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/keranjangs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          produks_id: produkId,
          ukuran_almamater: ukuranAlmet,
          ukuran_baju: ukuranBaju,
          ukuran_celana: ukuranCelana,
          jumlah: jumlah,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        
        console.error("Gagal:", err);
        alert("Gagal menambahkan ke keranjang: " + (err.message || "Terjadi kesalahan"));
        return;
      }

      setShowDialog(true);
     
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan ke keranjang.");
    }
  };

  const beliSekarang =  (produkId, ukuranAlmet, ukuranBaju, ukuranCelana, jumlah) => {
    const token = localStorage.getItem("token");

    if (!ukuranAlmet || !ukuranBaju || !ukuranCelana) {
      alert("Harap pilih semua ukuran terlebih dahulu.");
      return;
    }
    if (!token) {
      alert("Silakan login terlebih dahulu.");
      return;
    }


    const item = {
      id: Date.now(),
      produks_id: produkId,
      ukuran_almamater: ukuranAlmet,
      ukuran_baju: ukuranBaju,
      ukuran_celana: ukuranCelana,
      jumlah: jumlah,
    };

    localStorage.setItem("selectedItems", JSON.stringify([item]));
    window.location.href = "/buatpesanan";
  };

  async function tambahKeKeranjang(produkId, ukuran, jumlah) {
    const token = localStorage.getItem("token");
    if (!token) return alert("Anda harus login terlebih dahulu!");
    if (!ukuran) return alert("Pilih ukuran terlebih dahulu!");

    try {
      const response = await fetch("http://localhost:8000/api/keranjangs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          produks_id: produkId,
          ukuran: ukuran,
          ukuran_almamater: ukuranAlmet,
          ukuran_baju: ukuranBaju,
          ukuran_celana: ukuranCelana,
          jumlah: jumlah,
          
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setShowDialog(true);
      } else {
        alert(`Gagal: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menambahkan produk ke keranjang.");
    }
  }

  if (!produk) return 

  // Menyaring ukuran berdasarkan kategori
  const ukuranCelanaList = produk.ukurans.filter(uk => uk.kategori === 'celana');
  const ukuranBajuList = produk.ukurans.filter(uk => uk.kategori === 'baju');
  const ukuranAlmetList = produk.ukurans.filter(uk => uk.kategori === 'almamater');

  return (
    <div className="h-screen">
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b-2 border-black bg-red-900 flex items-center  px-5">
          {/* Home Icon */}
          <Link href="/daftar">
            <Image src={home} alt="home" width={40} quality={100} className="mr-2 mt-2" />
          </Link>

          {/* Separator */}
          <div className="mx-2">
            <Image src={garis} alt="garis" width={0.7} height={40} quality={100} className="opacity-50" />
          </div>

          {/* Navbar Logo */}
          <div className="ml-3 py-6">
            <Image src={Navbar} alt="logo" width={180} quality={100} />
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center items-center">
            
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 mr-6">
            <Link href='/keranjang' className="flex items-center">
              <Image src={Cart} alt="Cart" width={40} height={40} quality={100} />
            </Link>
            <Link href='/profil' className="flex items-center">
              <Image src={User} alt="User" width={38} height={38} quality={100} />
            </Link>
          </div>
        </div>
        <div className='pt-[100px]'>

      {/* Back Button */}
      <Link href="/choose_bundleCwoCwe">
        <Image src={back} alt="Back" width={35} quality={100} className={styles.back} />
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row lg:pr-10 gap-0">
        <div className="lg:ml-20">
          <Image
            src={`http://localhost:8000/storage/${produk.gambar}`}
            alt="almamater"
            width={1000}
            height={1000}
            quality={100}
            unoptimized
          />
        </div>

        <div className="lg:ml-10 self-center px-5">
          <p className="text-gray-600 text-2xl font-medium">Deskripsi Pesanan</p>
          
          <h1 className="text-5xl font-extrabold ">{produk.nama}</h1>
          <p className="text-xs text-gray-600">Almamater, Baju Putih, Baju Batik, Baju Pramuka, Baju Praktek, Baju Olahraga, Baju SKJ,   </p>
          <p className="text-xs text-gray-600">Celana Abu-Abu, Celana Pramuka, Celana Olahraga, Dasi, Topi, dan Lambang Baju </p>
      

          <p className="text-gray-600 text-2xl font-medium">Harga Pesanan</p>
          <h1 className="text-4xl font-bold mb-2 text-red-700">
            Rp {produk.harga?.toLocaleString()}
          </h1>

          {/* Ukuran Almamater */}
          <p className="text-gray-600 text-2xl font-medium">Ukuran Almamater</p>
          <div className="flex flex-wrap gap-2">
            {ukuranAlmetList.map((uk) => ( 
              <button
                key={uk.ukuran}
                onClick={() => setUkuranAlmet(uk.ukuran)}
                className={`border rounded-3xl px-8 py-1 text-xl font-semibold shadow-custom 
                  ${ukuranAlmet === uk.ukuran ? "bg-red-700 text-white" : "hover:bg-gray-200 text-red-800"}`}
              >
                {uk.ukuran}
              </button>
            ))}
          </div>

          <br />

          {/* Ukuran Baju */}
          <p className="text-gray-600 text-2xl font-medium">Ukuran Baju</p>
          <div className="flex flex-wrap gap-2">
            {ukuranBajuList.map((uk) => (
              <button
                key={uk.ukuran}
                onClick={() => setUkuranBaju(uk.ukuran)}
                className={`border rounded-3xl px-8 py-1 text-xl font-semibold shadow-custom 
                  ${ukuranBaju === uk.ukuran ? "bg-red-700 text-white" : "hover:bg-gray-200 text-red-800"}`}
              >
                {uk.ukuran}
              </button>
            ))}
          </div>

          <br />

          {/* Ukuran Celana */}
          <p className="text-gray-600 text-2xl font-medium">Ukuran Celana</p>
          <div className="flex flex-wrap gap-2">
            {ukuranCelanaList.map((uk) => (
              <button
                key={uk.ukuran}
                onClick={() => setUkuranCelana(uk.ukuran)}
                className={`border rounded-3xl px-8 py-1 text-xl font-semibold shadow-custom 
                  ${ukuranCelana === uk.ukuran ? "bg-red-700 text-white" : "hover:bg-gray-200 text-red-800"}`}
              >
                {uk.ukuran}
              </button>
            ))}
          </div>

          <br />

          {/* Kuantitas */}
          <p className="text-gray-600 text-2xl font-medium ">Jumlah</p>
          <Counter value={jumlah} setValue={setJumlah} max={produk?.ukurans?.find((u) => u.ukuran === selectedSize)?.stok || 0} />


        

          <br />

          <div className="flex flex-col md:flex-row md:space-x-6  space-y-4 md:space-y-0">
            <button
              onClick={() => handleAddToCart(produk.id, selectedSize, jumlah)}
              className="bg-white border ring-gray-200 text-xl shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-4 rounded"
            >
              Masukkan Keranjang
            </button>
            
          </div>
        </div>
      </div>

      {/* DIALOG */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Berhasil!</h2>
            <p className="text-lg mb-6">Produk telah ditambahkan ke keranjang.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowDialog(false)}
                className="bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-full"
              >
                Tutup
              </button>
              <Link href="/keranjang">
                <button className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-800">
                  Lihat Keranjang
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}


export default Page;
