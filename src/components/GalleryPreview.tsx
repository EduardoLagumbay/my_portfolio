import Link from "next/link";
import { photos } from "@/data/photos";

export default function GalleryPreview() {
  // Show only first 6 photos
  const displayPhotos = photos.slice(0, 6);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Photo <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Captured moments and memories from the educational tour experience.
          </p>
        </div>

        {/* Photo Grid - Masonry-like layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-2xl group image-hover ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Show real image if src exists, else fallback to gradient/emoji */}
              {photo.src ? (
                <div
                  className={`$ {
                    index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                  } bg-black/10 flex items-center justify-center`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div
                  className={`$ {
                    index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                  } bg-gradient-to-br ${photo.gradient} flex items-center justify-center`}
                >
                  <div className="text-center p-4">
                    <span className="text-5xl md:text-6xl block mb-2">
                      {photo.emoji}
                    </span>
                    <span className="text-white/80 text-sm font-medium">
                      {photo.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-sm md:text-base">
                    {photo.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1">
                    {photo.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            View Full Gallery
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
