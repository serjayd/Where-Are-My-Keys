import FloatingIconsBackground from "@/components/shared/FloatingIconsBackground";
import BannerSection from "@/pages/home/BannerSection";
import HeroSection from "@/pages/home/HeroSection";
import StorySection from "@/pages/home/StorySection";
import TrailerSection from "@/pages/home/TrailerSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative">
        <FloatingIconsBackground />
        <StorySection />
        <TrailerSection />
      </div>
      <BannerSection />
    </>
  );
}
