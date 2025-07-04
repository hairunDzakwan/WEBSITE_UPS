"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/app/public/telkom-school-logo 1.png";
import { BsWindowSidebar } from "react-icons/bs";
import { MdSpaceDashboard, MdSwitchAccount } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalType, setModalType] = useState(""); // "batalkan" atau "selesai"
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  useEffect(() => {
    const minimized = localStorage.getItem("sidebarMinimized");
    if (minimized === "true") {
      setSidebarMinimized(true);
    }
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/api/admin/pesanans", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Gagal mengambil pesanan");

        const data = await res.json();
        setOrders(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, router]);

  useEffect(() => {
    const filteredByStatus =
      filterStatus === "Semua" ? orders : orders.filter((o) => o.status === filterStatus);

    const filteredBySearch = filteredByStatus.filter((pesanan) =>
      pesanan.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredOrders(filteredBySearch);
  }, [searchTerm, filterStatus, orders]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Jangan izinkan ubah status jika sedang menunggu konfirmasi pembatalan lewat dropdown
      if (newStatus === "Menunggu Konfirmasi Pembatalan") return;

      await fetch(`http://localhost:8000/api/admin/pesanans/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      setOrders((prev) => prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)));
    } catch (err) {
      alert("Gagal memperbarui status");
    }
  };   

  // Fungsi untuk approve atau reject pembatalan pesanan
  const handleConfirmCancellation = async (id, action) => {
    try {
      const res = await fetch(`http://localhost:8000/api/admin/pesanans/${id}/konfirmasi-pembatalan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ action }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Gagal memperbarui status pembatalan");
        return;
      }

      setOrders((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: data.status } : p))
      );
    } catch (error) {
      alert("Terjadi kesalahan saat konfirmasi pembatalan");
      console.error(error);
    }
  };

  const confirmCancelOrder = (order) => {
    setSelectedOrder(order);
    setModalType("batalkan");
  };

  const confirmCompleteOrder = (order) => {
    setSelectedOrder(order);
    setModalType("selesai");
  };
  const confirmDelete = (id: number) => {
  setSelectedOrderId(id);
  setShowDeleteModal(true);
};


  const handleCancel = async () => {
    try {
      // Jika kamu memakai method POST sesuai backend yang direkomendasikan
      await fetch(`http://localhost:8000/api/admin/pesanans/${selectedOrder.id}/batal`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Update status di UI jadi menunggu konfirmasi
      setOrders((prev) =>
        prev.map((p) =>
          p.id === selectedOrder.id ? { ...p, status: "dibatalkan" } : p
        )
      );
      closeModal();
    } catch (err) {
      alert("Gagal mengajukan pembatalan");
    }
  };

  const handleMarkAsCompleted = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/admin/pesanans/${selectedOrder.id}/selesai`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Gagal");

      setOrders((prev) =>
        prev.map((pesanan) =>
          pesanan.id === selectedOrder.id ? { ...pesanan, status: "selesai" } : pesanan
        )
      );

      closeModal();
    } catch (err) {
      alert("Gagal menandai pesanan sebagai selesai");
    }
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setModalType("");
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        localStorage.removeItem("token");
        router.push("/");
      } else {
        console.error("Gagal logout");
      }
    } catch (err) {
      console.error("Error saat logout:", err);
    }
  };
    const handleDeleteOrder = async () => {
  if (!selectedOrderId) return;

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Token tidak ditemukan. Silakan login ulang.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:8000/api/admin/pesanans/${selectedOrderId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      alert(data.message || "Gagal menghapus pesanan.");
      return;
    }


    setOrders((prev) => prev.filter((p) => p.id !== selectedOrderId));
  } catch (error) {
    console.error(error);
    alert("Terjadi kesalahan saat menghapus pesanan.");
  } finally {
    setShowDeleteModal(false);
    setSelectedOrderId(null);
  }
};

  const formatDate = (dateStr) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateStr).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b-2 border-gray-200 bg-white flex items-center py-5 px-5 shadow-sm">
        <button
          onClick={() => {
            const newState = !sidebarMinimized;
            setSidebarMinimized(newState);
            localStorage.setItem("sidebarMinimized", newState.toString());
          }}
          className="text-2xl text-red-700 font-bold focus:outline-none"
        >
          <BsWindowSidebar className="hover:shadow-red-600/50 hover:shadow-md transition duration-300 ease-in-out" />
        </button>

        <div className="mx-2 ml-5 bg-black h-14 w-0.5 opacity-50"></div>
        <div className="ml-3">
          <h1 className="text-black text-2xl font-semibold">Pesanan Masuk</h1>
        </div>
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 mt-[80px]">
        {/* SIDEBAR */}
        <div
          className={`transition-all duration-300 fixed top-[105px] left-0 h-[calc(100vh-80px)] ${
            sidebarMinimized ? "w-16" : "w-64"
          } bg-white shadow-inner border-r  p-5 z-20`}
        >
          <ul className="space-y-4 transition-all duration-300">
            <li>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-red-700 font-medium block"
              >
                {sidebarMinimized ? <MdSpaceDashboard /> : "Dashboard"}
              </Link>
            </li>
            <li>
              <Link
                href="/manageakun"
                className="text-gray-700 hover:text-red-700 font-medium block"
              >
                {sidebarMinimized ? <MdSwitchAccount /> : "Akun"}
              </Link>
            </li>
            <li>
              <Link
                href="/pesananmasuk"
                className="text-red-600 hover:text-red-700 font-medium block"
              >
                {sidebarMinimized ? <BiTask /> : "Pesanan"}
              </Link>
            </li>
            <li>
              <Link href="/printadmin" className="text-gray-700 hover:text-red-700 font-medium block">
                {sidebarMinimized ? <BiTask /> : 'Print'}
              </Link>
            </li>
            <li>
              <Link
                href="/stok"
                className="text-gray-700 hover:text-red-700 font-medium block "
              >
                {sidebarMinimized ? <FaBoxArchive /> : "Produk"}
              </Link>
            </li>
            <button
              onClick={handleLogout}
              className="mt-4 w-full rounded-lg bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
    hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-xl 
    transition duration-300 ease-in-out px-6 py-2"
              style={{ display: sidebarMinimized ? "none" : "block" }}
            >
              {sidebarMinimized ? "" : "Keluar"}
            </button>
          </ul>
        </div>

        {/* CONTENT */}
        <div
          className={`flex-1 p-6 mt-[20px] bg-gray-100 ${
            sidebarMinimized ? "ml-16" : "ml-64"
          } transition-all duration-300 `}
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Daftar Pesanan</h2>

            {/* Search and Filter */}
            <input
              type="text"
              placeholder="Cari nama pelanggan..."
              className="border-gray-100  my-2 px-3 py-2 rounded w-full shadow-md border  focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mt-2">
              <label className="mr-2 font-semibold">Filter Status :</label>
              <select
                className="border border-gray-100 px-3 py-2 rounded shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {[
                  "Semua",
                  "Belum Bayar",
                  "Diproses",
                  "Dikirim",
                  "Menunggu Konfirmasi Pembatalan",
                  "Selesai",
                  "Dibatalkan",
                ].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* TABLE */}
            <div className="mt-6  shadow-md rounded overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 shadow-inner">
                  <tr>
                    <th className="p-3 ">Pelanggan</th>
                    <th className="p-3 ">Produk</th>
                    <th className="p-3 ">Ukuran</th>
                    <th className="p-3 ">Pembayaran & Pengiriman</th>
                    <th className="p-3 ">Pesan</th>
                    <th className="p-3 ">Jumlah</th>
                    <th className="p-3 ">Total Harga</th>
                    <th className="p-3 ">Dibuat</th>
                    <th className="p-3 ">Diubah</th>

                    <th className="p-3 ">Status</th>
                    <th className="p-3 ">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="10" className="text-center p-5 text-gray-500">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                          <span>Memuat pesanan...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredOrders.length > 0 ? (
                    filteredOrders.map((pesanan) => (
                      <tr key={pesanan.id} className="border-t">
                        <td className="p-3">{pesanan.user?.name || "Tidak diketahui"}</td>
                        <td className="p-3">{pesanan.produks?.nama || "Tidak diketahui"}</td>
                        <td className="p-3">{pesanan.ukuran || "-"}</td>
                        <td className="p-3">{pesanan.metode_pembayaran}</td>
      <td className="p-3">{pesanan.pesan || "-"}</td>
                        <td className="p-3 ">{pesanan.jumlah}</td>
                        <td className="p-3 ">
                          Rp
                          {(pesanan.produks?.harga * pesanan.jumlah).toLocaleString()}
                        </td>
                        <td className="p-3">{formatDate(pesanan.created_at)}</td>
                        <td className="p-3">{formatDate(pesanan.updated_at)}</td>

                        <td className="p-3 ">{pesanan.status}</td>

                 <td className="p-3">
  {["dibatalkan", "selesai"].includes(pesanan.status) ? (
    <button
  onClick={() => confirmDelete(pesanan.id)}
  className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-red-700/50 hover:shadow-xl w-full
    transition duration-300 px-3 py-1 rounded hover:bg-red-600"
>
  Hapus
</button>

  ) : (
    <div className="flex flex-col gap-2">
      {pesanan.status === "menunggu_pembatalan" ? (
        <div className="flex gap-2">
          <button
            onClick={() => handleConfirmCancellation(pesanan.id, "approve")}
            className="bg-green-600 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-green-700/50 hover:shadow-xl w-full
    transition duration-300 px-3 py-1 rounded hover:bg-green-500"
          >
            Terima
          </button>
          <button
            onClick={() => handleConfirmCancellation(pesanan.id, "reject")}
            className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-red-700/50 hover:shadow-xl w-full
    transition duration-300 px-3 py-1 rounded hover:bg-red-600"
          >
            Tolak
          </button>
        </div>
      ) : (
        <>
          {/* Status flow: Antrian -> Dikemas -> Siap Pickup */}
          {pesanan.status === "antrian" && (
            <button
              onClick={() => handleStatusChange(pesanan.id, "dikemas")}
              className="bg-purple-700 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-purple-700/50 hover:shadow-xl 
    transition duration-300 px-3 py-1 rounded hover:bg-purple-600"
            >
              Tandai Dikemas
            </button>
          )}

          {pesanan.status === "dikemas" && (
            <button
              onClick={() => handleStatusChange(pesanan.id, "siap_pickup")}
              className="bg-indigo-700 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-indigo-700/50 hover:shadow-xl 
    transition duration-300 px-3 py-1 rounded  hover:bg-indigo-600"
            >
              Tandai Siap Pickup
            </button>
          )}

          <div className="flex gap-2 justify-center ">
            <button
              onClick={() => confirmCancelOrder(pesanan)}
              className="bg-yellow-500 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-yellow-700/50 hover:shadow-xl w-full
    transition duration-300 px-3 py-1 rounded  hover:bg-yellow-400"
            >
              Batalkan
            </button>
            <button
              onClick={() => confirmCompleteOrder(pesanan)}
              className="bg-blue-700 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-blue-700/50 hover:shadow-xl w-full
    transition duration-300 px-3 py-1 rounded hover:bg-blue-600"
            >
              Selesai
            </button>
          </div>
        </>
      )}
    </div>
  )}
</td>


                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center p-5 text-gray-500">
                        Tidak ada pesanan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
{/* MODAL */}
{selectedOrder && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-xl font-semibold mb-4">Konfirmasi</h2>
      <p className="mb-6">
        {modalType === "batalkan"
          ? `Apakah Anda yakin ingin membatalkan pesanan "${selectedOrder.user?.name}"?`
          : `Apakah Anda yakin ingin menandai pesanan "${selectedOrder.user?.name}" sebagai selesai?`}
      </p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={closeModal}
          className="bg-white border ring-gray-200 text-font-semibold shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-2 rounded"
        >
          Batal
        </button>
        <button
          onClick={modalType === "batalkan" ? handleCancel : handleMarkAsCompleted}
          className={`px-4 py-2 rounded text-white bg-red-700  font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-red-700/50 hover:shadow-xl
    transition duration-300  hover:bg-red-600 ${
            modalType === "batalkan" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {modalType === "batalkan" ? "Batalkan Pesanan" : "Tandai Selesai"}
        </button>
      </div>
    </div>
  </div>
)}
{showDeleteModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
      <h2 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h2>
      <p className="mb-6">Apakah Anda yakin ingin menghapus pesanan ini?</p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="bg-white border ring-gray-200 text-font-semibold shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-2 rounded"
        >
          Batal
        </button>
        <button
          onClick={handleDeleteOrder}
          className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
     hover:shadow-red-700/50 hover:shadow-xl 
    transition duration-300 px-3 py-1 rounded hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
)}


    
    </div>
  );
}
