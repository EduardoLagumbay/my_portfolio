"use client";

import { useState } from "react";
import { photos, Photo } from "@/data/photos";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [page, setPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const PHOTOS_PER_PAGE = 8;

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const totalPages = Math.ceil(filteredPhotos.length / PHOTOS_PER_PAGE);

  const paginatedPhotos = filteredPhotos.slice(
    (page - 1) * PHOTOS_PER_PAGE,
    page * PHOTOS_PER_PAGE
  );

  const changePage = (newPage: number) => {
    if (newPage === page) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setPage(newPage);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Photo <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            A visual journey through my educational tour experience. Each photo
            captures a moment of discovery, learning, and joy.
          </p>
        </div>

        {/* Photo count & Pagination */}
        <div className="flex flex-col items-center mb-8 gap-2">
          <p className="text-center text-secondary">
            Showing {paginatedPhotos.length} of {filteredPhotos.length} photos
            (Page {page} of {totalPages})
          </p>

          {totalPages > 1 && (
            <div className="flex gap-2">
              <button
                className="px-3 py-1 rounded bg-muted text-secondary disabled:opacity-50"
                onClick={() => changePage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded ${
                    page === i + 1
                      ? "bg-primary text-white"
                      : "bg-muted text-secondary"
                  }`}
                  onClick={() => changePage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="px-3 py-1 rounded bg-muted text-secondary disabled:opacity-50"
                onClick={() => changePage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Photo Grid */}
        <div
          key={page}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
            transition-all duration-300 ease-in-out
            ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          {paginatedPhotos.map((photo, index) => {
            const globalIndex = (page - 1) * PHOTOS_PER_PAGE + index;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer image-hover ${
                  globalIndex === 0 || globalIndex === 5
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                {photo.src && (
                  <div className="aspect-square bg-black/10 flex items-center justify-center">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-sm md:text-base">
                    {photo.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1">
                    {photo.location}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {photo.date}
                  </p>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>

            <div
              className="max-w-4xl w-full bg-card-bg rounded-2xl overflow-hidden animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black/10">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedPhoto.title}
                </h2>
                <p className="text-secondary mb-4">
                  {selectedPhoto.description}
                </p>
                <p className="text-sm text-secondary">
                  {selectedPhoto.location} • {selectedPhoto.date}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
