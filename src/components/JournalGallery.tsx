"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { HandwrittenEntry } from "@/data/journal";

interface JournalGalleryProps {
  entries: HandwrittenEntry[];
}

export default function JournalGallery({ entries }: JournalGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!entries || entries.length === 0) return null;

  const openGallery = () => {
    setIsOpen(true);
    setCurrentIndex(0); 
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % entries.length);
  }, [entries.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + entries.length) % entries.length);
  }, [entries.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  const currentEntry = entries[currentIndex];

  return (
    <>
      {/* THUMBNAIL VIEW */}
      <div className="flex justify-center">
        <div 
          onClick={openGallery}
          className="relative w-full max-w-sm aspect-[3/4] cursor-pointer group"
        >
          {/* Stack effect layers */}
          {entries.length > 1 && (
            <>
              <div className="absolute top-2 -right-2 w-full h-full bg-card-bg border border-border rounded-2xl transform rotate-3 opacity-60 scale-95 z-0" />
              <div className="absolute top-1 -right-1 w-full h-full bg-card-bg border border-border rounded-2xl transform rotate-1 opacity-80 scale-[0.98] z-10" />
            </>
          )}

          {/* Main Cover Card */}
          <div className="relative w-full h-full bg-card-bg rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all z-20">
            <Image
              src={entries[0].image}
              alt={entries[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                View Gallery ({entries.length})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button 
            onClick={closeGallery}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center">
            
            {/* Previous Button */}
            {entries.length > 1 && (
              <button 
                onClick={prevImage}
                className="absolute left-0 md:-left-12 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* The Image */}
            <div className="relative w-full h-full">
              <Image
                src={currentEntry.image}
                alt={currentEntry.alt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            {/* Next Button */}
            {entries.length > 1 && (
              <button 
                onClick={nextImage}
                className="absolute right-0 md:-right-12 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Counter Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
              {currentIndex + 1} / {entries.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}