"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredentialBar from "@/components/CredentialBar";
import ProceduresSection from "@/components/ProceduresSection";
import RoboticProcess from "@/components/RoboticProcess";
import RecoveryTimeline from "@/components/RecoveryTimeline";
import SocialProof from "@/components/SocialProof";
import PatientQuiz from "@/components/PatientQuiz";
import FAQSection from "@/components/FAQSection";
import ScrollToTop from "@/components/ScrollToTop";
import LocationsSection from "@/components/LocationsSection";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection onOpenVideo={() => setVideoOpen(true)} />
        <LocationsSection />
        <ProceduresSection />
        <RoboticProcess />
        <RecoveryTimeline />
        <SocialProof />
        <FAQSection />
        <PatientQuiz />
      </main>
      <Footer />
      <ScrollToTop />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
