import Link from "next/link";
import { journalEntries, handwrittenEntries } from "@/data/journal";
import JournalGallery from "@/components/JournalGallery";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Journal | My Portfolio",
  description: "Personal journal entries documenting my learning journey during the educational tour.",
};

export default function JournalPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journal</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Personal reflections, insights, and stories from my educational tour
            experience. Each entry captures moments of learning and growth.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative mb-32">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {journalEntries.map((entry, index) => (
              <div
                key={entry.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center text-2xl z-10 overflow-hidden border-4 border-card-bg">
                  {entry.image && entry.image.trim().startsWith("/") ? (
                    <Image
                      src={entry.image.replace(/^\/public/, "")}
                      alt="Company Logo"
                      width={48}
                      height={48}
                      className="object-contain w-10 h-10"
                    />
                  ) : (
                    entry.image
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Link href={`/journal/${entry.id}`}>
                    <article className="bg-card-bg rounded-2xl border border-border p-6 card-hover cursor-pointer relative group">
                      
                      {/* Mobile logo/emoji */}
                      <div className="md:hidden w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4 overflow-hidden">
                        {entry.image && entry.image.trim().startsWith("/") ? (
                          <Image
                            src={entry.image.replace(/^\/public/, "")}
                            alt="Company Logo"
                            width={48}
                            height={48}
                            className="object-contain w-10 h-10"
                          />
                        ) : (
                          entry.image
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-2 text-sm text-secondary mb-3">
                        <span className="flex items-center gap-1">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {entry.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {entry.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {entry.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-secondary text-sm line-clamp-3 mb-4">
                        {entry.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-muted text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read more */}
                      <span className="inline-flex items-center text-primary font-medium text-sm">
                        Read Full Entry
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </article>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Single Card Handwritten Notes Gallery */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Handwritten <span className="gradient-text">Notes</span>
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Snapshots of my actual written journal entries and sketches during the tour.
            </p>
          </div>

          {/* Use the new Client Component */}
          <JournalGallery entries={handwrittenEntries} />

        </div>

      </div>
    </div>
  );
}