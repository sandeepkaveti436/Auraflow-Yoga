"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storySlides = [
  {
    image: "/images/story-breathe.png",
    title: "Breathe In",
    desc: "Every journey begins with a single, conscious breath. Inhale clarity, exhale doubt.",
  },
  {
    image: "/images/story-balance.png",
    title: "Find Balance",
    desc: "Stability isn't a destination; it's a practice of staying centered amidst the flow.",
  },
  {
    image: "/images/story-transform.png",
    title: "Transform",
    desc: "Through discipline and grace, witness the evolution of your mind, body, and soul.",
  },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".story-slide");
      const dots = gsap.utils.toArray(".story-dot");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // Calculate end based on slide count
          end: () => `+=${slides.length * 100}%`, 
          scrub: 1,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculates on mobile resize/rotate
          // This forces the pinned element to stay exactly 100% wide
          onRefresh: (self) => {
            if (self.pin) {
              self.pin.style.width = "100%";
              self.pin.style.left = "0";
            }
          }
        },
      });

      slides.forEach((slide: any, i: number) => {
        if (i > 0) {
          // Slide Reveal
          tl.fromTo(
            slide,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 1 },
            "+=0.2"
          );

          // Image Parallax
          tl.fromTo(
            slide.querySelector("img"),
            { y: 50, scale: 1.1 },
            { y: 0, scale: 1, ease: "none", duration: 1 },
            "<"
          );
        }

        // Dot Highlighting
        tl.to(dots[i], {
          backgroundColor: "#d9a4ea",
          scale: 1.4,
          borderColor: "#d9a4ea",
          duration: 0.3
        }, i === 0 ? "0" : "-=0.5");

        if (i < slides.length - 1) {
          tl.to(dots[i], { backgroundColor: "transparent", scale: 1, duration: 0.3 });
        }

        // Text Content Fade
        tl.fromTo(
          slide.querySelector(".story-content"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        );

        if (i < slides.length - 1) {
          tl.to(slide.querySelector(".story-content"), {
            opacity: 0,
            y: -30,
            duration: 0.5,
            delay: 0.5,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    /* overflow-hidden on the section is mandatory to stop the horizontal shift */
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-black"
      style={{ touchAction: "none" }} // Prevents jitter on some mobile browsers
    >
      {/* 
          1. Use w-full instead of w-screen to avoid scrollbar math errors 
          2. h-[100dvh] handles mobile address bars perfectly 
      */}
      <div 
        ref={pinRef} 
        className="relative h-[100dvh] w-full overflow-hidden"
      >
        
        {/* PROGRESS DOTS (Exactly as your image) */}
        <div className="absolute right-5 top-1/2 z-[60] flex -translate-y-1/2 flex-col gap-6 md:right-10">
          {storySlides.map((_, i) => (
            <div 
              key={i} 
              className="story-dot h-2.5 w-2.5 rounded-full border-2 border-white/30 transition-all duration-300" 
            />
          ))}
        </div>

        {storySlides.map((slide, index) => (
          <div
            key={index}
            className="story-slide absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            {/* FORCE IMAGE TO FILL 100% WITHOUT OVERFLOW */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
            
            <div className="story-content relative z-20 flex w-full max-w-4xl flex-col items-center px-10 text-center">
              <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#d9a4ea] md:text-xs font-medium">
                Chapter 0{index + 1}
              </p>
              
              <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-7xl lg:text-9xl">
                {slide.title}
              </h2>
              
              <div className="my-5 h-[1px] w-12 bg-[#d9a4ea]/40 md:w-20" />
              
              <p className="max-w-[260px] text-[13px] font-light leading-relaxed text-gray-300 sm:max-w-xs md:max-w-md md:text-lg">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}