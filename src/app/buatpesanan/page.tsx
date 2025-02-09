import Image from "next/image";
import Link from "next/link";
import logo from '@/app/public/telkom-school-logo-white 1.png'
export default function OrderPage() {
  return (
    <div className="min-h-screen border-gray-100 flex flex-col">
       {/* HEADER */}
       <div className="z-20 border-b-2  border-black bg-red-900 flex items-center py-5 px-5 shadow-xl">
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

      {/* Konten */}
      <main className=" m-6 p-6 bg-white shadow-lg rounded-md mt-6">
        {/* Produk */}
        <div className="flex items-center border-b pb-4">
          <Image src="/product-image.jpg" alt="Produk" width={80} height={80} className="rounded-md" />
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold">Jas Almamater SMK Telkom Makassar</h2>
            <p className="text-gray-600">Varian: 38</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">Rp200.000</p>
            <p className="text-gray-600">Jumlah: 1</p>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="mt-4 border-b pb-4">
          <h3 className="font-semibold text-gray-700">Metode Pembayaran</h3>
          <p className="text-gray-600">COD - Cek Dulu</p>
        </div>

        {/* Pesan Tambahan */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Pesan (Opsional)</label>
          <textarea
            className="w-full border rounded-md p-2 mt-2"
            placeholder="Tambahkan deskripsi pesanan..."
          />
        </div>

        {/* Ringkasan Pembayaran */}
        <div className="mt-6 text-right">
          <p className="text-gray-700">Subtotal Produk: <span className="font-bold">Rp200.000</span></p>
          <p className="text-gray-700">Total Pembayaran: <span className="font-bold">Rp200.000</span></p>
        </div>

        {/* Tombol Buat Pesanan */}
        <Link href="/pesanan" className="mt-6 text-right">
          <button  className="bg-red-800 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-900">
            Buat Pesanan
          </button>
        </Link>
      </main>
    </div>
  );
}