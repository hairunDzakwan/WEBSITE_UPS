import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/app/public/telkom-school-logo-white 1.png'; // Perbaikan path gambar

export default function ProfilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
      <header className="z-20 border-b-2 border-black bg-red-900 flex items-center py-5 px-5 shadow-xl">
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
      </header>

      {/* KONTEN UTAMA */}
      <div className="flex flex-1 ">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4  shadow-xl">
          <h2 className="text-lg font-semibold mb-2">Akun Saya</h2>
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 rounded hover:bg-gray-100">Profil</a></li>
            <li><a href="/semuapesanan" className="block p-2 rounded hover:bg-gray-100">Pesanan Saya</a></li>
            <li><a href="#" className="block p-2 rounded hover:bg-gray-100">Keluar</a></li>
          </ul>
        </aside>

        {/* Formulir Profil */}
        <main className="flex-1 p-8 flex justify-center">
          <section className="bg-white p-8 rounded-md shadow-xl max-w-full w-full flex">
            {/* Formulir */}
            <div className="w-3/4 pr-8">
              <h2 className="text-xl font-semibold mb-2">Profil Saya</h2>
              <p className="text-sm text-gray-600 mb-6">
                Kelola informasi profil Anda untuk mengelola, melindungi, dan mengamankan akun ini.
              </p>

              <form className="space-y-4">
                {[
                  { label: "Username", id: "username", type: "text", placeholder: "Masukkan username" },
                  { label: "Nama", id: "nama", type: "text", placeholder: "Masukkan nama" },
                  { label: "Email", id: "email", type: "email", placeholder: "contoh@email.com" },
                  { label: "Nomor Telepon", id: "telepon", type: "text", placeholder: "08xxxxxxxxxx" }
                ].map(({ label, id, type, placeholder }) => (
                  <div key={id} className="flex items-center space-x-4">
                    <label htmlFor={id} className="w-32 font-semibold text-right">{label}</label>
                    <input type={type} id={id} placeholder={placeholder}
                      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-red-300" />
                  </div>
                ))}

                {/* Jenis Kelamin */}
                <div className="flex items-center space-x-4">
                  <label htmlFor="jenisKelamin" className="w-32 font-semibold text-right">Jenis Kelamin</label>
                  <select id="jenisKelamin"
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-red-300">
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>

                {/* Tanggal Lahir */}
                <div className="flex items-center space-x-4">
                  <label htmlFor="tanggalLahir" className="w-32 font-semibold text-right">Tanggal Lahir</label>
                  <input type="date" id="tanggalLahir"
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-red-300" />
                </div>

                {/* Tombol Simpan */}
                <div className="flex justify-start">
                  <button type="submit" className="bg-red-900 text-white px-6 py-2 rounded hover:bg-red-950 transition">
                    Simpan
                  </button>
                </div>
              </form>
            </div>

            {/* Garis pembatas */}
            <div className="border-l border-gray-300 mx-20"></div>

            {/* Pilih Gambar */}
            <div className="w-1/4 flex flex-col items-center">
              <div className="w-60 h-60 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-60 h-60 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <label htmlFor="gambar" className="mt-3 w-full text-center">
                <span className="bg-gray-200 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300">
                  Pilih Gambar
                </span>
                <input type="file" id="gambar" accept="image/png, image/jpeg" className="hidden" />
              </label>
              <p className="text-xs text-gray-500 mt-2">
                Ukuran maks. 1 MB, format JPEG/PNG
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}