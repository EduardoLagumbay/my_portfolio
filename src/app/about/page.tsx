import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | My Portfolio",
  description: "Learn more about me and my educational tour experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          
        {/* Profile Image */}
        <div className="mb-6 animate-fade-in-up animation-delay-100">
          <Image
            src="/gallery/wardo.jpg"
            alt="Profile"
            width={180}
            height={180}
            className="mx-auto rounded-full border-4 border-primary/20 shadow-xl object-cover"
            priority
          />
        </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I&apos;m{" "}
            <span className="gradient-text">Eduardo Jr Lagumbay</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            A passionate musician who dwelve into the world of programming.
          </p>
        </div>

        {/* About Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-16">
          <div className="bg-card-bg rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              About This Portfolio
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              This portfolio is a personal documentation of my educational tour
              experience. It serves as both a learning journal and a showcase of
              the incredible moments, insights, and achievements gathered
              throughout this transformative journey.
            </p>
            <p className="text-secondary leading-relaxed">
              Through journal entries, certificates, and photographs, I hope to
              share not just what I learned, but how these experiences shaped my
              perspective and aspirations for the future.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-card-bg rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">HTML5</h3>
                  <p className="text-sm text-secondary">
                    Markup & Structure
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">CSS3</h3>
                  <p className="text-sm text-secondary">
                    Styling & Layouts
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Next.js</h3>
                  <p className="text-sm text-secondary">
                    React Framework
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tailwind CSS</h3>
                  <p className="text-sm text-secondary">
                    Utility-first CSS
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">TypeScript</h3>
                  <p className="text-sm text-secondary">
                    Type-safe JavaScript
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Java</h3>
                  <p className="text-sm text-secondary">
                    Backend Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="bg-card-bg rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Skills & Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Photography",
                "Travelling",
                "Working Problem Solving",
                "Environmental Conservation",
                "Music",
                "Technology",
                "Leadership",
                "Community Service",
                "Team Player",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-muted text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Let&apos;s Connect
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              I&apos;m always excited to connect with fellow learners, educators, and
              anyone passionate about education and growth. Feel free to reach
              out!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:eduardojr.lagumbay@hcdc.edu.ph"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card-bg border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all"
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Read My Journal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
