import Hero from "@/components/Hero";
import JournalPreview from "@/components/JournalPreview";
import CertificatesPreview from "@/components/CertificatesPreview";
import GalleryPreview from "@/components/GalleryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <JournalPreview />
      <CertificatesPreview />
      <GalleryPreview />
    </>
  );
}
