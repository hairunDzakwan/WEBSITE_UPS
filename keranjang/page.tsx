"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/telkom-school-logo-white 1.png";
import home from "@/app/public/ic_baseline-home.png"
export default function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState({});
  const [showNotification, setShowNotification] = useState(false); // Modal pemberitahuan
  const [notificationMessage, setNotificationMessage] = useState(""); // Pesan pemberitahuan

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setNotificationMessage("Token tidak ditemukan! Harap login dulu.");
        setShowNotification(true);
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/api/keranjangs", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Gagal mengambil data keranjang!");

        const data = await res.json();
        console.log("Data keranjang:", data);
        setCartItems(data.data || []);
      } catch (err) {
        console.error("Gagal mengambil keranjang:", err);
        setNotificationMessage("Gagal mengambil data keranjang. Coba lagi.");
        setShowNotification(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const updateQuantity = async (id, amount) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotificationMessage("Anda harus login terlebih dahulu!");
      setShowNotification(true);
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, jumlah: Math.max(1, item.jumlah + amount) } : item
    );
    setCartItems(updatedCart);

    try {
      await fetch(`http://localhost:8000/api/keranjangs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ jumlah: updatedCart.find((item) => item.id === id)?.jumlah }),
      });
    } catch (err) {
      console.error("Gagal memperbarui jumlah:", err);
      setNotificationMessage("Gagal memperbarui jumlah produk.");
      setShowNotification(true);
    }
  };

  const removeItem = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotificationMessage("Anda harus login terlebih dahulu!");
      setShowNotification(true);
      return;
    }

    try {
      const res = await fetch(`http://localhost:8000/api/keranjangs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const result = await res.json();
        console.error("Gagal menghapus produk:", result);
        setNotificationMessage(`Gagal menghapus produk: ${result.message || "Terjadi kesalahan"}`);
        setShowNotification(true);
        return;
      }

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

      setSelectedItems((prev) => {
        const newSelection = { ...prev };
        delete newSelection[id];
        return newSelection;
      });

      setNotificationMessage("Produk berhasil dihapus.");
      setShowNotification(true);
    } catch (err) {
      console.error("Gagal menghapus produk:", err);
      setNotificationMessage("Terjadi kesalahan saat menghapus produk. Coba lagi.");
      setShowNotification(true);
    }
  };

  const removeSelectedItems = () => {
    const selectedIds = Object.keys(selectedItems).filter((id) => selectedItems[id]);

    if (selectedIds.length === 0) {
      setNotificationMessage("Pilih produk yang ingin dihapus terlebih dahulu!");
      setShowNotification(true);
      return;
    }

    selectedIds.forEach((id) => {
      removeItem(id);
    });
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllSelected = cartItems.length > 0 && cartItems.every((item) => selectedItems[item.id]);

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems({});
    } else {
      const newSelection = {};
      cartItems.forEach((item) => {
        newSelection[item.id] = true;
      });
      setSelectedItems(newSelection);
    }
  };

  const handleCheckout = () => {
    const selectedProducts = cartItems.filter((item) => selectedItems[item.id]);

    if (selectedProducts.length === 0) {
      setNotificationMessage("Pilih produk terlebih dahulu!");
      setShowNotification(true);
      return;
    }

    localStorage.setItem("selectedItems", JSON.stringify(selectedProducts));
    router.push("/buatpesanan");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    if (!selectedItems[item.id]) return total;
    return total + (item.produks?.harga || 0) * item.jumlah;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b-2 border-black bg-maroon flex items-center py-5 px-5 shadow-2xl">
      <Link href="/daftar">
            <Image src={home} alt="home" width={40} quality={100} className=" mt-2" />
          </Link>
        <div className="mx-2 ml-5 bg-white h-14 w-0.5 opacity-50"></div>
        <div className="ml-3">
          <h1 className="text-white text-2xl font-semibold">Pusat Penjual</h1>
        </div>
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>
      <div className='pt-[100px]'>
      {/* KONTEN KERANJANG */}
      <div className="m-5 bg-white p-6 rounded-md shadow-md">
        {loading ? (
          <p className="text-center text-gray-500">Loading keranjang...</p>
        ) : cartItems.length > 0 ? (
          <>
            {/* PILIH SEMUA */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="w-5 h-5 text-red-600 mr-2 accent-red-800"
              />
              <span className="text-gray-700 font-medium">Pilih Semua</span>
              <button
                onClick={removeSelectedItems}
                className="bg-red-800 text-white px-4 py-2 rounded-md font-medium hover:bg-red-800 ml-auto"
              >
                Hapus 
              </button>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-red-600 mr-4 accent-red-800"
                  checked={selectedItems[item.id] || false}
                  onChange={() => toggleSelectItem(item.id)}
                />

                <Image
                  src={`http://localhost:8000/storage/${item.produks?.gambar || "default.jpg"}`}
                  alt={item.produks?.nama || "Produk"}
                  width={64}
                  height={64}
                  className="rounded-md object-cover mr-4"
                  unoptimized
                />

                <div className="flex-grow">
                  <p className="text-lg font-semibold">{item.produks?.nama || "Produk Tidak Diketahui"}</p>
                  <p className="text-gray-500">Rp{(item.produks?.harga || 0).toLocaleString()}</p>
                  <p className="text-gray-500">Ukuran: {item.ukuran || "-"}</p>
                </div>

                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300">
                    -
                  </button>
                  <span className="w-10 text-center">{item.jumlah}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300">
                    +
                  </button>
                </div>

                <button onClick={() => removeItem(item.id)} className="ml-4 text-red-600 hover:text-red-800">
                  ✕
                </button>
              </div>
            ))}

            {/* TOTAL DAN AKSI */}
            <div className="flex justify-between items-center mt-6 flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-3">
                <p className="text-lg font-semibold">Total: Rp{totalPrice.toLocaleString()}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-red-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-900"
              >
                Buat Pesanan
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">Keranjang belanja kosong.</p>
        )}
      </div>

      {/* MODAL PEMBERITAHUAN */}
      {showNotification && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Pemberitahuan</h2>
            <p>{notificationMessage}</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setShowNotification(false)}
                className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-900"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
