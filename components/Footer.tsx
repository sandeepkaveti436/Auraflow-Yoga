"use client";
import Image from "next/image";

export default function Footer() {
  const studioLinks = [
    { label: "Programs", href: "#programs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  // Raw SVG icons to prevent library import errors
  const socialLinks = [
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      ),
    },
    {
      label: "Youtube",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.38 103.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.38 103.38 0 0 1-15 0 2 2 0 0 1-2-2Z"></path><path d="m10 15 5-3-5-3z"></path></svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#080e1d] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 font-serif text-2xl">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-[0_0_35px_rgba(192,132,217,0.28)]">
                <Image
                  src="/images/logo-yoga.png"
                  alt="AuraFlow Yoga logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              AuraFlow Yoga
            </div>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              A modern sanctuary for movement, breath and stillness 
              <br className="hidden md:block" /> 
              — designed for the way you live now.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <p className="mb-6 font-serif text-xs uppercase tracking-[0.5em] text-white/40">
              Studio
            </p>
            <div className="flex flex-col gap-4 text-lg">
              {studioLinks.map((link) => (
                <a 
                  className="w-fit text-white/80 transition-colors duration-300 hover:text-[#d9a4ea]" 
                  href={link.href} 
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <p className="mb-6 font-serif text-xs uppercase tracking-[0.5em] text-white/40">
              Follow
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-500 hover:border-[#d9a4ea] hover:text-white hover:shadow-[0_0_20px_rgba(217,164,234,0.3)]"
                >
                  {/* Icon Wrapper with hover animation */}
                  <div className="z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    {social.icon}
                  </div>
                  
                  {/* Background glow that appears on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a873e8]/20 to-[#e8a9d6]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-10 text-sm text-white/40 md:flex md:items-center md:justify-between">
          <p>© 2026 AuraFlow Yoga. All rights reserved.</p>
          <p className="mt-4 flex items-center gap-2 md:mt-0">
            <span className="h-px  bg-white/10 " />
           Sandeep Kaveti | Crafted with breath in mind
          </p>
        </div>
      </div>
    </footer>
  );
}