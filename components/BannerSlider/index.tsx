"use client"
import { useState, useEffect, useCallback } from 'react';

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetInterval, setResetInterval] = useState(0);

  // Data banner - ganti dengan data Anda
  const banners = [
    {
      id: 1,
      title: "Selamat Datang",
      subtitle: "Temukan produk terbaik untuk kebutuhan Anda",
      bgColor: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Diskon Spesial",
      subtitle: "Dapatkan diskon hingga 50% untuk produk pilihan",
      bgColor: "from-pink-500 to-rose-600",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Koleksi Terbaru",
      subtitle: "Jelajahi koleksi terbaru kami yang menarik",
      bgColor: "from-green-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Gratis Ongkir",
      subtitle: "Nikmati gratis ongkir untuk pembelian minimal",
      bgColor: "from-orange-500 to-amber-600",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop"
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
    setResetInterval(prev => prev + 1); // Reset interval
  };

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, resetInterval]); // Dependency pada resetInterval untuk reset timer

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
      setResetInterval(prev => prev + 1); // Reset interval
    } else if (movedBy > 75) {
      prevSlide();
      setResetInterval(prev => prev + 1); // Reset interval
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Banner Container */}
        <div
          className="relative h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing"
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

              <div className="relative h-full flex items-center justify-center text-center px-8">
                <div className="text-white space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto animate-fade-in-delay">
                    {banner.subtitle}
                  </p>
                  <button className="mt-6 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-white w-8 h-3'
                  : 'bg-white/50 w-3 h-3 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        <p>Drag/geser untuk navigasi • Auto-slide setiap 5 detik</p>
      </div>
    </div>
  );
}