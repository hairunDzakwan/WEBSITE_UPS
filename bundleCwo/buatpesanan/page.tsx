"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from '@/app/public/telkom-school-logo-white 1.png';
import home from '@/app/public/ic_baseline-home.png';

export default function OrderPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash - PickUp");
 const [ukuranAlmet, setUkuranAlmet] = useState(null);
  const [ukuranBaju, setUkuranBaju] = useState(null);
  const [ukuranCelana, setUkuranCelana] = useState(null);
  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem("selectedItems") || "[]");
      setCartItems(storedItems);
    } catch (e) {
      console.error("Gagal parsing selectedItems", e);
      setCartItems([]);
    }
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const harga = item.produks?.harga ?? 0;
    const jumlah = item.jumlah ?? 0;
    return total + harga * jumlah;
  }, 0);

  const handleOrder = async () => {
    if (cartItems.length === 0) {
      alert("Pilih produk terlebih dahulu!");
      return;
    }

    if (cartItems.some(item => !item.ukuran || !item.produks?.id || item.jumlah < 1)) {
      alert("Pastikan semua produk memiliki ukuran, id, dan jumlah valid.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Anda harus login terlebih dahulu!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/pesanans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            produks_id: item.produks.id,
            jumlah: item.jumlah,
            ukuran: item.ukuran,
            ukuran_almamater: item.ukuran_almamater,
            ukuran_baju: item.ukuran_baju,
            ukuran_celana: item.ukuran_celana
          })),
          metode_pembayaran: paymentMethod,
          pesan: message,
        }),
      });

      const result = await response.json();
      console.log("Response dari server:", result);

      if (!response.ok) {
        throw new Error(result.message || "Gagal membuat pesanan");
      }

      localStorage.removeItem("selectedItems");
      router.push("/semuapesanan");
    } catch (error: any) {
      console.error("Error:", error);
      alert(`Error: ${error.message || error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen border-gray-100 flex flex-col">
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b-2 border-black bg-red-900 flex items-center py-5 px-5 shadow-xl">
        <Link href="/daftar">
          <Image src={home} alt="home" width={40} quality={100} className="mt-2" />
        </Link>
        <div className="mx-2 ml-5 bg-white h-14 w-0.5 opacity-50"></div>
        <div className="ml-3">
          <h1 className="text-white text-2xl font-semibold">Pusat Penjual</h1>
        </div>
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>

      <div className="pt-[100px]">
        <main className="m-6 p-6 bg-white shadow-lg rounded-md mt-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <Image
                  src={`http://localhost:8000/storage/${item.produks?.gambar || "default.jpg"}`}
                  alt={item.produks?.nama || "Produk"}
                  width={80}
                  height={80}
                  className="rounded-md"
                  unoptimized
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.produks?.nama || "Produk Tidak Diketahui"}</h2>
                  <p className="text-gray-500">Ukuran: {item.ukuran || "-"}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">Rp{(item.produks?.harga ?? 0).toLocaleString()}</p>
                  <p className="text-gray-600">Jumlah: {item.jumlah}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Tidak ada produk yang dipilih.</p>
          )}

          <div className="mt-4 border-b pb-4">
            <h3 className="font-semibold text-gray-700">Metode Pembayaran dan pengiriman</h3>
            <select
              className="w-full border rounded-md p-2 mt-2"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Cash - PickUp">Cash - PickUp</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold">Pesan (Opsional)</label>
            <textarea
              className="w-full border rounded-md p-2 mt-2"
              placeholder="Tambahkan deskripsi pesanan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="mt-6 text-right">
            <p className="text-gray-700">
              Subtotal Produk: <span className="font-bold">Rp{totalPrice.toLocaleString()}</span>
            </p>
            <p className="text-gray-700">
              Total Pembayaran: <span className="font-bold">Rp{totalPrice.toLocaleString()}</span>
            </p>
          </div>

          <button
            onClick={handleOrder}
            disabled={loading}
            className={`mt-6 bg-red-800 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-900 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Memproses..." : "Buat Pesanan"}
          </button>
        </main>
      </div>
    </div>
  );
}
