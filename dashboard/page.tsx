"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import logo from '@/app/public/telkom-school-logo 1.png';
import LoadingPage from '@/app/components/LoadingPage';
import { BsWindowSidebar } from "react-icons/bs";
import { MdSpaceDashboard ,MdSwitchAccount } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";

function Page() {
  const { user } = useAuth();
  const router = useRouter();
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    belumBayar: 0,
    menungguResponPembatalan: 0,
    produkHabis: 0,
  });
  const [loading, setLoading] = useState(true);

  // Ambil status sidebar dari localStorage saat pertama kali render
  useEffect(() => {
    const minimized = localStorage.getItem("sidebarMinimized");
    if (minimized === "true") {
      setSidebarMinimized(true);
    }
  }, []);

  // Redirect jika bukan admin
  useEffect(() => {
    const hasLoaded = localStorage.getItem("dashboardLoaded");
    if (hasLoaded === "true") {
      setLoading(false);
      return;
    }
  }, []);
  useEffect(() => {
    if (!user) return;
    if (user.role !== "admin") {
      router.push("/unauthorized");
    }
  }, [user]);
  
  // Ambil data dashboard
  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");
      if (!token || !user) return;
      
      try {
        const res = await fetch("http://localhost:8000/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const data = await res.json();
        if (res.ok) {
          setDashboardData({
            belumBayar: data.belumBayar,
            menungguResponPembatalan: data.menungguResponPembatalan,
            produkHabis: data.produkHabis,
          });
          localStorage.setItem("dashboardLoaded", "true");
        } else {
          console.error("Gagal mengambil data dashboard", data);
        }
      } catch (err) {
        console.error("Error saat mengambil data dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  // Handle toggle sidebar dan simpan ke localStorage
  const handleToggleSidebar = () => {
    const newState = !sidebarMinimized;
    setSidebarMinimized(newState);
    localStorage.setItem("sidebarMinimized", newState.toString());
  };

  // Logout
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("dashboardLoaded");
        router.push("/");
      } else {
        console.error("Gagal logout:", data);
      }
    } catch (err) {
      console.error("Error saat logout:", err);
    }
  };

  if (loading) return <LoadingPage />;
  if (!user || user.role !== "admin") return null;

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="z-20 border-b-2 border-gray-200 bg-white flex items-center py-5 px-5 shadow-sm">
        <button
          onClick={handleToggleSidebar}
          className="text-2xl text-red-700 font-bold focus:outline-none"
        >
          <BsWindowSidebar className='hover:shadow-red-600/50 hover:shadow-md transition duration-300 ease-in-out' />
        </button>
        <div className="mx-2 ml-5 bg-black h-14 w-0.5 opacity-50"></div>
        <div className="ml-3">
          <h1 className="text-black text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>

      {/* SIDEBAR & MAIN CONTENT */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <div className={`transition-all duration-300 ${sidebarMinimized ? 'w-16' : 'w-64'} bg-white shadow-inner border-r p-5 z-20`}>
          <ul className="space-y-4 transition-all duration-300">
            <li>
              <Link href="/dashboard" className="text-red-600 hover:text-red-700 font-medium block ">
                {sidebarMinimized ? <MdSpaceDashboard /> : 'Dashboard'}
              </Link>
            </li>
            <li>
              <Link href="/manageakun" className="text-gray-700 hover:text-red-700 font-medium block">
                {sidebarMinimized ? <MdSwitchAccount /> : 'Akun'}
              </Link>
            </li>
            <li>
              <Link href="/pesananmasuk" className="text-gray-700 hover:text-red-700 font-medium block">
                {sidebarMinimized ? <BiTask /> : 'Pesanan'}
              </Link>
            </li>
            <li>
              <Link href="/printadmin" className="text-gray-700 hover:text-red-700 font-medium block">
                {sidebarMinimized ? <BiTask /> : 'Print'}
              </Link>
            </li>
            <li>
              <Link href="/stok" className="text-gray-700 hover:text-red-700 font-medium block ">
                {sidebarMinimized ? <FaBoxArchive /> : 'Produk'}
              </Link>
            </li>
            <button
              onClick={handleLogout}
              className="mt-4 w-full rounded-lg bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
              hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-xl 
              transition duration-300 ease-in-out px-6 py-2"
              style={{ display: sidebarMinimized ? 'none' : 'block' }}
            >
              {sidebarMinimized ? '' : 'Keluar'}
            </button>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 bg-gray-100 p-6 z-0">
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">Dashboard Admin</h3>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Link href="/pesananmasuk" className="p-4 border border-gray-200 shadow-md text-center rounded-md hover:shadow-gray-300/50 hover:shadow-lg transition duration-300 ease-in-out">
                <p className="text-xl font-bold">{dashboardData.belumBayar}</p>
                <p className="text-gray-800">Antrian Pesanan</p>
              </Link>
              <Link href="/printadmin" className="p-4 border border-gray-200 shadow-md text-center rounded-md hover:shadow-gray-300/50 hover:shadow-lg transition duration-300 ease-in-out">
                <p className="text-xl font-bold">{dashboardData.menungguResponPembatalan}</p>
                <p className="text-gray-800">Antrian Pesanan Print</p>
              </Link>
              <Link href="/stok" className="p-4 border border-gray-200 shadow-md text-center rounded-md hover:shadow-gray-300/50 hover:shadow-lg transition duration-300 ease-in-out">
                <p className="text-xl font-bold">{dashboardData.produkHabis}</p>
                <p className="text-gray-800">Produk Habis</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
