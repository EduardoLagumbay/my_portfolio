import { certificates } from "@/data/certificates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | My Portfolio",
  description: "Recognition and achievements earned throughout my educational tour journey.",
};

export default function CertificatesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Recognition and achievements earned throughout my educational tour
            journey. Each certificate represents a milestone in my learning path.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card-bg rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Certificate Header */}
              <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-6">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="cert-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                      <circle cx="10" cy="10" r="2" fill="currentColor" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#cert-pattern)" />
                  </svg>
                </div>

                {/* eye icon */}
                {cert.imageUrl && (
                  <a
                    href={cert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Certificate Image"
                    className="absolute top-4 left-4 p-2 rounded-full bg-card-bg/90 text-secondary hover:text-primary hover:bg-card-bg transition-all shadow-sm z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </a>
                )}

                {/* Badge icon */}
                <div className="relative w-16 h-16 rounded-xl bg-card-bg shadow-lg flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>

                {/* Category badge  */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card-bg/90 text-xs font-medium text-primary">
                  {cert.category}
                </span>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-secondary mb-4">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-secondary text-sm mb-4">{cert.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                    Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-secondary pt-4 border-t border-border">
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
                  <span>Issued: {cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}