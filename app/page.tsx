"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cursor from "@/components/Cursor";
import LenisProvider from "@/components/LenisProvider";
import Animations from "@/components/Animations";
import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { Analytics } from '@vercel/analytics/next';


export default function Home() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <LenisProvider>
      {/* Splash screen stays until complete */}
      {!isSplashFinished && (
        <SplashScreen onComplete={() => setIsSplashFinished(true)} />
      )}
      
      <Cursor />
      <Animations />
      <Navbar />

      <main style={{ visibility: isSplashFinished ? "visible" : "hidden" }}>
        {/* We keep Hero mounted but use the prop to trigger the animation once */}
        <Hero startAnimation={isSplashFinished} />
        
        {/* Only show other sections after splash to save performance */}
        {isSplashFinished && (
          <>
            <About />
            <StorySection />
            <Programs />
            <Pricing />
            <Gallery />
            <Footer />
           < Analytics />
          </>
        )}
      </main>
    </LenisProvider>
  );
}