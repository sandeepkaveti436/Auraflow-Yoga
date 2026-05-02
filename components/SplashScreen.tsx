"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Final fade out of the white background
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              setHidden(true);
              onComplete(); // Triggers Hero Section animation
            },
          });
        },
      });

      // Sequence:
      // 1. Logo Wipe Up (Clip-path reveal)
      tl.fromTo(
        logoRef.current,
        { y: 100, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5, // Initial pause on white screen
        },
      );

      // 2. Brand Name & Tagline Appear
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
        "-=0.6", // Overlaps slightly with logo animation
      );

      // 3. Hold for visibility before transition
      tl.to({}, { duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <div ref={logoRef} className="mb-8">
          <Image
            src="/images/logo-yoga.png"
            alt="AuraFlow Yoga logo"
            width={180}
            height={180}
            priority
            className="h-32 w-32 md:h-44 md:w-44 object-contain"
          />
        </div>

        {/* Text Container */}
        <div ref={textRef} className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-black tracking-tight">
            AuraFlow Yoga
          </h1>
          <p className="mt-3 text-xs md:text-sm tracking-[0.5em] text-gray-400">
            Breathe into balance
          </p>
        </div>
      </div>
    </div>
  );
}