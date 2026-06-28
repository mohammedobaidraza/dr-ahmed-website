"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredentialBar from "@/components/CredentialBar";
import ProceduresSection from "@/components/ProceduresSection";
import RoboticProcess from "@/components/RoboticProcess";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import ScrollToTop from "@/components/ScrollToTop";
import LocationsSection from "@/components/LocationsSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <LocationsSection />
        <ProceduresSection />
        <RoboticProcess />
        <SocialProof />
        <FAQSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
