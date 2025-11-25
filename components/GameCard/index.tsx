// components/GameCard.jsx

import React from 'react';
import { Card } from 'antd'; // Pastikan Antd sudah terinstal

const GameCard = ({ product }) => {
  const handleClick = () => {
    if (product.redirectLink) {
      window.location.href = product.redirectLink;
    }
  };

  const mainTitlePart = "MOBILE";
  const secondTitlePart = "LEGENDS";

  return (
    <div className="w-full max-w-sm">
      <Card
        bordered={false}
        className={`shadow-lg rounded-lg bg-white overflow-hidden transition-all duration-300 ${product.redirectLink ? 'cursor-pointer hover:shadow-xl' : ''}`}
        style={{ width: 300, padding: 0 }}
        bodyStyle={{ padding: 0 }}
        onClick={handleClick}
      >
        {/* Bagian Atas: Gambar dan Judul */}
        <div className="relative h-64 bg-gray-200 overflow-hidden border-b border-gray-300">

          {/* Area Gambar - Menggunakan tag <img> biasa untuk mempermudah styling rasio gambar */}
          {/* Anda bisa menggantinya dengan <Image /> dari 'next/image' jika Anda telah menentukan width dan height */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${product.logoUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>

          {/* Teks "MOBILE LEGENDS" */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 bg-gradient-to-t from-black/60 to-transparent">
            <div className="relative mb-2">
              <div className="absolute w-full h-px bg-gray-400 opacity-50 top-0 left-0 transform -translate-y-1/2"></div>
              <div className="absolute w-full h-px bg-gray-400 opacity-50 bottom-0 left-0 transform translate-y-1/2"></div>

              <h2 className="text-4xl font-extrabold text-white tracking-wider leading-none">
                {mainTitlePart}
              </h2>
              <p className="text-xl font-bold italic text-white/90 -mt-1 ml-4">
                {secondTitlePart}
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Informasi Game */}
        <div className="p-4 bg-white border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500">
            {product.subTitle}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default GameCard;