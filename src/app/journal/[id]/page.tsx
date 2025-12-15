
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalEntries } from "@/data/journal";
import type { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return journalEntries.map((entry) => ({
    id: entry.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const entry = journalEntries.find((e) => e.id === id);

  if (!entry) {
    return {
      title: "Entry Not Found | My Portfolio",
    };
  }

  return {
    title: `${entry.title} | Journal | My Portfolio`,
    description: entry.excerpt,
  };
}

export default async function JournalEntryPage({ params }: Props) {
  const { id } = await params;
  const entry = journalEntries.find((e) => e.id === id);

  if (!entry) {
    notFound();
  }

  const currentIndex = journalEntries.findIndex((e) => e.id === id);
  const prevEntry = currentIndex > 0 ? journalEntries[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < journalEntries.length - 1
      ? journalEntries[currentIndex + 1]
      : null;

  return (
    <div className="pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Journal
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Logo or Emoji */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mb-6 overflow-hidden">
            {entry.image && entry.image.trim().startsWith("/") ? (
              <Image src={entry.image.replace(/^\/public/, "")} alt="Company Logo" width={80} height={80} className="object-contain w-16 h-16" />
            ) : (
              entry.image
            )}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-secondary mb-4">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {entry.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-secondary prose-strong:text-foreground prose-li:text-secondary">
          {entry.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }
            if (paragraph.startsWith("**")) {
              return (
                <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n");
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.match(/^\d\./)) {
              const items = paragraph.split("\n");
              return (
                <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevEntry ? (
              <Link
                href={`/journal/${prevEntry.id}`}
                className="flex-1 p-4 rounded-xl border border-border hover:border-primary hover:bg-muted/50 transition-all group"
              >
                <div className="flex items-center gap-2 text-secondary text-sm mb-1">
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Previous Entry
                </div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {prevEntry.title}
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextEntry ? (
              <Link
                href={`/journal/${nextEntry.id}`}
                className="flex-1 p-4 rounded-xl border border-border hover:border-primary hover:bg-muted/50 transition-all group text-right"
              >
                <div className="flex items-center justify-end gap-2 text-secondary text-sm mb-1">
                  Next Entry
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {nextEntry.title}
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </nav>
      </article>
    </div>
  );
}
