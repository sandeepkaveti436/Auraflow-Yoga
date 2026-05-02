"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { label: "Programs", href: "#programs" },
    { label: "Experience", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        ".mobile-link",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.4, ease: "power2.out" },
      );
      gsap.fromTo(
        ".close-btn-animation",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.6, ease: "back.out(1.7)" },
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-5 py-4">
      {/* FIXED HEIGHT SET TO 60px HERE */}
      <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between rounded-[50px] border border-white/70 bg-white/70 px-4 shadow-lg backdrop-blur-xl">
        {/* Logo Section */}
        <a
          className="relative z-[110] flex items-center gap-2 font-serif text-xl"
          href="#"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm">
            <Image
              src="/images/logo-yoga.png"
              alt="AuraFlow logo"
              width={28}
              height={28}
              className="h-6 w-6 object-contain"
            />
          </span>
          <span
            className={`transition-colors duration-500 ${isOpen ? "text-white" : "text-[#111827]"}`}
          >
            AuraFlow
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-9 text-sm font-medium text-gray-600 lg:flex">
          {links.map((link) => (
            <a
              className="transition hover:text-[#9a5ee8]"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hidden sm:block rounded-full bg-gradient-to-r from-[#a873e8] to-[#e8a9d6] px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 lg:flex"
            href="#pricing"
          >
            Book a class
          </a>

          {/* DOT GRID TOGGLE */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md lg:hidden"
            >
              <div className="grid grid-cols-2 gap-1 transition-all duration-300">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5a3435]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#5a3435]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#5a3435]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#5a3435]" />
              </div>
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (Unchanged) */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[105] flex flex-col items-center justify-center bg-gradient-to-br from-[#a873e8] via-[#c48ef2] to-[#e8a9d6] text-white"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="close-btn-animation absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:rotate-90 active:scale-90"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center gap-8 text-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link font-serif text-5xl font-light tracking-tight transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="mobile-link mt-6 rounded-full bg-white px-12 py-4 text-lg font-bold text-[#a873e8] shadow-2xl"
          >
            Book a class
          </a>
        </div>
      </div>
    </header>
  );
}
