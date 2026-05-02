"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { heroPoster, heroVideo } from "./media";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 12, suffix: "k+", label: "Practitioners" },
  { value: 48, suffix: "", label: "Master classes" },
  { value: 4.9, suffix: "★", label: "Studio rating", decimals: 1 },
];

export default function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 28,
        filter: "blur(18px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 62%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".about-number").forEach((number) => {
        const end = Number(number.dataset.value);
        const decimals = Number(number.dataset.decimals || 0);
        const suffix = number.dataset.suffix || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 58%",
          },
          onUpdate: () => {
            number.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020612] px-6 py-28 text-center text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,115,232,0.38),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="about-reveal mb-10 text-sm font-semibold uppercase tracking-[0.55em] text-[#d99ff0]">
          The Aura
        </p>

        <h2 className="about-reveal mx-auto max-w-4xl font-serif text-6xl leading-tight md:text-[78px]">
          An energy you can <span className="text-[#c58add]">feel.</span>
        </h2>

        <p className="about-reveal mx-auto mt-8 max-w-2xl text-xl font-semibold leading-8 text-white/75">
          Step inside a living field of breath and light. Every pose,
          every pause, every sound — designed in harmony with your nervous system.
        </p>

        <div className="about-reveal mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              className="rounded-[22px] border border-white/14 bg-white/8 px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
              key={stat.label}
            >
              <p
                className="about-number font-serif text-5xl leading-none text-white"
                data-decimals={stat.decimals || 0}
                data-suffix={stat.suffix}
                data-value={stat.value}
              >
                0{stat.suffix}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
