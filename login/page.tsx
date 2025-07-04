'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/app/public/logo-telkom-schools 1.png";
import { FaKey, FaUser } from "react-icons/fa";
import LoadingPage from "../components/LoadingPage";
export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const response = await login(form);

    if (response) {
      localStorage.setItem("token", response.access_token);

      if (response.user.role === "murid") {
        router.push("/daftar");
      } else if (response.user.role === "admin") {
        router.push("/dashboard");
      } else {
        setErrorMessage("Role tidak valid");
      }
    } else {
      setErrorMessage("Login gagal. Cek email dan password.");
    }
  };
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      localStorage.removeItem('token');
  
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // tampilkan loading selama 2 detik
  
      return () => clearTimeout(timer);
    }, []);
    if (isLoading) return <LoadingPage />;

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <div className="border-b-2 border-black">
        <div className="py-6 px-4 sm:px-10">
          <Image src={Navbar} alt="logo" width={240} quality={100} />
        </div>
      </div>

      {/* Form Login */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-10">
        <h1 className="text-4xl font-bold mb-8">Masuk</h1>
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-5 border-2 shadow-inner rounded-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 pl-12 transition-all "
            />
            <FaUser className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Kata Sandi"
              value={form.password}
              onChange={handleChange}
                     className="w-full px-5 py-5 border-2 shadow-inner rounded-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 pl-12 transition-all "
            />
            <FaKey className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-5 bg-red-600 text-white font-bold rounded-lg shadow-blue-200 shadow-md hover:bg-red-700 hover:shadow-red-600/50 hover:shadow-xl transition duration-300 ease-in-out"
          >
            MASUK
          </button>
        </form>
      </div>
    </div>
  );
}
