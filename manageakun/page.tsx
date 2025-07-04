"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from '@/app/public/telkom-school-logo 1.png';
import axios from "axios";
import { BsWindowSidebar } from "react-icons/bs";
import { MdSpaceDashboard ,MdSwitchAccount } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";
export default function ManageAccountsPage() {
   const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('murid');
  const [kelas, setKelas] = useState('');


  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [editUser, setEditUser] = useState<any>(null);
  const [editName, setEditName] = useState('');
  const [editNama, setEditNama] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editKelas, setEditKelas] = useState('');
  const [editRole, setEditRole] = useState('');
  
const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
const [userToDelete, setUserToDelete] = useState<any>(null);
useEffect(() => {
    const minimized = localStorage.getItem("sidebarMinimized");
    if (minimized === "true") {
      setSidebarMinimized(true);
    }
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setError("Token tidak ditemukan. Harap login terlebih dahulu.");
      try {
        const res = await fetch("http://localhost:8000/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        data.success ? setUsers(data.users) : setError(data.message);
      } catch {
        setError("Gagal mengambil data dari server.");
      }finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) || user.nama.toLowerCase().includes(search.toLowerCase() || user.kelas.toLowerCase().includes(search.toLowerCase())) || user.email.toLowerCase().includes(search.toLowerCase())  &&
      (filterRole === "all" || user.role === filterRole)
    );
    setFilteredUsers(filtered);
  }, [search, filterRole, users]);

  const openDeleteModal = (user: any) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };
  
  const handleToggleSidebar = () => {
    const newState = !sidebarMinimized;
    setSidebarMinimized(newState);
    localStorage.setItem("sidebarMinimized", newState.toString());
  };

  const handleEditUser = (user: any) => {
    setEditUser(user);
    setIsResetModalOpen(false); // Tutup modal reset
    setIsEditModalOpen(true); // Buka modal edit
  };
  
  const openEditModal = (user: any) => {
    setEditUser(user);
    setEditName(user.name);
    setEditNama(user.nama);
    setEditEmail(user.email);
    setEditKelas(user.kelas);
    setEditRole(user.role);
    setIsEditModalOpen(true);
  };

  const handleResetPassword = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    setEditUser(user);
    setIsResetModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8000/api/admin/users/${userToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
      setSuccess('Akun berhasil dihapus!');
      
    } catch (err) {
      alert("Gagal menghapus akun.");
      setIsDeleteModalOpen(false);
    }
  };
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // Call the logout API endpoint
      const res = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        // Clear token and redirect to login
        localStorage.removeItem("token");
        router.push("/");
      } else {
        console.error("Gagal logout:", data);
      }
    } catch (err) {
      console.error("Error saat logout:", err);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // <- Tambahkan ini
      },
      body: JSON.stringify({
        name,
        nama,
        email,
        password,
        role,
        kelas,
      }),
    });
    
    

    const data = await response.json();

    if (data.success) {
      setSuccess('Akun berhasil dibuat!');
      setName('');
      setNama('');
      setEmail('');
      setPassword('');
      setKelas('');
    } else {
      setError(data.message || 'Terjadi kesalahan');
    }
  };
  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:8000/api/admin/users", {
        name: newName,
        email: newEmail,
        password: "12345678", // default password
        role: newRole,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setUsers([...users, response.data.user]);
        setNewName('');
        setNewEmail('');
        setNewRole('murid');
        setIsModalOpen(false);
      } else {
        alert(response.data.message || "Gagal menambahkan akun.");
      }
    } catch (err) {
      alert("Terjadi kesalahan saat membuat akun.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
     
      {/* HEADER */}
      <div className=" fixed top-0 left-0 right-0 z-20 border-b-2 border-gray-200 bg-white flex items-center py-5 px-5 shadow-sm">
       <button
                 onClick={handleToggleSidebar}
                 className="text-2xl text-red-700 font-bold focus:outline-none"
               >
                 <BsWindowSidebar className='hover:shadow-red-600/50 hover:shadow-md transition duration-300 ease-in-out' />
               </button>
        <div className="mx-2 ml-5 bg-black h-14 w-0.5 opacity-50"></div>
        <div className="ml-3">
          <h1 className="text-black text-2xl font-semibold ">Kelola Akun</h1>
        </div>
        <div className="flex flex-1 justify-end space-x-4 mr-5">
          <Image src={logo} alt="Telkom Logo" width={200} height={50} />
        </div>
      </div>

      {/* SIDEBAR & MAIN CONTENT */}
      <div className="flex flex-1 mt-[80px]">
        {/* SIDEBAR */}
        <div className={`transition-all duration-300 fixed top-[105px] left-0 h-[calc(100vh-80px)] ${sidebarMinimized ? 'w-16' : 'w-64'} bg-white shadow-inner border-r p-5 z-20`}>
          <ul className="space-y-4 transition-all duration-300">
            <li>
              <Link href="/dashboard" className="text-gray-700 hover:text-red-700 font-medium block  ">
                {sidebarMinimized ? <MdSpaceDashboard /> : 'Dashboard'}
              </Link>
            </li>
            <li>
              <Link href="/manageakun" className="text-red-600 hover:text-red-700 font-medium block">
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

        <div className={`flex-1 p-6 mt-[20px] bg-gray-100 ${sidebarMinimized ? 'ml-16' : 'ml-64'} transition-all duration-300 `} >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Kelola Akun</h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className=" bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
               hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-md
               transition duration-300 ease-in-out px-4 py-2 rounded font-sans"
              >
                + Tambah Akun
              </button>
            </div>

            
            {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-700 mb-4">{success}</div>}

            <div className="flex gap-4 mb-4 ">
              <input
                type="text"
                placeholder="Cari akun..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-gray-100  px-3 py-2 rounded w-full shadow-md border-2  focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all"
              />
              <select
  value={filterRole}
  onChange={(e) => setFilterRole(e.target.value)}
  className="border border-gray-100 px-3 py-2 rounded shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
>
  <option value="all">Semua</option>
  <option value="admin">Admin</option>
  <option value="murid">Murid</option>
</select>

            </div>
<div className="rounded-lg">
            <table className="min-w-full border-collapse  rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 shadow-inner rounded-lg">
                  <th className="px-4 py-2 text-left">Nis</th>
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Kelas</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Tindakan</th>
                </tr>
              </thead>
              <tbody>
              {loading ? (
                    <tr>
                      <td colSpan="9" className="text-center p-5 text-gray-500">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                          <span>Memuat akun...</span>
                        </div>
                      </td>
                    </tr>
                  ) : 
                  filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b ">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.nama}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.kelas}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2 flex gap-2">
                    <button
                  onClick={() => openEditModal(user)}
                  className="bg-blue-700 text-white font-semibold shadow-md shadow-gray-500/50 
                  hover:bg-blue-600 hover:shadow-blue-700/50 hover:shadow-md
                  transition duration-300 ease-in-out px-3 py-1 rounded "
                  >
                  Edit
                </button>
                <button
                
                
                onClick={() => handleResetPassword(user.id)}
                
                className="bg-gray-700 text-white font-semibold shadow-md shadow-gray-500/50 
                hover:bg-gray-600 hover:shadow-gray-700/50 hover:shadow-md
                transition duration-300 ease-in-out px-3 py-1 rounded " > Reset
                </button>
                <button
  onClick={() => openDeleteModal(user)}
  className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
  hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-md
  transition duration-300 ease-in-out px-3 py-1 rounded"
>
  Hapus
</button>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-5 text-gray-500">Tidak ada akun</td>
                </tr>
              )}
              </tbody>
            </table>
                </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Akun</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const token = localStorage.getItem("token");

                try {
                  const response = await fetch(`http://localhost:8000/api/admin/users/${editUser.id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ name: editName, role: editRole }),
                  });

                  const data = await response.json();
                  if (data.success) {
                    const updated = users.map((user) =>
                      user.id === editUser.id ? { ...user, name: editName, role: editRole } : user
                    );
                    setUsers(updated);
                    setIsEditModalOpen(false);
                    setSuccess('Edit berhasil!');
                  } else {
                    setError(data.message || 'Gagal memperbarui pengguna');
                   
                  }
                } catch (error) {
                  alert("Terjadi kesalahan saat mengedit pengguna.");
                }
              }}
            >
              <div className="mb-4">
                <label className="block mb-2">Nis</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                  className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Nama</label>
                <input
                  type="text"
                  value={editNama}
                  onChange={(e) => setEditNama(e.target.value)}
                  required
                  className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="text"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  required
                  className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
                />
              </div>
 <div className="mb-4">
  <label className="block mb-2">Kelas</label>
  <select
    value={editKelas}
    onChange={(e) => setEditKelas(e.target.value)}
    required
    className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
  >
    <option value="">-- Pilih Kelas --</option>

    {/* Kelas X */}
    <option value="X RPL 1">X RPL 1</option>
    <option value="X RPL 2">X RPL 2</option>
    <option value="X RPL 3">X RPL 3</option>
    <option value="X RPL 4">X RPL 4</option>
    <option value="X TKJ 1">X TKJ 1</option>
    <option value="X TKJ 2">X TKJ 2</option>
    <option value="X TKJ 3">X TKJ 3</option>
    <option value="X TKJ 4">X TKJ 4</option>
    <option value="X TKJ 5">X TKJ 5</option>
    <option value="X TEL 1">X TEL 1</option>
    <option value="X TEL 2">X TEL 2</option>
    <option value="X PAR 1">X PAR 1</option>
    <option value="X PAR 2">X PAR 2</option>

    {/* Kelas XI */}
    <option value="XI RPL 1">XI RPL 1</option>
    <option value="XI RPL 2">XI RPL 2</option>
    <option value="XI RPL 3">XI RPL 3</option>
    <option value="XI RPL 4">XI RPL 4</option>
    <option value="XI TKJ 1">XI TKJ 1</option>
    <option value="XI TKJ 2">XI TKJ 2</option>
    <option value="XI TKJ 3">XI TKJ 3</option>
    <option value="XI TKJ 4">XI TKJ 4</option>
    <option value="XI TKJ 5">XI TKJ 5</option>
    <option value="XI TEL 1">XI TEL 1</option>
    <option value="XI TEL 2">XI TEL 2</option>
    <option value="XI PAR 1">XI PAR 1</option>
    <option value="XI PAR 2">XI PAR 2</option>

    {/* Kelas XII */}
    <option value="XII RPL 1">XII RPL 1</option>
    <option value="XII RPL 2">XII RPL 2</option>
    <option value="XII RPL 3">XII RPL 3</option>
    <option value="XII RPL 4">XII RPL 4</option>
    <option value="XII TKJ 1">XII TKJ 1</option>
    <option value="XII TKJ 2">XII TKJ 2</option>
    <option value="XII TKJ 3">XII TKJ 3</option>
    <option value="XII TKJ 4">XII TKJ 4</option>
    <option value="XII TKJ 5">XII TKJ 5</option>
    <option value="XII TEL 1">XII TEL 1</option>
    <option value="XII TEL 2">XII TEL 2</option>
    <option value="XII PAR 1">XII PAR 1</option>
    <option value="XII PAR 2">XII PAR 2</option>
  </select>
</div>
              <div className="mb-4">
                <label className="block mb-2">Role</label>
                <select
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                  required
                  className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
                >
                  <option value="murid">Murid</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-white border ring-gray-200 text-font-semibold shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
  hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-md
  transition duration-300 ease-in-out px-3 py-1 rounded"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isDeleteModalOpen && userToDelete && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Hapus Akun</h2>
      <p>Apakah kamu yakin ingin menghapus akun <strong>{userToDelete.name}</strong>?</p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => setIsDeleteModalOpen(false)}
          className="bg-white border ring-gray-200 text-font-semibold shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-2 rounded"
        >
          Batal
        </button>
        <button
          onClick={confirmDelete}
          className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
  hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-md
  transition duration-300 ease-in-out px-3 py-1 rounded"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
)}

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Tambah Akun Baru</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
          <label className="block mb-2">Nis</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full pl-3 py-3 border-2 shadow-inner rounded-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400  transition-all "
          />
        </div>
            <div className="mb-4">
          <label className="block mb-2">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full pl-3 py-3 border-2 shadow-inner rounded-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400  transition-all "
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-3 py-3 border-2 shadow-inner rounded-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400  transition-all"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-3 py-3 border-2 shadow-inner rounded-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400  transition-all"
          />
        </div>
   <div className="mb-4">
  <label className="block mb-2">Kelas</label>
  <select
    value={kelas}
    onChange={(e) => setKelas(e.target.value)}
    required
    className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
  >
    <option value="">-- Pilih Kelas --</option>

    {/* Kelas X */}
    <option value="X RPL 1">X RPL 1</option>
    <option value="X RPL 2">X RPL 2</option>
    <option value="X RPL 3">X RPL 3</option>
    <option value="X RPL 4">X RPL 4</option>
    <option value="X TKJ 1">X TKJ 1</option>
    <option value="X TKJ 2">X TKJ 2</option>
    <option value="X TKJ 3">X TKJ 3</option>
    <option value="X TKJ 4">X TKJ 4</option>
    <option value="X TKJ 5">X TKJ 5</option>
    <option value="X TEL 1">X TEL 1</option>
    <option value="X TEL 2">X TEL 2</option>
    <option value="X PAR 1">X PAR 1</option>
    <option value="X PAR 2">X PAR 2</option>

    {/* Kelas XI */}
    <option value="XI RPL 1">XI RPL 1</option>
    <option value="XI RPL 2">XI RPL 2</option>
    <option value="XI RPL 3">XI RPL 3</option>
    <option value="XI RPL 4">XI RPL 4</option>
    <option value="XI TKJ 1">XI TKJ 1</option>
    <option value="XI TKJ 2">XI TKJ 2</option>
    <option value="XI TKJ 3">XI TKJ 3</option>
    <option value="XI TKJ 4">XI TKJ 4</option>
    <option value="XI TKJ 5">XI TKJ 5</option>
    <option value="XI TEL 1">XI TEL 1</option>
    <option value="XI TEL 2">XI TEL 2</option>
    <option value="XI PAR 1">XI PAR 1</option>
    <option value="XI PAR 2">XI PAR 2</option>

    {/* Kelas XII */}
    <option value="XII RPL 1">XII RPL 1</option>
    <option value="XII RPL 2">XII RPL 2</option>
    <option value="XII RPL 3">XII RPL 3</option>
    <option value="XII RPL 4">XII RPL 4</option>
    <option value="XII TKJ 1">XII TKJ 1</option>
    <option value="XII TKJ 2">XII TKJ 2</option>
    <option value="XII TKJ 3">XII TKJ 3</option>
    <option value="XII TKJ 4">XII TKJ 4</option>
    <option value="XII TKJ 5">XII TKJ 5</option>
    <option value="XII TEL 1">XII TEL 1</option>
    <option value="XII TEL 2">XII TEL 2</option>
    <option value="XII PAR 1">XII PAR 1</option>
    <option value="XII PAR 2">XII PAR 2</option>
  </select>
</div>


        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
          >
            <option value="murid">Murid</option>
            <option value="admin">Admin</option>
          </select>
        </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white border ring-gray-200 text-font-semibold shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
  hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-md
  transition duration-300 ease-in-out px-3 py-1 rounded"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      { isResetModalOpen && editUser && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const token = localStorage.getItem("token");

          if (!newPassword) {
            alert("Password harus diisi!");
            return;
          }

          try {
            const response = await fetch(`http://localhost:8000/api/admin/users/${editUser.id}/reset-password`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ password: newPassword }),
            });

            const data = await response.json();
            if (data.success) {
              setUsers(
                users.map((user) =>
                  user.id === editUser.id ? { ...user, password: newPassword } : user
                )
              );
              setIsModalOpen(false);
              setNewPassword('');
              setSuccess('reset berhasil!');
            } else {
              setError(data.message || 'Password gagal direset');
            }
          } catch (error) {
            setError(data.message || 'Password gagal direset');
          }
        }}
      >
        <div className="mb-4">
          <label className="block mb-2">Password Baru</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full border-2 border-gray-200 px-3 py-2 rounded shadow-inner focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex justify-end gap-3">
        <button
  type="button"
  onClick={() => {
    setIsResetModalOpen(false);
    setEditUser(null);
    setNewPassword('');
  }}
  className="bg-white border ring-gray-200 text-font-semibold shadow-custom shadow-gray-300/50 
  hover:shadow-gray-300/50 hover:shadow-lg
  transition duration-300 ease-in-out  px-4 py-2 rounded"
>
  Batal
</button>

          <button
            type="submit"
            className="bg-red-700 text-white font-semibold shadow-md shadow-gray-500/50 
  hover:bg-red-600 hover:shadow-red-700/50 hover:shadow-md
  transition duration-300 ease-in-out px-3 py-1 rounded"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>

    
    
    
  );
}
