import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          My Personal Porfolio
        </div>
        
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
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
          <span className="block gradient-text">Eduardo Jr "Spike" Lagumbay</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          Hi, I’m a third-year Bachelor of Science in Information Technology student with a strong interest in technology, 
          problem-solving, and continuous learning. I am motivated to enhance my technical skills, 
          adapt to new technologies, and gain hands-on experience that will prepare me for a successful career in the IT industry.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Link
            href="/journal"
            className="px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Read My Journal
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 rounded-xl bg-card-bg border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            View Gallery
          </Link>
        </div>
        
        {/* Download CV Button */}
        <div className="mt-16 animate-fade-in-up animation-delay-400">
          <a
            href="/gallery/Lagumbay, Eduardo Jr_CV.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download My CV
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
