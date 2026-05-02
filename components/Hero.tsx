"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Award, Flower2, BarChart3, ArrowRight, Play } from "lucide-react";

const features = [
  { 
    icon: <Award size={18} strokeWidth={1.5} />, 
    title: "Expert Guidance", 
    copy: "Certified" 
  },
  { 
    icon: <Flower2 size={18} strokeWidth={1.5} />, 
    title: "Holistic Flow", 
    copy: "Mind & Body" 
  },
  { 
    icon: <BarChart3 size={18} strokeWidth={1.5} />, 
    title: "All Levels", 
    copy: "Beginner+" 
  },
];

export default function Hero({ startAnimation }: { startAnimation: boolean }) {
  const containerRef = useRef<HTMLElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimated.current) return;

    const ctx = gsap.context(() => {
      hasAnimated.current = true;
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(imageWrapperRef.current,
        { scale: 1.6, filter: "blur(15px)" },
        { scale: 1, filter: "blur(0px)", duration: 2.8, ease: "power2.out" }
      );

      tl.fromTo(".hero-title-wipe",
        { clipPath: "inset(100% 0% 0% 0%)", y: 30 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.5, stagger: 0.2 },
        "-=2.3"
      );

      tl.from(".hero-copy-box", { opacity: 0, x: -30, duration: 1.2 }, "-=1.5");
      tl.from(".hero-feature", { opacity: 0, y: 15, stagger: 0.1, duration: 0.8 }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[#eee2d2] text-[#4a3933]">
      
      {/* BACKGROUND IMAGE - Optimized positioning for Mobile */}
      <div ref={imageWrapperRef} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-balance-1.png"
          alt="Yoga Meditating"
          fill
          priority
          className="object-cover object-[75%_center] md:object-center"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3eadc]/60 via-[#efe1cf]/30 to-[#f3eadc]/80 md:bg-gradient-to-r md:from-[#f3eadc]/80 md:to-transparent z-[1]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1600px] items-center px-4 py-10 md:px-12 lg:px-24 lg:grid lg:grid-cols-[48%_52%]">
        
        {/* HERO CONTENT BOX - Fully Responsive */}
        <div className="hero-copy-box w-full rounded-[24px] md:rounded-[32px] border border-white/80 bg-[#f4eadc]/40 p-5 md:p-9 shadow-[0_20px_60px_rgba(90,52,53,0.1)] backdrop-blur-xl max-w-lg lg:max-w-xl mx-auto lg:mx-0">
          
          <p className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#9b6a49]">
            <span className="h-px w-8 md:w-10 bg-[#9b6a49]" />
            Welcome to Your Journey
          </p>

          <div className="overflow-hidden">
            <h1 className="hero-title-wipe mt-3 md:mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-[#5a403a] sm:text-5xl md:text-[62px]">
              Find Balance.<br />Feel Alive.
            </h1>
          </div>

          <p className="mt-4 md:mt-5 text-sm md:text-base leading-relaxed text-[#5a403a]/85">
            Discover the ancient art of yoga and unlock the harmony between mind, body & soul.
          </p>

          {/* BUTTONS - Stack on mobile if needed */}
          <div className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-3 md:gap-4">
            
            <a
              href="#programs"
              className="group relative flex h-[43px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#5a3435] px-6 text-[13px] font-bold tracking-wide text-white shadow-lg transition-all duration-500 hover:bg-[#432627]"
            >
              <span className="relative z-10">Explore Classes</span>
              <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1.5">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
            </a>

            <a
              href="#about"
              className="group flex h-[43px] items-center justify-center gap-3 rounded-full border border-[#5a403a]/20 bg-white/30 px-6 text-[13px] font-bold tracking-wide text-[#4a3933] backdrop-blur-md transition-all duration-500 hover:bg-white/60"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5a3435] text-white transition-transform duration-500 group-hover:scale-110">
                <Play size={11} fill="currentColor" className="ml-0.5" />
              </div>
              <span>Watch Introduction</span>
            </a>
          </div>

          {/* COMPACT FEATURE GRID - 3 Columns on all devices */}
          <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#5a403a]/10 pt-6">
            {features.map((feature) => (
              <div 
                className="hero-feature flex flex-col items-center text-center px-1" 
                key={feature.title}
              >
                <div className="mb-2 grid h-9 w-9 md:h-10 md:w-10 place-items-center rounded-full bg-white/50 text-[#5a403a] shadow-sm backdrop-blur-sm">
                  {feature.icon}
                </div>
                <p className="text-[10px] md:text-[12px] font-bold leading-tight text-[#4a3933]">
                  {feature.title}
                </p>
                <p className="mt-0.5 hidden xs:block text-[8px] md:text-[9px] uppercase tracking-wider text-[#5a403a]/60">
                  {feature.copy}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}