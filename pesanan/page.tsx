import Image from "next/image";
import Link from "next/link";
import logo from "@/app/public/telkom-school-logo-white 1.png"; // Pastikan path sesuai

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* HEADER */}
      <div className="z-20 border-b-2 border-black bg-red-900 flex items-center py-5 px-5 shadow-xl">
        {/* Logo UPS */}
        <Link href="/daftar">
          <h1 className="text-2xl text-white font-bold cursor-pointer">UPS</h1>
        </Link>

        {/* Separator */}
        <div className="mx-2 ml-5 bg-white h-14 w-0.5 opacity-50"></div>

        {/* Navbar Title */}
        <div className="ml-3">
          <h1 className="text-white text-2xl font-semibold">Pesanan</h1>
        </div>

        {/* Telkom Logo */}
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={180} height={40} />
        </div>
      </div>

      {/* KONTEN */}
      <main className="m-6 p-6 bg-white shadow-lg rounded-md mt-6">
        {/* Produk */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-4">
            <Image
              src="/jas-almamater.jpg" // Ganti dengan path gambar asli
              width={80}
              height={80}
              alt="Jas Almamater"
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold">Jas Almamater SMK Telkom Makassar</h2>
              <p className="text-sm text-gray-500">Ukuran: 16</p>
            </div>
            <span className="text-lg font-semibold text-gray-700 ml-auto">Rp200.000</span>
          </div>
        </div>

        {/* Ringkasan Pesanan */}
        <div className="p-4">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal Untuk Produk</span>
            <span>Rp200.000</span>
          </div>
          <div className="flex justify-between text-gray-900 font-semibold mt-2">
            <span>Total Pesanan</span>
            <span>Rp200.000</span>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="p-4 border-t">
          <div className="flex justify-between text-gray-700">
            <span>Metode Pembayaran</span>
            <span className="font-semibold">COD - Cek Dulu</span>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6 flex justify-end space-x-2">
          <button className="border border-gray-500 text-gray-700 px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-200">
            Hubungi Penjual
          </button>
          <Link href='/semuapesanan' className="bg-red-800 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-900">
            Pesanan Selesai
          </Link>
        </div>

      </main>
    </div>
  );
}
