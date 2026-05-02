"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
