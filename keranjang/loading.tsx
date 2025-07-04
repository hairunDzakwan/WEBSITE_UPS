'use client';
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-red-700 text-4xl mb-4" />
        <p className="text-red-800 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
