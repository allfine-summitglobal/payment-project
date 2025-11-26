"use client"
import { useState, useEffect, useCallback } from 'react';

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetInterval, setResetInterval] = useState(0);

  // Data banner voucher game
  const banners = [
    {
      id: 1,
      title: "Top Up Game Tercepat",
      subtitle: "Voucher game favorit kamu tersedia 24/7 dengan proses instan",
      bgColor: "from-blue-600 to-purple-700",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Promo Spesial 30%",
      subtitle: "Beli voucher Mobile Legends, Free Fire, PUBG dan dapatkan bonus diamond!",
      bgColor: "from-red-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Harga Termurah Se-Indonesia",
      subtitle: "Jaminan harga paling murah untuk semua voucher game populer",
      bgColor: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Cashback Hingga 50rb",
      subtitle: "Top up sekarang dan dapatkan cashback untuk pembelian berikutnya",
      bgColor: "from-orange-500 to-yellow-500",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1200&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Payment Lengkap & Aman",
      subtitle: "Bayar dengan QRIS, E-Wallet, Transfer Bank atau Pulsa - 100% Aman",
      bgColor: "from-indigo-600 to-blue-700",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=1200&h=400&fit=crop"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setResetInterval(prev => prev + 1);
  };

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, resetInterval]);

  // Handle drag untuk desktop dan mobile
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -75) {
      nextSlide();
      setResetInterval(prev => prev + 1);
    } else if (movedBy > 75) {
      prevSlide();
      setResetInterval(prev => prev + 1);
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  return (
    <div className="">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
        {/* Banner Container */}
        <div
          className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgColor}`}>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>

              <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="text-white space-y-2 sm:space-y-3 md:space-y-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight animate-fade-in leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-light animate-fade-in-delay leading-relaxed">
                    {banner.subtitle}
                  </p>
                  <button className="mt-3 sm:mt-4 md:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-white text-gray-900 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-8 h-2 sm:h-3'
                  : 'bg-white/50 w-2 sm:w-3 h-2 sm:h-3 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}