"use client";

import { useEffect, useState } from "react";

export default function PesananAdmin() {
  const [pesanan, setPesanan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/pesanan") // Sesuaikan dengan URL backend Laravel
      .then((res) => res.json())
      .then((data) => setPesanan(data))
      .catch((error) => console.error("Gagal mengambil data pesanan:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Pantau Pesanan</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID Pesanan</th>
            <th className="p-2">Status</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {pesanan.length > 0 ? (
            pesanan.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.status}</td>
                <td className="p-2">Rp {item.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-2 text-center">Tidak ada pesanan</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
