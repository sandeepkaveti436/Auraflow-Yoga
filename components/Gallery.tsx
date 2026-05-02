"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    image: "/images/story-transform.png",
    alt: "Side plank yoga pose in a candlelit studio",
    position: "object-[38%_center]",
  },
  {
    image: "/images/story-breathe.png",
    alt: "Warrior pose in a warm yoga studio",
    position: "object-[54%_center]",
  },
  {
    image: "/images/story-transform.png",
    alt: "Seated yoga stretch with candles",
    position: "object-[58%_center]",
  },
  {
    image: "/images/story-balance.png",
    alt: "Grounded malasana yoga pose",
    position: "object-center",
  },
  {
    image: "/images/story-transform.png",
    alt: "Side bend yoga flow on mat",
    position: "object-[48%_center]",
  },
  {
    image: "/images/story-balance.png",
    alt: "Meditation pose in a candlelit studio",
    position: "object-[48%_center]",
  },
  {
    image: "/images/story-breathe.png",
    alt: "Standing breathwork pose",
    position: "object-[50%_center]",
  },
  {
    image: "/images/story-transform.png",
    alt: "Calm yoga transition on a mat",
    position: "object-[62%_center]",
  },
  {
    image: "/images/story-balance.png",
    alt: "Still meditation moment",
    position: "object-[44%_center]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-[#0d1728] px-6 py-24 text-white md:py-28">
      <div className="pointer-events-none absolute left-[24%] top-20 h-8 w-8 rounded-full bg-[#8b5cf6]/55 blur-xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-6xl leading-none md:text-[64px]">
            Moments of Grace
          </h2>
          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-[#8b5cf6]" />
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              className="relative aspect-[3/2] overflow-hidden rounded-lg bg-white/5"
              initial={{ opacity: 0, y: 90 }}
              key={`${item.image}-${index}`}
              transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className={`object-cover ${item.position}`}
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>
          ))}
        </div>
      </div>

      <div id="contact" className="h-px" />
    </section>
  );
}
