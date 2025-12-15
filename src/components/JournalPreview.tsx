import Link from "next/link";
import { journalEntries } from "@/data/journal";

export default function JournalPreview() {
  // Show only the 3 most recent entries
  const recentEntries = journalEntries.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Journal Entries</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Personal reflections and insights from my educational tour
            experience.
          </p>
        </div>

        {/* Journal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEntries.map((entry, index) => (
            <article
              key={entry.id}
              className="bg-card-bg rounded-2xl border border-border overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={entry.image} alt={entry.title} className="text-6xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-secondary mb-3">
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
                  <span>{entry.date}</span>
                  <span className="mx-2">•</span>
                  <span>{entry.location}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {entry.title}
                </h3>

                <p className="text-secondary text-sm line-clamp-3 mb-4">
                  {entry.excerpt}
                </p>

                <Link
                  href={`/journal/${entry.id}`}
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                >
                  Read More
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
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Entries
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
